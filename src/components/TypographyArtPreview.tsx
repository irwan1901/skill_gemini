import React from 'react';
import { TypographyStyleItem } from '../data/typographyArtStylesData';

interface TypographyArtPreviewProps {
  item: TypographyStyleItem;
  className?: string;
  isEnlarged?: boolean;
}

export const TypographyArtPreview: React.FC<TypographyArtPreviewProps> = ({ 
  item, 
  className = '',
  isEnlarged = false 
}) => {
  const { previewType, bgColor, number, displayText } = item;

  // Specific visual renderers matching Screenshot 6
  const renderTypographyArt = () => {
    switch (previewType) {
      // 1. Extruded Metal Title (#9) - "IRON GLORY" (Exact match with Screenshot 6)
      case 'extruded-metal': {
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-3 select-none">
            <svg viewBox="0 0 240 180" className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
              <defs>
                <linearGradient id="goldBevel" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="25%" stopColor="#eab308" />
                  <stop offset="50%" stopColor="#ca8a04" />
                  <stop offset="75%" stopColor="#a16207" />
                  <stop offset="100%" stopColor="#713f12" />
                </linearGradient>
                <linearGradient id="chromeFace" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="45%" stopColor="#fef9c3" />
                  <stop offset="50%" stopColor="#94a3b8" />
                  <stop offset="55%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
                <filter id="metalGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Extruded 3D shadow layers */}
              <text x="120" y="80" textAnchor="middle" fontSize="56" fontWeight="900" fontFamily="serif" fill="#2d1b06" stroke="#1c1103" strokeWidth="8" letterSpacing="4">IRON</text>
              <text x="120" y="77" textAnchor="middle" fontSize="56" fontWeight="900" fontFamily="serif" fill="#78350f" stroke="#451a03" strokeWidth="6" letterSpacing="4">IRON</text>
              <text x="120" y="74" textAnchor="middle" fontSize="56" fontWeight="900" fontFamily="serif" fill="url(#goldBevel)" stroke="url(#goldBevel)" strokeWidth="4" letterSpacing="4">IRON</text>
              <text x="120" y="72" textAnchor="middle" fontSize="56" fontWeight="900" fontFamily="serif" fill="url(#chromeFace)" letterSpacing="4">IRON</text>

              <text x="120" y="148" textAnchor="middle" fontSize="54" fontWeight="900" fontFamily="serif" fill="#2d1b06" stroke="#1c1103" strokeWidth="8" letterSpacing="3">GLORY</text>
              <text x="120" y="145" textAnchor="middle" fontSize="54" fontWeight="900" fontFamily="serif" fill="#78350f" stroke="#451a03" strokeWidth="6" letterSpacing="3">GLORY</text>
              <text x="120" y="142" textAnchor="middle" fontSize="54" fontWeight="900" fontFamily="serif" fill="url(#goldBevel)" stroke="url(#goldBevel)" strokeWidth="4" letterSpacing="3">GLORY</text>
              <text x="120" y="140" textAnchor="middle" fontSize="54" fontWeight="900" fontFamily="serif" fill="url(#chromeFace)" letterSpacing="3">GLORY</text>

              {/* Specular Star Glints */}
              <path d="M70,45 L72,55 L82,57 L72,59 L70,69 L68,59 L58,57 L68,55 Z" fill="#ffffff" filter="url(#metalGlow)" opacity="0.9" />
              <path d="M175,115 L177,123 L185,125 L177,127 L175,135 L173,127 L165,125 L173,123 Z" fill="#ffffff" filter="url(#metalGlow)" opacity="0.9" />
            </svg>
          </div>
        );
      }

      // 2. Polished Chrome Script (#17) - "OWN THE NIGHT" (Exact match with Screenshot 6)
      case 'chrome-script': {
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-3 select-none">
            <svg viewBox="0 0 240 180" className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)]">
              <defs>
                <linearGradient id="mirrorChrome" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="42%" stopColor="#cbd5e1" />
                  <stop offset="48%" stopColor="#1e293b" />
                  <stop offset="52%" stopColor="#64748b" />
                  <stop offset="65%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
              </defs>

              <text x="120" y="56" textAnchor="middle" fontSize="42" fontWeight="700" fontFamily="serif" fontStyle="italic" fill="url(#mirrorChrome)" stroke="#0f172a" strokeWidth="1.5" letterSpacing="5">OWN</text>
              <text x="120" y="104" textAnchor="middle" fontSize="34" fontWeight="600" fontFamily="serif" fill="url(#mirrorChrome)" stroke="#0f172a" strokeWidth="1.2" letterSpacing="8">THE</text>
              <text x="120" y="156" textAnchor="middle" fontSize="48" fontWeight="700" fontFamily="serif" fontStyle="italic" fill="url(#mirrorChrome)" stroke="#0f172a" strokeWidth="1.5" letterSpacing="6">NIGHT</text>

              {/* Flare glints on tips */}
              <circle cx="85" cy="38" r="2" fill="#ffffff" />
              <line x1="85" y1="30" x2="85" y2="46" stroke="#ffffff" strokeWidth="1.2" />
              <line x1="77" y1="38" x2="93" y2="38" stroke="#ffffff" strokeWidth="1.2" />

              <circle cx="178" cy="138" r="2" fill="#ffffff" />
              <line x1="178" y1="130" x2="178" y2="146" stroke="#ffffff" strokeWidth="1.2" />
              <line x1="170" y1="138" x2="186" y2="138" stroke="#ffffff" strokeWidth="1.2" />
            </svg>
          </div>
        );
      }

      // 3. Liquid Chrome Puff (#20) - "MELT MODE" (Exact match with Screenshot 6)
      case 'chrome-puff': {
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-3 select-none">
            <svg viewBox="0 0 240 180" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]">
              <defs>
                <linearGradient id="puffMercury" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="25%" stopColor="#e2e8f0" />
                  <stop offset="45%" stopColor="#475569" />
                  <stop offset="55%" stopColor="#1e293b" />
                  <stop offset="70%" stopColor="#94a3b8" />
                  <stop offset="85%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>
              </defs>

              {/* MELT in puffy bubble 3D text */}
              <text x="120" y="78" textAnchor="middle" fontSize="62" fontWeight="900" fontFamily="sans-serif" fill="#0f172a" stroke="#000000" strokeWidth="10" strokeLinejoin="round" letterSpacing="4">MELT</text>
              <text x="120" y="74" textAnchor="middle" fontSize="62" fontWeight="900" fontFamily="sans-serif" fill="url(#puffMercury)" stroke="#475569" strokeWidth="3" strokeLinejoin="round" letterSpacing="4">MELT</text>

              {/* MODE in puffy bubble 3D text */}
              <text x="120" y="148" textAnchor="middle" fontSize="60" fontWeight="900" fontFamily="sans-serif" fill="#0f172a" stroke="#000000" strokeWidth="10" strokeLinejoin="round" letterSpacing="4">MODE</text>
              <text x="120" y="144" textAnchor="middle" fontSize="60" fontWeight="900" fontFamily="sans-serif" fill="url(#puffMercury)" stroke="#475569" strokeWidth="3" strokeLinejoin="round" letterSpacing="4">MODE</text>

              {/* Specular fluid highlights */}
              <ellipse cx="65" cy="42" rx="14" ry="4" fill="#ffffff" opacity="0.8" transform="rotate(-15 65 42)" />
              <ellipse cx="145" cy="112" rx="16" ry="5" fill="#ffffff" opacity="0.8" transform="rotate(-10 145 112)" />
            </svg>
          </div>
        );
      }

      // 4. Molten Rose Gold Ribbon (#28) - "Liquid Motion" (Exact match with Screenshot 6)
      case 'rose-gold-ribbon': {
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-3 select-none">
            <svg viewBox="0 0 240 180" className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.85)]">
              <defs>
                <linearGradient id="roseGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffe4e6" />
                  <stop offset="25%" stopColor="#f43f5e" />
                  <stop offset="50%" stopColor="#fda4af" />
                  <stop offset="75%" stopColor="#e11d48" />
                  <stop offset="100%" stopColor="#fb7185" />
                </linearGradient>
              </defs>

              <text x="120" y="78" textAnchor="middle" fontSize="48" fontWeight="600" fontFamily="cursive, serif" fill="#4c0519" stroke="#4c0519" strokeWidth="6" letterSpacing="1">Liquid</text>
              <text x="120" y="75" textAnchor="middle" fontSize="48" fontWeight="600" fontFamily="cursive, serif" fill="url(#roseGold)" letterSpacing="1">Liquid</text>

              <text x="120" y="142" textAnchor="middle" fontSize="54" fontWeight="600" fontFamily="cursive, serif" fill="#4c0519" stroke="#4c0519" strokeWidth="6" letterSpacing="1">Motion</text>
              <text x="120" y="139" textAnchor="middle" fontSize="54" fontWeight="600" fontFamily="cursive, serif" fill="url(#roseGold)" letterSpacing="1">Motion</text>

              {/* Swirling fluid ribbon flourishes */}
              <path d="M35,65 Q70,95 120,80 T210,65" fill="none" stroke="url(#roseGold)" strokeWidth="2.5" opacity="0.8" />
              <path d="M20,135 Q90,165 150,140 T225,130" fill="none" stroke="url(#roseGold)" strokeWidth="2" opacity="0.7" />
            </svg>
          </div>
        );
      }

      // 5. Emerald Velvet Sign (#33) - "Velvet Sign" on Pure White (Exact match with Screenshot 6)
      case 'velvet-script': {
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-3 select-none bg-[#fbfaf7]">
            <svg viewBox="0 0 240 180" className="w-full h-full">
              <defs>
                <filter id="velvetShadow" x="-10%" y="-10%" width="130%" height="130%">
                  <feDropShadow dx="3" dy="8" stdDeviation="5" floodColor="#064e3b" floodOpacity="0.45" />
                </filter>
                <linearGradient id="emeraldVelvet" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="40%" stopColor="#059669" />
                  <stop offset="70%" stopColor="#047857" />
                  <stop offset="100%" stopColor="#064e3b" />
                </linearGradient>
              </defs>

              {/* Ambient drop shadow */}
              <text x="120" y="78" textAnchor="middle" fontSize="56" fontWeight="700" fontFamily="cursive, serif" fill="url(#emeraldVelvet)" filter="url(#velvetShadow)">Velvet</text>
              <text x="120" y="146" textAnchor="middle" fontSize="58" fontWeight="700" fontFamily="cursive, serif" fill="url(#emeraldVelvet)" filter="url(#velvetShadow)">Sign</text>

              {/* Velvety highlight texture stroke */}
              <text x="120" y="76" textAnchor="middle" fontSize="56" fontWeight="700" fontFamily="cursive, serif" fill="none" stroke="#6ee7b7" strokeWidth="0.8" opacity="0.7">Velvet</text>
              <text x="120" y="144" textAnchor="middle" fontSize="58" fontWeight="700" fontFamily="cursive, serif" fill="none" stroke="#6ee7b7" strokeWidth="0.8" opacity="0.7">Sign</text>
            </svg>
          </div>
        );
      }

      // 6. Magnetic Metal Block (#37) - "MAGNETIC" (Screenshot Row 2)
      case 'magnetic-block': {
        return (
          <div className="w-full h-full flex items-center justify-center p-2 select-none">
            <svg viewBox="0 0 240 120" className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]">
              <defs>
                <linearGradient id="brushedTitanium" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="25%" stopColor="#f8fafc" />
                  <stop offset="50%" stopColor="#cbd5e1" />
                  <stop offset="75%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
              </defs>
              <text x="120" y="75" textAnchor="middle" fontSize="36" fontWeight="900" fontFamily="monospace, sans-serif" fill="#0f172a" stroke="#000000" strokeWidth="6" letterSpacing="3">MAGNETIC</text>
              <text x="120" y="72" textAnchor="middle" fontSize="36" fontWeight="900" fontFamily="monospace, sans-serif" fill="url(#brushedTitanium)" stroke="#38bdf8" strokeWidth="0.8" letterSpacing="3">MAGNETIC</text>
              <line x1="20" y1="88" x2="220" y2="88" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.7" />
            </svg>
          </div>
        );
      }

      // 7. Molten Lava Core (#38) - "MOLTEN" (Screenshot Row 2)
      case 'molten-lava': {
        return (
          <div className="w-full h-full flex items-center justify-center p-2 select-none">
            <svg viewBox="0 0 240 120" className="w-full h-full filter drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]">
              <defs>
                <linearGradient id="lavaCore" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="35%" stopColor="#fb923c" />
                  <stop offset="70%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="#7c2d12" />
                </linearGradient>
              </defs>
              <text x="120" y="76" textAnchor="middle" fontSize="46" fontWeight="900" fontFamily="sans-serif" fill="#290b02" stroke="#451a03" strokeWidth="6" letterSpacing="4">MOLTEN</text>
              <text x="120" y="72" textAnchor="middle" fontSize="46" fontWeight="900" fontFamily="sans-serif" fill="url(#lavaCore)" stroke="#fef08a" strokeWidth="0.8" letterSpacing="4">MOLTEN</text>
              {/* Fiery cracks */}
              <path d="M80,50 L95,65 L110,60 M140,55 L155,70 L170,62" stroke="#fef08a" strokeWidth="1.5" fill="none" opacity="0.85" />
            </svg>
          </div>
        );
      }

      // 8. Forged Black Iron (#63) - "FORGED" (Screenshot Row 2)
      case 'forged-iron': {
        return (
          <div className="w-full h-full flex items-center justify-center p-2 select-none">
            <svg viewBox="0 0 240 120" className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]">
              <text x="120" y="76" textAnchor="middle" fontSize="48" fontWeight="900" fontFamily="serif" fill="#000000" stroke="#000000" strokeWidth="8" letterSpacing="5">FORGED</text>
              <text x="120" y="73" textAnchor="middle" fontSize="48" fontWeight="900" fontFamily="serif" fill="#262626" stroke="#525252" strokeWidth="1.5" letterSpacing="5">FORGED</text>
              <line x1="30" y1="88" x2="210" y2="88" stroke="#d97706" strokeWidth="2" opacity="0.6" />
            </svg>
          </div>
        );
      }

      // 9. Vintage Diner 3D Sign (#64) - "Retro" (Screenshot Row 2)
      case 'retro-diner-sign': {
        return (
          <div className="w-full h-full flex items-center justify-center p-2 select-none">
            <svg viewBox="0 0 240 130" className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)]">
              <defs>
                <linearGradient id="dinerTeal" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5eead4" />
                  <stop offset="50%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#0f766e" />
                </linearGradient>
              </defs>
              <text x="120" y="86" textAnchor="middle" fontSize="62" fontWeight="700" fontFamily="cursive, serif" fill="#134e4a" stroke="#134e4a" strokeWidth="10">Retro</text>
              <text x="120" y="81" textAnchor="middle" fontSize="62" fontWeight="700" fontFamily="cursive, serif" fill="#fef3c7" stroke="#fef3c7" strokeWidth="5">Retro</text>
              <text x="120" y="78" textAnchor="middle" fontSize="62" fontWeight="700" fontFamily="cursive, serif" fill="url(#dinerTeal)">Retro</text>
            </svg>
          </div>
        );
      }

      // 10. Fluted Frosted Glass (#23) - "GLASS" (Screenshot Row 2)
      case 'fluted-glass': {
        return (
          <div className="w-full h-full flex items-center justify-center p-2 select-none">
            <svg viewBox="0 0 240 120" className="w-full h-full filter drop-shadow-[0_8px_20px_rgba(6,182,212,0.4)]">
              <defs>
                <linearGradient id="flutedCyan" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e0f2fe" />
                  <stop offset="40%" stopColor="#38bdf8" />
                  <stop offset="70%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#0369a1" />
                </linearGradient>
              </defs>
              <text x="120" y="76" textAnchor="middle" fontSize="48" fontWeight="900" fontFamily="sans-serif" fill="#082f49" stroke="#082f49" strokeWidth="6" letterSpacing="4">GLASS</text>
              <text x="120" y="72" textAnchor="middle" fontSize="48" fontWeight="900" fontFamily="sans-serif" fill="url(#flutedCyan)" stroke="#bae6fd" strokeWidth="1.2" letterSpacing="4">GLASS</text>
              {/* Vertical fluted glass reflections */}
              <line x1="60" y1="35" x2="60" y2="85" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
              <line x1="95" y1="35" x2="95" y2="85" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
              <line x1="145" y1="35" x2="145" y2="85" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
              <line x1="185" y1="35" x2="185" y2="85" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
            </svg>
          </div>
        );
      }

      // Default styled typography fallback
      default: {
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center select-none">
            <span 
              className="text-2xl sm:text-3xl font-black tracking-wider uppercase leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {displayText}
            </span>
          </div>
        );
      }
    }
  };

  return (
    <div
      className={`relative w-full aspect-square rounded-xl overflow-hidden flex flex-col justify-between select-none shadow-md transition-transform duration-200 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Top Left Number Pill - exact match with Screenshot 6 (e.g. 9, 17, 20, 28, 33, 37, etc.) */}
      <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white font-bold text-xs shadow-sm">
        {number}
      </div>

      {/* Main Visual Typography Render */}
      <div className="w-full h-full flex items-center justify-center">
        {renderTypographyArt()}
      </div>
    </div>
  );
};
