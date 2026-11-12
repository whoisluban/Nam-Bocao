import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Sparkles, Plus, Check, ArrowRight } from 'lucide-react';
import { SAUCES_AVAILABLE } from '../data/menu';

interface CustomComboBuilderProps {
  onAddCustomCombo: (combo: {
    mainItem: MenuItem;
    sideItem: MenuItem;
    drinkItem: MenuItem;
    sauce: string;
    totalPrice: number;
  }) => void;
  burgers: MenuItem[];
  sides: MenuItem[];
  drinks: MenuItem[];
}

export const CustomComboBuilder: React.FC<CustomComboBuilderProps> = ({
  onAddCustomCombo,
  burgers,
  sides,
  drinks
}) => {
  const [selectedMainId, setSelectedMainId] = useState(burgers[0]?.id || '');
  const [selectedSideId, setSelectedSideId] = useState(sides[0]?.id || '');
  const [selectedDrinkId, setSelectedDrinkId] = useState(drinks[0]?.id || '');
  const [selectedSauce, setSelectedSauce] = useState(SAUCES_AVAILABLE[0]);
  const [added, setAdded] = useState(false);

  const mainItem = burgers.find((b) => b.id === selectedMainId) || burgers[0];
  const sideItem = sides.find((s) => s.id === selectedSideId) || sides[0];
  const drinkItem = drinks.find((d) => d.id === selectedDrinkId) || drinks[0];

  const rawTotal = (mainItem?.priceCOP || 0) + (sideItem?.priceCOP || 0) + (drinkItem?.priceCOP || 0);
  // 15% discount for building a full combo!
  const comboDiscount = Math.round(rawTotal * 0.15);
  const finalPrice = rawTotal - comboDiscount;

  const handleBuild = () => {
    if (!mainItem || !sideItem || !drinkItem) return;
    onAddCustomCombo({
      mainItem,
      sideItem,
      drinkItem,
      sauce: selectedSauce,
      totalPrice: finalPrice
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <section id="combos" className="py-20 md:py-28 bg-[#ffd166] text-[#2b2118] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2b2118] text-[#ffd166] text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ff6b35]" />
            <span>A Tu Manera con 15% OFF</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-[#2b2118]">
            Arma Tu Combo Ñam Personalizado
          </h2>
          <p className="text-sm sm:text-base text-[#2b2118]/85 font-medium mt-2">
            Elige tu plato fuerte, tus papas favoritas, bebida y salsa de la casa con precio especial de combo.
          </p>
        </div>

        {/* 3 Step Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Step 1: Plato Fuerte */}
          <div className="bg-white rounded-3xl p-6 border-3 border-[#2b2118] shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#2b2118]/10 mb-4">
                <span className="text-xs font-black uppercase text-[#ff6b35]">Paso 01</span>
                <span className="text-xs font-bold text-[#2b2118]/70">Elige Tu Fuerte</span>
              </div>
              <h3 className="text-xl font-black font-display mb-4">Hamburguesa o Perro</h3>

              <div className="space-y-2.5">
                {burgers.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedMainId(b.id)}
                    className={`w-full p-3 rounded-2xl border-2 text-left transition-all flex items-center gap-3 cursor-pointer ${
                      selectedMainId === b.id
                        ? 'border-[#ff6b35] bg-[#fff3df] shadow-xs'
                        : 'border-[#2b2118]/10 bg-white hover:border-[#2b2118]/30'
                    }`}
                  >
                    <img src={b.image} alt={b.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-[#2b2118] truncate">{b.name}</p>
                      <p className="text-[11px] text-[#2b2118]/70 truncate">{b.tagline}</p>
                    </div>
                    {selectedMainId === b.id && (
                      <span className="w-5 h-5 rounded-full bg-[#ff6b35] text-white flex items-center justify-center text-xs font-black shrink-0">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 2: Acompañamiento */}
          <div className="bg-white rounded-3xl p-6 border-3 border-[#2b2118] shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#2b2118]/10 mb-4">
                <span className="text-xs font-black uppercase text-[#ff6b35]">Paso 02</span>
                <span className="text-xs font-bold text-[#2b2118]/70">Elige Tus Papas</span>
              </div>
              <h3 className="text-xl font-black font-display mb-4">Papas o Acompañamiento</h3>

              <div className="space-y-2.5">
                {sides.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedSideId(s.id)}
                    className={`w-full p-3 rounded-2xl border-2 text-left transition-all flex items-center gap-3 cursor-pointer ${
                      selectedSideId === s.id
                        ? 'border-[#ff6b35] bg-[#fff3df] shadow-xs'
                        : 'border-[#2b2118]/10 bg-white hover:border-[#2b2118]/30'
                    }`}
                  >
                    <img src={s.image} alt={s.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-[#2b2118] truncate">{s.name}</p>
                      <p className="text-[11px] text-[#2b2118]/70 truncate">{s.tagline}</p>
                    </div>
                    {selectedSideId === s.id && (
                      <span className="w-5 h-5 rounded-full bg-[#ff6b35] text-white flex items-center justify-center text-xs font-black shrink-0">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Bebida & Salsa */}
          <div className="bg-white rounded-3xl p-6 border-3 border-[#2b2118] shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#2b2118]/10 mb-4">
                <span className="text-xs font-black uppercase text-[#ff6b35]">Paso 03</span>
                <span className="text-xs font-bold text-[#2b2118]/70">Bebida & Salsa Gratis</span>
              </div>
              <h3 className="text-xl font-black font-display mb-4">Para Bajar el Bocao</h3>

              <div className="space-y-2.5 mb-5">
                {drinks.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelectedDrinkId(d.id)}
                    className={`w-full p-3 rounded-2xl border-2 text-left transition-all flex items-center gap-3 cursor-pointer ${
                      selectedDrinkId === d.id
                        ? 'border-[#ff6b35] bg-[#fff3df] shadow-xs'
                        : 'border-[#2b2118]/10 bg-white hover:border-[#2b2118]/30'
                    }`}
                  >
                    <img src={d.image} alt={d.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-[#2b2118] truncate">{d.name}</p>
                      <p className="text-[11px] text-[#2b2118]/70 truncate">{d.tagline}</p>
                    </div>
                    {selectedDrinkId === d.id && (
                      <span className="w-5 h-5 rounded-full bg-[#ff6b35] text-white flex items-center justify-center text-xs font-black shrink-0">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-[#2b2118] mb-1.5">
                  Salsa de la Casa Gratis:
                </label>
                <select
                  value={selectedSauce}
                  onChange={(e) => setSelectedSauce(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#fff3df] border-2 border-[#2b2118] text-xs font-bold text-[#2b2118]"
                >
                  {SAUCES_AVAILABLE.map((sauce, idx) => (
                    <option key={idx} value={sauce}>{sauce}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* Live Summary Bar */}
        <div className="bg-[#2b2118] text-white rounded-3xl p-6 sm:p-8 border-4 border-[#2b2118] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-md bg-[#e8483e] text-white text-[10px] font-black uppercase">
                Ahorras 15%
              </span>
              <span className="text-xs text-[#ffd166] font-bold">
                Combo Personalizado Seleccionado
              </span>
            </div>
            <p className="text-lg sm:text-xl font-black font-display">
              {mainItem?.name} + {sideItem?.name} + {drinkItem?.name}
            </p>
            <p className="text-xs text-[#fff3df]/70">
              Salsa incluida: <strong className="text-white">{selectedSauce}</strong>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="block text-[11px] text-white/60 line-through tabular-nums">
                ${rawTotal.toLocaleString('es-CO')} COP
              </span>
              <span className="text-3xl font-black font-display text-[#ffd166] tabular-nums">
                ${finalPrice.toLocaleString('es-CO')} <span className="text-xs text-white">COP</span>
              </span>
            </div>

            <button
              onClick={handleBuild}
              type="button"
              className="py-4 px-8 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider text-[#2b2118] bg-[#ffd166] hover:bg-[#f0bd46] transition-all active:scale-[0.98] shadow-lg flex items-center gap-2 cursor-pointer"
            >
              {added ? (
                <>
                  <Check className="w-5 h-5 text-[#e8483e]" />
                  <span>¡Combo en la Orden!</span>
                </>
              ) : (
                <>
                  <span>AGREGAR COMBO</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
