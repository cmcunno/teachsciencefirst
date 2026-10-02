document.addEventListener('DOMContentLoaded', () => {
  // --- CONSTANTS ---
  const GLUCOSE_CONCENTRATIONS = [2, 4, 6, 8, 10];
  const YEAST_COLOR = '#c7a98b';
  const METHYLENE_BLUE_COLOR = '#a7d7f9';
  
  // --- DOM ELEMENTS ---
  const startBtn = document.getElementById('start-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const resetBtn = document.getElementById('reset-btn');
  const trialsSelect = document.getElementById('trials-control');
  const speedSelect = document.getElementById('speed-control');
  const simulationDisplay = document.getElementById('simulation-display');
  const tableHead = document.getElementById('results-table-head');
  const tableBody = document.getElementById('results-table-body');
  const graphCanvas = document.getElementById('results-graph-canvas');
  const graphModeTimeBtn = document.getElementById('graph-mode-time');
  const graphModeRateBtn = document.getElementById('graph-mode-rate');
  const infoBtns = document.querySelectorAll('.info-btn');

  // Modal DOM Elements
  const modalContainer = document.getElementById('modal-container');
  const modalContent = document.getElementById('modal-content');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  
  // --- STATE ---
  let status = 'idle'; // 'idle', 'running', 'paused', 'finished'
  let numTrials = 1;
  let simulationSpeed = 1;
  let data = [];
  let activeTrial = null; // [concentrationIndex, trialIndex]
  let isRunning = false;
  let simulationProgress = { concentrationIndex: 0, trialIndex: 0 };
  let trialCompletionResolver = null;
  let animationFrameId = null;
  let graphMode = 'time';
  let chart;
  let modalChart = null; // For the graph in the modal

  // --- INITIALIZATION ---
  const initialExperimentData = (trials) =>
    GLUCOSE_CONCENTRATIONS.map(conc => ({
      concentration: conc,
      results: Array(trials).fill(null),
      average: null,
      rate: null,
    }));

  const getChartConfig = () => ({
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Average Time (s)',
            data: [],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: { display: true, text: 'Glucose Concentration (%)' },
                grid: { color: '#e2e8f0' }
            },
            y: {
                title: { display: true, text: 'Average Time (s)' },
                beginAtZero: true,
                grid: { color: '#e2e8f0' }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: '#334155',
                bodyColor: '#475569',
                borderColor: '#e2e8f0',
                borderWidth: 1,
                padding: 10,
                backdropFilter: 'blur(4px)',
            }
        }
    }
  });

  const initializeChart = () => {
      const ctx = graphCanvas.getContext('2d');
      if (chart) chart.destroy();
      chart = new Chart(ctx, getChartConfig());
  };

  // --- UI UPDATE FUNCTIONS ---
  const updateControls = () => {
    startBtn.disabled = status === 'running';
    pauseBtn.disabled = status !== 'running';
    resetBtn.disabled = status === 'idle';
    trialsSelect.disabled = status === 'running' || status === 'paused';
    
    const startBtnText = startBtn.querySelector('span');
    startBtnText.textContent = status === 'paused' ? 'Resume' : status === 'finished' ? 'Run Again' : 'Start';
  };
  
  const renderSimulationDisplay = () => {
    simulationDisplay.innerHTML = '';
    data.forEach((exp, index) => {
        const isActive = activeTrial ? activeTrial[0] === index : false;
        const isFinished = exp.rate !== null;
        
        const tubeContainer = document.createElement('div');
        tubeContainer.className = 'flex flex-col items-center';
        tubeContainer.innerHTML = `
            <div class="flex items-center justify-center gap-1.5 mb-2 bg-slate-200/80 backdrop-blur-sm px-3 py-1 rounded-lg text-lg font-mono font-bold text-slate-800 shadow-inner w-24 h-10 opacity-0 transition-opacity duration-300 timer-container">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span class="w-16 text-left timer-value">0.0s</span>
            </div>
            <div class="w-14 h-48 bg-white/50 border-2 ${isActive ? 'border-blue-500 shadow-lg' : 'border-slate-400'} rounded-b-3xl rounded-t-lg relative overflow-hidden transition-all test-tube">
                <div class="absolute bottom-0 left-0 w-full h-3/4 liquid" style="background-color: ${isFinished ? YEAST_COLOR : METHYLENE_BLUE_COLOR};">
                  <div class="absolute inset-0 bubbles-container"></div>
                </div>
            </div>
            <span class="mt-2 font-semibold text-slate-700">${exp.concentration}%</span>
        `;
        simulationDisplay.appendChild(tubeContainer);
    });
  };

  const renderTable = () => {
    // Render Header
    let headerHtml = '<tr><th scope="col" class="py-3 px-4 rounded-l-lg">Glucose Conc. (%)</th>';
    for (let i = 0; i < numTrials; i++) {
        headerHtml += `<th scope="col" class="py-3 px-4 text-center">Trial ${i + 1} (s)</th>`;
    }
    headerHtml += '<th scope="col" class="py-3 px-4 text-center rounded-r-lg">Average (s)</th></tr>';
    tableHead.innerHTML = headerHtml;

    // Render Body
    tableBody.innerHTML = '';
    data.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        tr.className = 'bg-white border-b border-slate-200 last:border-b-0';
        
        let rowHtml = `<td class="py-3 px-4 font-semibold text-slate-800">${row.concentration}</td>`;
        for (let colIndex = 0; colIndex < numTrials; colIndex++) {
            const isActive = activeTrial?.[0] === rowIndex && activeTrial?.[1] === colIndex;
            const result = row.results[colIndex];
            
            let cellContent = '-';
            if (result !== null) {
              cellContent = result;
            } else if (isActive) {
              cellContent = '<div class="w-4 h-4 border-2 border-slate-400 border-t-blue-500 rounded-full animate-spin"></div>';
            }
            
            rowHtml += `
              <td class="py-3 px-4 text-center">
                <div class="flex justify-center items-center h-full ${isActive ? 'font-bold text-blue-600' : ''}">
                  ${cellContent}
                </div>
              </td>`;
        }
        
        rowHtml += `<td class="py-3 px-4 font-bold text-center">${row.average !== null ? row.average.toFixed(1) : '-'}</td>`;
        tr.innerHTML = rowHtml;
        tableBody.appendChild(tr);
    });
  };
  
  const renderGraph = () => {
      const isTimeMode = graphMode === 'time';
      const chartData = data.filter(d => d.average !== null);
      
      chart.data.labels = chartData.map(d => d.concentration);
      chart.data.datasets[0].data = chartData.map(d => isTimeMode ? d.average : d.rate);
      chart.data.datasets[0].label = isTimeMode ? 'Average Time (s)' : 'Rate of Respiration (1000/s)';
      chart.options.scales.y.title.text = isTimeMode ? 'Average Time (s)' : 'Rate of Respiration (1000/s)';

      chart.update();
  };

  // --- SIMULATION LOGIC ---
  const calculateSimulatedTime = (concentration) => {
    let baseRate = (concentration <= 8) ? (concentration / 2) : (4 - (concentration - 8) * 0.4);
    const idealTime = 200 / (baseRate > 0.5 ? baseRate : 0.5);
    const noise = (Math.random() - 0.5) * 0.2; // +/- 10% noise
    return idealTime * (1 + noise);
  };
  
  const interpolateColor = (color1, color2, factor) => {
    const r1 = parseInt(color1.substring(1, 3), 16), g1 = parseInt(color1.substring(3, 5), 16), b1 = parseInt(color1.substring(5, 7), 16);
    const r2 = parseInt(color2.substring(1, 3), 16), g2 = parseInt(color2.substring(3, 5), 16), b2 = parseInt(color2.substring(5, 7), 16);
    const r = Math.round(r1 + factor * (r2 - r1)), g = Math.round(g1 + factor * (g2 - g1)), b = Math.round(b1 + factor * (b2 - b1));
    return `rgb(${r}, ${g}, ${b})`;
  };

  const animateActiveTrial = (durationInSeconds) => {
    const durationInMs = (durationInSeconds * 1000) / simulationSpeed;
    const concentrationIndex = activeTrial[0];
    const tubeElements = simulationDisplay.children[concentrationIndex];
    const liquid = tubeElements.querySelector('.liquid');
    const timerContainer = tubeElements.querySelector('.timer-container');
    const timerValue = tubeElements.querySelector('.timer-value');
    const bubblesContainer = tubeElements.querySelector('.bubbles-container');

    timerContainer.style.opacity = '1';
    
    // Create bubbles
    bubblesContainer.innerHTML = '';
    const numBubbles = Math.ceil(GLUCOSE_CONCENTRATIONS[concentrationIndex] * 4);
    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.width = `${3 + Math.random() * 4}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.left = `${10 + Math.random() * 80}%`;
        bubble.style.animationDelay = `${Math.random() * 4}s`;
        bubble.style.animationDuration = `${3 + Math.random() * 2}s`;
        bubblesContainer.appendChild(bubble);
    }

    let startTime = null;
    const animate = (timestamp) => {
      if (!isRunning) return;
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / durationInMs, 1);

      liquid.style.backgroundColor = interpolateColor(METHYLENE_BLUE_COLOR, YEAST_COLOR, progress);
      timerValue.textContent = `${(progress * durationInSeconds).toFixed(1)}s`;

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        bubblesContainer.innerHTML = ''; // Clear bubbles when animation finishes
        if (trialCompletionResolver) trialCompletionResolver();
      }
    };
    animationFrameId = requestAnimationFrame(animate);
  };

  const runSimulation = async () => {
    isRunning = true;
    for (let i = simulationProgress.concentrationIndex; i < GLUCOSE_CONCENTRATIONS.length; i++) {
        const concentration = GLUCOSE_CONCENTRATIONS[i];
        
        for (let j = simulationProgress.trialIndex; j < numTrials; j++) {
            if (!isRunning) {
                simulationProgress = { concentrationIndex: i, trialIndex: j };
                return;
            }

            activeTrial = [i, j];
            renderTable();
            renderSimulationDisplay();

            const time = calculateSimulatedTime(concentration);
            animateActiveTrial(time);
            
            await new Promise(resolve => { trialCompletionResolver = resolve; });

            if (!isRunning) {
              simulationProgress = { concentrationIndex: i, trialIndex: j };
              return;
            }

            const roundedTime = Math.round(time);
            data[i].results[j] = roundedTime;
            renderTable();
        }

        simulationProgress.trialIndex = 0;
        
        const sum = data[i].results.reduce((acc, curr) => acc + curr, 0);
        data[i].average = sum / numTrials;
        data[i].rate = 1000 / data[i].average;
        
        renderTable();
        renderGraph();
    }
    
    activeTrial = null;
    setStatus('finished');
  };

  // --- MODAL LOGIC ---
  const getModalContent = (target) => {
    const content = {
      title: '',
      body: ''
    };
    const commonStyles = 'prose prose-slate max-w-none prose-h4:font-semibold prose-h4:mb-2 prose-p:text-slate-600 prose-p:mb-3 prose-strong:text-slate-700';

    switch (target) {
      case 'simulation':
        content.title = 'About the Simulation';
        content.body = `
          <div class="${commonStyles}">
            <h4>What is Yeast Respiration?</h4>
            <p>Yeast, a single-celled fungus, performs <strong>anaerobic respiration</strong> (or fermentation) in the absence of oxygen. It breaks down glucose into ethanol and carbon dioxide, releasing a small amount of energy (ATP). The simplified chemical equation is: <br><strong>Glucose → Ethanol + Carbon Dioxide + Energy</strong></p>
            <h4>Role of Methylene Blue</h4>
            <p>Methylene blue is a redox indicator. It is <strong>blue</strong> in its oxidized state and becomes <strong>colorless</strong> when reduced (accepts electrons). During respiration, hydrogen ions and electrons are released. These are accepted by methylene blue, causing it to decolorize. The time taken for this color change is an indirect measure of the rate of respiration—the faster the decolorization, the faster the rate of respiration.</p>
            <h4>Understanding the Visuals</h4>
            <p><strong>Test Tubes:</strong> Each tube represents a different glucose concentration. The active experiment is highlighted with a blue border.</p>
            <p><strong>Bubbles:</strong> These represent the production of carbon dioxide gas. Higher glucose concentrations result in more vigorous bubbling, indicating a faster reaction.</p>
            <p><strong>Color Change:</strong> The fading of the blue color to the yeast's natural beige indicates the reduction of methylene blue. The speed of this change is what we measure to determine the respiration rate.</p>
          </div>
        `;
        break;
      case 'table':
        content.title = 'Interpreting the Results';
        content.body = `
          <div class="${commonStyles}">
            <p>The table records the time (in seconds) for the methylene blue to decolorize for each trial at different glucose concentrations.</p>
            <h4>Why Repeats?</h4>
            <p>Conducting multiple trials (repeats) for each concentration is crucial for scientific accuracy. It helps ensure the results are <strong>reliable</strong> and not due to chance, and it allows for the identification of anomalous results.</p>
            <h4>Calculating Average and Rate</h4>
            <p>The <strong>Average</strong> provides a more accurate estimate of the true decolorization time. The <strong>Rate of Respiration</strong> is calculated as <code>1000 / Average Time</code>. This is because the rate is inversely proportional to the time taken; a shorter time indicates a faster rate.</p>
          </div>
          <div class="mt-4 overflow-x-auto" id="modal-table-container"></div>
        `;
        break;
      case 'graph':
        content.title = 'Analyzing the Graph';
        content.body = `
          <div class="${commonStyles}">
            <p>The graph visualizes the relationship between glucose concentration (the independent variable) and the outcome of the experiment (the dependent variable).</p>
            <h4>Time vs. Rate View</h4>
            <p><strong>Time View:</strong> Shows how long it took for the color to change. You would expect this value to decrease as concentration increases (a faster reaction takes less time).</p>
            <p><strong>Rate View:</strong> Shows the calculated rate of respiration. This graph is often more intuitive, as you expect the rate to increase with substrate concentration, eventually plateauing as enzymes become saturated.</p>
            <p>Use the toggle below to switch between the two views in this focused mode.</p>
          </div>
          <div class="flex justify-end items-center my-4">
              <div class="flex items-center bg-slate-200 rounded-lg p-1 text-sm font-semibold" id="modal-graph-controls">
                 <button id="modal-graph-mode-time" class="px-3 py-1 rounded-md transition-colors duration-200">Time</button>
                 <button id="modal-graph-mode-rate" class="px-3 py-1 rounded-md transition-colors duration-200">Rate</button>
              </div>
          </div>
          <div class="w-full h-96"><canvas id="modal-graph-canvas"></canvas></div>
        `;
        break;
    }
    return content;
  };

  const openModal = (target) => {
    const { title, body } = getModalContent(target);
    modalTitle.textContent = title;
    modalBody.innerHTML = body;

    if (target === 'table') {
      const tableContainer = document.getElementById('modal-table-container');
      const tableNode = document.querySelector('.w-full.text-sm.text-left');
      if(tableNode) tableContainer.appendChild(tableNode.cloneNode(true));
    } else if (target === 'graph') {
      const modalCanvas = document.getElementById('modal-graph-canvas');
      if (modalChart) modalChart.destroy();
      modalChart = new Chart(modalCanvas.getContext('2d'), getChartConfig());
      
      const modalTimeBtn = document.getElementById('modal-graph-mode-time');
      const modalRateBtn = document.getElementById('modal-graph-mode-rate');

      const setModalGraphButtons = (mode) => {
          if (mode === 'time') {
              modalTimeBtn.classList.add('bg-white', 'text-blue-600', 'shadow-sm');
              modalTimeBtn.classList.remove('bg-transparent', 'text-slate-600');
              modalRateBtn.classList.remove('bg-white', 'text-blue-600', 'shadow-sm');
              modalRateBtn.classList.add('bg-transparent', 'text-slate-600');
          } else {
              modalRateBtn.classList.add('bg-white', 'text-blue-600', 'shadow-sm');
              modalRateBtn.classList.remove('bg-transparent', 'text-slate-600');
              modalTimeBtn.classList.remove('bg-white', 'text-blue-600', 'shadow-sm');
              modalTimeBtn.classList.add('bg-transparent', 'text-slate-600');
          }
      };

      const updateModalGraph = (mode) => {
          setModalGraphButtons(mode);
          const isTimeMode = mode === 'time';
          const chartData = data.filter(d => d.average !== null);
          
          modalChart.data.labels = chartData.map(d => d.concentration);
          modalChart.data.datasets[0].data = chartData.map(d => isTimeMode ? d.average : d.rate);
          modalChart.data.datasets[0].label = isTimeMode ? 'Average Time (s)' : 'Rate of Respiration (1000/s)';
          modalChart.options.scales.y.title.text = isTimeMode ? 'Average Time (s)' : 'Rate of Respiration (1000/s)';
          modalChart.update();
      };
      
      updateModalGraph(graphMode); // Initialize with main graph's mode
      modalTimeBtn.addEventListener('click', () => updateModalGraph('time'));
      modalRateBtn.addEventListener('click', () => updateModalGraph('rate'));
    }
    
    document.body.classList.add('modal-open');
    modalContainer.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
    }, 10);
  };

  const closeModal = () => {
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modalContainer.classList.add('hidden');
        document.body.classList.remove('modal-open');
        modalBody.innerHTML = ''; // Clean up
        if (modalChart) {
            modalChart.destroy();
            modalChart = null;
        }
    }, 300);
  };

  // --- EVENT HANDLERS ---
  const handleStart = () => {
    if (status === 'idle' || status === 'finished') {
      handleReset(false); // Soft reset without clearing UI
      simulationProgress = { concentrationIndex: 0, trialIndex: 0 };
    }
    setStatus('running');
    runSimulation();
  };

  const handlePause = () => {
    if (status === 'running') {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      if(trialCompletionResolver) trialCompletionResolver(); // release the promise
      setStatus('paused');
    }
  };

  const handleReset = (fullReset = true) => {
    isRunning = false;
    cancelAnimationFrame(animationFrameId);
    if(trialCompletionResolver) trialCompletionResolver();
    
    setStatus('idle');
    activeTrial = null;
    simulationProgress = { concentrationIndex: 0, trialIndex: 0 };
    data = initialExperimentData(numTrials);
    
    if (fullReset) {
      updateAllUI();
    }
  };

  const handleNumTrialsChange = (e) => {
    numTrials = Number(e.target.value);
    if (status !== 'running' && status !== 'paused') {
        handleReset();
    }
  };
  
  const handleSpeedChange = (e) => {
    simulationSpeed = Number(e.target.value);
  };
  
  const handleGraphModeChange = (mode) => {
      graphMode = mode;
      if (mode === 'time') {
          graphModeTimeBtn.classList.add('bg-white', 'text-blue-600', 'shadow-sm');
          graphModeTimeBtn.classList.remove('bg-transparent', 'text-slate-600');
          graphModeRateBtn.classList.remove('bg-white', 'text-blue-600', 'shadow-sm');
          graphModeRateBtn.classList.add('bg-transparent', 'text-slate-600');
      } else {
          graphModeRateBtn.classList.add('bg-white', 'text-blue-600', 'shadow-sm');
          graphModeRateBtn.classList.remove('bg-transparent', 'text-slate-600');
          graphModeTimeBtn.classList.remove('bg-white', 'text-blue-600', 'shadow-sm');
          graphModeTimeBtn.classList.add('bg-transparent', 'text-slate-600');
      }
      renderGraph();
  };
  
  // --- HELPERS ---
  const setStatus = (newStatus) => {
    status = newStatus;
    updateControls();
  };

  const updateAllUI = () => {
    renderTable();
    renderSimulationDisplay();
    renderGraph();
  };

  // --- ATTACH EVENT LISTENERS ---
  startBtn.addEventListener('click', handleStart);
  pauseBtn.addEventListener('click', handlePause);
  resetBtn.addEventListener('click', () => handleReset(true));
  trialsSelect.addEventListener('change', handleNumTrialsChange);
  speedSelect.addEventListener('change', handleSpeedChange);
  graphModeTimeBtn.addEventListener('click', () => handleGraphModeChange('time'));
  graphModeRateBtn.addEventListener('click', () => handleGraphModeChange('rate'));

  // Modal event listeners
  infoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-modal-target');
      openModal(target);
    });
  });
  modalCloseBtn.addEventListener('click', closeModal);
  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalContainer.classList.contains('hidden')) {
      closeModal();
    }
  });


  // --- INITIAL RENDER ---
  initializeChart();
  handleReset();
});
