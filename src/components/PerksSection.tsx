import React from 'react';
import { Flame, Sparkles, Zap, Clock } from 'lucide-react';
import { BRAND_PERKS } from '../data/menu';

export const PerksSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Flame: <Flame className="w-6 h-6 text-[#ff6b35]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#ffd166]" />,
    Zap: <Zap className="w-6 h-6 text-[#e8483e]" />,
    Clock: <Clock className="w-6 h-6 text-[#ff6b35]" />
  };

  return (
    <section className="py-14 md:py-20 bg-[#2b2118] text-[#fff3df] relative overflow-hidden">
      {/* Background glow in orange and red */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#ff6b35]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#e8483e]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#ffd166] block mb-2">
            La Regla de Oro de Ñam Bocao!
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white uppercase">
            Comida Rápida con Alma y Sin Atajos
          </h2>
          <p className="text-sm sm:text-base text-[#fff3df]/80 mt-3 font-medium">
            Usamos ingredientes de primera calidad para que cada mordisco sea una explosión de sabor real.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_PERKS.map((perk, i) => (
            <div
              key={i}
              className="bg-[#3d3025] rounded-2xl p-6 border-2 border-[#fff3df]/10 hover:border-[#ffd166] transition-all duration-300 group hover:-translate-y-1 shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2b2118] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs">
                {iconMap[perk.icon] || <Flame className="w-6 h-6 text-[#ff6b35]" />}
              </div>

              <h3 className="text-lg font-black font-display text-white mb-2">
                {perk.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#fff3df]/75 leading-relaxed font-normal">
                {perk.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
