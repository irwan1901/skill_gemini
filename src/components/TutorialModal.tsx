import React, { useState, useEffect } from 'react';
import { Tutorial } from '../types';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Youtube, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  BookmarkCheck,
  Share2
} from 'lucide-react';

interface TutorialModalProps {
  tutorial: Tutorial | null;
  onClose: () => void;
  onTriggerToast: (message: string) => void;
}

export const TutorialModal: React.FC<TutorialModalProps> = ({ 
  tutorial, 
  onClose,
  onTriggerToast 
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!tutorial) return null;

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    onTriggerToast('Prompt copied to clipboard!');
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleDownloadAll = () => {
    const content = [
      `====================================================`,
      `SaungDigital Tutorial Resource: ${tutorial.title}`,
      `Category: ${tutorial.category} (${tutorial.ep})`,
      `URL: https://www.youtube.com/@AI2Play`,
      `====================================================\n\n`,
      ...tutorial.prompts.map((p, idx) => {
        return `[#${idx + 1}] ${p.title} ${p.ratio ? `(Ratio: ${p.ratio})` : ''}\n${p.command ? `Command/Skill: ${p.command}\n` : ''}Prompt: "${p.promptText}"\n${p.note ? `Note: ${p.note}\n` : ''}\n----------------------------------------------------\n`;
      })
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tutorial.slug.replace('.html', '')}-prompts.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onTriggerToast('Prompts downloaded as .txt!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#161029] border border-[#3a2f5e] rounded-2xl sm:rounded-3xl shadow-[0_15px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with neon glow */}
        <div className="relative p-5 sm:p-7 border-b border-[#2b2247] bg-[#100b20]/90 flex-shrink-0">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl text-[#a89dc6] hover:text-white bg-[#1d1636] border border-[#2b2247] hover:border-[#8b5cff] transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="pr-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffcf4a]/15 text-[#ffcf4a] border border-[#ffcf4a]/30 text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{tutorial.ep}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#ece9f7] leading-snug">
              {tutorial.title}
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-[#a89dc6] leading-relaxed max-w-2xl">
              {tutorial.description}
            </p>
          </div>

          {/* Quick action bar */}
          <div className="flex flex-wrap items-center gap-2.5 mt-5">
            <button
              onClick={handleDownloadAll}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#8b5cff] hover:bg-[#7440e6] text-white text-xs sm:text-sm font-bold shadow-[0_0_15px_rgba(139,92,255,0.4)] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download All Prompts (.txt)</span>
            </button>

            <a
              href={tutorial.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1d1636] hover:bg-[#251d45] text-[#ece9f7] border border-[#3a2f5e] hover:border-[#8b5cff] text-xs sm:text-sm font-semibold transition-all"
            >
              <Youtube className="w-4 h-4 text-red-400" />
              <span>Watch on YouTube</span>
            </a>

            {tutorial.toolUrl && (
              <a
                href={tutorial.toolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#ffcf4a] bg-[#ffcf4a]/10 hover:bg-[#ffcf4a]/20 border border-[#ffcf4a]/30 transition-all"
              >
                <span>Open Tool</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Scrollable Prompts List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-4">
          
          {tutorial.tips && tutorial.tips.length > 0 && (
            <div className="p-4 rounded-xl bg-[#1d1636]/60 border border-[#8b5cff]/30 text-xs sm:text-sm text-[#ece9f7] space-y-1.5 mb-5">
              <div className="font-bold text-[#ffcf4a] flex items-center gap-1.5 uppercase text-[11px] tracking-wider">
                <BookmarkCheck className="w-4 h-4 text-[#ffcf4a]" />
                Creator Tips &amp; Usage
              </div>
              <ul className="list-disc list-inside space-y-1 text-[#a89dc6] text-xs sm:text-[13px] pl-1">
                {tutorial.tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center justify-between pb-2 border-b border-[#2b2247]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a89dc6]">
              Prompt Collection ({tutorial.prompts.length})
            </span>
            <span className="text-xs text-[#6f6494]">
              Click button or box to copy
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {tutorial.prompts.map((prompt, idx) => {
              const isCopied = copiedId === prompt.id;

              return (
                <div
                  key={prompt.id}
                  className="group relative p-4 sm:p-5 rounded-xl bg-[#100b20] border border-[#2b2247] hover:border-[#8b5cff] transition-all duration-150 hover:shadow-[0_4px_18px_rgba(139,92,255,0.18)]"
                >
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-[#ffcf4a] font-mono">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#ece9f7]">
                        {prompt.title}
                      </h4>
                      {prompt.ratio && (
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#2b2247] text-[#c4b3ff] font-mono">
                          {prompt.ratio}
                        </span>
                      )}
                      {prompt.step && (
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#ffcf4a]/15 text-[#ffcf4a] font-medium">
                          {prompt.step}
                        </span>
                      )}
                    </div>

                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopyPrompt(prompt.id, prompt.promptText)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        isCopied
                          ? 'bg-[#3ecf8e] text-[#0c0714] font-bold shadow-[0_0_12px_rgba(62,207,142,0.6)]'
                          : 'bg-[#1d1636] hover:bg-[#8b5cff] text-[#c4b3ff] hover:text-white border border-[#3a2f5e] hover:border-[#8b5cff]'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {prompt.command && (
                    <div className="mb-2 text-xs font-mono text-[#8b5cff] bg-[#8b5cff]/10 px-2.5 py-1 rounded border border-[#8b5cff]/20 inline-block">
                      {prompt.command}
                    </div>
                  )}

                  <div 
                    onClick={() => handleCopyPrompt(prompt.id, prompt.promptText)}
                    className="p-3 rounded-lg bg-[#0c0714] border border-[#2b2247] text-xs sm:text-sm text-[#d4c2ec] font-normal leading-relaxed cursor-pointer hover:border-[#8b5cff]/60 group-hover:bg-[#120c22] transition-colors"
                  >
                    "{prompt.promptText}"
                  </div>

                  {prompt.note && (
                    <p className="mt-2 text-[11px] sm:text-xs text-[#a89dc6]/80 italic">
                      Tip: {prompt.note}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#2b2247] bg-[#100b20] flex items-center justify-between text-xs text-[#a89dc6] flex-shrink-0">
          <span>SaungDigital Prompt Library</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#1d1636] hover:bg-[#251d45] text-[#ece9f7] font-semibold border border-[#2b2247]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
