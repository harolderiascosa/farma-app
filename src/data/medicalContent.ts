export interface NefronSegment {
  id: string;
  name: string;
  location: string;
  transporter: string;
  drugClass: string;
  electrolyteEffects: {
    k: 'Hipokalemia' | 'Hiperkalemia' | 'Neutro';
    na: 'Hiponatremia' | 'Neutro';
    acidBase: 'Alcalosis metabólica' | 'Acidosis metabólica' | 'Acidosis tubular' | 'Neutro';
  };
  clinicalPearls: string;
}

export interface DM2Case {
  id: string;
  vignette: string;
  options: {
    drug: string;
    isCorrect: boolean;
    rationale: string;
    warning: string;
  }[];
}

export const NEFRON_DATA: NefronSegment[] = [
  {
    id: 'tcp',
    name: 'Túbulo Contorneado Proximal',
    location: 'Segmento inicial',
    transporter: 'Anhidrasa Carbónica IV y SGLT2',
    drugClass: 'Inhibidores de Anhidrasa Carbónica / iSGLT2',
    electrolyteEffects: { k: 'Hipokalemia', na: 'Hiponatremia', acidBase: 'Acidosis metabólica' },
    clinicalPearls: 'Acetazolamida causa acidosis metabólica hiperclorémica. iSGLT2 protegen riñón/corazón.'
  },
  {
    id: 'henle',
    name: 'Asa de Henle',
    location: 'Médula renal',
    transporter: 'Cotransportador NKCC2',
    drugClass: 'Diuréticos de Asa (Furosemida)',
    electrolyteEffects: { k: 'Hipokalemia', na: 'Hiponatremia', acidBase: 'Alcalosis metabólica' },
    clinicalPearls: 'Los más potentes. Inhiben reabsorción de Ca2+ y Mg2+. Ototóxicos.'
  }
];

export const DM2_CASES: DM2Case[] = [
  {
    id: 'dm2-1',
    vignette: 'Paciente DM2 con falla cardíaca (FEVI 35%) y TFG 34 ml/min.',
    options: [
      { drug: 'iSGLT2', isCorrect: true, rationale: 'Reducen hospitalizaciones por IC y progresión de ERC.', warning: 'Vigilar micosis.' },
      { drug: 'Metformina', isCorrect: false, rationale: 'Precaución en ERC.', warning: 'Riesgo acidosis.' }
    ]
  }
];

export const HF_SIMULATOR = {
  patient: 'Paciente NYHA III, FEVI 32%, K+ 4.4, TFG 62.',
  pillars: [
    { name: 'ARNI / IECA', status: 'Iniciar', reason: 'Reducción mortalidad.' },
    { name: 'Betabloqueador', status: 'Iniciar', reason: 'Estabilidad clínica.' }
  ]
};

export const CHEAT_SHEET_INSULINS = [
  { name: 'Lispro', onset: '15 min', peak: '1h', duration: '4h', use: 'Bolo' },
  { name: 'Glargina', onset: '2h', peak: 'Plana', duration: '24h', use: 'Basal' }
];
