import React, { useState } from 'react';
import { MenuItem } from '../types';
import { X, Check, Plus, Flame, Sparkles } from 'lucide-react';
import { SAUCES_AVAILABLE } from '../data/menu';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, asCombo: boolean, sauce: string) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({
  item,
  onClose,
  onAddToCart
}) => {
  const [asCombo, setAsCombo] = useState(false);
  const [selectedSauce, setSelectedSauce] = useState(SAUCES_AVAILABLE[0]);
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const currentPrice = asCombo ? (item.comboPriceCOP || item.priceCOP) : item.priceCOP;

  const handleAdd = () => {
    onAddToCart(item, asCombo, selectedSauce);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
        <div className="relative transform overflow-hidden rounded-3xl bg-[#fff3df] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl border-4 border-[#2b2118] animate-in zoom-in-95 duration-200">
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-[#2b2118] transition-colors shadow-sm cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Banner */}
          <div className="relative aspect-16/9 w-full bg-[#2b2118] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b2118]/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="px-2.5 py-0.5 rounded-md bg-[#e8483e] text-white text-[10px] font-black uppercase tracking-wider">
                {item.category.toUpperCase()}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
                {item.name}
              </h3>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 space-y-5">
            <p className="text-xs font-black uppercase text-[#ff6b35]">
              {item.tagline}
            </p>

            <p className="text-sm text-[#2b2118]/85 font-medium leading-relaxed">
              {item.description}
            </p>

            {/* Ingredients list */}
            <div className="bg-white p-4 rounded-2xl border-2 border-[#2b2118]/15">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#2b2118] mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#ffd166]" />
                <span>¿Qué lleva este bocao?</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#2b2118]/80 font-medium">
                {item.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Combo option if available */}
            {item.comboPriceCOP && (
              <div className="p-4 bg-white rounded-2xl border-2 border-[#2b2118] flex items-center justify-between">
                <div>
                  <span className="text-xs font-black uppercase text-[#ff6b35] block">
                    ¿Quieres hacerlo Combo?
                  </span>
                  <span className="text-xs font-bold text-[#2b2118]">
                    Agrega Papas Rústicas Medianas + Gaseosa fría
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setAsCombo(!asCombo)}
                  className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer ${
                    asCombo
                      ? 'bg-[#ffd166] text-[#2b2118] border-2 border-[#2b2118]'
                      : 'bg-neutral-100 text-[#2b2118] hover:bg-neutral-200'
                  }`}
                >
                  {asCombo ? '✓ En Combo' : '+ Hacer Combo'}
                </button>
              </div>
            )}

            {/* Sauce selector */}
            <div>
              <label className="block text-xs font-black uppercase text-[#2b2118] mb-1.5">
                Escoge Tu Salsa de Cortesía:
              </label>
              <select
                value={selectedSauce}
                onChange={(e) => setSelectedSauce(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-white border-2 border-[#2b2118]/20 text-xs font-bold text-[#2b2118]"
              >
                {SAUCES_AVAILABLE.map((sauce, idx) => (
                  <option key={idx} value={sauce}>{sauce}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-white border-t-2 border-[#2b2118]/15 flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-black uppercase text-[#2b2118]/60">Total</span>
              <span className="text-2xl font-black font-display text-[#2b2118] tabular-nums">
                ${currentPrice.toLocaleString('es-CO')} <span className="text-xs font-bold">COP</span>
              </span>
            </div>

            <button
              onClick={handleAdd}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white bg-[#ff6b35] hover:bg-[#e85925] rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>¡Agregado!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Agregar a Mi Orden</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
