import React from 'react';
import { heroImg } from '../data/menu';
import { ArrowRight, Flame, Star, Zap } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroProps {
  onScrollToMenu: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToMenu,
  onOpenWhatsApp
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-[#fff3df]">
      {/* Background radial warmth */}
      <div className="absolute top-0 right-0 -mr-28 -mt-28 w-96 h-96 rounded-full bg-[#ffd166]/35 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-28 -mb-28 w-96 h-96 rounded-full bg-[#ff6b35]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Big Hunger Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffd166] text-[#2b2118] text-xs font-black uppercase tracking-wider w-fit mb-5 shadow-2xs border border-[#2b2118]/15">
              <Flame className="w-4 h-4 text-[#e8483e] fill-[#e8483e]" />
              <span>Sabor Callejero Sin Rodeos · 100% Brutal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-black font-display tracking-tight text-[#2b2118] leading-[1.08] mb-4 text-balance uppercase">
              ¡El mordisco que te alegra el día!
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#2b2118]/85 font-medium leading-relaxed max-w-xl mb-8">
              Smash burgers con costra crujiente, papas ahogadas en queso cheddar fundido, 
              perros salvajes con tocineta crocante y bocados que desbordan sabor. 
              Aquí no hay porciones tímidas: cada mordisco es una fiesta.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onScrollToMenu}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-black uppercase tracking-wider text-white bg-[#ff6b35] hover:bg-[#e85925] rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#e8483e]"
              >
                <span>VER MENÚ BRUTAL</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenWhatsApp}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-black uppercase tracking-wider text-[#2b2118] bg-[#ffd166] hover:bg-[#f0bd46] border border-[#2b2118]/20 rounded-2xl transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-sm hover:shadow-md"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#2b2118]" />
                <span>PEDIR POR WHATSAPP</span>
              </button>
            </div>

            {/* Street Food Trust Metrics */}
            <div className="pt-6 border-t-2 border-[#2b2118]/10 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#e8483e] font-display tabular-nums">100%</p>
                <p className="text-xs text-[#2b2118]/75 font-bold uppercase tracking-tight">Res Angus Fresca</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#ff6b35] font-display tabular-nums">25 min</p>
                <p className="text-xs text-[#2b2118]/75 font-bold uppercase tracking-tight">Delivery Caliente</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#e8483e]">
                  <Star className="w-5 h-5 fill-[#e8483e]" />
                  <span className="text-2xl sm:text-3xl font-black font-display tabular-nums text-[#2b2118]">4.9</span>
                </div>
                <p className="text-xs text-[#2b2118]/75 font-bold uppercase tracking-tight">+5.000 Bocados Felices</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Food Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#2b2118] bg-[#2b2118] aspect-4/3 sm:aspect-1/1 lg:aspect-4/5 group">
                <img
                  src={heroImg}
                  alt="Doble smash burger con queso cheddar fundido y papas cargadas de Ñam Bocao"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2118]/90 via-[#2b2118]/25 to-transparent pointer-events-none" />

                {/* Bottom floating badge on image */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#e8483e] text-white rounded-lg text-xs font-black uppercase tracking-wider mb-2 shadow-xs">
                    <Zap className="w-3.5 h-3.5 fill-white" />
                    <span>Plato Insignia</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-display leading-tight">
                    La Bestia Ñam Doble
                  </h3>
                  <p className="text-xs sm:text-sm text-[#ffd166] font-bold mt-1">
                    Doble carne smash + cheddar fundido + tocineta crocante
                  </p>
                </div>
              </div>

              {/* Floating Pill Tag with Price */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border-2 border-[#2b2118] flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#ffd166] text-[#2b2118] flex items-center justify-center shrink-0 font-black text-xl">
                  🔥
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-wider text-[#ff6b35]">Combo Completo</p>
                  <p className="text-base font-black text-[#2b2118] font-display tabular-nums">$38.900 COP</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
