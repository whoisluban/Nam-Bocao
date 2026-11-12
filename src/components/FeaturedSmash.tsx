import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Plus, Check, Flame, Sparkles, Utensils } from 'lucide-react';

interface FeaturedSmashProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, asCombo: boolean) => void;
  onOpenDetails: (item: MenuItem) => void;
}

export const FeaturedSmash: React.FC<FeaturedSmashProps> = ({
  item,
  onAddToCart,
  onOpenDetails
}) => {
  const [asCombo, setAsCombo] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(item, asCombo);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const currentPrice = asCombo ? (item.comboPriceCOP || item.priceCOP) : item.priceCOP;

  const burgerLayers = [
    { title: 'Pan Brioche Artesanal', desc: 'Dorado en plancha con mantequilla de vaca, extra suave.' },
    { title: 'Salsa Secreta Ñam', desc: 'Receta de la casa ahumada con toques agridulces y especias.' },
    { title: 'Tocineta Ahumada Gruesa', desc: 'Crocante, dorada al punto y bañada en jugos de la carne.' },
    { title: 'Doble Queso Cheddar', desc: 'Fundido sobre la carne viva en la plancha caliente.' },
    { title: 'Doble Smash Angus (200g)', desc: 'Costra caramelizada inigualable y jugosidad extrema.' },
    { title: 'Cebolla Caramelizada', desc: 'Cocida durante 3 horas a fuego lento.' }
  ];

  return (
    <section id="destacado" className="py-20 md:py-28 bg-[#fff3df] border-t-2 border-[#2b2118]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Kicker */}
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#ff6b35] mb-3">
          <Flame className="w-4 h-4 text-[#e8483e] fill-[#e8483e]" />
          <span>Nuestra Obra Maestra</span>
          <span aria-hidden="true" className="text-[#2b2118]/30">·</span>
          <span>Amor a Primer Mordisco</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#2b2118] bg-[#2b2118] aspect-4/3 sm:aspect-1/1">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b2118]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <span className="px-3 py-1 bg-[#e8483e] text-white text-xs font-black uppercase tracking-wider rounded-lg mb-2 inline-block">
                    {item.badge || 'La Más Pedida'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#ffd166] font-bold mt-1">
                    {item.servingsInfo}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating combo sticker */}
            <div className="absolute -top-4 -right-4 bg-[#ffd166] text-[#2b2118] p-3.5 rounded-2xl shadow-xl border-2 border-[#2b2118] rotate-3 font-display font-black text-center">
              <p className="text-[10px] uppercase tracking-wider text-[#ff6b35]">Sabor Legendario</p>
              <p className="text-xl leading-none">200g ANGUS</p>
            </div>
          </div>

          {/* Right Column: Layer breakdown & Order builder */}
          <div className="lg:col-span-6">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#2b2118] uppercase tracking-tight mb-3">
              {item.name}
            </h2>

            <p className="text-lg text-[#ff6b35] font-black uppercase mb-4">
              “{item.tagline}”
            </p>

            <p className="text-sm sm:text-base text-[#2b2118]/85 leading-relaxed mb-6 font-medium">
              {item.description}
            </p>

            {/* Burger Anatomy Layers (Interactive) */}
            <div className="mb-8">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#2b2118] mb-3 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#ff6b35]" />
                <span>Anatomía de La Bestia Ñam:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {burgerLayers.map((layer, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-xl border border-[#2b2118]/15 text-xs shadow-2xs hover:border-[#ff6b35] transition-colors"
                  >
                    <p className="font-black text-[#2b2118]">{layer.title}</p>
                    <p className="text-[11px] text-[#2b2118]/70 mt-0.5">{layer.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Combo Toggle Box */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-[#2b2118] mb-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-black uppercase text-[#ff6b35] block">
                    ¿La quieres en Combo?
                  </span>
                  <span className="text-sm font-bold text-[#2b2118]">
                    Incluye Papas Rústicas Medianas + Bebida 400ml
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setAsCombo(false)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      !asCombo
                        ? 'bg-[#2b2118] text-white'
                        : 'bg-neutral-100 text-[#2b2118] hover:bg-neutral-200'
                    }`}
                  >
                    Sola
                  </button>
                  <button
                    type="button"
                    onClick={() => setAsCombo(true)}
                    className={`px-3 py-1.5 text-xs font-black rounded-lg transition-colors cursor-pointer ${
                      asCombo
                        ? 'bg-[#ffd166] text-[#2b2118] border border-[#2b2118]'
                        : 'bg-neutral-100 text-[#2b2118] hover:bg-neutral-200'
                    }`}
                  >
                    Combo (+ $9.000)
                  </button>
                </div>
              </div>
            </div>

            {/* Price & Add to Cart button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#2b2118]/60 font-black">Precio</span>
                <span className="text-3xl font-black font-display text-[#2b2118] tabular-nums">
                  ${currentPrice.toLocaleString('es-CO')} <span className="text-xs font-bold text-[#2b2118]/70">COP</span>
                </span>
              </div>

              <button
                onClick={handleAdd}
                type="button"
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#ff6b35] hover:bg-[#e85925] rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5 text-white" />
                    <span>¡Agregada a tu orden!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    <span>{asCombo ? 'Poner Combo en la Orden' : 'Quiero Mi Bestia Ñam'}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onOpenDetails(item)}
                type="button"
                className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-[#2b2118] bg-white border border-[#2b2118]/20 rounded-xl hover:bg-[#ffd166]/30 transition-colors cursor-pointer"
              >
                Ver Ficha
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
