import React from 'react';
import { Star, MessageCircle, Heart } from 'lucide-react';

export const ReviewsAndSocialProof: React.FC = () => {
  const reviews = [
    {
      name: 'Mateo Valencia',
      role: 'Burger Lover Certificado',
      city: 'Medellín',
      rating: 5,
      comment: 'La Bestia Ñam es sin exagerar la mejor smash de la ciudad. La costra de la carne tiene ese punto crujiente perfecto y el queso cheddar fundido baña cada bocado.',
      favorite: 'La Bestia Ñam Doble'
    },
    {
      name: 'Daniela Ospina',
      role: 'Foodie & Creadora de Contenido',
      city: 'Bogotá',
      rating: 5,
      comment: 'Las papas bestiales son una locura. El pulled pork es súper suave y la salsa de queso cheddar es real, nada de polvo químico. Repito todos los viernes.',
      favorite: 'Papas Bestiales Cargadas'
    },
    {
      name: 'Juan Camilo Torres',
      role: 'Cliente Frecuente',
      city: 'Cali',
      rating: 5,
      comment: 'El Perro Salvaje con la salchicha ahumada y el ripio de papa me devolvió la fe en los perros calientes callejeros. Además el delivery llega en 25 minutos hirviendo.',
      favorite: 'Perro Salvaje Ñam'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#fff3df] border-t-2 border-[#2b2118]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#e8483e] mb-2">
            <Heart className="w-4 h-4 fill-[#e8483e]" />
            <span>La Voz de la Manada</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-[#2b2118]">
            Lo Que Dicen Quienes Ya Mordieron
          </h2>
          <p className="text-sm sm:text-base text-[#2b2118]/80 mt-2 font-medium">
            Más de 5.000 clientes satisfechos no pueden estar equivocados.
          </p>
        </div>

        {/* 3 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 border-2 border-[#2b2118]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#e8483e] mb-4">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#ffd166] text-[#ffd166]" />
                  ))}
                </div>

                <p className="text-sm text-[#2b2118] font-medium leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#2b2118]/10">
                <p className="font-black text-sm text-[#2b2118]">{rev.name}</p>
                <p className="text-xs text-[#2b2118]/70">{rev.role} · {rev.city}</p>
                <div className="mt-2 inline-block px-2.5 py-1 rounded-md bg-[#fff3df] text-[10px] font-black uppercase text-[#ff6b35]">
                  Pide siempre: {rev.favorite}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Instagram banner */}
        <div className="bg-[#2b2118] text-[#fff3df] rounded-3xl p-8 sm:p-10 border-4 border-[#2b2118] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#ff6b35] flex items-center justify-center shrink-0 shadow-sm relative">
              <span className="w-full h-full flex items-center justify-center" aria-label="Cámara tomando foto con flash">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9 drop-shadow-xs"
                  role="img"
                >
                  <title>Cámara tomando foto con flash</title>
                  {/* Shutter Button & Top Viewfinder */}
                  <rect x="7" y="9" width="4" height="2" rx="0.8" fill="#ffd166" />
                  <path d="M13 11V8.5C13 7.7 13.7 7 14.5 7H20.5C21.3 7 22 7.7 22 8.5V11H13Z" fill="white" />

                  {/* Camera Main Body */}
                  <rect x="5" y="11" width="26" height="19" rx="4" fill="white" />
                  <rect x="6.5" y="13" width="2.5" height="15" rx="1.2" fill="#fff3df" />

                  {/* Optical Lens */}
                  <circle cx="18" cy="20.5" r="6.5" fill="#2b2118" />
                  <circle cx="18" cy="20.5" r="4.8" fill="#ff6b35" />
                  <circle cx="18" cy="20.5" r="3" fill="#2b2118" />
                  <ellipse cx="16.2" cy="18.8" rx="1.4" ry="0.9" fill="white" transform="rotate(-30 16.2 18.8)" />

                  {/* Red focus sensor */}
                  <circle cx="26" cy="14" r="1.1" fill="#e8483e" />

                  {/* Active Flash Burst (Photo Being Taken) */}
                  <g className="animate-pulse">
                    <circle cx="26" cy="6.5" r="3" fill="#ffd166" />
                    <circle cx="26" cy="6.5" r="1.5" fill="white" />
                    <path
                      d="M26 1V3.2M26 9.8V12M20.5 6.5H22.7M29.3 6.5H31.5M22.2 2.7L23.8 4.3M28.2 8.7L29.8 10.3M29.8 2.7L28.2 4.3M23.8 8.7L22.2 10.3"
                      stroke="#ffd166"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </span>
            </div>
            <div>
              <h4 className="text-xl font-black font-display text-white">
                ¿Te tomaste una foto babeando con tu burger?
              </h4>
              <p className="text-xs sm:text-sm text-[#ffd166] font-bold mt-0.5">
                Etiquétanos en TikTok como <span className="underline">@nambocao</span> y te regalamos papas en tu siguiente orden.
              </p>
            </div>
          </div>

          <a
            href="https://www.tiktok.com/@nambocao"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-[#2b2118] bg-[#ffd166] hover:bg-[#f0bd46] transition-colors whitespace-nowrap shadow-sm cursor-pointer"
          >
            Seguir en TikTok
          </a>
        </div>

      </div>
    </section>
  );
};
