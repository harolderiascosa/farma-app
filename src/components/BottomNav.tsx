'use client';
import { Activity, BookOpen, Calculator, Cpu, ShieldCheck } from 'lucide-react';

interface Props { activeTab: string; setActiveTab: (tab: string) => void; }

export default function BottomNav({ activeTab, setActiveTab }: Props) {
  const tabs = [
    { id: 'dashboard', label: 'Inicio', icon: Activity },
    { id: 'nefron', label: 'Nefrona', icon: Cpu },
    { id: 'diabetes', label: 'Diabetes', icon: ShieldCheck },
    { id: 'insulin', label: 'Insulina', icon: Calculator },
    { id: 'asthma', label: 'GINA/GOLD', icon: BookOpen },
  ];

  return (
    <nav aria-label="Navegación principal" className="fixed bottom-0 left-0 right-0 z-50 bg-[#08080a]/90 backdrop-blur-2xl border-t border-zinc-800/80 pb-[env(safe-area-inset-bottom,1.5rem)] pt-2 px-3 shadow-2xl">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ${
                active
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 scale-105'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${active ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
              <span className="text-[9px] font-bold tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
