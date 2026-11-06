'use client';
import { useState } from 'react';
import BottomNav from '@/components/BottomNav';
import { NEFRON_DATA, DM2_CASES, HF_SIMULATOR, CHEAT_SHEET_INSULINS } from '@/data/medicalContent';
import { INSULIN_CASES, ASTHMA_CASES } from '@/data/insulinAndAsthmaContent';
import { Calculator, CheckCircle2, AlertTriangle, Activity, ShieldCheck, Cpu, BookOpen, Stethoscope } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Insulin Calculator State
  const [patientWeight, setPatientWeight] = useState(70);
  const [calculatedInsulin, setCalculatedInsulin] = useState<{tdi: number; basal: number; bolus: number} | null>(null);

  // Asthma Trainer State
  const [selectedAsthmaAnswer, setSelectedAsthmaAnswer] = useState<string | null>(null);

  const handleCalculateInsulin = () => {
    const tdi = patientWeight * 0.4;
    const basal = tdi * 0.5;
    const bolus = (tdi * 0.5) / 3;
    setCalculatedInsulin({ tdi, basal: Number(basal.toFixed(1)), bolus: Number(bolus.toFixed(1)) });
  };

  return (
    <main className="min-h-screen pb-24 bg-zinc-950 text-zinc-100 selection:bg-emerald-500 selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-xl text-emerald-400">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-tight">FarmaClínica Pro</h1>
            <span className="text-[10px] text-zinc-400 font-medium">EdTech Parcial Farmacología</span>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-400">
          iOS PWA Ready
        </div>
      </header>

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-900 border border-emerald-500/20 rounded-3xl p-5 space-y-3 shadow-xl">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300">
                Preparación Parcial
              </span>
              <h2 className="text-xl font-black text-white">Dominio Clínico y Terapéutico</h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Simuladores interactivos avanzados basados en guías internacionales (KDIGO, ADA, GINA/GOLD, ESC) para aprobar con excelencia.
              </p>
              <div className="pt-2 grid grid-cols-3 gap-2 text-center">
                <div className="bg-zinc-950/60 p-2.5 rounded-2xl border border-zinc-800">
                  <span className="text-[10px] text-zinc-400 block">Bloques</span>
                  <span className="text-sm font-bold text-white">6 / 6</span>
                </div>
                <div className="bg-zinc-950/60 p-2.5 rounded-2xl border border-zinc-800">
                  <span className="text-[10px] text-zinc-400 block">Modos</span>
                  <span className="text-sm font-bold text-emerald-400">4 Interactivos</span>
                </div>
                <div className="bg-zinc-950/60 p-2.5 rounded-2xl border border-zinc-800">
                  <span className="text-[10px] text-zinc-400 block">Estado</span>
                  <span className="text-sm font-bold text-amber-400">100% Offline</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 px-1">Módulos de Estudio</h3>
              <div onClick={() => setActiveTab('nefron')} className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:border-zinc-700 transition-all">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded">Bloque 1</span>
                  <h4 className="text-sm font-bold text-white">Diuréticos y Mapa de la Nefrona</h4>
                  <p className="text-xs text-zinc-400">Transportadores NKCC2, ENaC y electrolitos.</p>
                </div>
                <Cpu className="w-5 h-5 text-blue-400" />
              </div>

              <div onClick={() => setActiveTab('diabetes')} className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:border-zinc-700 transition-all">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded">Bloque 2</span>
                  <h4 className="text-sm font-bold text-white">Perfilador DM2 por Comorbilidad</h4>
                  <p className="text-xs text-zinc-400">iSGLT2, aGLP-1 y prevención de efectos letales.</p>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>

              <div onClick={() => setActiveTab('insulin')} className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:border-zinc-700 transition-all">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded">Bloque 3</span>
                  <h4 className="text-sm font-bold text-white">Calculadora Clínica de Insulinas</h4>
                  <p className="text-xs text-zinc-400">Simulador de Dosis Total Diaria (TDI) y basal-bolo.</p>
                </div>
                <Calculator className="w-5 h-5 text-amber-400" />
              </div>

              <div onClick={() => setActiveTab('asthma')} className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:border-zinc-700 transition-all">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded">Bloques 4 y 5</span>
                  <h4 className="text-sm font-bold text-white">Escalamiento GINA / GOLD</h4>
                  <p className="text-xs text-zinc-400">Tracks de asma y broncodilatación dual en EPOC.</p>
                </div>
                <Activity className="w-5 h-5 text-purple-400" />
              </div>

              <div onClick={() => setActiveTab('hf')} className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:border-zinc-700 transition-all">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-rose-400 bg-rose-950/40 px-2 py-0.5 rounded">Bloque 6</span>
                  <h4 className="text-sm font-bold text-white">Constructor de los 4 Pilares (HFrEF)</h4>
                  <p className="text-xs text-zinc-400">ARNI, Betabloqueadores, ARM e iSGLT2.</p>
                </div>
                <Calculator className="w-5 h-5 text-rose-400" />
              </div>
            </div>
          </div>
        )}

        {/* BLOQUE 1: NEFRONA */}
        {activeTab === 'nefron' && (
          <div className="space-y-4">
            <div>
              <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">Bloque 1</span>
              <h2 className="text-xl font-black text-white">Mapa Nefrona & Electrolitos</h2>
              <p className="text-xs text-zinc-400 mt-1">Selecciona el segmento renal para estudiar el transportador y el impacto electrolítico exacto de examen.</p>
            </div>
            {NEFRON_DATA.map((n) => (
              <div key={n.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 space-y-3 shadow-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-blue-400 font-bold">{n.location}</span>
                    <h3 className="text-base font-bold text-white">{n.name}</h3>
                  </div>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full font-bold">{n.drugClass}</span>
                </div>
                <div className="bg-zinc-950 p-3 rounded-2xl border border-zinc-800 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400">Transportador Diana:</span>
                    <span className="text-white font-bold">{n.transporter}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400">Potasio y pH:</span>
                    <span className="text-amber-400 font-bold">{n.electrolyteEffects.k} | {n.electrolyteEffects.acidBase}</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed bg-blue-950/20 p-3 rounded-2xl border border-blue-500/20">
                  <strong className="text-blue-400">Perla de Examen:</strong> {n.clinicalPearls}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* BLOQUE 2: DIABETES */}
        {activeTab === 'diabetes' && (
          <div className="space-y-4">
            <div>
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Bloque 2</span>
              <h2 className="text-xl font-black text-white">Perfilador DM2 por Comorbilidad</h2>
              <p className="text-xs text-zinc-400 mt-1">Viñetas clínicas con selección de tratamiento óptimo basado en insuficiencia cardíaca y tasa de filtración glomerular.</p>
            </div>
            {DM2_CASES.map((c) => (
              <div key={c.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 space-y-4 shadow-xl">
                <div className="bg-emerald-950/30 border border-emerald-500/20 p-3.5 rounded-2xl">
                  <p className="text-xs text-zinc-200 font-medium leading-relaxed">{c.vignette}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Opciones Evaluadas</span>
                  {c.options.map((opt, idx) => (
                    <div key={idx} className={`p-3.5 rounded-2xl border ${opt.isCorrect ? 'bg-emerald-950/20 border-emerald-500/50' : 'bg-zinc-950 border-zinc-800'}`}>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white">{opt.drug}</span>
                        {opt.isCorrect && <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">Elección Correcta</span>}
                      </div>
                      <p className="text-[11px] text-zinc-300 mt-2">{opt.rationale}</p>
                      <p className="text-[10px] text-amber-400 mt-1 font-semibold">⚠️ {opt.warning}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BLOQUE 3: INSULINIZACIÓN (CALCULADORA CLÍNICA) */}
        {activeTab === 'insulin' && (
          <div className="space-y-4">
            <div>
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Bloque 3</span>
              <h2 className="text-xl font-black text-white">Simulador de Dosis y Curvas</h2>
              <p className="text-xs text-zinc-400 mt-1">Calcula la Dosis Total Diaria (TDI) según el peso en kg del paciente y divide el esquema basal-bolo preprandial.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 space-y-4 shadow-xl">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-300">Peso del Paciente (kg): {patientWeight} kg</label>
                <input
                  type="range"
                  min="40"
                  max="140"
                  value={patientWeight}
                  onChange={(e) => setPatientWeight(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-zinc-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <button
                onClick={handleCalculateInsulin}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-black rounded-2xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98]"
              >
                Calcular Esquema Basal-Bolo (0.4 UI/kg)
              </button>

              {calculatedInsulin && (
                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-3 animate-fadeIn">
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span className="text-xs text-zinc-400">Dosis Total Diaria (TDI):</span>
                    <span className="text-amber-400 font-black text-sm">{calculatedInsulin.tdi} UI / día</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                      <span className="text-[10px] text-zinc-400 block font-medium">Basal 50% (Nocturna)</span>
                      <span className="text-sm font-bold text-white">{calculatedInsulin.basal} UI</span>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                      <span className="text-[10px] text-zinc-400 block font-medium">Bolos 50% (c/comida)</span>
                      <span className="text-sm font-bold text-emerald-400">{calculatedInsulin.bolus} UI x 3</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-relaxed bg-amber-950/20 p-3 rounded-xl border border-amber-500/20">
                    <strong className="text-amber-400">Criterio Clínico:</strong> Administrar insulina basal a la misma hora diaria (Glargina/Degludec) y los bolos ultrarrápidos (Lispro/Aspart) 10-15 minutos antes de las ingestas principales.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* BLOQUE 4 Y 5: ASMA Y EPOC (GINA / GOLD) */}
        {activeTab === 'asthma' && (
          <div className="space-y-4">
            <div>
              <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">Bloques 4 & 5</span>
              <h2 className="text-xl font-black text-white">Escalamiento GINA / GOLD</h2>
              <p className="text-xs text-zinc-400 mt-1">Entrenador de selección de Tracks de tratamiento en Asma según la nueva estrategia GINA.</p>
            </div>

            {ASTHMA_CASES.map((a) => (
              <div key={a.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 space-y-4 shadow-xl">
                <div className="bg-purple-950/30 border border-purple-500/20 p-3.5 rounded-2xl">
                  <p className="text-xs text-zinc-200 font-medium leading-relaxed">{a.patientProfile}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">¿Qué Track GINA elegiría?</span>
                  <button
                    onClick={() => setSelectedAsthmaAnswer('Track 1')}
                    className={`w-full p-3 rounded-2xl text-left border text-xs font-bold transition-all ${selectedAsthmaAnswer === 'Track 1' ? 'bg-purple-600/20 border-purple-500 text-white' : 'bg-zinc-950 border-zinc-800 text-zinc-300'}`}
                  >
                    Track 1 (ICS-Formoterol a demanda preferente)
                  </button>
                  <button
                    onClick={() => setSelectedAsthmaAnswer('Track 2')}
                    className={`w-full p-3 rounded-2xl text-left border text-xs font-bold transition-all ${selectedAsthmaAnswer === 'Track 2' ? 'bg-rose-600/20 border-rose-500 text-white' : 'bg-zinc-950 border-zinc-800 text-zinc-300'}`}
                  >
                    Track 2 (SABA a demanda + mantenimiento con ICS)
                  </button>

                  {selectedAsthmaAnswer && (
                    <div className="mt-3 p-3.5 bg-zinc-950 rounded-2xl border border-zinc-800 space-y-2 animate-fadeIn">
                      <div className="flex items-center space-x-2">
                        {selectedAsthmaAnswer === 'Track 1' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-amber-400" />}
                        <span className="text-xs font-bold text-white">{selectedAsthmaAnswer === 'Track 1' ? '¡Correcto según GINA!' : 'Precaución'}</span>
                      </div>
                      <p className="text-[11px] text-zinc-300">{a.rationale}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BLOQUE 6: FALLA CARDÍACA */}
        {activeTab === 'hf' && (
          <div className="space-y-4">
            <div>
              <span className="text-xs text-rose-400 font-bold uppercase tracking-wider">Bloque 6</span>
              <h2 className="text-xl font-black text-white">Constructor de los 4 Pilares (HFrEF)</h2>
              <p className="text-xs text-zinc-400 mt-1">{HF_SIMULATOR.patient}</p>
            </div>

            <div className="space-y-3">
              {HF_SIMULATOR.pillars.map((pillar, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 space-y-2 shadow-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-white">{pillar.name}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300">{pillar.status}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">{pillar.reason}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
}
