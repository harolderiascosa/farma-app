'use client';
import { Activity, BookOpen, Calculator, Cpu, ShieldCheck } from 'lucide-react';

interface Props { activeTab: string; setActiveTab: (tab: string) => void; }

export default function BottomNav({ activeTab, setActiveTab }: Props) {
  const tabs = [
    { id: 'dashboard', label: 'Inicio', icon: Activity },
    { id: 'nefron', label: 'Nefrona', icon: Cpu },
    { id: 'diabetes', label: 'Diabetes', icon: ShieldCheck },
    { id: 'hf', label: 'Falla', icon: Calculator },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur-xl border-t border-zinc-800 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex flex-col items-center ${active ? 'text-emerald-400' : 'text-zinc-500'}`}>
              <Icon size={20} />
              <span className="text-[10px]">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
