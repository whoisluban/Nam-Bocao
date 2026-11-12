import React, { useState, useEffect } from 'react';
import { NamBocaoLogo } from './NamBocaoLogo';
import { ShoppingBag, Menu, X, Flame } from 'lucide-react';

interface HeaderProps {
  onOpenCart: () => void;
  cartCount: number;
  onScrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCart,
  cartCount,
  onScrollToSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menú Brutal', id: 'menu' },
    { label: 'La Bestia Smash', id: 'destacado' },
    { label: 'Papas & Bites', id: 'papas-section' },
    { label: 'Arma Tu Combo', id: 'combos' },
    { label: 'Sedes & Horarios', id: 'sedes' }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fff3df]/95 backdrop-blur-md shadow-md border-b border-[#2b2118]/10 py-3'
          : 'bg-[#fff3df] border-b border-[#2b2118]/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark (Single Element) */}
          <a
            href="#"
            className="flex items-center whitespace-nowrap shrink-0 transition-opacity hover:opacity-90 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
            aria-label="Ñam Bocao! - Ir al inicio"
          >
            <NamBocaoLogo size="md" variant="dark" />
          </a>

          {/* Zone 2: Navigation Links (Single-line, clean typography) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-bold text-[#2b2118]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                type="button"
                className="whitespace-nowrap shrink-0 transition-colors hover:text-[#ff6b35] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff6b35] hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Cart */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Cart Button with Count Badge */}
            <button
              onClick={onOpenCart}
              type="button"
              className="relative p-2.5 rounded-xl bg-white border border-[#2b2118]/15 text-[#2b2118] hover:bg-[#ffd166]/30 hover:border-[#ff6b35] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#ff6b35] cursor-pointer shadow-2xs"
              aria-label={`Ver pedido (${cartCount} productos)`}
              title="Ver mi orden"
            >
              <ShoppingBag className="w-5 h-5 text-[#2b2118]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#e8483e] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center tabular-nums shadow-xs animate-bounce duration-500">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('menu')}
              type="button"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white bg-[#ff6b35] hover:bg-[#e85925] active:scale-[0.98] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap shrink-0 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#e8483e]"
            >
              <Flame className="w-4 h-4 text-[#ffd166] fill-[#ffd166]" />
              <span>PIDE TU BOCAO</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-xl text-[#2b2118] hover:bg-[#ffd166]/30 transition-colors focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fff3df] border-b border-[#2b2118]/15 px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 font-display font-bold text-base text-[#2b2118]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                type="button"
                className="py-2.5 text-left border-b border-[#2b2118]/10 hover:text-[#ff6b35] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                type="button"
                className="w-full text-center py-3 text-xs font-black uppercase tracking-wider text-[#2b2118] bg-[#ffd166] hover:bg-[#f0bd46] rounded-xl shadow-xs"
              >
                Ver Mi Orden ({cartCount})
              </button>
              <button
                onClick={() => handleNavClick('menu')}
                type="button"
                className="w-full text-center py-3 text-xs font-black uppercase tracking-wider text-white bg-[#ff6b35] hover:bg-[#e85925] rounded-xl shadow-sm"
              >
                Pide Tu Bocao Ahora
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
