import React from 'react';
import { NamBocaoLogo } from './NamBocaoLogo';
import { MapPin, Phone, Clock, Bike } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2b2118] text-[#fff3df] border-t-4 border-[#ff6b35] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Mantra */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <NamBocaoLogo size="lg" variant="light" />
            </div>
            <p className="text-sm font-bold text-[#ffd166] mb-3">
              ¡El mordisco que te alegra el día!
            </p>
            <p className="text-xs text-[#fff3df]/70 leading-relaxed">
              Comida rápida brutal y callejera elaborada con carne 100% Angus molida a diario, 
              pan brioche horneado al amanecer y papas reales con queso fundido que no se cortan.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://wa.me/573000850222"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#ff6b35] hover:bg-[#e85925] text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="WhatsApp Ñam Bocao"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@nambocao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#ff6b35] hover:bg-[#e85925] text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="TikTok Ñam Bocao"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .586.046.86.13V9.42a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V7.81c1.37.98 3.03 1.57 4.83 1.62V6a4.84 4.84 0 0 1-1.06-.69z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Menú Rápido */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#ffd166] mb-4">
              Los Consentidos
            </h4>
            <ul className="space-y-2 text-xs text-[#fff3df]/80 font-medium">
              <li>🍔 La Bestia Ñam Doble Smash</li>
              <li>🍟 Papas Bestiales con Pulled Pork</li>
              <li>🌭 Perro Salvaje Callejero</li>
              <li>🍗 Crispy Pollo Furia Burger</li>
              <li>🧀 Bocao Cheese Bites (10 Uds)</li>
              <li>🥤 Malteada Monstruosa Oreo</li>
            </ul>
          </div>

          {/* Col 3: Sedes & Zonas */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#ffd166] mb-4">
              Puntos de Atención
            </h4>
            <div className="space-y-3 text-xs text-[#fff3df]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff6b35] shrink-0 mt-0.5" />
                <span>Sede Parque Lleras / Zona Rosa: Calle 10 # 38-42</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff6b35] shrink-0 mt-0.5" />
                <span>Sede Laureles / Estadio: Av 74B # 39B-18</span>
              </div>
              <div className="flex items-center gap-2">
                <Bike className="w-4 h-4 text-[#ffd166] shrink-0" />
                <span>Delivery propio en toda la ciudad</span>
              </div>
            </div>
          </div>

          {/* Col 4: Horarios & Domicilios */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#ffd166] mb-4">
              Atención Telefónica
            </h4>
            <div className="space-y-2 text-xs text-[#fff3df]/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ffd166] shrink-0" />
                <span className="font-black text-white">+57 300 0850222</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#ff6b35] shrink-0 mt-0.5" />
                <span>Lunes a Jueves: 12PM – 10:30PM<br />Viernes y Sábados: 12PM – 12:30AM</span>
              </div>
              <div className="pt-2">
                <span className="text-[11px] font-black text-[#ffd166] bg-white/5 px-2.5 py-1 rounded-md inline-block">
                  Aceptamos Efectivo, Nequi, Daviplata y Tarjetas
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#fff3df]/60 gap-4">
          <p>
            © 2026 Ñam Bocao! Todos los derechos reservados. Sabor callejero sin rodeos.
          </p>
          <div className="flex items-center gap-2 text-[#ffd166] font-bold">
            <span>🔥 100% Smash Fresco</span>
            <span>·</span>
            <span>Pan Artesanal Diario</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
