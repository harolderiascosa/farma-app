'use client';
import { useState } from 'react';
import BottomNav from '@/components/BottomNav';
import { NEFRON_DATA, DM2_CASES, HF_SIMULATOR } from '@/data/medicalContent';
import { INSULIN_CASES, ASTHMA_CASES } from '@/data/insulinAndAsthmaContent';
import { Calculator, CheckCircle2, AlertTriangle, Activity, ShieldCheck, Cpu, Stethoscope, Sparkles, HeartPulse, Pill, Flame, CheckCircle, ArrowRight, RefreshCw } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Insulin Calculator State
  const [patientWeight, setPatientWeight] = useState(75);
  const [calculatedInsulin, setCalculatedInsulin] = useState<{tdi: number; basal: number; bolus: number} | null>(null);

  // Asthma Trainer State
  const [selectedAsthmaAnswer, setSelectedAsthmaAnswer] = useState<string | null>(null);

  // DM2 Quiz Interactive State
  const [dm2Answers, setDm2Answers] = useState<Record<string, number>>({});

  const handleCalculateInsulin = () => {
    const tdi = patientWeight * 0.45;
    const basal = tdi * 0.5;
    const bolus = (tdi * 0.5) / 3;
    setCalculatedInsulin({ tdi: Number(tdi.toFixed(1)), basal: Number(basal.toFixed(1)), bolus: Number(bolus.toFixed(1)) });
  };

  return (
    <main className="min-h-screen pb-32 bg-[#08080a] text-zinc-100 font-sans selection:bg-emerald-500 selection:text-zinc-950">
      {/* iOS Status Bar & Dynamic Island Spacer */}
      <div className="w-full h-11 bg-[#08080a]/90 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-6 border-b border-zinc-900/50">
        <span className="text-xs font-semibold text-zinc-400 tracking-tight">9:41</span>
        <div className="w-24 h-5 bg-black rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-2 flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full mr-2"></div>
          <div className="w-2 h-2 bg-emerald-500/80 rounded-full animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-1.5 text-zinc-400 text-xs">
          <span>5G</span>
          <div className="w-5 h-2.5 border border-zinc-400 rounded-sm p-0.5 flex items-center">
            <div className="w-full h-full bg-zinc-300 rounded-2xs"></div>
          </div>
        </div>
      </div>

      {/* App Header */}
      <header className="sticky top-11 z-40 bg-[#08080a]/80 backdrop-blur-xl border-b border-zinc-800/80 px-5 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-zinc-950">
            <Stethoscope className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <h1 className="text-sm font-black tracking-tight text-white">FarmaClínica Pro</h1>
              <span className="px-1.5 py-0.5 text-[9px] font-extrabold bg-emerald-500/20 text-emerald-400 rounded-md">v2.5</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-medium">Simulador Clínico & Terapéutico</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-2xl shadow-inner">
          <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
          <span className="text-xs font-extrabold text-white">Racha 5d</span>
        </div>
      </header>

      <div className="max-w-md mx-auto p-4 space-y-6">

        {/* DASHBOARD VIEW */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Hero Banner */}
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-950/80 via-zinc-900 to-zinc-900 border border-emerald-500/30 rounded-[2rem] p-6 shadow-2xl">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Parcial de Farmacología Clínica</span>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white tracking-tight leading-tight">Domina los 6 Bloques Clave</h2>
                  <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                    Casos clínicos de alta dificultad, simuladores de nefrona, cálculo de insulinas y guías GINA/GOLD/ESC actualizadas.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  <div className="bg-zinc-950/70 backdrop-blur border border-zinc-800/80 p-3 rounded-2xl text-center shadow-inner">
                    <span className="text-[10px] text-zinc-400 font-semibold block uppercase tracking-wider">Dominio</span>
                    <span className="text-base font-black text-emerald-400">78%</span>
                  </div>
                  <div className="bg-zinc-950/70 backdrop-blur border border-zinc-800/80 p-3 rounded-2xl text-center shadow-inner">
                    <span className="text-[10px] text-zinc-400 font-semibold block uppercase tracking-wider">Simuladores</span>
                    <span className="text-base font-black text-white">4 Activos</span>
                  </div>
                  <div className="bg-zinc-950/70 backdrop-blur border border-zinc-800/80 p-3 rounded-2xl text-center shadow-inner">
                    <span className="text-[10px] text-zinc-400 font-semibold block uppercase tracking-wider">Modo PWA</span>
                    <span className="text-base font-black text-amber-400">100% iOS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="space-y-3.5">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400">Módulos de Estudio</h3>
                <span className="text-[11px] text-emerald-400 font-bold">6 Bloques Disponibles</span>
              </div>

              <div
                onClick={() => setActiveTab('nefron')}
                className="group bg-gradient-to-r from-zinc-900 to-zinc-900/80 border border-zinc-800/80 hover:border-blue-500/50 p-4 rounded-3xl flex items-center justify-between cursor-pointer transition-all duration-300 shadow-xl active:scale-[0.98]"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/10">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300">Bloque 1</span>
                      <span className="text-[11px] text-zinc-400">Alta Frecuencia</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Diuréticos y Mapa de la Nefrona</h4>
                    <p className="text-[11px] text-zinc-400">NKCC2, ENaC, Tiazidas e iones.</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 group-hover:bg-blue-500 group-hover:text-zinc-950 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div
                onClick={() => setActiveTab('diabetes')}
                className="group bg-gradient-to-r from-zinc-900 to-zinc-900/80 border border-zinc-800/80 hover:border-emerald-500/50 p-4 rounded-3xl flex items-center justify-between cursor-pointer transition-all duration-300 shadow-xl active:scale-[0.98]"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/10">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300">Bloque 2</span>
                      <span className="text-[11px] text-zinc-400">Caso Clínico</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Perfilador DM2 por Comorbilidad</h4>
                    <p className="text-[11px] text-zinc-400">iSGLT2, aGLP-1, Falla Cardíaca y ERC.</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div
                onClick={() => setActiveTab('insulin')}
                className="group bg-gradient-to-r from-zinc-900 to-zinc-900/80 border border-zinc-800/80 hover:border-amber-500/50 p-4 rounded-3xl flex items-center justify-between cursor-pointer transition-all duration-300 shadow-xl active:scale-[0.98]"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/10">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300">Bloque 3</span>
                      <span className="text-[11px] text-zinc-400">Simulador Interactivo</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">Calculadora Clínica de Insulinas</h4>
                    <p className="text-[11px] text-zinc-400">Dosis Total Diaria (TDI) y Basal-Bolo.</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div
                onClick={() => setActiveTab('asthma')}
                className="group bg-gradient-to-r from-zinc-900 to-zinc-900/80 border border-zinc-800/80 hover:border-purple-500/50 p-4 rounded-3xl flex items-center justify-between cursor-pointer transition-all duration-300 shadow-xl active:scale-[0.98]"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/10">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300">Bloques 4 & 5</span>
                      <span className="text-[11px] text-zinc-400">Guías GINA / GOLD</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">Escalamiento Asma y EPOC</h4>
                    <p className="text-[11px] text-zinc-400">Tracks GINA y broncodilatación dual.</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 group-hover:bg-purple-500 group-hover:text-zinc-950 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div
                onClick={() => setActiveTab('hf')}
                className="group bg-gradient-to-r from-zinc-900 to-zinc-900/80 border border-zinc-800/80 hover:border-rose-500/50 p-4 rounded-3xl flex items-center justify-between cursor-pointer transition-all duration-300 shadow-xl active:scale-[0.98]"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform shadow-lg shadow-rose-500/10">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300">Bloque 6</span>
                      <span className="text-[11px] text-zinc-400">Mortalidad HFrEF</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">Constructor de los 4 Pilares</h4>
                    <p className="text-[11px] text-zinc-400">ARNI, BB, ARM e iSGLT2.</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 group-hover:bg-rose-500 group-hover:text-zinc-950 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BLOQUE 1: NEFRONA */}
        {activeTab === 'nefron' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-950/40 to-zinc-900 border border-blue-500/30 p-5 rounded-3xl space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-blue-400 bg-blue-500/20 px-2.5 py-0.5 rounded-md">Bloque 1 • Fisiología Renal</span>
              <h2 className="text-xl font-black text-white">Mapa de la Nefrona y Electrolitos</h2>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Cada segmento renal procesa iones específicos. Identifica transportadores y predecir el perfil electrolítico de examen.
              </p>
            </div>

            {NEFRON_DATA.map((n) => (
              <div key={n.id} className="bg-zinc-900/90 border border-zinc-800/90 rounded-[2rem] p-5 space-y-4 shadow-xl backdrop-blur">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase font-black text-blue-400 tracking-wider">{n.location}</span>
                    <h3 className="text-base font-black text-white mt-0.5">{n.name}</h3>
                  </div>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full font-bold">{n.drugClass}</span>
                </div>
                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800/80 space-y-2.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400 font-medium">Transportador Diana:</span>
                    <span className="text-white font-bold bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800">{n.transporter}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400 font-medium">Efecto Electrolítico:</span>
                    <span className="text-amber-400 font-bold bg-amber-950/30 px-2.5 py-1 rounded-lg border border-amber-500/20">{n.electrolyteEffects.k} | {n.electrolyteEffects.acidBase}</span>
                  </div>
                </div>
                <div className="bg-blue-950/20 border border-blue-500/20 p-4 rounded-2xl space-y-1">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-wider block">💡 Perla Clínica de Parcial</span>
                  <p className="text-xs text-zinc-300 leading-relaxed">{n.clinicalPearls}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BLOQUE 2: DIABETES */}
        {activeTab === 'diabetes' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-gradient-to-r from-emerald-950/40 to-zinc-900 border border-emerald-500/30 p-5 rounded-3xl space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-2.5 py-0.5 rounded-md">Bloque 2 • Endocrinología</span>
              <h2 className="text-xl font-black text-white">Perfilador DM2 por Comorbilidad</h2>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Selección de fármacos antidiabéticos basados en beneficio cardiovascular, renal y control de peso.
              </p>
            </div>

            {DM2_CASES.map((c) => (
              <div key={c.id} className="bg-zinc-900/90 border border-zinc-800/90 rounded-[2rem] p-5 space-y-4 shadow-xl backdrop-blur">
                <div className="bg-emerald-950/30 border border-emerald-500/20 p-4 rounded-2xl flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-zinc-200 font-semibold leading-relaxed">{c.vignette}</p>
                </div>
                <div className="space-y-2.5">
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider block px-1">Opciones Terapéuticas</span>
                  {c.options.map((opt, idx) => (
                    <div key={idx} className={`p-4 rounded-2xl border transition-all ${opt.isCorrect ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-500/5' : 'bg-zinc-950 border-zinc-800/80'}`}>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-black text-white">{opt.drug}</span>
                        {opt.isCorrect && (
                          <span className="inline-flex items-center space-x-1 text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-black">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Elección Ideal</span>
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-300 mt-2 leading-relaxed">{opt.rationale}</p>
                      <div className="mt-2.5 pt-2 border-t border-zinc-900 flex items-center space-x-1.5 text-amber-400 text-[10px] font-bold">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                        <span>Precaución: {opt.warning}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BLOQUE 3: INSULINIZACIÓN */}
        {activeTab === 'insulin' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-gradient-to-r from-amber-950/40 to-zinc-900 border border-amber-500/30 p-5 rounded-3xl space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2.5 py-0.5 rounded-md">Bloque 3 • Insulinoterapia</span>
              <h2 className="text-xl font-black text-white">Calculadora Clínica de Insulinas</h2>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Simula el cálculo exacto de la Dosis Total Diaria (TDI) y el fraccionamiento basal-bolo preprandial.
              </p>
            </div>

            <div className="bg-zinc-900/90 border border-zinc-800/90 rounded-[2rem] p-5 space-y-5 shadow-xl backdrop-blur">
              <div className="space-y-3 bg-zinc-950 p-4 rounded-2xl border border-zinc-800/80">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-zinc-300">Peso Corporal del Paciente</span>
                  <span className="text-amber-400 font-black text-sm bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20">{patientWeight} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="140"
                  value={patientWeight}
                  onChange={(e) => setPatientWeight(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-zinc-800 h-2.5 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-semibold px-1">
                  <span>40 kg</span>
                  <span>90 kg</span>
                  <span>140 kg</span>
                </div>
              </div>

              <button
                onClick={handleCalculateInsulin}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 font-black rounded-2xl text-xs uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20 active:scale-[0.98] flex items-center justify-center space-x-2"
              >
                <Calculator className="w-4 h-4 stroke-[2.5]" />
                <span>Calcular Esquema Basal-Bolo (0.45 UI/kg)</span>
              </button>

              {calculatedInsulin && (
                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800/80 space-y-3.5 animate-fadeIn">
                  <div className="flex justify-between items-center border-b border-zinc-900 pb-3">
                    <span className="text-xs text-zinc-400 font-medium">Dosis Total Diaria (TDI):</span>
                    <span className="text-amber-400 font-black text-base bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20">{calculatedInsulin.tdi} UI / día</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-zinc-900 p-3.5 rounded-xl border border-zinc-800 text-center space-y-1">
                      <span className="text-[10px] text-zinc-400 font-bold block uppercase">Basal Nocturna (50%)</span>
                      <span className="text-base font-black text-white">{calculatedInsulin.basal} UI</span>
                      <span className="text-[9px] text-zinc-500 block">Glargina / Degludec</span>
                    </div>
                    <div className="bg-zinc-900 p-3.5 rounded-xl border border-zinc-800 text-center space-y-1">
                      <span className="text-[10px] text-zinc-400 font-bold block uppercase">Bolos c/ Comida (50%)</span>
                      <span className="text-base font-black text-emerald-400">{calculatedInsulin.bolus} UI</span>
                      <span className="text-[9px] text-zinc-500 block">Lispro / Aspart (x3)</span>
                    </div>
                  </div>
                  <div className="bg-amber-950/20 border border-amber-500/20 p-3.5 rounded-xl space-y-1">
                    <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider block">💡 Perla Clínica de Examen</span>
                    <p className="text-[11px] text-zinc-300 leading-relaxed">
                      El cociente 50/50 asegura cobertura basal continua y previene picos hiperglucémicos postprandiales en ayunas de 8 horas.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* BLOQUES 4 & 5: ASMA Y EPOC */}
        {activeTab === 'asthma' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-gradient-to-r from-purple-950/40 to-zinc-900 border border-purple-500/30 p-5 rounded-3xl space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 bg-purple-500/20 px-2.5 py-0.5 rounded-md">Bloques 4 & 5 • Neumonología</span>
              <h2 className="text-xl font-black text-white">Entrenador GINA / GOLD</h2>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Selección de vías de tratamiento en asma bronquial y manejo de exacerbaciones.
              </p>
            </div>

            {ASTHMA_CASES.map((a) => (
              <div key={a.id} className="bg-zinc-900/90 border border-zinc-800/90 rounded-[2rem] p-5 space-y-4 shadow-xl backdrop-blur">
                <div className="bg-purple-950/30 border border-purple-500/20 p-4 rounded-2xl flex items-start space-x-3">
                  <Activity className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-zinc-200 font-semibold leading-relaxed">{a.patientProfile}</p>
                </div>
                <div className="space-y-2.5">
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider block px-1">¿Qué Track GINA es el correcto?</span>

                  <button
                    onClick={() => setSelectedAsthmaAnswer('Track 1')}
                    className={`w-full p-4 rounded-2xl text-left border text-xs font-bold transition-all flex items-center justify-between ${
                      selectedAsthmaAnswer === 'Track 1'
                        ? 'bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-500/10'
                        : 'bg-zinc-950 border-zinc-800/80 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <span>Track 1 (ICS-Formoterol a demanda preferente)</span>
                    {selectedAsthmaAnswer === 'Track 1' && <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 ml-2" />}
                  </button>

                  <button
                    onClick={() => setSelectedAsthmaAnswer('Track 2')}
                    className={`w-full p-4 rounded-2xl text-left border text-xs font-bold transition-all flex items-center justify-between ${
                      selectedAsthmaAnswer === 'Track 2'
                        ? 'bg-rose-600/20 border-rose-500 text-white shadow-lg shadow-rose-500/10'
                        : 'bg-zinc-950 border-zinc-800/80 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <span>Track 2 (SABA a demanda + mantenimiento ICS)</span>
                    {selectedAsthmaAnswer === 'Track 2' && <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 ml-2" />}
                  </button>

                  {selectedAsthmaAnswer && (
                    <div className="mt-4 p-4 bg-zinc-950 rounded-2xl border border-zinc-800 space-y-2 animate-fadeIn">
                      <div className="flex items-center space-x-2">
                        {selectedAsthmaAnswer === 'Track 1' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-amber-400" />}
                        <span className="text-xs font-black text-white">{selectedAsthmaAnswer === 'Track 1' ? '¡Respuesta Correcta!' : 'Precaución de Examen'}</span>
                      </div>
                      <p className="text-[11px] text-zinc-300 leading-relaxed">{a.rationale}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BLOQUE 6: FALLA CARDÍACA */}
        {activeTab === 'hf' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-gradient-to-r from-rose-950/40 to-zinc-900 border border-rose-500/30 p-5 rounded-3xl space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 bg-rose-500/20 px-2.5 py-0.5 rounded-md">Bloque 6 • Cardiología</span>
              <h2 className="text-xl font-black text-white">Los 4 Pilares de la HFrEF</h2>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {HF_SIMULATOR.patient}
              </p>
            </div>

            <div className="space-y-3">
              {HF_SIMULATOR.pillars.map((pillar, idx) => (
                <div key={idx} className="bg-zinc-900/90 border border-zinc-800/90 rounded-[2rem] p-4 space-y-2 shadow-xl backdrop-blur">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-black text-white">{pillar.name}</h3>
                    <span className="px-3 py-1 rounded-full text-[10px] font-black bg-rose-500/20 text-rose-300 border border-rose-500/30">{pillar.status}</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-relaxed">{pillar.reason}</p>
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
