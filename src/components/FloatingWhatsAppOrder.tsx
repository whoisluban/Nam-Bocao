import React, { useState } from 'react';
import { X, Flame } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsAppOrder: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = encodeURIComponent(
    '¡Hola Ñam Bocao! 🍔 Quiero consultar el menú del día y hacer un pedido a domicilio.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#2b2118] text-white px-3.5 py-2.5 rounded-2xl shadow-xl border-2 border-[#ffd166] text-xs font-bold animate-in fade-in slide-in-from-right-4 duration-300">
          <Flame className="w-4 h-4 text-[#ffd166] fill-[#ffd166]" />
          <span>¿Hambre voraz? ¡Pide directo por WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-white/60 hover:text-white p-0.5 ml-1"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/573000850222?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-hidden focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Escribir a Ñam Bocao por WhatsApp"
        title="Pide por WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
};
