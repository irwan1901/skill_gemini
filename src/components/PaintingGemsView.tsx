import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Copy, 
  Check, 
  Calendar, 
  ArrowRight,
  Image as ImageIcon,
  Palette,
  Droplets,
  Sun,
  BookOpen,
  Castle,
  Flower2,
  Eye,
  Gamepad2,
  Shapes
} from 'lucide-react';

interface PaintingGemsViewProps {
  onBackToResources: () => void;
  onGoToSkills: () => void;
  onTriggerToast: (msg: string) => void;
}

interface PaintingGemItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  example: string;
  gemUrl: string;
  icon: React.ReactNode;
}

const PAINTING_GEMS: PaintingGemItem[] = [
  {
    id: 'classical-oil',
    num: '01',
    title: 'Classical Oil',
    desc: 'Old Master portraits, Dutch still lifes, Baroque drama, academic scenes and Renaissance pet portraits.',
    example: 'a cat as a king in a royal portrait',
    gemUrl: 'https://gemini.google.com/gem/1LmVv33zSG6qW1DzqcILnmgKR-r33hMt9?usp=sharing',
    icon: <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    id: 'impasto',
    num: '02',
    title: 'Impasto',
    desc: 'Thick, textured oil paint: swirling landscapes and starry nights, palette knife flowers and bold portraits.',
    example: 'a lighthouse in a storm',
    gemUrl: 'https://gemini.google.com/gem/1XMSp-I0GjAtUqAaCagiA-tj3yGXbucKf?usp=sharing',
    icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    id: 'watercolor',
    num: '03',
    title: 'Watercolor',
    desc: 'Loose landscapes and seascapes, ink and wash street sketches, and delicate animals, birds and flowers.',
    example: 'a Venice canal at sunset',
    gemUrl: 'https://gemini.google.com/gem/1ue43Nq740xzlMMnF4u2_--ArGZQdLdna?usp=sharing',
    icon: <Droplets className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    id: 'impressionist',
    num: '04',
    title: 'Impressionist',
    desc: 'Gardens and water lilies, rivers and harbours, rainy boulevards and people in dappled sunlight.',
    example: 'water lilies like Monet',
    gemUrl: 'https://gemini.google.com/gem/13T-Jn6NAme-ixueosCXPm3Vy6ioAO2rZ?usp=sharing',
    icon: <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    id: 'storybook',
    num: '05',
    title: 'Storybook',
    desc: 'Gouache picture-book paintings: cozy animal families, bedtime scenes, mid-century style and fairy tales.',
    example: 'a hedgehog baking bread in a tiny kitchen',
    gemUrl: 'https://gemini.google.com/gem/1b9_Tjoqlxg-TXV63F5YyR_zleJuV4VWs?usp=sharing',
    icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    id: 'fantasy',
    num: '06',
    title: 'Fantasy',
    desc: 'Epic fantasy oil paintings: heroes and dragons, vast castles and citadels, and dark haunted forests.',
    example: 'a knight facing a dragon',
    gemUrl: 'https://gemini.google.com/gem/1Xm0KUMbvhAjTOEM4i6FyGRjtyGIXrfJq?usp=sharing',
    icon: <Castle className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    id: 'art-nouveau',
    num: '07',
    title: 'Art Nouveau',
    desc: 'Flowing panels with halos and flowers, portraits glowing with real gold leaf, and sleek 1920s Art Deco.',
    example: 'a woman with a peacock',
    gemUrl: 'https://gemini.google.com/gem/1ztuRzLbQYD00wQEcJv4t7t07fkFHnSbU?usp=sharing',
    icon: <Flower2 className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    id: 'surreal',
    num: '08',
    title: 'Surreal',
    desc: 'One impossible idea painted with calm realism, whimsical pop surrealism, and soft pastel dreamscapes.',
    example: 'a tree in the desert, like Dali',
    gemUrl: 'https://gemini.google.com/gem/1Y74CKOKmSIClZS0RLjHYNP-iTErAWbTP?usp=sharing',
    icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    id: 'game-art',
    num: '09',
    title: 'Game Art',
    desc: 'Stylized hand-painted game art: heroes in action, huge monsters and colourful fantasy game worlds.',
    example: 'an orc warrior with a giant axe',
    gemUrl: 'https://gemini.google.com/gem/1Hsb5rONaO35eTbNv3m2NkRio5OBsn2ml?usp=sharing',
    icon: <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    id: 'modern-art',
    num: '10',
    title: 'Modern Art',
    desc: 'Cubist portraits, geometric and expressive abstraction, boho wall art and bold fauvist colour.',
    example: 'a fox in a summer garden',
    gemUrl: 'https://gemini.google.com/gem/1DoND0p21OJBGCfP4RWE5d-luOPPSTzQw?usp=sharing',
    icon: <Shapes className="w-5 h-5 sm:w-6 sm:h-6" />
  }
];

