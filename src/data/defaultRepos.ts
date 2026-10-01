import { ScienceRepo } from '../types';

export const INITIAL_REPOSITORIES: ScienceRepo[] = [
  {
    id: 'repo-kinematics',
    title: 'Kinematics & 2D Projectile Lab',
    discipline: 'Physics',
    description: 'Interactive ballistic trajectory simulation with gravity presets (Earth, Moon, Mars, Jupiter), angle velocity sliders, and real-time kinematic telemetry.',
    url: '/repos/kinematics-motion-lab/index.html',
    gradeLevel: 'Grades 9-12 · AP Physics 1',
    topics: ['Vector Decomposition', 'Gravitational Acceleration', 'Kinematic Equations', 'Flight Trajectory'],
    isLocalRepo: true,
    isFavorite: true,
    authorNotes: 'Ideal for demonstrating independent horizontal and vertical velocity components.'
  },
  {
    id: 'repo-periodic',
    title: 'Periodic Elements & Bohr Orbital Shells',
    discipline: 'Chemistry',
    description: 'Full interactive periodic table with live Bohr electron shell orbit rendering, Pauling electronegativities, and electron configurations.',
    url: '/repos/periodic-elements-explorer/index.html',
    gradeLevel: 'Grades 8-12 · General & AP Chemistry',
    topics: ['Periodic Trends', 'Bohr Atom Model', 'Valence Electrons', 'Electronegativity'],
    isLocalRepo: true,
    isFavorite: true,
    authorNotes: 'Click any element card to inspect its rotating electron shells.'
  },
  {
    id: 'repo-optics',
    title: 'Geometric Optics & Ray Tracing Simulator',
    discipline: 'Physics',
    description: 'Real-time convex and concave thin lens ray tracer with parallel, chief, and focal ray geometry, magnification math, and real/virtual image verification.',
    url: '/repos/optics-ray-tracer/index.html',
    gradeLevel: 'Grades 10-12 · AP Physics 2',
    topics: ['Thin Lens Formula', 'Refraction', 'Ray Diagramming', 'Focal Lengths'],
    isLocalRepo: true,
    isFavorite: false,
    authorNotes: 'Shows how virtual images flip upright and real images invert.'
  },
  {
    id: 'repo-cell-biology',
    title: 'Cell Anatomy & Virtual Microscope Lab',
    discipline: 'Biology',
    description: 'Interactive eukaryotic cell organelle explorer with animal vs. plant cell mode, confocal microscope vector graphics, and cellular respiration notes.',
    url: '/repos/cell-biology-microscope/index.html',
    gradeLevel: 'Grades 7-12 · AP Biology',
    topics: ['Organelles', 'Mitochondria & ATP', 'Chloroplasts', 'Membrane Systems'],
    isLocalRepo: true,
    isFavorite: true,
    authorNotes: 'Switch between plant and animal mode to highlight cell walls and chloroplasts.'
  },
  {
    id: 'repo-genetics',
    title: 'Mendelian Genetics & Punnett Square Engine',
    discipline: 'Biology',
    description: 'Interactive monohybrid inheritance calculator with live genotype and phenotype ratio distributions for dominant/recessive traits.',
    url: '/repos/genetics-punnett-square/index.html',
    gradeLevel: 'Grades 8-12 · Genetics Unit',
    topics: ['Allele Segregation', 'Homozygous vs Heterozygous', 'Phenotypic Ratio', 'Mendel Laws'],
    isLocalRepo: true,
    isFavorite: false,
    authorNotes: 'Auto-calculates the 3:1 phenotypic and 1:2:1 genotypic frequencies.'
  },
  {
    id: 'repo-earth-tectonics',
    title: 'Plate Boundaries & Seismic Seismogram Lab',
    discipline: 'Earth & Space',
    description: 'Subduction zone, mid-ocean divergent rift, and transform fault simulator with triggered earthquake epicenter seismograph trace.',
    url: '/repos/earth-tectonics-visualizer/index.html',
    gradeLevel: 'Grades 7-12 · Earth Science & Geology',
    topics: ['Lithosphere Dynamics', 'Subduction Trenches', 'Seafloor Spreading', 'P & S Seismic Waves'],
    isLocalRepo: true,
    isFavorite: false,
    authorNotes: 'Includes simulated seismogram graph with amplitude variations during quakes.'
  },
  {
    id: 'repo-astronomy-kepler',
    title: 'Keplerian Orbits & Celestial Mechanics Lab',
    discipline: 'Earth & Space',
    description: 'Elliptical planetary orbits around variable-mass stars demonstrating Kepler\'s laws of planetary motion, perihelion speeds, and orbital periods.',
    url: '/repos/astronomy-orbital-gravity/index.html',
    gradeLevel: 'Grades 9-12 · Astrophysics',
    topics: ['Kepler Laws', 'Orbital Eccentricity', 'Gravitational Force', 'Perihelion Dynamics'],
    isLocalRepo: true,
    isFavorite: true,
    authorNotes: 'Animates planet accelerating near perihelion according to Kepler\'s 2nd Law.'
  },
  {
    id: 'repo-phet-sims',
    title: 'PhET Interactive Science Simulations Homepage',
    discipline: 'Teaching Tools',
    description: 'University of Colorado Boulder repository index of open-source research-backed science simulations across physics, chemistry, and math.',
    url: 'https://phet.colorado.edu/en/simulations/browse',
    gradeLevel: 'K-12 & Undergraduate',
    topics: ['Open Education', 'Interactive Simulations', 'STEM Pedagogy'],
    isLocalRepo: false,
    isFavorite: false,
    authorNotes: 'External educator repository portal with 100+ vetted simulations.'
  },
  {
    id: 'repo-nasa-eyes',
    title: 'NASA Eyes on the Solar System & Space Missions',
    discipline: 'Earth & Space',
    description: 'Real-time 3D planetary telemetry from NASA JPL tracking planets, asteroids, comets, and active space probes.',
    url: 'https://eyes.nasa.gov/apps/solar-system/#/home',
    gradeLevel: 'All Grade Levels',
    topics: ['Real-Time Telemetry', 'Spacecraft Trajectories', 'Planetary Ephemeris'],
    isLocalRepo: false,
    isFavorite: false,
    authorNotes: 'Useful for live astronomy demonstrations during class sessions.'
  },
  {
    id: 'repo-pubchem',
    title: 'PubChem Open Chemistry Database & 3D Viewer',
    discipline: 'Chemistry',
    description: 'National Institutes of Health repository of chemical structures, 3D molecular conformations, physical properties, and safety datasheets.',
    url: 'https://pubchem.ncbi.nlm.nih.gov/',
    gradeLevel: 'High School & College',
    topics: ['Molecular Geometry', 'Compound Data', 'Chemical Safety', 'Spectrometry'],
    isLocalRepo: false,
    isFavorite: false,
    authorNotes: 'Standard reference for molecular structures and IUPAC chemical data.'
  }
];
