import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Copy, 
  Check, 
  Download, 
  Sparkles, 
  Search, 
  X,
  Printer
} from 'lucide-react';
import { 
  CHARACTER_CATEGORIES, 
  CharacterStyleItem 
} from '../data/characterArtStylesData';
import { getStoredCharacterStyles } from '../data/adminStore';
import { CharacterArtPreview } from './CharacterArtPreview';

interface CharacterArtStylesViewProps {
  onBackToResources: () => void;
  onTriggerToast: (msg: string) => void;
}

export const CharacterArtStylesView: React.FC<CharacterArtStylesViewProps> = ({
  onBackToResources,
  onTriggerToast
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeModalItem, setActiveModalItem] = useState<CharacterStyleItem | null>(null);
  const [stylesList, setStylesList] = useState<CharacterStyleItem[]>(getStoredCharacterStyles());

  useEffect(() => {
    const handleUpdate = () => setStylesList(getStoredCharacterStyles());
    window.addEventListener('saungdigital_data_updated', handleUpdate);
    return () => window.removeEventListener('saungdigital_data_updated', handleUpdate);
  }, []);

  // Filter character styles based on selected category and live search
  const filteredStyles = useMemo(() => {
    return stylesList.filter((style) => {
      const matchesCategory = selectedCategory === 'all' || style.categoryKey === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        style.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.number.toString().includes(searchQuery);

      return matchesCategory && matchesSearch;
    });
  }, [stylesList, selectedCategory, searchQuery]);

  const handleCopyPrompt = (id: string, text: string, label: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    onTriggerToast(`${label} copied to clipboard!`);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleDownloadSingle = (style: CharacterStyleItem, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const content = [
      `35 NANO BANANA CHARACTER ART STYLES (GOOGLE FLOW)`,
      `Style #${style.number}: ${style.name.toUpperCase()} (${style.category})`,
      `----------------------------------------------------`,
      `Description:`,
      style.desc,
      ``,
      `PROMPT:`,
      style.prompt,
      ``,
      `HOW TO USE IN GOOGLE FLOW:`,
      `1. Open Google Flow: https://flow.google.com/`,
      `2. Select Nano Banana model, set Aspect Ratio to ${style.aspectRatio}.`,
      `3. Swap "raccoon" with your own desired character subject or animal.`,
      `Website: https://ai2play.net/character-art-styles.html`
    ].join('\r\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CharacterStyle-${style.number}-${style.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onTriggerToast(`Prompt #${style.number} downloaded!`);
  };

  const handleDownloadAll = () => {
    const lines: string[] = [
      '========================================================================',
      '35 NANO BANANA CHARACTER ART STYLES (GOOGLE FLOW) - BY SAUNGDIGITAL',
      'Official Resource Companion: https://ai2play.net/character-art-styles.html',
      'YouTube Tutorial: https://www.youtube.com/@AI2Play',
      '========================================================================\r\n',
      'HOW TO USE IN GOOGLE FLOW:',
      '1. Open Google Flow: https://flow.google.com/',
      '2. Select the Nano Banana model, set Aspect Ratio to 1:1 (Square).',
      '3. Copy the prompt and paste directly into Google Flow.',
      '4. Feel free to swap the character subject (e.g. fox, cat, knight, robot).',
      '========================================================================\r\n'
    ];

    stylesList.forEach((s) => {
      lines.push(`[#${s.number}] ${s.name.toUpperCase()} - Category: ${s.category}`);
      lines.push(`Description: ${s.desc}`);
      lines.push(`Aspect Ratio: ${s.aspectRatio}`);
      lines.push(`Prompt:`);
      lines.push(`  ${s.prompt}`);
      lines.push('\r\n------------------------------------------------------------------------\r\n');
    });

    const blob = new Blob([lines.join('\r\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '35-Character-Art-Styles-Nano-Banana-AI2Play.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onTriggerToast('All 35 character style prompts downloaded (.txt)!');
  };

  const handleSaveAsPDF = () => {
    onTriggerToast('Opening print dialog. Select "Save as PDF" as destination.');
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
    <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 animate-rise">
      
      {/* Top back navigation link */}
      <div className="mb-4">
        <button
          onClick={onBackToResources}
          className="inline-flex items-center gap-1.5 text-sm text-[#a89dc6] hover:text-[#ece9f7] font-medium transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>← back to resources</span>
        </button>
      </div>

      {/* Header section matching Screenshot 7 */}
      <header className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8 sm:mb-10">
        
        {/* Watch on YouTube Capsule Pill */}
        <a
          href="https://www.youtube.com/@AI2Play"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8b5cff]/70 bg-[#1e1538]/80 hover:bg-[#2b1f50] text-[#cbb8ff] hover:text-white transition-all duration-200 mb-5 group cursor-pointer shadow-[0_0_15px_rgba(139,92,255,0.2)]"
        >
          <img 
            src="/assets/aistudio/SaungDigital_757c12af.png" 
            alt="SaungDigital" 
            className="w-6 h-4.5 object-contain group-hover:scale-110 transition-transform" 
          />
          <span className="text-xs font-bold tracking-wider uppercase text-white">WATCH ON YOUTUBE</span>
        </a>

        {/* Title: Yellow 35 + White Character Art Styles */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="text-[#fbbf24] drop-shadow-[0_0_25px_rgba(251,191,36,0.4)]">35</span>{' '}
          <span className="text-white">Character Art Styles</span>
        </h1>

        {/* Subtitle matching Screenshot 7 */}
        <p className="text-sm sm:text-base text-[#cfc7e8] leading-relaxed max-w-2xl mb-7 font-normal">
          Nano Banana style prompts you can copy straight into Google Flow. Click any image to enlarge it and read the full prompt.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {/* Button 1: Download all prompts (.txt) */}
          <button
            onClick={handleDownloadAll}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#8b5cff] hover:bg-[#7846ea] text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-[0_0_20px_rgba(139,92,255,0.45)] cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download all prompts (.txt)</span>
          </button>

          {/* Button 2: Save as PDF */}
          <button
            onClick={handleSaveAsPDF}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#181226] hover:bg-[#221a36] border border-[#2e234c] text-[#cfc7e8] hover:text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#a89dc6]" />
            <span>Save as PDF</span>
          </button>

          {/* Button 3: Open Flow */}
          <a
            href="https://flow.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#181226] hover:bg-[#221a36] border border-[#2e234c] text-[#cfc7e8] hover:text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#fbbf24]" />
            <span>Open Flow ↗</span>
          </a>
        </div>

        {/* Category Filter Pills (matching Screenshot 7) */}
        <div className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto">
          {CHARACTER_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#8b5cff] text-white shadow-[0_0_15px_rgba(139,92,255,0.5)]'
                    : 'bg-[#181226] hover:bg-[#231b38] border border-[#2e234c] text-[#a89dc6] hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className={isActive ? 'text-white/80' : 'text-[#7e739e]'}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Search bar */}
        <div className="w-full max-w-md mt-5 relative">
          <Search className="w-4 h-4 text-[#7e739e] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 35 character styles, keywords or numbers..."
            className="w-full bg-[#181226]/80 border border-[#2e234c] focus:border-[#8b5cff] text-white placeholder-[#7e739e] text-xs sm:text-sm pl-9 pr-8 py-2 rounded-xl outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7e739e] hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </header>

      {/* Grid of Cards (Matching Screenshot 7) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 mb-14">
        {filteredStyles.map((style) => {
          const isCopied = copiedId === style.id;
          return (
            <div
              key={style.id}
              onClick={() => setActiveModalItem(style)}
              className="group relative bg-[#130d22] hover:bg-[#18112c] border border-[#251c3d] hover:border-[#8b5cff]/60 rounded-2xl p-3 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-lg hover:shadow-[0_8px_24px_rgba(139,92,255,0.2)]"
            >
              {/* Top: Character Illustration Preview */}
              <div>
                <div className="rounded-xl overflow-hidden mb-3">
                  <CharacterArtPreview item={style} />
                </div>

                {/* Category Pill Tag (Amber outline with uppercase text) */}
                <div className="mb-2">
                  <span className="inline-block border border-amber-400/50 text-amber-300 text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-full">
                    {style.categoryTag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-white font-bold text-sm tracking-tight line-clamp-2 min-h-[2.5rem] leading-snug group-hover:text-[#cbb8ff] transition-colors mb-3">
                  {style.name}
                </h3>
              </div>

              {/* Bottom Actions Row: Copy Button + Download Button */}
              <div className="flex items-center gap-2 mt-auto pt-1">
                {/* Copy Button (Purple) */}
                <button
                  onClick={(e) => handleCopyPrompt(style.id, style.prompt, `Style #${style.number} prompt`, e)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isCopied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#794ef5] hover:bg-[#6c40e6] text-white shadow-[0_0_12px_rgba(121,78,245,0.4)]'
                  }`}
                  title="Copy character prompt"
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

                {/* Download Button */}
                <button
                  onClick={(e) => handleDownloadSingle(style, e)}
                  className="p-1.5 rounded-lg bg-[#1e1735] hover:bg-[#2b214a] border border-[#352857] text-[#c0b5e3] hover:text-white transition-colors cursor-pointer"
                  title="Download prompt text file"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty Search State */}
      {filteredStyles.length === 0 && (
        <div className="text-center py-16 px-4 bg-[#130d22] border border-[#251c3d] rounded-2xl max-w-lg mx-auto">
          <p className="text-[#a89dc6] text-base mb-3">No character styles match "{searchQuery}"</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 bg-[#8b5cff] text-white text-xs font-semibold rounded-lg hover:bg-[#7846ea] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Lightbox Modal (Click any image to enlarge and read full prompt) */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-fade-in"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#140e24] border border-[#302450] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 text-[#a89dc6] hover:text-white bg-[#1e1735] hover:bg-[#2d224e] rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
              {/* Enlarged Character Preview */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-xl overflow-hidden shadow-xl border border-[#2b1f48]">
                <CharacterArtPreview item={activeModalItem} isEnlarged={true} />
              </div>

              {/* Details */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                  <span className="border border-amber-400/60 text-amber-300 text-xs font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                    {activeModalItem.categoryTag}
                  </span>
                  <span className="bg-[#8b5cff]/20 text-[#cbb8ff] border border-[#8b5cff]/40 text-xs font-bold px-2 py-0.5 rounded-full">
                    Style #{activeModalItem.number}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {activeModalItem.name}
                </h2>

                <p className="text-sm text-[#cfc7e8] leading-relaxed mb-4">
                  {activeModalItem.desc}
                </p>

                <div className="inline-flex items-center gap-2 bg-[#1e1735] border border-[#332654] px-3 py-1 rounded-lg text-xs text-[#2bd4a0]">
                  <span>Subject:</span>
                  <span className="text-white font-bold">AI2Play Mascot Raccoon</span>
                </div>
              </div>
            </div>

            {/* Prompt Section */}
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#a89dc6] mb-2 block">
                Google Flow Prompt:
              </span>
              <div className="relative bg-[#0d0918] border border-[#2b1f48] rounded-xl p-4 mb-5">
                <p className="text-xs sm:text-sm text-[#e6e2f5] font-mono leading-relaxed select-all">
                  {activeModalItem.prompt}
                </p>
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => 
                    handleCopyPrompt(
                      activeModalItem.id, 
                      activeModalItem.prompt, 
                      `Style #${activeModalItem.number} prompt`
                    )
                  }
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#8b5cff] hover:bg-[#7846ea] text-white text-xs sm:text-sm font-bold shadow-[0_0_15px_rgba(139,92,255,0.4)] transition-all cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy Prompt</span>
                </button>

                <button
                  onClick={() => handleDownloadSingle(activeModalItem)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1e1735] hover:bg-[#2b214a] border border-[#352857] text-[#c0b5e3] hover:text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download .txt</span>
                </button>
              </div>

              <a
                href="https://flow.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#fbbf24] hover:underline font-semibold"
              >
                <span>Open in Google Flow</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer Instructions Box */}
      <footer className="mt-8 p-6 bg-[#130d22] border border-[#251c3d] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a89dc6]">
        <div>
          <span className="text-white font-bold">Pro Tip: </span>
          In Google Flow, simply replace "raccoon" with any character, animal, or person you want (e.g. "red fox", "cybernetic samurai", "magical girl").
        </div>
        <div className="shrink-0 flex items-center gap-3">
          <a
            href="https://ai2play.net/character-art-styles.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b5cff] hover:underline flex items-center gap-1"
          >
            <span>Original Source</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </footer>
    </div>
  );
};
