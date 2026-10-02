document.addEventListener('DOMContentLoaded', () => {
    const TOTAL_MAGGOTS = 20;
    const CRITICAL_VALUE = 3.841; // p=0.05 for 1 degree of freedom

    // --- STATE ---
    let state = {
        view: 'simulation',
        conditions: {
            lightLeft: 'light',
            lightRight: 'dark',
            moistureLeft: 'dry',
            moistureRight: 'wet',
        },
        simulation: {
            state: 'stopped', // 'stopped', 'running', 'paused'
            maggotIndex: 0,
            animationSpeed: 1,
            data: [],
            liveResults: null,
            finalResults: null,
        },
        calculator: {
            observedLeft: '',
            observedRight: '',
            result: null,
            error: '',
        }
    };

    // --- DOM ELEMENTS ---
    const simulationView = document.getElementById('simulation-view');
    const calculatorView = document.getElementById('calculator-view');
    const simulationTab = document.getElementById('simulation-tab');
    const calculatorTab = document.getElementById('calculator-tab');

    // Simulation controls
    const conditionsFieldset = document.getElementById('conditions-fieldset');
    const runPauseResumeBtn = document.getElementById('run-pause-resume-btn');
    const resetBtn = document.getElementById('reset-btn');
    const maggotCounter = document.getElementById('maggot-counter');
    const speedControl = document.getElementById('speed-control');
    const speedValue = document.getElementById('speed-value');
    const maggotContainer = document.getElementById('maggot-container');
    
    // Maze visuals
    const mazeLightLeft = document.getElementById('maze-light-left');
    const mazeLightRight = document.getElementById('maze-light-right');
    const mazeMoistureLeft = document.getElementById('maze-moisture-left');
    const mazeMoistureRight = document.getElementById('maze-moisture-right');

    // Simulation results
    const resultsTitle = document.getElementById('results-title');
    const resultsPlaceholder = document.getElementById('results-placeholder');
    const resultsTableContainer = document.getElementById('results-table-container');
    const resultsLeftCount = document.getElementById('results-left-count');
    const resultsRightCount = document.getElementById('results-right-count');
    const resultsTotalCount = document.getElementById('results-total-count');
    const resultsFooterText = document.getElementById('results-footer-text');

    // Calculator
    const obsLeftInput = document.getElementById('obs-left');
    const obsRightInput = document.getElementById('obs-right');
    const calculateBtn = document.getElementById('calculate-btn');
    const calculatorConditionsText = document.getElementById('calculator-conditions-text');
    const calculatorNullHypothesis = document.getElementById('calculator-null-hypothesis');
    const calcTotalObserved = document.getElementById('calc-total-observed');
    const calcExpected = document.getElementById('calc-expected');
    const calculatorError = document.getElementById('calculator-error');
    const chiSquaredPlaceholder = document.getElementById('chi-squared-placeholder');
    const chiSquaredResultsContainer = document.getElementById('chi-squared-results-container');
    const chiSquaredValue = document.getElementById('chi-squared-value');
    const dofValue = document.getElementById('dof-value');
    const criticalValueEl = document.getElementById('critical-value');
    const significanceBlock = document.getElementById('significance-block');
    const significanceTitle = document.getElementById('significance-title');
    const significanceText = document.getElementById('significance-text');


    // --- RENDER FUNCTIONS ---
    const render = () => {
        // View
        simulationView.classList.toggle('hidden', state.view !== 'simulation');
        calculatorView.classList.toggle('hidden', state.view !== 'calculator');
        simulationTab.classList.toggle('border-emerald-500', state.view === 'simulation');
        simulationTab.classList.toggle('text-emerald-600', state.view === 'simulation');
        simulationTab.classList.toggle('dark:text-emerald-400', state.view === 'simulation');
        simulationTab.classList.toggle('border-transparent', state.view !== 'simulation');
        simulationTab.classList.toggle('text-gray-500', state.view !== 'simulation');
        calculatorTab.classList.toggle('border-emerald-500', state.view === 'calculator');
        calculatorTab.classList.toggle('text-emerald-600', state.view === 'calculator');
        calculatorTab.classList.toggle('dark:text-emerald-400', state.view === 'calculator');
        calculatorTab.classList.toggle('border-transparent', state.view !== 'calculator');
        calculatorTab.classList.toggle('text-gray-500', state.view !== 'calculator');
        
        // Conditions
        renderConditions();

        // Simulation
        renderSimulation();
        
        // Calculator
        renderCalculator();
    };
    
    const renderConditions = () => {
        // Maze Visuals
        mazeLightLeft.style.backgroundColor = state.conditions.lightLeft === 'light' ? '#fef08a' : '#4b5563';
        mazeLightRight.style.backgroundColor = state.conditions.lightRight === 'light' ? '#fef08a' : '#4b5563';
        mazeMoistureLeft.classList.toggle('hidden', state.conditions.moistureLeft !== 'wet');
        mazeMoistureRight.classList.toggle('hidden', state.conditions.moistureRight !== 'wet');

        // Radio buttons
        const conditionGroups = conditionsFieldset.querySelectorAll('[data-side][data-condition]');
        conditionGroups.forEach(group => {
            const side = group.dataset.side;
            const condition = group.dataset.condition;
            const key = `${condition}${side.charAt(0).toUpperCase() + side.slice(1)}`; // e.g. lightLeft
            const selectedValue = state.conditions[key];
            
            group.querySelectorAll('button').forEach(button => {
                const isActive = button.dataset.value === selectedValue;
                button.classList.remove('radio-button-active', 'radio-button-inactive');
                button.classList.add(isActive ? 'radio-button-active' : 'radio-button-inactive');
            });
        });

        // Calculator Context
        calculatorConditionsText.textContent = `Left: ${state.conditions.lightLeft}/${state.conditions.moistureLeft}, Right: ${state.conditions.lightRight}/${state.conditions.moistureRight}`;
        calculatorNullHypothesis.textContent = generateNullHypothesis();
    };

    const renderSimulation = () => {
        const simState = state.simulation;
        const isRunningOrPaused = simState.state === 'running' || simState.state === 'paused';

        // Controls
        conditionsFieldset.disabled = isRunningOrPaused;
        runPauseResumeBtn.textContent = getButtonLabel();
        resetBtn.disabled = simState.state === 'stopped' && !simState.finalResults;

        maggotCounter.textContent = isRunningOrPaused ? `Maggot: ${simState.maggotIndex + 1} / ${TOTAL_MAGGOTS}` : '';

        // Results
        resultsTitle.textContent = isRunningOrPaused ? 'Live Results' : '3. Results';
        const displayResults = isRunningOrPaused ? simState.liveResults : simState.finalResults;

        resultsPlaceholder.classList.toggle('hidden', !!displayResults);
        resultsTableContainer.classList.toggle('hidden', !displayResults);
        resultsFooterText.classList.toggle('hidden', simState.state !== 'stopped' || !simState.finalResults);

        if (displayResults) {
            resultsLeftCount.textContent = displayResults.left;
            resultsRightCount.textContent = displayResults.right;
            resultsTotalCount.textContent = displayResults.left + displayResults.right;
        }

        // Maggot Animation Logic
        const existingMaggot = maggotContainer.querySelector('.maggot');

        // Create a new maggot if simulation is running and there isn't one
        if (simState.state === 'running' && !existingMaggot && simState.data[simState.maggotIndex]) {
            const maggot = document.createElement('div');
            maggot.className = "maggot absolute left-1/2 -translate-x-1/2 w-5 h-2.5 bg-slate-900 dark:bg-slate-100 rounded-full will-change-transform";
            const direction = simState.data[simState.maggotIndex].direction;
            const totalDuration = 4 / simState.animationSpeed;
            maggot.style.animation = `${direction === 'left' ? 'crawl-left' : 'crawl-right'} ${totalDuration}s cubic-bezier(0.4, 0, 0.6, 1) forwards`;
            
            maggot.addEventListener('animationend', handleAnimationComplete, { once: true });
            
            maggotContainer.appendChild(maggot);
        } 
        // If a maggot exists, just update its play state for pause/resume
        else if (existingMaggot) {
            existingMaggot.style.animationPlayState = simState.state === 'running' ? 'running' : 'paused';
        }
    };
    
    const renderCalculator = () => {
        // Inputs
        const total = (parseInt(obsLeftInput.value) || 0) + (parseInt(obsRightInput.value) || 0);
        calcTotalObserved.textContent = total;
        calcExpected.textContent = (total / 2).toFixed(1);

        // Errors
        calculatorError.textContent = state.calculator.error;
        
        // Results
        const result = state.calculator.result;
        chiSquaredPlaceholder.classList.toggle('hidden', !!result);
        chiSquaredResultsContainer.classList.toggle('hidden', !result);

        if (result) {
            chiSquaredValue.textContent = result.chiSquared.toFixed(3);
            dofValue.textContent = result.degreesOfFreedom;
            criticalValueEl.textContent = result.criticalValue;
            
            const isSignificant = result.isSignificant;
            significanceBlock.className = `p-6 rounded-lg mt-8 ${isSignificant ? 'bg-red-100 dark:bg-red-900/50' : 'bg-green-100 dark:bg-green-900/50'}`;
            significanceTitle.className = `text-2xl font-bold ${isSignificant ? 'text-red-700 dark:text-red-300' : 'text-green-700 dark:text-green-300'}`;
            significanceTitle.textContent = isSignificant ? 'Result is Significant' : 'Result is Not Significant';
            significanceText.className = `mt-2 text-base ${isSignificant ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`;
            significanceText.textContent = isSignificant
                ? `Your calculated χ² value of ${result.chiSquared.toFixed(3)} is GREATER than the critical value of ${result.criticalValue}. There is a statistically significant difference between your observed and expected results. You can reject the null hypothesis.`
                : `Your calculated χ² value of ${result.chiSquared.toFixed(3)} is LESS than the critical value of ${result.criticalValue}. There is no statistically significant difference between your observed and expected results. The observed variation is likely due to chance. You cannot reject the null hypothesis.`;
        }
    };
    
    // --- LOGIC ---
    const getButtonLabel = () => {
        const simState = state.simulation;
        if (simState.state === 'stopped' && !simState.finalResults) return 'Run Simulation';
        if (simState.state === 'stopped' && simState.finalResults) return 'Run Again';
        if (simState.state === 'paused') return 'Resume';
        return 'Pause';
    };

    const generateNewData = () => {
        let probabilityLeft = 0.5;
        const c = state.conditions;
        
        if (c.lightLeft === 'dark' && c.lightRight === 'light') probabilityLeft += 0.35;
        if (c.lightLeft === 'light' && c.lightRight === 'dark') probabilityLeft -= 0.35;
        
        if (c.moistureLeft === 'wet' && c.moistureRight === 'dry') probabilityLeft += 0.30;
        if (c.moistureLeft === 'dry' && c.moistureRight === 'wet') probabilityLeft -= 0.30;

        const data = [];
        let leftTurns = 0, rightTurns = 0;

        for (let i = 0; i < TOTAL_MAGGOTS; i++) {
            const direction = Math.random() < probabilityLeft ? 'left' : 'right';
            if (direction === 'left') leftTurns++; else rightTurns++;
            data.push({ id: i + 1, direction });
        }
        
        state.simulation.data = data;
        state.simulation.finalResults = { left: leftTurns, right: rightTurns };
    };

    const handleAnimationComplete = () => {
        const simState = state.simulation;
        const direction = simState.data[simState.maggotIndex].direction;
        simState.liveResults[direction]++;
        maggotContainer.innerHTML = ''; // Remove finished maggot

        if (simState.maggotIndex < simState.data.length - 1) {
            simState.maggotIndex++;
            // The render call will trigger the creation of the next maggot
        } else {
            simState.state = 'stopped';
            obsLeftInput.value = simState.finalResults.left;
            obsRightInput.value = simState.finalResults.right;
            state.calculator.result = null; // Reset calculator result
        }
        render();
    };
    
    const generateNullHypothesis = () => {
        const c = state.conditions;
        const isControl = c.lightLeft === c.lightRight && c.moistureLeft === c.moistureRight;
        if (isControl) {
            return "There is no significant difference between the number of maggots turning left and right. The turning choice is random and any deviation is due to chance.";
        }
        return "The chosen environmental conditions (light/dark, wet/dry) have no significant effect on the maggots' turning behavior. Any deviation from an equal split is due to chance.";
    };

    // --- EVENT HANDLERS ---
    const handleTabClick = (view) => {
        state.view = view;
        render();
    };

    const handleConditionChange = (side, condition, value) => {
        const key = `${condition}${side.charAt(0).toUpperCase() + side.slice(1)}`;
        state.conditions[key] = value;
        render();
    };

    const handleRunPauseResume = () => {
        const simState = state.simulation;
        if (simState.state === 'running') { // PAUSE
            simState.state = 'paused';
        } else { // RUN or RESUME
            if (simState.state === 'stopped') {
                generateNewData();
                simState.maggotIndex = 0;
                simState.liveResults = { left: 0, right: 0 };
            }
            simState.state = 'running';
        }
        render();
    };

    const handleReset = () => {
        const simState = state.simulation;
        maggotContainer.innerHTML = '';
        simState.state = 'stopped';
        simState.maggotIndex = 0;
        simState.finalResults = null;
        simState.liveResults = null;
        simState.data = [];
        render();
    };

    const handleCalculate = () => {
        const obsL = parseInt(obsLeftInput.value, 10);
        const obsR = parseInt(obsRightInput.value, 10);

        if (isNaN(obsL) || isNaN(obsR) || obsL < 0 || obsR < 0) {
            state.calculator.error = 'Please enter valid, non-negative numbers for observed values.';
            state.calculator.result = null;
            render();
            return;
        }
        if (obsL + obsR === 0) {
            state.calculator.error = 'Total observations cannot be zero.';
            state.calculator.result = null;
            render();
            return;
        }
        
        const exp = (obsL + obsR) / 2;
        state.calculator.error = exp < 5 ? 'Warning: Expected values are less than 5. The Chi-Squared test may not be reliable.' : '';

        const chiSquared = (Math.pow(obsL - exp, 2) / exp) + (Math.pow(obsR - exp, 2) / exp);
        
        state.calculator.result = {
          chiSquared,
          degreesOfFreedom: 1,
          isSignificant: chiSquared > CRITICAL_VALUE,
          criticalValue: CRITICAL_VALUE
        };
        render();
    };

    // --- INITIALIZATION ---
    simulationTab.addEventListener('click', () => handleTabClick('simulation'));
    calculatorTab.addEventListener('click', () => handleTabClick('calculator'));
    
    // Event delegation for condition toggles
    conditionsFieldset.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;
    
        const group = button.closest('[data-side][data-condition]');
        if (!group) return;
    
        const side = group.dataset.side;
        const condition = group.dataset.condition;
        const value = button.dataset.value;
    
        if (side && condition && value && !conditionsFieldset.disabled) {
            handleConditionChange(side, condition, value);
        }
    });

    runPauseResumeBtn.addEventListener('click', handleRunPauseResume);
    resetBtn.addEventListener('click', handleReset);
    speedControl.addEventListener('input', (e) => {
        state.simulation.animationSpeed = parseFloat(e.target.value);
        speedValue.textContent = `${state.simulation.animationSpeed.toFixed(1)}x`;
        // If an animation is running, we need to update its speed.
        const existingMaggot = maggotContainer.querySelector('.maggot');
        if (existingMaggot) {
            const direction = state.simulation.data[state.simulation.maggotIndex].direction;
            const totalDuration = 4 / state.simulation.animationSpeed;
            existingMaggot.style.animationDuration = `${totalDuration}s`;
        }
    });
    
    calculateBtn.addEventListener('click', handleCalculate);
    obsLeftInput.addEventListener('input', renderCalculator);
    obsRightInput.addEventListener('input', renderCalculator);

    render(); // Initial render
});