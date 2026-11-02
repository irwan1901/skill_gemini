import React from 'react';

interface PhotoshopPluginViewProps {
  onBackToResources: () => void;
  onTriggerToast: (msg: string) => void;
}

export const PhotoshopPluginView: React.FC<PhotoshopPluginViewProps> = ({
  onBackToResources,
  onTriggerToast
}) => {
  const handleDownloadClaudeMd = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/assets/claude-plugin-guide.md';
    link.download = 'CLAUDE.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onTriggerToast('Downloading CLAUDE.md...');
  };

  const handleDownloadCcx = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://gitlab.com/ai2play/color-palette/-/raw/main/download/ai2play-color-palette-1.0.0.ccx?inline=false', '_blank');
    onTriggerToast('Opening download for ai2play-color-palette-1.0.0.ccx...');
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full bg-[#0c0714] text-[#fff] flex flex-col justify-between selection:bg-[#8b5cff]/40 selection:text-white overflow-x-hidden">
      
      {/* Background ambient radial gradients matching original CSS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(139,92,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(155,80,255,0.15) 0%, transparent 50%)'
          }}
        />
      </div>

      {/* Floating particles matching original */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[15%] left-[8%] w-1.5 h-1.5 rounded-full bg-[#8b5cff] opacity-40 animate-pulse shadow-[0_0_8px_#8b5cff]" />
        <div className="absolute top-[70%] left-[5%] w-2 h-2 rounded-full bg-[#c9a0ff] opacity-50 animate-bounce shadow-[0_0_10px_#c9a0ff]" style={{ animationDuration: '6s' }} />
        <div className="absolute top-[25%] right-[5%] w-1.5 h-1.5 rounded-full bg-[#8b5cff] opacity-40 animate-pulse shadow-[0_0_8px_#8b5cff]" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[80%] right-[8%] w-2 h-2 rounded-full bg-[#c9a0ff] opacity-50 animate-bounce shadow-[0_0_10px_#c9a0ff]" style={{ animationDuration: '7s' }} />
        <div className="absolute top-[50%] left-[50%] w-1.5 h-1.5 rounded-full bg-[#8b5cff] opacity-35" />
      </div>

      {/* Page Content Container */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 py-8 lg:py-10 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Header matching original: Left title block + Right AI2Play badge */}
          <header className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8 lg:mb-11">
            <div className="title">
              {/* Back to resources */}
              <button
                onClick={onBackToResources}
                className="inline-flex items-center gap-1.5 text-xs sm:text-[14px] text-[#c9b6e4] hover:text-[#8b5cff] tracking-[1.5px] uppercase font-semibold transition-all mb-3.5 group cursor-pointer"
              >
                <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
                <span>Back to Resources</span>
              </button>

              {/* H1 Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-black uppercase tracking-tight leading-[0.98] text-white">
                VIBE CODE A <span className="text-[#8b5cff] drop-shadow-[0_0_24px_rgba(139,92,255,0.6)]">PHOTOSHOP PLUGIN</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-base lg:text-[20px] text-[#c9b6e4] font-light tracking-[3px] uppercase mt-2.5">
                Build your own Photoshop panel with Claude AI
              </p>
            </div>

            {/* AI2Play Badge with Raccoon Logo */}
            <a
              href="https://www.youtube.com/@AI2Play"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-[#8b5cff] rounded-full text-sm sm:text-[17px] font-bold tracking-[2px] text-[#8b5cff] uppercase bg-[#8b5cff]/[0.05] hover:bg-[#8b5cff]/[0.18] hover:border-[#a98cff] hover:text-[#cbb8ff] transition-all shadow-[0_0_18px_rgba(139,92,255,0.25)] hover:shadow-[0_0_28px_rgba(139,92,255,0.5)] shrink-0 self-start md:self-center"
            >
              <img 
                src="/assets/aistudio/SaungDigital_757c12af.png" 
                alt="SaungDigital" 
                className="w-8 h-6 sm:w-9 sm:h-7 object-contain"
              />
              <span>SaungDigital</span>
            </a>
          </header>

          {/* ========================================================
              SECTION: GET THE FILES
             ======================================================== */}
          <div className="flex items-center gap-4 text-sm sm:text-lg lg:text-[20px] font-bold tracking-[4px] uppercase text-[#8b5cff] mb-6">
            <span>Get the files</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#8b5cff]/40 to-transparent" />
          </div>

          {/* Cards container: 2 side-by-side large cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-9 mb-10 lg:mb-12">
            
            {/* Feature Card 1: Claude Plugin Guide */}
            <div className="relative flex flex-col justify-between bg-gradient-to-br from-[#502382]/[0.55] to-[#280f46]/[0.75] border border-[#b482ff]/[0.25] hover:border-[#8b5cff]/[0.55] rounded-[24px] p-7 sm:p-9 xl:p-10 backdrop-blur-[10px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 group">
              <div>
                {/* 🧩 Icon */}
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[18px] bg-gradient-to-br from-[#8b5cff] to-[#6a2fe0] shadow-[0_8px_20px_rgba(139,92,255,0.25)] flex items-center justify-center text-3xl sm:text-[38px] mb-6 group-hover:scale-105 transition-transform">
                  🧩
                </div>

                {/* Tag */}
                <div className="text-xs sm:text-[13px] font-bold tracking-[2px] uppercase text-[#ffcf4a] mb-2.5">
                  Free Guide
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-[0.3px] text-white mb-3 sm:mb-4">
                  Claude Plugin Guide
                </h3>

                {/* Paragraph */}
                <p className="text-sm sm:text-base lg:text-[18px] leading-[1.6] text-[#d4c2ec] font-light mb-7 sm:mb-8">
                  The instructions file (CLAUDE.md) that teaches Claude how to build a Photoshop UXP panel. Drop it into a folder, open it in Claude, and describe the plugin you want. Claude writes all the code.
                </p>
              </div>

              {/* Button: Download CLAUDE.md only */}
              <div className="flex items-center gap-3 mt-auto">
                <a
                  href="/assets/claude-plugin-guide.md"
                  download="CLAUDE.md"
                  onClick={handleDownloadClaudeMd}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-[14px] text-sm sm:text-[15px] font-bold tracking-[0.5px] bg-gradient-to-br from-[#8b5cff] to-[#6a2fe0] hover:from-[#9d74ff] hover:to-[#783bec] text-white shadow-[0_8px_22px_rgba(139,92,255,0.25)] hover:shadow-[0_12px_28px_rgba(139,92,255,0.4)] hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span className="text-base sm:text-lg leading-none">&#11015;</span>
                  <span>Download CLAUDE.md</span>
                </a>
              </div>
            </div>

            {/* Feature Card 2: Color Palette */}
            <div className="relative flex flex-col justify-between bg-gradient-to-br from-[#502382]/[0.55] to-[#280f46]/[0.75] border border-[#b482ff]/[0.25] hover:border-[#8b5cff]/[0.55] rounded-[24px] p-7 sm:p-9 xl:p-10 backdrop-blur-[10px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 group">
              <div>
                {/* 🎨 Icon */}
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[18px] bg-gradient-to-br from-[#8b5cff] to-[#6a2fe0] shadow-[0_8px_20px_rgba(139,92,255,0.25)] flex items-center justify-center text-3xl sm:text-[38px] mb-6 group-hover:scale-105 transition-transform">
                  🎨
                </div>

                {/* Tag */}
                <div className="text-xs sm:text-[13px] font-bold tracking-[2px] uppercase text-[#ffcf4a] mb-2.5">
                  Example Plugin
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-[0.3px] text-white mb-3 sm:mb-4">
                  Color Palette
                </h3>

                {/* Paragraph */}
                <p className="text-sm sm:text-base lg:text-[18px] leading-[1.6] text-[#d4c2ec] font-light mb-7 sm:mb-8">
                  The finished plugin from the tutorial: pull a color palette out of any image, with a live preview and one-click swatch, card, and gradient outputs. Install it, or read the full project and source.
                </p>
              </div>

              {/* Buttons: Download .ccx and View on GitLab */}
              <div className="flex flex-wrap items-center gap-3.5 mt-auto">
                <a
                  href="https://gitlab.com/ai2play/color-palette/-/raw/main/download/ai2play-color-palette-1.0.0.ccx?inline=false"
                  onClick={handleDownloadCcx}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-[14px] text-sm sm:text-[15px] font-bold tracking-[0.5px] bg-gradient-to-br from-[#8b5cff] to-[#6a2fe0] hover:from-[#9d74ff] hover:to-[#783bec] text-white shadow-[0_8px_22px_rgba(139,92,255,0.25)] hover:shadow-[0_12px_28px_rgba(139,92,255,0.4)] hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span className="text-base sm:text-lg leading-none">&#11015;</span>
                  <span>Download .ccx</span>
                </a>

                <a
                  href="https://gitlab.com/ai2play/color-palette"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-[14px] text-sm sm:text-[15px] font-bold tracking-[0.5px] bg-white/[0.06] hover:bg-[#8b5cff]/[0.15] text-white hover:text-[#8b5cff] border border-white/[0.18] hover:border-[#8b5cff] transition-all whitespace-nowrap"
                >
                  <span>View on GitLab</span>
                  <span className="text-sm sm:text-base leading-none">&#8599;</span>
                </a>
              </div>
            </div>

          </div>

          {/* ========================================================
              SECTION: HOW IT WORKS
             ======================================================== */}
          <div className="flex items-center gap-4 text-sm sm:text-lg lg:text-[20px] font-bold tracking-[4px] uppercase text-[#8b5cff] mb-6">
            <span>How it works</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#8b5cff]/40 to-transparent" />
          </div>

          {/* 5 Step Cards horizontal row matching Screenshot 10 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-5 mb-8">
            
            {/* Step 1 */}
            <div className="relative bg-gradient-to-br from-[#502382]/[0.4] to-[#280f46]/[0.6] border border-[#b482ff]/[0.2] hover:border-[#8b5cff]/[0.45] rounded-[18px] p-6 sm:p-7 backdrop-blur-[8px] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute top-3.5 right-5 text-4xl sm:text-[46px] font-black text-white/[0.06] leading-none select-none pointer-events-none">
                1
              </div>
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#8b5cff] to-[#6a2fe0] shadow-[0_0_14px_rgba(139,92,255,0.6)] mb-4" />
              <h4 className="text-lg sm:text-[20px] font-bold text-white mb-2 leading-tight">
                Install UDT
              </h4>
              <p className="text-xs sm:text-[14px] leading-[1.5] text-[#c9b6e4] font-light">
                Get the free UXP Developer Tool from Creative Cloud.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-gradient-to-br from-[#502382]/[0.4] to-[#280f46]/[0.6] border border-[#b482ff]/[0.2] hover:border-[#8b5cff]/[0.45] rounded-[18px] p-6 sm:p-7 backdrop-blur-[8px] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute top-3.5 right-5 text-4xl sm:text-[46px] font-black text-white/[0.06] leading-none select-none pointer-events-none">
                2
              </div>
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#8b5cff] to-[#6a2fe0] shadow-[0_0_14px_rgba(139,92,255,0.6)] mb-4" />
              <h4 className="text-lg sm:text-[20px] font-bold text-white mb-2 leading-tight">
                Developer Mode
              </h4>
              <p className="text-xs sm:text-[14px] leading-[1.5] text-[#c9b6e4] font-light">
                Enable it in Photoshop, Preferences, Plugins, then restart.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-gradient-to-br from-[#502382]/[0.4] to-[#280f46]/[0.6] border border-[#b482ff]/[0.2] hover:border-[#8b5cff]/[0.45] rounded-[18px] p-6 sm:p-7 backdrop-blur-[8px] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute top-3.5 right-5 text-4xl sm:text-[46px] font-black text-white/[0.06] leading-none select-none pointer-events-none">
                3
              </div>
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#8b5cff] to-[#6a2fe0] shadow-[0_0_14px_rgba(139,92,255,0.6)] mb-4" />
              <h4 className="text-lg sm:text-[20px] font-bold text-white mb-2 leading-tight">
                Add the guide
              </h4>
              <p className="text-xs sm:text-[14px] leading-[1.5] text-[#c9b6e4] font-light">
                Put CLAUDE.md in a new folder and open it in Claude Code.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative bg-gradient-to-br from-[#502382]/[0.4] to-[#280f46]/[0.6] border border-[#b482ff]/[0.2] hover:border-[#8b5cff]/[0.45] rounded-[18px] p-6 sm:p-7 backdrop-blur-[8px] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute top-3.5 right-5 text-4xl sm:text-[46px] font-black text-white/[0.06] leading-none select-none pointer-events-none">
                4
              </div>
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#8b5cff] to-[#6a2fe0] shadow-[0_0_14px_rgba(139,92,255,0.6)] mb-4" />
              <h4 className="text-lg sm:text-[20px] font-bold text-white mb-2 leading-tight">
                Describe it
              </h4>
              <p className="text-xs sm:text-[14px] leading-[1.5] text-[#c9b6e4] font-light">
                Tell Claude what panel to build. It writes all the files.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative bg-gradient-to-br from-[#502382]/[0.4] to-[#280f46]/[0.6] border border-[#b482ff]/[0.2] hover:border-[#8b5cff]/[0.45] rounded-[18px] p-6 sm:p-7 backdrop-blur-[8px] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute top-3.5 right-5 text-4xl sm:text-[46px] font-black text-white/[0.06] leading-none select-none pointer-events-none">
                5
              </div>
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#8b5cff] to-[#6a2fe0] shadow-[0_0_14px_rgba(139,92,255,0.6)] mb-4" />
              <h4 className="text-lg sm:text-[20px] font-bold text-white mb-2 leading-tight">
                Run &amp; share
              </h4>
              <p className="text-xs sm:text-[14px] leading-[1.5] text-[#c9b6e4] font-light">
                Load it in Photoshop, then package a .ccx to share.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================
            FOOTER: Exact 3 columns matching Screenshot 10
           ======================================================== */}
        <footer className="pt-8 pb-4 mt-auto border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-[15px] lg:text-[16px] text-[#9b83c4] tracking-[0.5px]">
          <div className="font-light text-center md:text-left">
            Drop the guide in a folder and let Claude build it
          </div>

          <div className="font-semibold text-center">
            <span className="text-[#8b5cff] font-bold">SaungDigital</span> &middot; Photoshop Plugin Tutorial
          </div>

          <div className="text-[11px] sm:text-[12px] text-[#9b83c4]/70 text-center md:text-right max-w-sm">
            Not affiliated with, endorsed by, or sponsored by Adobe. Adobe and Photoshop are trademarks of Adobe Inc.
          </div>
        </footer>

      </div>
    </div>
  );
};
