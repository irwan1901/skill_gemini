import React, { useState, useEffect, useMemo } from 'react';
import halloweenData from '../data/halloweenData.json';
import { 
  ArrowLeft, 
  ExternalLink, 
  Copy, 
  Check, 
  Download, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Ghost, 
  Video, 
  Film,
  Flame,
  Palette,
  Image as ImageIcon
} from 'lucide-react';

interface HalloweenViewProps {
  onBackToResources: () => void;
  onTriggerToast: (msg: string) => void;
}

export const HalloweenView: React.FC<HalloweenViewProps> = ({
  onBackToResources,
  onTriggerToast
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeLightboxPic, setActiveLightboxPic] = useState<{ src: string; caption: string } | null>(null);

  const getTagColorClass = (part: string) => {
    switch (part) {
      case 'cute': return 'text-[#ff9f43] border-[#ff9f43]/40 bg-[#ff9f43]/10';
      case 'print': return 'text-[#2bd4a0] border-[#2bd4a0]/40 bg-[#2bd4a0]/10';
      case 'spooky': return 'text-[#c07bff] border-[#c07bff]/40 bg-[#c07bff]/10';
      case 'move': return 'text-[#ff6b8b] border-[#ff6b8b]/40 bg-[#ff6b8b]/10';
      case 'quick': return 'text-[#ffcf4a] border-[#ffcf4a]/40 bg-[#ffcf4a]/10';
      default: return 'text-[#8b5cff] border-[#8b5cff]/40 bg-[#8b5cff]/10';
    }
  };

  const getTagDotColor = (part: string) => {
    switch (part) {
      case 'cute': return '#ff9f43';
      case 'print': return '#2bd4a0';
      case 'spooky': return '#c07bff';
      case 'move': return '#ff6b8b';
      case 'quick': return '#ffcf4a';
      default: return '#8b5cff';
    }
  };

  const filteredIdeas = useMemo(() => {
    if (selectedFilter === 'all') return halloweenData.ideas;
    return halloweenData.ideas.filter(i => i.part === selectedFilter);
  }, [selectedFilter]);

  // All visible pictures for lightbox navigation
  const allPics = useMemo(() => {
    const list: { src: string; caption: string }[] = [];
    filteredIdeas.forEach(idea => {
      idea.rows.forEach(r => {
        if (r.picSrc) {
          list.push({ src: r.picSrc, caption: `${idea.title} - ${r.label}` });
        }
      });
    });
    return list;
  }, [filteredIdeas]);

  // Handle escape and arrow keys for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeLightboxPic) return;
      if (e.key === 'Escape') setActiveLightboxPic(null);
      if (e.key === 'ArrowRight') {
        const curIdx = allPics.findIndex(p => p.src === activeLightboxPic.src);
        if (curIdx >= 0 && curIdx < allPics.length - 1) {
          setActiveLightboxPic(allPics[curIdx + 1]);
        }
      }
      if (e.key === 'ArrowLeft') {
        const curIdx = allPics.findIndex(p => p.src === activeLightboxPic.src);
        if (curIdx > 0) {
          setActiveLightboxPic(allPics[curIdx - 1]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxPic, allPics]);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onTriggerToast('Prompt copied to clipboard!');
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const handleDownloadAll = () => {
    const lines: string[] = [
      '22 FREE Halloween Ideas with Nano Banana 2.1 in Google Flow',
      'AI2Play (ai2play.net/halloween-nano-banana.html)',
      '====================================================\n'
    ];

    halloweenData.ideas.forEach((idea) => {
      lines.push(`[#${idea.num}] ${idea.title.toUpperCase()} (${idea.tag})`);
      lines.push(`${idea.desc}\n`);
      idea.rows.forEach((row, rIdx) => {
        lines.push(`-- ${row.label} (${row.ratio}) --`);
        lines.push(`"${row.prompt}"\n`);
      });
      if (idea.animPrompt) {
        lines.push(`-- ANIMATION PROMPT (VEO) --`);
        lines.push(`"${idea.animPrompt}"\n`);
      }
      lines.push('----------------------------------------------------\n');
    });

    const blob = new Blob([lines.join('\r\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Halloween Nano Banana 2.1 Prompts - AI2Play.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onTriggerToast('All Halloween prompts downloaded (.txt)!');
  };

  return (
    <div className="w-full max-w-[1260px] mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-8 animate-rise">
      
      {/* Back button */}
      <div className="mb-3">
        <button
          onClick={onBackToResources}
          className="inline-flex items-center gap-1.5 text-sm sm:text-base text-[#a89dc6] hover:text-[#ece9f7] font-medium transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Resources</span>
        </button>
      </div>

      {/* Header section matching original */}
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-7 sm:mb-9">
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
            22 FREE <span className="text-[#8b5cff] drop-shadow-[0_0_20px_rgba(139,92,255,0.6)]">Halloween</span> Ideas
          </h1>
          <p className="text-base sm:text-lg text-[#a89dc6] mt-3 max-w-2xl">
            <b className="text-[#ffcf4a] font-bold">Prompt collection:</b> costumes, decorations, spooky scenes and ideas that move in Google Flow, every prompt ready to copy. By SaungDigital.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 sm:gap-3.5 flex-wrap">
          <a
            href="https://flow.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-[48px] px-5 sm:px-6 rounded-xl bg-[#8b5cff] hover:bg-[#7440e6] text-white font-bold text-sm sm:text-base transition-all shadow-[0_4px_20px_rgba(139,92,255,0.4)] hover:shadow-[0_6px_25px_rgba(139,92,255,0.6)]"
          >
            <span>Open Google Flow</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={handleDownloadAll}
            className="inline-flex items-center gap-2 h-[48px] px-4 sm:px-5 rounded-xl bg-[#161029] border border-[#2b2247] hover:border-[#8b5cff] text-[#ece9f7] font-bold text-sm sm:text-base transition-all hover:bg-[#1d1636] cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#8b5cff]" />
            <span>All prompts (.txt)</span>
          </button>

          <a
            href="https://www.youtube.com/@AI2Play"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-[48px] px-4 sm:px-5 rounded-xl bg-[#161029] border border-[#2b2247] hover:border-[#8b5cff] text-[#ece9f7] font-bold text-sm sm:text-base transition-all hover:bg-[#1d1636]"
          >
            <img src="/assets/aistudio/SaungDigital_757c12af.png" alt="SaungDigital" className="w-7 h-5 sm:w-8 sm:h-6 object-contain" />
            <span>SaungDigital on YouTube</span>
          </a>
        </div>
      </header>

      {/* 4 Steps Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
        <a 
          href="https://flow.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#161029] border border-[#2b2247] hover:border-[#8b5cff] transition-all group"
        >
          <span className="w-9 h-9 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.4)]">
            1
          </span>
          <div>
            <b className="block text-sm sm:text-base font-bold text-white group-hover:text-[#ffcf4a] transition-colors">
              Open Google Flow
            </b>
            <span className="block text-xs text-[#a89dc6] mt-0.5 leading-snug">
              Sign in with your Google account and click New project.
            </span>
          </div>
        </a>

        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#161029] border border-[#2b2247]">
          <span className="w-9 h-9 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.4)]">
            2
          </span>
          <div>
            <b className="block text-sm sm:text-base font-bold text-white">Pick the settings</b>
            <span className="block text-xs text-[#a89dc6] mt-0.5 leading-snug">
              Image, the shape shown on the card, Nano Banana 2.1, and x2 for two versions.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#161029] border border-[#2b2247]">
          <span className="w-9 h-9 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.4)]">
            3
          </span>
          <div>
            <b className="block text-sm sm:text-base font-bold text-white">Paste a prompt</b>
            <span className="block text-xs text-[#a89dc6] mt-0.5 leading-snug">
              Copy it from a card below, paste it and press the arrow.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#161029] border border-[#2b2247]">
          <span className="w-9 h-9 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.4)]">
            4
          </span>
          <div>
            <b className="block text-sm sm:text-base font-bold text-white">To make it move</b>
            <span className="block text-xs text-[#a89dc6] mt-0.5 leading-snug">
              Click the picture, click Animate, pick a duration and paste the animation prompt.
            </span>
          </div>
        </div>
      </div>

      {/* Filter Chips Bar (Sticky) */}
      <nav className="flex flex-wrap items-center gap-2 mb-8 sticky top-16 z-20 py-2.5 bg-[#0c0714]/90 backdrop-blur-md">
        {halloweenData.chips.map((chip) => (
          <button
            key={chip.id}
            onClick={() => setSelectedFilter(chip.id)}
            className={`h-9 px-4 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              selectedFilter === chip.id
                ? 'bg-[#8b5cff] border-[#8b5cff] text-white shadow-[0_0_12px_rgba(139,92,255,0.5)]'
                : 'bg-[#161029] border-[#2b2247] text-[#a89dc6] hover:border-[#8b5cff] hover:text-white'
            }`}
          >
            {chip.label}
          </button>
        ))}
      </nav>

      {/* 22 Ideas List */}
      <div className="space-y-6">
        {filteredIdeas.map((idea) => (
          <article
            key={idea.id}
            id={idea.id}
            className="p-5 sm:p-6 rounded-2xl bg-[#161029] border border-[#2b2247] hover:border-[#3a2f5e] transition-all"
          >
            {/* Idea Top Head */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#8b5cff]/15 text-[#b39bff] grid place-items-center flex-shrink-0">
                <Ghost className="w-6 h-6" />
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-bold text-[#ece9f7] leading-tight">
                  {idea.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#a89dc6] mt-1 leading-relaxed">
                  {idea.desc}
                </p>
              </div>

              <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                <span className="text-xl sm:text-2xl font-extrabold text-[#8579ad]">
                  {idea.num}
                </span>
                <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${getTagColorClass(idea.part)}`}>
                  {idea.tag}
                </span>
              </div>
            </div>

            {/* Rows (Pictures + Prompts) */}
            <div className="space-y-4 pt-1">
              {idea.rows.map((row, rIdx) => {
                const copyKey = `${idea.id}-${rIdx}`;
                const isCopied = copiedKey === copyKey;

                return (
                  <div
                    key={rIdx}
                    className={`grid gap-4 sm:gap-6 items-start pt-4 border-t border-[#2b2247]/80 ${
                      row.picSrc 
                        ? 'grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)]' 
                        : 'grid-cols-1'
                    }`}
                  >
                    {/* Thumbnail picture */}
                    {row.picSrc && (
                      <div className="relative group cursor-zoom-in">
                        <div
                          onClick={() => setActiveLightboxPic({ src: row.picSrc!, caption: `${idea.title}: ${row.label}` })}
                          className={`rounded-xl overflow-hidden bg-[#100b20] border border-[#2b2247] group-hover:border-[#8b5cff] transition-all ${
                            row.picAspect === 'tall'
                              ? 'max-w-[280px] sm:max-w-[320px]'
                              : 'max-w-full lg:max-w-[420px]'
                          }`}
                        >
                          <img
                            src={row.picSrc}
                            alt={idea.title}
                            loading="lazy"
                            className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                          />
                        </div>
                        <span className="absolute bottom-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded bg-black/70 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to enlarge
                        </span>
                      </div>
                    )}

                    {/* Prompt Box */}
                    <div className="flex flex-col gap-2.5 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <small className="text-[11px] font-extrabold tracking-wider uppercase text-[#ffcf4a]">
                          {row.label}
                        </small>
                        <span className="text-[10px] font-bold text-[#c4b3ff] border border-[#3a2f5e] bg-[#1d1636] px-2 py-0.5 rounded-md">
                          {row.ratio}
                        </span>
                      </div>

                      <div 
                        onClick={() => handleCopy(copyKey, row.prompt)}
                        className="p-3.5 rounded-xl bg-[#0c0714] border border-[#2b2247] text-xs sm:text-[13.5px] text-[#d9d3ef] leading-relaxed cursor-pointer hover:border-[#8b5cff]/60 hover:bg-[#120b22] transition-colors"
                      >
                        "{row.prompt}"
                      </div>

                      <button
                        onClick={() => handleCopy(copyKey, row.prompt)}
                        className={`inline-flex items-center gap-2 self-start h-10 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                          isCopied
                            ? 'bg-[#3ecf8e] text-[#0c0714] shadow-[0_0_15px_rgba(62,207,142,0.6)]'
                            : 'bg-[#ffcf4a] hover:bg-[#ffd965] text-[#1a1030] shadow-[0_2px_10px_rgba(255,207,74,0.3)]'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-4 h-4 stroke-[2.5]" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 stroke-[2.5]" />
                            <span>Copy prompt</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Optional Animation Details (for ideas that move) */}
              {idea.animPrompt && (
                <div className="mt-4 p-4 rounded-xl border border-dashed border-[#3a2f5e] bg-[#100b20]/60 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#ff6b8b] uppercase tracking-wider">
                    <Film className="w-4 h-4 text-[#ff6b8b]" />
                    <span>Animation with Veo (Ideas That Move)</span>
                  </div>

                  <details className="group">
                    <summary className="text-xs sm:text-sm font-bold text-[#ece9f7] hover:text-[#ffcf4a] cursor-pointer select-none transition-colors">
                      {idea.animSummary || 'Show the animation prompt'} &darr;
                    </summary>
                    <div className="mt-3 space-y-2.5">
                      <div 
                        onClick={() => handleCopy(`${idea.id}-anim`, idea.animPrompt!)}
                        className="p-3 rounded-lg bg-[#0c0714] border border-[#2b2247] text-xs sm:text-sm text-[#d4c2ec] font-mono leading-relaxed cursor-pointer hover:border-[#8b5cff]/60"
                      >
                        {idea.animPrompt}
                      </div>
                      <button
                        onClick={() => handleCopy(`${idea.id}-anim`, idea.animPrompt!)}
                        className={`inline-flex items-center gap-2 h-9 px-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          copiedKey === `${idea.id}-anim`
                            ? 'bg-[#3ecf8e] text-[#0c0714]'
                            : 'bg-[#1d1636] hover:bg-[#8b5cff] text-[#c4b3ff] hover:text-white border border-[#3a2f5e]'
                        }`}
                      >
                        {copiedKey === `${idea.id}-anim` ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied animation prompt!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy animation prompt</span>
                          </>
                        )}
                      </button>
                    </div>
                  </details>
                </div>
              )}

            </div>
          </article>
        ))}
      </div>

      {/* Footer matching original */}
      <footer className="mt-14 pt-8 border-t border-[#2b2247] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6f6494] text-center sm:text-left">
        <p>
          Free prompt collection from SaungDigital &middot; Subscribe on YouTube for more free prompt sheets &middot; Made with Google Flow &amp; Nano Banana 2.1 in October 2026
        </p>
        <span className="font-bold text-[#8b5cff] whitespace-nowrap">
          SaungDigital &middot; Halloween Collection
        </span>
      </footer>

      {/* Lightbox Modal */}
      {activeLightboxPic && (
        <div 
          onClick={() => setActiveLightboxPic(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxPic(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#161029] border border-[#2b2247] hover:border-[#8b5cff] text-white grid place-items-center cursor-pointer z-60"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const curIdx = allPics.findIndex(p => p.src === activeLightboxPic.src);
              if (curIdx > 0) setActiveLightboxPic(allPics[curIdx - 1]);
              else setActiveLightboxPic(allPics[allPics.length - 1]);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#161029]/80 border border-[#2b2247] hover:border-[#8b5cff] text-white grid place-items-center cursor-pointer z-60"
            aria-label="Previous picture"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const curIdx = allPics.findIndex(p => p.src === activeLightboxPic.src);
              if (curIdx < allPics.length - 1) setActiveLightboxPic(allPics[curIdx + 1]);
              else setActiveLightboxPic(allPics[0]);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#161029]/80 border border-[#2b2247] hover:border-[#8b5cff] text-white grid place-items-center cursor-pointer z-60"
            aria-label="Next picture"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <figure 
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[85vh] flex flex-col items-center gap-3"
          >
            <img 
              src={activeLightboxPic.src} 
              alt={activeLightboxPic.caption}
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-[#2b2247]" 
            />
            <figcaption className="text-sm font-semibold text-[#a89dc6] text-center">
              {activeLightboxPic.caption}
            </figcaption>
          </figure>
        </div>
      )}

    </div>
  );
};