export const PaintingGemsView: React.FC<PaintingGemsViewProps> = ({
  onBackToResources,
  onGoToSkills,
  onTriggerToast
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    onTriggerToast('Example copied to clipboard!');
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 animate-rise">
      
      {/* Top back navigation link */}
      <div className="mb-4">
        <button
          onClick={onBackToResources}
          className="inline-flex items-center gap-1.5 text-sm sm:text-base text-[#a89dc6] hover:text-[#ece9f7] font-medium transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Resources</span>
        </button>
      </div>

      {/* Header section matching exact design */}
      <header className="flex flex-col gap-4 sm:gap-5 mb-7 sm:mb-8">
        
        {/* Top Row: Left Heading & Right Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-tight text-white">
              Painting <span className="text-[#8b5cff] drop-shadow-[0_0_20px_rgba(139,92,255,0.55)]">Gemini Gems</span>
            </h1>
            <p className="text-sm sm:text-base text-[#a89dc6] mt-1.5 sm:mt-2">
              <span className="text-[#ffcf4a] font-bold">10 free</span> prompt writers for painting styles in Nano Banana
            </p>
          </div>

          {/* Top Right Action Buttons */}
          <div className="flex items-center gap-3 flex-wrap flex-shrink-0">
            <a
              href="https://flow.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-xl sm:rounded-2xl bg-[#8b5cff] hover:bg-[#7440e6] text-white font-bold text-sm sm:text-base transition-all shadow-[0_4px_20px_rgba(139,92,255,0.4)] hover:shadow-[0_6px_25px_rgba(139,92,255,0.65)] hover:-translate-y-0.5"
            >
              <span>Open Google Flow</span>
              <ExternalLink className="w-4 h-4 stroke-[2.2]" />
            </a>

            <a
              href="https://www.youtube.com/@AI2Play"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-11 sm:h-12 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-[#161029] border border-[#2b2247] hover:border-[#8b5cff] text-white font-bold text-sm sm:text-base transition-all hover:bg-[#1d1636]"
            >
              <img 
                src="/assets/aistudio/SaungDigital_757c12af.png" 
                alt="SaungDigital" 
                className="w-7 h-5 sm:w-8 sm:h-6 object-contain filter drop-shadow-[0_0_8px_rgba(255,207,74,0.5)]" 
              />
              <span>SaungDigital</span>
            </a>
          </div>
        </div>

        {/* Full-width Notice Banner: Gems are ending */}
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 p-3.5 sm:px-4 sm:py-3.5 rounded-2xl bg-[#ffcf4a]/8 border border-[#ffcf4a]/30 shadow-[0_4px_20px_rgba(255,207,74,0.06)]">
          <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#ffcf4a]/15 text-[#ffcf4a] grid place-items-center flex-shrink-0">
              <Calendar className="w-5 h-5" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-[13px] text-[#ece9f7] leading-relaxed">
                <strong className="text-[#ffcf4a] font-bold">Gems are ending.</strong> Google makes Gems on personal accounts read only on November 17, 2026, and removes them on December 17. All ten painting styles are now in one free Gemini skill: Painting Studio.
              </p>
            </div>
          </div>

          <button
            onClick={onGoToSkills}
            className="flex-shrink-0 self-start md:self-auto inline-flex items-center gap-1.5 h-9 sm:h-10 px-3 sm:px-3.5 rounded-xl border border-[#ffcf4a] text-[#ffcf4a] hover:bg-[#ffcf4a] hover:text-[#1a1030] text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-[0_2px_10px_rgba(255,207,74,0.15)]"
          >
            <span>Get Painting Studio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </header>

      {/* 10 Cards Grid:
          - lg:grid-cols-5 (exactly 5 columns on desktop/laptop: Row 1 = 01..05, Row 2 = 06..10, perfectly balanced!)
          - sm:grid-cols-2 (exactly 2 columns on tablet/mobile: 5 balanced rows of 2!)
          - grid-cols-1 (on mobile screens)
          NEVER use grid-cols-3 or 4 which leaves orphan stranded cards!
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4.5 mb-8">
        {PAINTING_GEMS.map((gem) => {
          const isCopied = copiedId === gem.id;

          return (
            <div
              key={gem.id}
              className="flex flex-col justify-between rounded-2xl p-4 sm:p-5 bg-[#161029] border border-[#2b2247] hover:border-[#8b5cff]/60 hover:shadow-[0_6px_20px_rgba(139,92,255,0.15)] transition-all duration-200"
            >
              {/* Top part of card */}
              <div>
                {/* Card Header: Icon, Title, and Number */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#8b5cff]/15 text-[#b39bff] grid place-items-center flex-shrink-0">
                    {gem.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#ece9f7] leading-snug flex-1 truncate">
                    {gem.title}
                  </h3>

                  <span className="text-lg sm:text-xl font-extrabold text-[#6f6494] tracking-tight">
                    {gem.num}
                  </span>
                </div>

                {/* Description with consistent height to align example boxes */}
                <p className="text-xs sm:text-[13px] text-[#a89dc6] leading-relaxed mb-3.5 min-h-[56px] sm:min-h-[62px]">
                  {gem.desc}
                </p>
              </div>

              {/* Bottom part of card: Example Box & Open Gem Button */}
              <div>
                {/* Example Box */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#100b20] border border-[#2b2247] mb-3 flex items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <span className="block text-[9px] sm:text-[9.5px] font-bold tracking-[1.5px] uppercase text-[#ffcf4a] mb-1">
                      EXAMPLE
                    </span>
                    <p className="text-xs text-[#ece9f7] leading-snug line-clamp-2 min-h-[32px] flex items-center">
                      {gem.example}
                    </p>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(gem.id, gem.example)}
                    className={`w-8 h-8 sm:w-8.5 sm:h-8.5 flex-shrink-0 grid place-items-center rounded-lg border transition-all cursor-pointer ${
                      isCopied
                        ? 'border-[#3ecf8e] text-[#3ecf8e] bg-[#3ecf8e]/10'
                        : 'border-[#3a2f5e] bg-[#1d1636] text-[#c4b3ff] hover:border-[#8b5cff] hover:text-white'
                    }`}
                    aria-label="Copy example prompt"
                    title="Copy example prompt"
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-[#3ecf8e]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Open Gem Button (Solid Yellow `#ffcf4a` matching screenshot) */}
                <a
                  href={gem.gemUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 h-10 sm:h-11 rounded-xl bg-[#ffcf4a] hover:bg-[#ffd965] text-[#161029] text-xs sm:text-sm font-extrabold transition-all cursor-pointer shadow-[0_2px_12px_rgba(255,207,74,0.25)] hover:shadow-[0_4px_16px_rgba(255,207,74,0.45)] hover:-translate-y-0.5"
                >
                  <span>Open Gem</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>

            </div>
          );
        })}
      </div>

      {/* 4 Steps Guide Bar at bottom matching exact Screenshot (3).png */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        
        {/* Step 1 */}
        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#161029] border border-[#2b2247]">
          <div className="w-9 h-9 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.4)]">
            1
          </div>
          <div>
            <div className="text-sm font-bold text-white">
              Copy an example
            </div>
            <div className="text-xs text-[#a89dc6] mt-0.5">
              Use the copy button on any card, or skip it if you have your own idea.
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <a
          href="https://gemini.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#161029] border border-[#2b2247] hover:border-[#8b5cff] transition-colors group"
        >
          <div className="w-9 h-9 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.4)]">
            2
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white flex items-center justify-between">
              <span>Open the Gem</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#a89dc6] group-hover:text-[#ffcf4a] transition-colors" />
            </div>
            <div className="text-xs text-[#a89dc6] mt-0.5">
              Sign in with your Google account, then paste the example or type your own idea.
            </div>
          </div>
        </a>

        {/* Step 3 */}
        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#161029] border border-[#2b2247]">
          <div className="w-9 h-9 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.4)]">
            3
          </div>
          <div>
            <div className="text-sm font-bold text-white">
              Copy the prompt it writes
            </div>
            <div className="text-xs text-[#a89dc6] mt-0.5">
              Want a change? Say "make it night" or "more gold".
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <a
          href="https://flow.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#161029] border border-[#2b2247] hover:border-[#8b5cff] transition-colors group"
        >
          <div className="w-9 h-9 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.4)]">
            4
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white flex items-center justify-between">
              <span>Paste in Google Flow</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#a89dc6] group-hover:text-[#ffcf4a] transition-colors" />
            </div>
            <div className="text-xs text-[#a89dc6] mt-0.5">
              Pick Nano Banana and your ratio, then generate.
            </div>
          </div>
        </a>

      </div>

      {/* Footer matching exact screenshot */}
      <footer className="pt-4 border-t border-[#2b2247]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#6f6494] text-center sm:text-left">
        <p>
          Free to use with a Google account. Gemini, Google Flow and Nano Banana are Google products; SaungDigital is not affiliated with Google.
        </p>
        <span className="font-semibold text-[#8b5cff] whitespace-nowrap">
          SaungDigital &middot; Painting Prompt Collection
        </span>
      </footer>

    </div>
  );
};
