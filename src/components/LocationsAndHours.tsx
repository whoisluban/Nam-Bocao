import React from 'react';
import { MapPin, Clock, Phone, Bike, ShieldCheck } from 'lucide-react';

export const LocationsAndHours: React.FC = () => {
  return (
    <section id="sedes" className="py-20 md:py-28 bg-[#fff3df] border-t-2 border-[#2b2118]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Info */}
          <div className="lg:col-span-7">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff6b35] block mb-2">
              Encuéntranos o Te lo Llevamos
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-[#2b2118] uppercase tracking-tight mb-6">
              Sedes Físicas & Delivery Rápido
            </h2>
            <p className="text-sm sm:text-base text-[#2b2118]/85 font-medium leading-relaxed mb-8">
              Ven a vivir la experiencia en nuestros locales con música, buena vibra y cerveza helada, 
              o pide directo a tu casa con nuestra flota propia de repartidores para garantizar que las papas 
              lleguen crujientes como deben ser.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {/* Sede 1 */}
              <div className="p-5 rounded-2xl bg-white border-2 border-[#2b2118]/15 shadow-2xs">
                <div className="flex items-center gap-2 font-black text-sm text-[#2b2118] mb-1">
                  <MapPin className="w-4 h-4 text-[#e8483e]" />
                  <span>Sede Zona Rosa / Parque Lleras</span>
                </div>
                <p className="text-xs text-[#2b2118]/70">Calle 10 # 38-42</p>
                <p className="text-[11px] font-bold text-[#ff6b35] mt-2">Mesas al aire libre & Barra</p>
              </div>

              {/* Sede 2 */}
              <div className="p-5 rounded-2xl bg-white border-2 border-[#2b2118]/15 shadow-2xs">
                <div className="flex items-center gap-2 font-black text-sm text-[#2b2118] mb-1">
                  <MapPin className="w-4 h-4 text-[#e8483e]" />
                  <span>Sede Laureles / Estadio</span>
                </div>
                <p className="text-xs text-[#2b2118]/70">Avenida 74B # 39B-18</p>
                <p className="text-[11px] font-bold text-[#ff6b35] mt-2">Dark Kitchen & Takeout Exprés</p>
              </div>
            </div>

            {/* Delivery Perks */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-[#2b2118] pt-4 border-t-2 border-[#2b2118]/10">
              <div className="flex items-center gap-2">
                <Bike className="w-4 h-4 text-[#ff6b35]" />
                <span>Cobertura en toda la zona metropolitana</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#e8483e]" />
                <span>Empaques térmicos antiderrame</span>
              </div>
            </div>

          </div>

          {/* Right: Hours Card in dark brown */}
          <div className="lg:col-span-5">
            <div className="bg-[#2b2118] text-white rounded-3xl p-8 border-4 border-[#2b2118] shadow-2xl relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b35] flex items-center justify-center text-white shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black font-display">Horario de Fogones</h3>
                  <p className="text-xs text-[#ffd166] font-bold">¡Abrimos hasta tarde!</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="font-bold text-white/80">Lunes a Jueves:</span>
                  <span className="font-black text-[#ffd166]">12:00 PM – 10:30 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10 bg-white/5 px-2 rounded-lg">
                  <span className="font-black text-white">Viernes y Sábados (Fiebre):</span>
                  <span className="font-black text-[#ff6b35]">12:00 PM – 12:30 AM 🔥</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="font-bold text-white/80">Domingos y Festivos:</span>
                  <span className="font-black text-[#ffd166]">12:00 PM – 10:00 PM</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-white/70 mb-2">Línea directa para domicilios:</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black font-display text-[#ffd166] tabular-nums">
                    +57 300 0850222
                  </span>
                  <a
                    href="https://wa.me/573000850222?text=Hola%20Ñam%20Bocao!%20Quiero%20hacer%20un%20pedido%20a%20domicilio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#e8483e] hover:bg-[#cf372e] text-white text-xs font-black uppercase tracking-wider transition-colors"
                  >
                    Escribir
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
