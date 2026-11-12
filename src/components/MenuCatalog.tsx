import React, { useState } from 'react';
import { MenuItem, MenuCategory } from '../types';
import { Plus, Check, Eye, Flame, Sparkles } from 'lucide-react';

interface MenuCatalogProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem, asCombo: boolean) => void;
  onOpenDetails: (item: MenuItem) => void;
}

export const MenuCatalog: React.FC<MenuCatalogProps> = ({
  items,
  onAddToCart,
  onOpenDetails
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: '🔥 Todo el Menú' },
    { id: 'burgers', label: '🍔 Smash Burgers' },
    { id: 'papas', label: '🍟 Papas Cargadas' },
    { id: 'hotdogs', label: '🌭 Hot Dogs' },
    { id: 'alitas', label: '🍗 Alitas & Bites' },
    { id: 'bebidas', label: '🥤 Bebidas & Shakes' }
  ];

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const handleAdd = (item: MenuItem, asCombo: boolean = false) => {
    onAddToCart(item, asCombo);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1800);
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#fff3df] border-t-2 border-[#2b2118]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#ff6b35] mb-2">
            <span>Carta Oficial</span>
            <span aria-hidden="true">·</span>
            <span>Comida Brutal & Callejera</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-[#2b2118] uppercase tracking-tight">
            Escoge Tu Próximo Bocao
          </h2>
          <p className="text-sm sm:text-base text-[#2b2118]/80 mt-2 font-medium">
            Porciones generosas, salsas adictivas y ese crujido que te hace cerrar los ojos.
          </p>
        </div>

        {/* Category Tabs (Interactive Segmented Filter) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as MenuCategory)}
              type="button"
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs ${
                activeCategory === cat.id
                  ? 'bg-[#2b2118] text-[#ffd166] scale-105 border-2 border-[#2b2118]'
                  : 'bg-white text-[#2b2118] hover:bg-[#ffd166]/40 border border-[#2b2118]/15'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredItems.map((product) => {
            const isAdded = addedIds[product.id];

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border-2 border-[#2b2118]/15 hover:border-[#ff6b35] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-[#2b2118]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-[#e8483e] text-white px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-xs">
                        {product.badge}
                      </div>
                    )}

                    {/* Quick view button */}
                    <button
                      onClick={() => onOpenDetails(product)}
                      type="button"
                      className="absolute bottom-3 right-3 p-2 rounded-xl bg-white/95 text-[#2b2118] hover:bg-[#ff6b35] hover:text-white transition-colors shadow-xs opacity-0 group-hover:opacity-100 cursor-pointer"
                      aria-label={`Ver ingredientes de ${product.name}`}
                      title="Ver ingredientes completos"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Info */}
                  <div className="p-5">
                    <h3 className="text-xl font-black font-display text-[#2b2118] leading-tight mb-1 group-hover:text-[#ff6b35] transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-xs font-bold text-[#ff6b35] uppercase mb-2">
                      {product.tagline}
                    </p>

                    <p className="text-xs text-[#2b2118]/75 line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer / Action */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-[#2b2118]/10 flex items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-wider text-[#2b2118]/60">Sola</span>
                      <span className="text-lg font-black font-display text-[#2b2118] tabular-nums">
                        ${product.priceCOP.toLocaleString('es-CO')}
                      </span>
                    </div>

                    {product.comboPriceCOP && (
                      <div className="text-right">
                        <span className="block text-[10px] font-black uppercase tracking-wider text-[#ff6b35]">En Combo</span>
                        <span className="text-xs font-bold text-[#2b2118] tabular-nums">
                          + Papas y Soda (${product.comboPriceCOP.toLocaleString('es-CO')})
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAdd(product, false)}
                      type="button"
                      className={`py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        isAdded
                          ? 'bg-[#2b2118] text-[#ffd166]'
                          : 'bg-[#ffd166] text-[#2b2118] hover:bg-[#f0bd46]'
                      }`}
                    >
                      {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      <span>{isAdded ? '¡Listo!' : 'Pedir'}</span>
                    </button>

                    {product.comboPriceCOP ? (
                      <button
                        onClick={() => handleAdd(product, true)}
                        type="button"
                        className="py-2.5 px-2 rounded-xl text-xs font-black uppercase tracking-wider bg-[#ff6b35] text-white hover:bg-[#e85925] transition-colors cursor-pointer text-center"
                      >
                        En Combo 🍟
                      </button>
                    ) : (
                      <button
                        onClick={() => onOpenDetails(product)}
                        type="button"
                        className="py-2.5 px-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-neutral-100 text-[#2b2118] hover:bg-neutral-200 transition-colors cursor-pointer text-center"
                      >
                        Ver Detalle
                      </button>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
