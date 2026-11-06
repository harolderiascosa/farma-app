export interface InsulinCase {
  id: string;
  patient: string;
  weightKg: number;
  fastingGlucose: number;
  postPrandialGlucose: number;
  tdiPerKg: number; // e.g. 0.4 UI/kg
  correctTdi: number;
  basalUnits: number;
  bolusPerMeal: number;
  explanation: string;
}

export interface AsthmaStepCase {
  id: string;
  patientProfile: string;
  symptomFrequency: string;
  correctTrack: 'Track 1 (ICS-Formoterol a demanda)' | 'Track 2 (SABA a demanda + ICS mantenimiento)';
  rationale: string;
}

export const INSULIN_CASES: InsulinCase[] = [
  {
    id: 'ins-1',
    patient: 'Mujer de 58 años, DM2 mal controlada. Peso: 70 kg. Glucemia en ayunas promedio: 210 mg/dl.',
    weightKg: 70,
    fastingGlucose: 210,
    postPrandialGlucose: 260,
    tdiPerKg: 0.4,
    correctTdi: 28, // 70 * 0.4
    basalUnits: 14, // 50%
    bolusPerMeal: 4.6, // 14 / 3 meals
    explanation: 'Dosis Total Diaria (TDI) inicial = 0.4 UI/kg × 70 kg = 28 UI. Se divide 50% basal (14 UI de Glargina/Degludec nocturna) y 50% bolos preprandiales repartidos en 3 ingestas (~4-5 UI de insulina ultrarrápida antes de desayuno, almuerzo y cena).'
  }
];

export const ASTHMA_CASES: AsthmaStepCase[] = [
  {
    id: 'asthma-1',
    patientProfile: 'Varón de 28 años con sibilancias 3 veces por semana, despertares nocturnos 1 vez por mes, función pulmonar conservada.',
    symptomFrequency: 'Síntomas ocasionales leves',
    correctTrack: 'Track 1 (ICS-Formoterol a demanda)',
    rationale: 'Según GINA, el uso preferente de combinación de baja dosis de Corticoide Inhalado (ICS) con Formoterol a demanda previene exacerbaciones severas reduciendo la inflamación subyacente desde el escalón 1 sin requerir SABA en monoterapia.'
  }
];
