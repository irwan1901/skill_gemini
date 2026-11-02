import React from 'react';
import { HUB_LINKS } from '../data/ai2playData';

interface HubViewProps {
  onGoToResources: () => void;
  onGoToAdmin?: () => void;
  onCopyShareLink?: () => void;
}

export const HubView: React.FC<HubViewProps> = ({ onGoToResources, onGoToAdmin }) => {
  return (
    <div className="flex justify-center items-center py-10 px-4 min-h-[calc(100vh-4rem)]">
      <main className="w-full max-w-[440px] text-center flex flex-col items-center">
        
        {/* SaungDigital Logo */}
        <div className="relative group cursor-pointer max-w-[220px] mx-auto mb-2" onClick={onGoToResources}>
          <img 
            className="w-44 h-auto mx-auto block filter drop-shadow-[0_10px_28px_rgba(255,207,74,0.35)] hover:drop-shadow-[0_12px_36px_rgba(255,207,74,0.55)] transition-all duration-300 transform group-hover:scale-105"
            src="/assets/aistudio/SaungDigital_757c12af.png" 
            alt="SaungDigital logo" 
            width={176} 
            height={118} 
          />
        </div>

        {/* Title */}
        <h1 className="text-[30px] font-extrabold tracking-[0.1em] mt-4 mb-0 text-[#ece9f7] select-none">
          Saung<span className="text-[#ffcf4a] drop-shadow-[0_0_12px_rgba(255,207,74,0.7)]">Digital</span>
        </h1>

        {/* Tagline */}
        <p className="text-[#a89dc6] text-[14.5px] mt-2.5 mx-auto max-w-[34ch] leading-relaxed">
          Fusion of Innovation and Imagination
        </p>

        {/* Navigation Links Group */}
        <nav className="w-full flex flex-col gap-3 mt-7">
          
          {/* Two YouTube Channels, side by side; AI2Play featured */}
          <div className="grid grid-cols-2 gap-2.5">
            <a 
              className="flex items-center justify-center gap-2.5 min-w-0 no-underline text-white bg-[#8b5cff] border border-[#8b5cff] rounded-xl px-2.5 py-3 transition-all duration-150 shadow-[0_4px_18px_rgba(139,92,255,0.35)] hover:-translate-y-0.5 hover:bg-[#7440e6] hover:shadow-[0_10px_26px_rgba(139,92,255,0.5)] group"
              href={HUB_LINKS.youtubeAI2Play} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="w-5 h-5 text-white flex-shrink-0 grid place-items-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-8z" />
                  <path d="M10 9l5 3l-5 3z" />
                </svg>
              </span>
              <span className="flex flex-col text-left leading-tight min-w-0">
                <span className="text-[15.5px] font-bold truncate">SaungDigital</span>
                <span className="text-[12px] text-[#e6ddff] font-medium">YouTube</span>
              </span>
            </a>

            <a 
              className="flex items-center justify-center gap-2.5 min-w-0 no-underline text-[#ece9f7] bg-[#161029] border border-[#2b2247] rounded-xl px-2.5 py-3 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#8b5cff] hover:bg-gradient-to-t hover:from-[#8b5cff]/15 hover:to-[#8b5cff]/15 hover:shadow-[0_8px_22px_rgba(139,92,255,0.22)] group"
              href={HUB_LINKS.youtubePixaroma} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="w-5 h-5 text-[#8b5cff] flex-shrink-0 grid place-items-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-8z" />
                  <path d="M10 9l5 3l-5 3z" />
                </svg>
              </span>
              <span className="flex flex-col text-left leading-tight min-w-0">
                <span className="text-[15.5px] font-semibold truncate">Pixaroma</span>
                <span className="text-[12px] text-[#a89dc6] font-medium">YouTube</span>
              </span>
            </a>
          </div>

          {/* Resources Button */}
          <button 
            onClick={onGoToResources}
            className="w-full flex items-center gap-3.5 no-underline text-[#ece9f7] bg-[#161029] border border-[#2b2247] rounded-[14px] px-[18px] py-[15px] font-semibold text-[15.5px] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#8b5cff] hover:bg-gradient-to-t hover:from-[#8b5cff]/15 hover:to-[#8b5cff]/15 hover:shadow-[0_8px_22px_rgba(139,92,255,0.25)] group cursor-pointer"
          >
            <span className="w-6 h-6 text-[#8b5cff] flex-shrink-0 grid place-items-center group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M2 5a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H2z" />
                <path d="M22 5a1 1 0 0 0-1-1h-5a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H22z" />
              </svg>
            </span>
            <span className="flex-1 text-left flex items-center justify-between">
              <span>Resources</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#8b5cff]/20 text-[#c4b3ff] border border-[#8b5cff]/30 font-medium">
                Tutorial Prompts
              </span>
            </span>
            <span className="text-[#a89dc6] text-[20px] group-hover:text-[#ffcf4a] transition-colors font-light ml-1">
              &rsaquo;
            </span>
          </button>

          {/* Join Discord Button */}
          <a 
            className="flex items-center gap-3.5 no-underline text-[#ece9f7] bg-[#161029] border border-[#2b2247] rounded-[14px] px-[18px] py-[15px] font-semibold text-[15.5px] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#8b5cff] hover:bg-gradient-to-t hover:from-[#8b5cff]/15 hover:to-[#8b5cff]/15 hover:shadow-[0_8px_22px_rgba(139,92,255,0.25)] group"
            href={HUB_LINKS.discord} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="w-6 h-6 text-[#8b5cff] flex-shrink-0 grid place-items-center group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19.5 5.5A16 16 0 0 0 15.5 4l-.3.5a13 13 0 0 1 3.5 1.7 12 12 0 0 0-10.4 0A13 13 0 0 1 11.8 4.5L11.5 4A16 16 0 0 0 7.5 5.5C5 9 4.3 12.4 4.6 15.8A16 16 0 0 0 9 18l.6-1c-.7-.2-1.3-.5-1.9-.9l.5-.3a11 11 0 0 0 9.6 0l.5.3c-.6.4-1.2.7-1.9.9l.6 1a16 16 0 0 0 4.4-2.2c.4-4-.7-7.4-2.9-10.3zM9.8 13.9c-.8 0-1.4-.7-1.4-1.6s.6-1.6 1.4-1.6 1.4.7 1.4 1.6-.6 1.6-1.4 1.6zm4.4 0c-.8 0-1.4-.7-1.4-1.6s.6-1.6 1.4-1.6 1.4.7 1.4 1.6-.6 1.6-1.4 1.6z"/>
              </svg>
            </span>
            <span className="flex-1 text-left">Join Discord</span>
            <span className="text-[#a89dc6] text-[20px] group-hover:text-[#ffcf4a] transition-colors font-light">
              &rsaquo;
            </span>
          </a>

          {/* Donate Button */}
          <a 
            className="flex items-center gap-3.5 no-underline text-[#ece9f7] bg-[#161029] border border-[#2b2247] rounded-[14px] px-[18px] py-[15px] font-semibold text-[15.5px] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#8b5cff] hover:bg-gradient-to-t hover:from-[#8b5cff]/15 hover:to-[#8b5cff]/15 hover:shadow-[0_8px_22px_rgba(139,92,255,0.25)] group"
            href={HUB_LINKS.donate} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="w-6 h-6 text-[#ffcf4a] flex-shrink-0 grid place-items-center group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </span>
            <span className="flex-1 text-left">Donate</span>
            <span className="text-[#a89dc6] text-[20px] group-hover:text-[#ffcf4a] transition-colors font-light">
              &rsaquo;
            </span>
          </a>

        </nav>

        {/* Footer */}
        <footer className="mt-8 text-[#a89dc6] text-[13px] tracking-wide flex flex-col items-center gap-2">
          <span className="text-[#a89dc6]/80 font-mono">SaungDigital</span>
          <div className="flex items-center gap-2 text-xs text-[#6f6494]">
            <span>Innovation</span>
            <span>&bull;</span>
            <span>Imagination</span>
            <span>&bull;</span>
            <span className="text-[#8b5cff]">AI Community</span>
          </div>
          {onGoToAdmin && (
            <button
              onClick={onGoToAdmin}
              className="mt-1 text-[11px] text-[#6f6494] hover:text-[#8b5cff] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>🔒</span>
              <span>Admin Portal</span>
            </button>
          )}
        </footer>

      </main>
    </div>
  );
};
