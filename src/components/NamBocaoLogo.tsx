import React from 'react';

interface NamBocaoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const NamBocaoLogo: React.FC<NamBocaoLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark'
}) => {
  const textColor = variant === 'light' ? '#fff3df' : '#2b2118';
  const accentColor = '#ff6b35';
  const yellowColor = '#ffd166';
  const redColor = '#e8483e';

  const sizeStyles = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`inline-flex items-center gap-2 select-none group font-display tracking-tight font-black ${className}`} aria-label="Ñam Bocao!">
      {/* Playful Burger with Bite Mark Icon */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xs transition-transform group-hover:scale-105">
          {/* Top bun in golden yellow */}
          <path d="M7 19C7 11 14 6 22 6C30 6 37 11 37 19H7Z" fill={yellowColor} />
          {/* Sesame seeds */}
          <ellipse cx="16" cy="11" rx="1.5" ry="0.8" fill="#fff3df" transform="rotate(-15 16 11)" />
          <ellipse cx="23" cy="9" rx="1.5" ry="0.8" fill="#fff3df" />
          <ellipse cx="29" cy="12" rx="1.5" ry="0.8" fill="#fff3df" transform="rotate(20 29 12)" />
          
          {/* Cheddar cheese melt in orange */}
          <path d="M6 21H38L34 26L30 23L26 27L20 22L15 26L11 22L6 24V21Z" fill={accentColor} />
          
          {/* Juicy beef patty in dark brown */}
          <rect x="5" y="24" width="34" height="6.5" rx="3.25" fill="#2b2118" />
          
          {/* Bottom bun in yellow */}
          <path d="M8 32H36C36 36 31 39 22 39C13 39 8 36 8 32Z" fill={yellowColor} />

          {/* Playful bite cutout in top right */}
          <circle cx="34" cy="13" r="5" fill={variant === 'light' ? '#2b2118' : '#fff3df'} />
          <circle cx="37" cy="19" r="3.5" fill={variant === 'light' ? '#2b2118' : '#fff3df'} />
          <circle cx="32" cy="7" r="2.5" fill={variant === 'light' ? '#2b2118' : '#fff3df'} />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex items-baseline leading-none">
        <span className={`${sizeStyles[size]} tracking-tight font-extrabold`} style={{ color: textColor }}>
          Ñam
        </span>
        <span className={`${sizeStyles[size]} ml-1 font-black`} style={{ color: accentColor }}>
          Bocao
        </span>
        <span className={`${sizeStyles[size]} font-black`} style={{ color: redColor }}>
          !
        </span>
      </div>
    </div>
  );
};
