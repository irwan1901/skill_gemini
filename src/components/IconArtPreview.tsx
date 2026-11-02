import React from 'react';
import { IconStyleItem } from '../data/iconArtStylesData';

interface IconArtPreviewProps {
  item: IconStyleItem;
  className?: string;
  isEnlarged?: boolean;
}

export const IconArtPreview: React.FC<IconArtPreviewProps> = ({ item, className = '', isEnlarged = false }) => {
  const { previewType, bgColor, number, badge } = item;

  // Render individual SVG icons based on previewType
  const renderIcon = (index: number) => {
    switch (previewType) {
      // 1. White Monoline Outline (#3) - matches Screenshot
      case 'white-monoline': {
        if (index === 0) {
          // Gear Cog
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2.5" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="24" cy="24" r="6" />
              <path d="M24 6v4M24 38v4M6 24h4M38 24h4M11.3 11.3l2.8 2.8M33.9 33.9l2.8 2.8M11.3 36.7l2.8-2.8M33.9 14.1l2.8-2.8" />
              <circle cx="24" cy="24" r="14" strokeDasharray="3 3" />
            </svg>
          );
        }
        if (index === 1) {
          // House
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2.5" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 22l16-14 16 14v18a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V22z" />
              <path d="M19 42V26h10v16" />
            </svg>
          );
        }
        if (index === 2) {
          // Shopping Cart
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2.5" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="39" r="3" />
              <circle cx="35" cy="39" r="3" />
              <path d="M6 10h6l4.5 20h20l4-14H15" />
            </svg>
          );
        }
        // Search
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full p-2.5" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="21" cy="21" r="11" />
            <path d="M30 30l11 11" />
          </svg>
        );
      }

      // 2. Black Monoline Outline (#4) - matches Screenshot
      case 'black-monoline': {
        if (index === 0) {
          // Gear Cog
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2.5" fill="none" stroke="#111827" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="24" cy="24" r="6" />
              <path d="M24 6v4M24 38v4M6 24h4M38 24h4M11.3 11.3l2.8 2.8M33.9 33.9l2.8 2.8M11.3 36.7l2.8-2.8M33.9 14.1l2.8-2.8" />
              <circle cx="24" cy="24" r="14" strokeDasharray="3 3" />
            </svg>
          );
        }
        if (index === 1) {
          // House
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2.5" fill="none" stroke="#111827" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 22l16-14 16 14v18a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V22z" />
              <path d="M19 42V26h10v16" />
            </svg>
          );
        }
        if (index === 2) {
          // Shopping Cart
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2.5" fill="none" stroke="#111827" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="39" r="3" />
              <circle cx="35" cy="39" r="3" />
              <path d="M6 10h6l4.5 20h20l4-14H15" />
            </svg>
          );
        }
        // Bell
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full p-2.5" fill="none" stroke="#111827" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 8a8 8 0 0 0-8 8v10l-4 6h24l-4-6V16a8 8 0 0 0-8-8z" />
            <path d="M21 38a3 3 0 0 0 6 0" />
          </svg>
        );
      }

      // 3. Outline + Mustard Accent (#5) - matches Screenshot
      case 'mustard-accent': {
        if (index === 0) {
          // Bathtub with bubbles
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <path d="M9 24h30a1 1 0 0 1 1 1v7a9 9 0 0 1-9 9H17a9 9 0 0 1-9-9v-7a1 1 0 0 1 1-1z" stroke="#1c1917" strokeWidth="2.5" fill="#ffffff" />
              <path d="M12 41v3M36 41v3M10 24V12a3 3 0 0 1 3-3h3v5" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="21" cy="18" r="3" fill="#f59e0b" />
              <circle cx="27" cy="15" r="2.2" fill="#fbbf24" />
              <circle cx="33" cy="19" r="2.8" fill="#f59e0b" />
            </svg>
          );
        }
        if (index === 1) {
          // Washing Machine
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <rect x="9" y="8" width="30" height="34" rx="3" stroke="#1c1917" strokeWidth="2.5" fill="#ffffff" />
              <circle cx="24" cy="27" r="9" stroke="#1c1917" strokeWidth="2.5" />
              <circle cx="24" cy="27" r="6" fill="#fbbf24" stroke="#1c1917" strokeWidth="1.5" />
              <circle cx="16" cy="14" r="2" fill="#f59e0b" />
              <line x1="24" y1="14" x2="33" y2="14" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          );
        }
        if (index === 2) {
          // Tea Mug with yellow tag
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <path d="M12 18h20v16a6 6 0 0 1-6 6H18a6 6 0 0 1-6-6V18z" stroke="#1c1917" strokeWidth="2.5" fill="#ffffff" />
              <path d="M32 22h4a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-4" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M17 12c0-2 2-3 2-4M22 12c0-2 2-3 2-4M27 12c0-2 2-3 2-4" stroke="#78716c" strokeWidth="1.8" strokeLinecap="round" />
              {/* Tea Bag Tag in Mustard Yellow */}
              <path d="M22 18v8l-4 3v4h6v-4l-2-3" stroke="#1c1917" strokeWidth="1.5" />
              <rect x="17" y="27" width="6" height="7" rx="1" fill="#f59e0b" stroke="#1c1917" strokeWidth="1.2" />
            </svg>
          );
        }
        // Potted Plant
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
            <path d="M16 28h16l-2 13H18l-2-13z" fill="#f59e0b" stroke="#1c1917" strokeWidth="2.5" />
            <path d="M24 28V12M24 16c-4-4-9-2-8 3 4 2 8 0 8-3zM24 21c4-4 9-2 8 3-4 2-8 0-8-3z" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#fef3c7" />
          </svg>
        );
      }

      // 4. Monoline + Turquoise Fill (#6) - matches Screenshot
      case 'turquoise-fill': {
        if (index === 0) {
          // Map Pin
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <path d="M24 8c-6.6 0-12 5.4-12 12 0 9 12 21 12 21s12-12 12-21c0-6.6-5.4-12-12-12z" fill="#06b6d4" stroke="#0f172a" strokeWidth="2.5" strokeLinejoin="round" />
              <circle cx="24" cy="20" r="4.5" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
            </svg>
          );
        }
        if (index === 1) {
          // Paper Airplane
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <path d="M41 9L7 23l14 4 4 14 16-32z" fill="#06b6d4" stroke="#0f172a" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M41 9L21 27" stroke="#0f172a" strokeWidth="2.2" />
            </svg>
          );
        }
        if (index === 2) {
          // Cloud Upload
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <path d="M14 36h20a10 10 0 0 0 3-19.5A13 13 0 0 0 13 19 8 8 0 0 0 14 36z" fill="#e0f2fe" stroke="#0f172a" strokeWidth="2.5" />
              <path d="M24 33V22M19 26l5-5 5 5" stroke="#0891b2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          );
        }
        // Padlock
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
            <rect x="11" y="20" width="26" height="21" rx="4" fill="#06b6d4" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M16 20v-7a8 8 0 0 1 16 0v7" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="24" cy="30" r="2.5" fill="#0f172a" />
            <path d="M24 32v4" stroke="#0f172a" strokeWidth="2" />
          </svg>
        );
      }

      // 5. Continuous One-Line (#27) - matches Screenshot
      case 'continuous-oneline': {
        if (index === 0) {
          // Scallop Sea Shell
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none" stroke="#292524" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 34c-4-8-1-18 6-22 4-2 9-2 13 1 6 5 8 13 5 21l-24 0z" />
              <path d="M24 34L17 15M24 34L24 12M24 34L31 15M14 26c4-4 16-4 20 0" />
            </svg>
          );
        }
        if (index === 1) {
          // Sunglasses
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none" stroke="#292524" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 23h34M10 23c1 8 6 13 11 11s2-7 1-11c-1 0-8 0-12 0zM26 23c-1 4 0 9 1 11s10-3 11-11c-4 0-11 0-12 0zM7 23l4-5M41 23l-4-5" />
            </svg>
          );
        }
        if (index === 2) {
          // Palm Tree
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none" stroke="#292524" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 42c2-8 3-18-1-26M22 16c-6-4-13-1-14 3 6 1 11 0 14-3zM22 16c6-4 13-1 14 3-6 1-11 0-14-3zM22 16c-3-7 1-12 5-11 1 5-1 9-5 11zM22 16c2-7 8-9 10-6-3 5-7 8-10 6z" />
            </svg>
          );
        }
        // Beach Ball
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none" stroke="#292524" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="24" cy="24" r="16" />
            <path d="M24 8c-6 4-8 11-6 16 2 5 8 8 16 6M24 8c6 5 8 12 5 17-3 5-9 7-17 5M10 24c6-4 14-4 20 0" />
          </svg>
        );
      }

      // 6. Pastel Kawaii Cosmetics (#30) - matches Screenshot row 2
      case 'cosmetics-pastel': {
        if (index === 0) {
          // Lipstick
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <rect x="18" y="24" width="12" height="18" rx="2" fill="#1e1b4b" stroke="#1e1b4b" strokeWidth="1.5" />
              <path d="M20 24v-6h8v6" fill="#f43f5e" stroke="#1e1b4b" strokeWidth="1.5" />
              <path d="M20 18l4-9 4 3v6" fill="#fb7185" stroke="#1e1b4b" strokeWidth="1.5" />
            </svg>
          );
        }
        if (index === 1) {
          // Cosmetic Jar
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <rect x="10" y="22" width="28" height="18" rx="5" fill="#fdf2f8" stroke="#1e1b4b" strokeWidth="2" />
              <rect x="12" y="15" width="24" height="8" rx="3" fill="#f472b6" stroke="#1e1b4b" strokeWidth="2" />
              <path d="M15 28h18" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
            </svg>
          );
        }
        if (index === 2) {
          // Perfume Bottle
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <rect x="14" y="20" width="20" height="22" rx="4" fill="#fbcfe8" stroke="#1e1b4b" strokeWidth="2" />
              <rect x="21" y="14" width="6" height="6" fill="#facc15" stroke="#1e1b4b" strokeWidth="1.5" />
              <circle cx="24" cy="11" r="3" fill="#f43f5e" />
              <circle cx="24" cy="30" r="4" fill="#ffffff" opacity="0.6" />
            </svg>
          );
        }
        // Compact Powder
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
            <ellipse cx="24" cy="26" rx="16" ry="12" fill="#fed7aa" stroke="#1e1b4b" strokeWidth="2" />
            <circle cx="24" cy="25" r="7" fill="#fb923c" opacity="0.5" />
            <path d="M10 20c4-7 14-8 22-2" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      }

      // 7. Neon Gradient Glow Line (#34) - matches Screenshot row 2
      case 'neon-glow': {
        if (index === 0) {
          // Photo Frame
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <rect x="9" y="10" width="30" height="28" rx="4" stroke="#a855f7" strokeWidth="2.5" className="filter drop-shadow-[0_0_6px_#c084fc]" />
              <circle cx="18" cy="19" r="3" stroke="#22d3ee" strokeWidth="2" fill="#22d3ee" className="filter drop-shadow-[0_0_4px_#38bdf8]" />
              <path d="M11 32l9-9 7 7 5-5 7 7" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" className="filter drop-shadow-[0_0_5px_#38bdf8]" />
            </svg>
          );
        }
        if (index === 1) {
          // Gift Box
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <rect x="11" y="20" width="26" height="20" rx="2" stroke="#22d3ee" strokeWidth="2.5" className="filter drop-shadow-[0_0_5px_#38bdf8]" />
              <rect x="8" y="14" width="32" height="7" rx="2" stroke="#c084fc" strokeWidth="2.5" className="filter drop-shadow-[0_0_6px_#c084fc]" />
              <line x1="24" y1="14" x2="24" y2="40" stroke="#c084fc" strokeWidth="2.5" />
              <path d="M18 14c-4-4 0-7 6-2 6-5 10-2 6 2" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" />
            </svg>
          );
        }
        if (index === 2) {
          // Shopping Bag
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <path d="M12 18h24l-3 22H15L12 18z" stroke="#a855f7" strokeWidth="2.5" className="filter drop-shadow-[0_0_5px_#c084fc]" />
              <path d="M18 20v-5a6 6 0 0 1 12 0v5" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" className="filter drop-shadow-[0_0_5px_#38bdf8]" />
            </svg>
          );
        }
        // Nav Compass
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
            <circle cx="24" cy="24" r="16" stroke="#a855f7" strokeWidth="2.5" className="filter drop-shadow-[0_0_5px_#c084fc]" />
            <polygon points="24,12 28,24 24,36 20,24" stroke="#22d3ee" strokeWidth="2" fill="#22d3ee" fillOpacity="0.3" className="filter drop-shadow-[0_0_5px_#38bdf8]" />
          </svg>
        );
      }

      // 8. Cute Chibi Kawaii Animal (#7) - matches Screenshot row 2
      case 'cute-chibi': {
        if (index === 0) {
          // Cute Cat Face
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-1.5" fill="none">
              <path d="M10 18l5-9 8 5 8-5 5 9c4 7 1 18-9 21-6 2-11 2-17 0-10-3-13-14-9-21z" fill="#fed7aa" stroke="#475569" strokeWidth="2" />
              <polygon points="12,17 16,11 18,17" fill="#f472b6" />
              <polygon points="36,17 32,11 30,17" fill="#f472b6" />
              <circle cx="18" cy="25" r="2.5" fill="#1e293b" />
              <circle cx="30" cy="25" r="2.5" fill="#1e293b" />
              <circle cx="14" cy="28" r="3" fill="#f472b6" opacity="0.6" />
              <circle cx="34" cy="28" r="3" fill="#f472b6" opacity="0.6" />
              <path d="M22 28l2 2 2-2" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
            </svg>
          );
        }
        if (index === 1) {
          // Calendar 31
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-1.5" fill="none">
              <rect x="9" y="11" width="30" height="30" rx="5" fill="#ffffff" stroke="#38bdf8" strokeWidth="2.5" />
              <rect x="9" y="11" width="30" height="10" rx="4" fill="#38bdf8" />
              <circle cx="16" cy="9" r="2" fill="#0284c7" />
              <circle cx="32" cy="9" r="2" fill="#0284c7" />
              <text x="24" y="34" textAnchor="middle" fill="#0284c7" fontSize="15" fontWeight="900" fontFamily="sans-serif">31</text>
            </svg>
          );
        }
        if (index === 2) {
          // Sweet Strawberry
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-1.5" fill="none">
              <path d="M24 40c-9-3-14-14-10-23 2-4 7-6 10-6s8 2 10 6c4 9-1 20-10 23z" fill="#f43f5e" stroke="#be123c" strokeWidth="2" />
              <path d="M19 11c3 3 5 3 5 0 0 3 2 3 5 0" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
              <circle cx="21" cy="22" r="1.2" fill="#fef08a" />
              <circle cx="27" cy="22" r="1.2" fill="#fef08a" />
              <circle cx="24" cy="28" r="1.2" fill="#fef08a" />
              <circle cx="19" cy="31" r="1.2" fill="#fef08a" />
              <circle cx="29" cy="31" r="1.2" fill="#fef08a" />
            </svg>
          );
        }
        // Smiling Cloud
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full p-1.5" fill="none">
            <path d="M14 34h20a8 8 0 0 0 2-15.7 11 11 0 0 0-21-2A7 7 0 0 0 14 34z" fill="#ffffff" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="20" cy="26" r="2" fill="#0369a1" />
            <circle cx="28" cy="26" r="2" fill="#0369a1" />
            <circle cx="16" cy="28" r="2.5" fill="#f472b6" opacity="0.6" />
            <circle cx="32" cy="28" r="2.5" fill="#f472b6" opacity="0.6" />
            <path d="M22 29a2 2 0 0 0 4 0" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      }

      // 9. Chunky Retro Gouache (#9) - matches Screenshot row 2
      case 'retro-gouache': {
        if (index === 0) {
          // Orange Coffee Mug
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <rect x="11" y="16" width="22" height="22" rx="4" fill="#ea580c" stroke="#9a3412" strokeWidth="2.5" />
              <path d="M33 21h5a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-5" stroke="#9a3412" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M17 11c1-2 2-3 2-4M22 11c1-2 2-3 2-4M27 11c1-2 2-3 2-4" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="18" cy="27" r="4" fill="#fdba74" />
            </svg>
          );
        }
        if (index === 1) {
          // Paint Brush with dripping paint
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <path d="M34 10l5 5-15 15-5-5L34 10z" fill="#d97706" stroke="#78350f" strokeWidth="2" />
              <rect x="17" y="27" width="5" height="4" transform="rotate(45 17 27)" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
              <path d="M12 32c-3 3-4 7-2 8s5 1 8-2l-6-6z" fill="#ea580c" stroke="#9a3412" strokeWidth="2" />
              <circle cx="10" cy="42" r="2" fill="#ea580c" />
            </svg>
          );
        }
        if (index === 2) {
          // Artist Palette
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
              <path d="M24 10c-9 0-16 6-16 14 0 6 5 11 11 11 3 0 5-2 5-5 0-2 1-3 3-3h3c6 0 10-4 10-9 0-5-7-8-16-8z" fill="#fed7aa" stroke="#9a3412" strokeWidth="2" />
              <circle cx="16" cy="20" r="2.5" fill="#ea580c" />
              <circle cx="24" cy="16" r="2.5" fill="#facc15" />
              <circle cx="32" cy="20" r="2.5" fill="#0284c7" />
              <circle cx="33" cy="28" r="2.5" fill="#16a34a" />
            </svg>
          );
        }
        // Paint Tube
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full p-2" fill="none">
            <rect x="18" y="18" width="12" height="18" rx="2" fill="#fdba74" stroke="#9a3412" strokeWidth="2" />
            <rect x="21" y="12" width="6" height="6" fill="#ea580c" stroke="#9a3412" strokeWidth="2" />
            <path d="M18 36h12" stroke="#9a3412" strokeWidth="3" strokeLinecap="round" />
            <path d="M21 24h6v6h-6z" fill="#ea580c" />
          </svg>
        );
      }

      // 10. 16-Bit Pixel Art Game Loot (#31) - matches Screenshot row 2
      case 'pixel-art': {
        if (index === 0) {
          // Fireball Flame
          return (
            <svg viewBox="0 0 16 16" className="w-full h-full p-2 image-rendering-pixelated">
              <rect x="7" y="1" width="2" height="2" fill="#ef4444" />
              <rect x="6" y="3" width="4" height="2" fill="#f97316" />
              <rect x="5" y="5" width="6" height="3" fill="#fb923c" />
              <rect x="7" y="6" width="2" height="2" fill="#fef08a" />
              <rect x="4" y="8" width="8" height="4" fill="#ea580c" />
              <rect x="6" y="9" width="4" height="3" fill="#facc15" />
              <rect x="5" y="12" width="6" height="2" fill="#b91c1c" />
            </svg>
          );
        }
        if (index === 1) {
          // Water Splash / Mana Orb
          return (
            <svg viewBox="0 0 16 16" className="w-full h-full p-2 image-rendering-pixelated">
              <rect x="7" y="2" width="2" height="2" fill="#38bdf8" />
              <rect x="5" y="4" width="6" height="3" fill="#0284c7" />
              <rect x="4" y="7" width="8" height="4" fill="#0ea5e9" />
              <rect x="6" y="7" width="3" height="3" fill="#ffffff" />
              <rect x="3" y="11" width="10" height="3" fill="#0369a1" />
              <rect x="5" y="14" width="6" height="2" fill="#0c4a6e" />
            </svg>
          );
        }
        if (index === 2) {
          // Gold Coin
          return (
            <svg viewBox="0 0 16 16" className="w-full h-full p-2 image-rendering-pixelated">
              <rect x="5" y="2" width="6" height="2" fill="#ca8a04" />
              <rect x="3" y="4" width="10" height="8" fill="#eab308" />
              <rect x="5" y="4" width="4" height="2" fill="#fef08a" />
              <rect x="7" y="6" width="2" height="4" fill="#a16207" />
              <rect x="5" y="12" width="6" height="2" fill="#a16207" />
            </svg>
          );
        }
        // Health Potion
        return (
          <svg viewBox="0 0 16 16" className="w-full h-full p-2 image-rendering-pixelated">
            <rect x="6" y="2" width="4" height="2" fill="#b45309" />
            <rect x="7" y="4" width="2" height="2" fill="#cbd5e1" />
            <rect x="5" y="6" width="6" height="7" fill="#ef4444" />
            <rect x="6" y="7" width="2" height="3" fill="#fca5a5" />
            <rect x="6" y="13" width="4" height="2" fill="#991b1b" />
          </svg>
        );
      }

      // Default fallback / procedural stylized SVGs
      default: {
        const colors = [
          '#8b5cff', '#06b6d4', '#f59e0b', '#ec4899', 
          '#10b981', '#3b82f6', '#f97316', '#a855f7'
        ];
        const strokeColor = colors[(number + index) % colors.length];
        
        if (index === 0) {
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2.5" fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="24" cy="24" r="14" />
              <path d="M24 10v28M10 24h28" />
            </svg>
          );
        }
        if (index === 1) {
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2.5" fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="24,10 38,36 10,36" />
              <circle cx="24" cy="27" r="4" fill={strokeColor} fillOpacity="0.3" />
            </svg>
          );
        }
        if (index === 2) {
          return (
            <svg viewBox="0 0 48 48" className="w-full h-full p-2.5" fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="12" y="12" width="24" height="24" rx="4" />
              <path d="M12 24h24" />
            </svg>
          );
        }
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full p-2.5" fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 10l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill={strokeColor} fillOpacity="0.25" />
          </svg>
        );
      }
    }
  };

  return (
    <div
      className={`relative w-full aspect-square rounded-xl overflow-hidden flex flex-col justify-between select-none shadow-md transition-transform duration-200 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Top Left Number Pill - exact match with Screenshot (e.g. 3, 4, 5, 6, 27, 30, etc.) */}
      <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white font-bold text-xs shadow-sm">
        {number}
      </div>

      {/* Top Right "4 icons" Badge - exact match with Screenshot (amber/gold border & text) */}
      <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full border border-amber-400/80 bg-black/60 backdrop-blur-md text-amber-300 font-semibold text-[11px] tracking-wide shadow-sm">
        {badge}
      </div>

      {/* Center 2x2 Icons Grid - rendered authentically matching Screenshot */}
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 p-3 pt-6 items-center justify-items-center">
        <div className="w-full h-full flex items-center justify-center p-1">
          {renderIcon(0)}
        </div>
        <div className="w-full h-full flex items-center justify-center p-1">
          {renderIcon(1)}
        </div>
        <div className="w-full h-full flex items-center justify-center p-1">
          {renderIcon(2)}
        </div>
        <div className="w-full h-full flex items-center justify-center p-1">
          {renderIcon(3)}
        </div>
      </div>
    </div>
  );
};
