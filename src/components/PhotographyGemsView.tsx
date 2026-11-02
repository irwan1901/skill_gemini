import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { PhotographyGem, getStoredPhotographyGems } from '../data/adminStore';

interface PhotographyGemsViewProps {
  onBackToResources: () => void;
  onGoToSkills?: () => void;
  onTriggerToast: (msg: string) => void;
}

const PHOTOGRAPHY_GEMS: PhotographyGem[] = [
  {
    num: '01',
    prefix: 'Food',
    suffix: 'Photography',
    icon: '🍽️',
    desc: 'Mouthwatering food photos with perfect styling, steam, textures, and appetite appeal, from bright and airy to dark and moody.',
    gemUrl: 'https://gemini.google.com/gem/1bcDFgVU6EcUeBrjm86rPAmft24gqn96x?usp=sharing',
    samplePrompt: 'A close-up artisanal smash burger with melting aged cheddar, crispy edges, caramelized onions, brioche bun with glistening sesame seeds, shallow depth of field, warm directional kitchen lighting, f/2.8.'
  },
  {
    num: '02',
    prefix: 'Interior',
    suffix: 'Photography',
    icon: '🛋️',
    desc: 'Beautiful room and space photos with realistic materials, architectural detail, and atmospheric lighting from minimal to cozy.',
    gemUrl: 'https://gemini.google.com/gem/1T5mNRQ8pPYMaQQ4VGbgbPFrHZLvUDXLA?usp=sharing',
    samplePrompt: 'Sunlit modern Japandi living room with light oak floors, beige linen sofa, ceramic vase with dried pampas grass, large architectural arched window, morning golden hour light rays, 24mm tilt-shift lens.'
  },
  {
    num: '03',
    prefix: 'Macro',
    suffix: 'Photography',
    icon: '🔬',
    desc: 'Extreme close-up shots revealing hidden micro worlds across insects, jewelry, botanicals, textures, and everyday objects.',
    gemUrl: 'https://gemini.google.com/gem/17rSeKdjGw0szfSvVKUuBjYcFKu_SDxyD?usp=sharing',
    samplePrompt: 'Extreme macro photograph of water droplets on a deep violet peony petal, internal reflections inside the droplets, razor-sharp focus, velvety texture, diffused natural ring light, 100mm macro lens 1:1.'
  },
  {
    num: '04',
    prefix: 'Product',
    suffix: 'Photography',
    icon: '📦',
    desc: 'Commercial-grade product shots with precise material rendering, studio lighting setups, and lifestyle context for any item.',
    gemUrl: 'https://gemini.google.com/gem/1e0Px8t6rnjXoF7SUQUYjHO7VBxg3KTUd?usp=sharing',
    samplePrompt: 'Luxury glass skincare serum bottle on frosted stone pedestal, soft pastel gradient backdrop, subtle water ripple reflections, crisp studio softbox lighting, high-end beauty advertising photograph.'
  },
  {
    num: '05',
    prefix: 'Mockup',
    suffix: 'Photography',
    icon: '🏷️',
    desc: 'Realistic product photos with clean blank surfaces ready for logo, label, or design placement in post-production.',
    gemUrl: 'https://gemini.google.com/gem/156swAAtLgWjmsAujblGiAhVyLFLb98mZ?usp=sharing',
    samplePrompt: 'Clean blank ceramic coffee mug mockup sitting on a light wooden cafe table next to a notebook and fresh croissant, soft morning window light, high resolution, empty center for logo placement.'
  },
  {
    num: '06',
    prefix: 'Still Life',
    suffix: 'Photography',
    icon: '🎨',
    desc: 'Artful object arrangements with tactile materials, intentional composition, and lighting from Dutch masters to modern editorial.',
    gemUrl: 'https://gemini.google.com/gem/1Xx27Co5TSpwLEdpLJ6YgrDvpBvMEVdso?usp=sharing',
    samplePrompt: 'Chiaroscuro still life composition inspired by Dutch masters, antique brass candlestick, sliced blood oranges, dark draped velvet fabric, delicate smoke plume, moody directional candle illumination.'
  },
  {
    num: '07',
    prefix: 'Flat Lay',
    suffix: 'Photography',
    icon: '📐',
    desc: 'Perfectly styled top-down arrangements across lifestyle, workspace, food, travel, and seasonal themes on textured surfaces.',
    gemUrl: 'https://gemini.google.com/gem/1mGq7yEWypxrb9FhwgJSwoXMrdByR7eq_?usp=sharing',
    samplePrompt: 'Overhead 90-degree flat lay of a minimalist creative workspace, vintage mechanical camera, leather journal, brass pen, ceramic mug with latte art, textured slate grey background, balanced grid layout.'
  },
  {
    num: '08',
    prefix: 'Travel',
    suffix: 'Photography',
    icon: '✈️',
    desc: 'Authentic sense of place with cultural detail, local atmosphere, and environmental storytelling from street level to epic vistas.',
    gemUrl: 'https://gemini.google.com/gem/1muB02o2LMN1vnRccUb_vNwOmBaqqwNVi?usp=sharing',
    samplePrompt: 'Atmospheric travel photograph of a cobblestone alley in Kyoto during light evening rain, glowing red paper lanterns, traditional wooden machiya houses, reflections on wet stone pavement, 35mm film aesthetic.'
  },
  {
    num: '09',
    prefix: 'Landscape',
    suffix: 'Photography',
    icon: '🏔️',
    desc: 'Breathtaking natural scenery with layered depth, dramatic skies, and terrain detail across all seasons and weather conditions.',
    gemUrl: 'https://gemini.google.com/gem/1aH5IkfwsIVfq5s-cly-bXkmwn6tDXHn2?usp=sharing',
    samplePrompt: 'Panoramic view of rugged alpine peaks at sunrise, dramatic low-hanging valley mist, crystal alpine glacial lake with mirror reflections, crisp morning light illuminating mountain summits, f/11.'
  },
  {
    num: '10',
    prefix: 'Cinematic',
    suffix: 'Photography',
    icon: '🎬',
    desc: 'Movie-still-quality frames with narrative tension, production design, film texture, and genre-specific color grading.',
    gemUrl: 'https://gemini.google.com/gem/19AHIvs7z5M9nGHKn2pLHW2CEKyGmlfiJ?usp=sharing',
    samplePrompt: 'Cinematic 35mm film still of a solitary figure in a trench coat on a neon-lit futuristic cyberpunk street corner, volumetric blue and amber haze, anamorphic lens flares, Kodak Vision3 500T color grade.'
  }
];

export const PhotographyGemsView: React.FC<PhotographyGemsViewProps> = ({
  onBackToResources,
  onTriggerToast
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [gemsList, setGemsList] = useState<PhotographyGem[]>(getStoredPhotographyGems());

  useEffect(() => {
    const handleUpdate = () => setGemsList(getStoredPhotographyGems());
    window.addEventListener('saungdigital_data_updated', handleUpdate);
    return () => window.removeEventListener('saungdigital_data_updated', handleUpdate);
  }, []);

  const handleCopyLink = (gem: PhotographyGem, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(gem.gemUrl);
    setCopiedId(gem.num);
    onTriggerToast(`${gem.prefix} Photography Gem link copied!`);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleCopyPrompt = (gem: PhotographyGem, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(gem.samplePrompt);
    setCopiedId(`prompt-${gem.num}`);
    onTriggerToast(`${gem.prefix} sample prompt copied!`);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0c0714] text-[#ece9f7] overflow-hidden selection:bg-[#8b5cff]/40 selection:text-white pb-16">
      
      {/* Background radial glow matching ai2play.net/photography-gems.html */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[18%] left-[18%] w-[650px] h-[650px] bg-[#8b5cff]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[700px] h-[700px] bg-[#8b5cff]/12 rounded-full blur-[160px]" />
      </div>

      {/* Floating particles matching Screenshot 9 */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[15%] left-[8%] w-1.5 h-1.5 rounded-full bg-[#8b5cff] opacity-40 animate-pulse shadow-[0_0_10px_#8b5cff]" />
        <div className="absolute top-[70%] left-[5%] w-2 h-2 rounded-full bg-[#c9a0ff] opacity-50 animate-bounce shadow-[0_0_12px_#c9a0ff]" style={{ animationDuration: '6s' }} />
        <div className="absolute top-[25%] right-[5%] w-1.5 h-1.5 rounded-full bg-[#8b5cff] opacity-40 animate-pulse shadow-[0_0_10px_#8b5cff]" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[80%] right-[8%] w-2 h-2 rounded-full bg-[#c9a0ff] opacity-50 animate-bounce shadow-[0_0_12px_#c9a0ff]" style={{ animationDuration: '7s' }} />
        <div className="absolute top-[50%] left-[50%] w-1.5 h-1.5 rounded-full bg-[#8b5cff] opacity-35" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10 pt-8 sm:pt-10">
        
        {/* Header matching Screenshot 9 */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 sm:mb-10">
          <div className="flex-1">
            {/* Back link */}
            <button
              onClick={onBackToResources}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider text-[#a89dc6] hover:text-[#8b5cff] uppercase transition-all mb-3 group cursor-pointer"
            >
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
              <span>Back to resources</span>
            </button>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.05] text-white uppercase">
              Photography <span className="text-[#8b5cff] drop-shadow-[0_0_24px_rgba(139,92,255,0.6)]">Google Gems</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm tracking-[2.5px] uppercase font-light text-[#c9b6e4] mt-2">
              10 Prompt Generators for Realistic Photography
            </p>
          </div>

          {/* AI2Play Badge on the right */}
          <a
            href="https://www.youtube.com/@AI2Play"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-center inline-flex items-center gap-2.5 px-4 py-2 border-2 border-[#8b5cff] rounded-full text-xs font-bold tracking-[1.5px] text-[#8b5cff] uppercase bg-[#8b5cff]/[0.05] hover:bg-[#8b5cff]/20 hover:border-[#a98cff] hover:text-[#cbb8ff] transition-all shadow-[0_0_18px_rgba(139,92,255,0.25)] hover:shadow-[0_0_24px_rgba(139,92,255,0.4)] group shrink-0"
          >
            <img 
              src="/assets/aistudio/SaungDigital_757c12af.png" 
              alt="SaungDigital" 
              className="w-7 h-5 sm:w-8 sm:h-6 object-contain group-hover:scale-110 transition-transform"
            />
            <span>SaungDigital</span>
          </a>
        </header>

        {/* ========================================================
            GRID OF 10 PHOTOGRAPHY GEMS (2 columns x 5 rows)
            Matching Screenshot 9 & ai2play.net/photography-gems.html
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-7">
          {gemsList.map((gem) => {
            const isLinkCopied = copiedId === gem.num;
            const isPromptCopied = copiedId === `prompt-${gem.num}`;

            return (
              <a
                key={gem.num}
                href={gem.gemUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-[#2a134a]/60 to-[#160a2c]/80 border border-[#8b5cff]/20 hover:border-[#8b5cff]/55 rounded-[22px] p-6 sm:p-7 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_50px_rgba(139,92,255,0.25)] transition-all duration-300 hover:-translate-y-1 overflow-hidden block text-inherit no-underline"
              >
                {/* Big watermark number top right (e.g. 01, 02, ..., 10) */}
                <div className="absolute top-4 right-5 text-4xl sm:text-5xl font-black text-white/[0.06] select-none pointer-events-none leading-none">
                  {gem.num}
                </div>

                <div className="flex items-start gap-4 sm:gap-5 mb-3.5">
                  {/* Icon box with gradient & float effect */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-gradient-to-br from-[#8b5cff] to-[#6a2fe0] shadow-[0_8px_20px_rgba(139,92,255,0.3)] flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-105 transition-transform duration-300">
                    <span>{gem.icon}</span>
                  </div>

                  {/* Title */}
                  <div className="flex-1 pr-10">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#cbb8ff] transition-colors leading-tight">
                      {gem.prefix} <span className="text-[#ffcf4a] not-italic">{gem.suffix}</span>
                    </h3>
                    <p className="text-xs text-[#a89dc6] mt-1 flex items-center gap-1.5 font-mono">
                      <span>Gem #{gem.num}</span>
                      <span>&bull;</span>
                      <span className="text-purple-300/80 group-hover:text-purple-200">Open in Gemini &rarr;</span>
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#d4c2ec] font-light leading-relaxed mb-4">
                  {gem.desc}
                </p>

                {/* Action buttons inside card */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#a89dc6]">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleCopyPrompt(gem, e)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                        isPromptCopied 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-[#1e1338] hover:bg-[#2b1c4e] text-[#cbb8ff] border border-[#3c2a68]'
                      }`}
                      title="Copy sample prompt for this photography style"
                    >
                      {isPromptCopied ? <Check className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5 text-[#ffcf4a]" />}
                      <span>{isPromptCopied ? 'Prompt Copied!' : 'Copy Sample Prompt'}</span>
                    </button>

                    <button
                      onClick={(e) => handleCopyLink(gem, e)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                        isLinkCopied 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-[#1e1338] hover:bg-[#2b1c4e] text-[#a89dc6] hover:text-white border border-[#3c2a68]'
                      }`}
                      title="Copy Google Gem URL"
                    >
                      {isLinkCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isLinkCopied ? 'Link Copied!' : 'Copy Link'}</span>
                    </button>
                  </div>

                  <span className="text-xs text-[#ffcf4a] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Open Gem</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* ========================================================
            FLOW CTA BANNER MATCHING SCREENSHOT 9
           ======================================================== */}
        <a
          href="https://flow.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row items-center gap-5 p-5 sm:p-6 bg-gradient-to-r from-[#8b5cff]/15 via-[#ff9d00]/10 to-[#8b5cff]/10 hover:from-[#8b5cff]/25 hover:via-[#ff9d00]/18 hover:to-[#8b5cff]/18 border border-[#8b5cff]/40 hover:border-[#8b5cff]/70 rounded-[22px] transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(139,92,255,0.1)] hover:shadow-[0_16px_40px_rgba(139,92,255,0.2)] mb-8 text-inherit no-underline"
        >
          {/* Flow Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-gradient-to-br from-[#8b5cff] to-[#6a2fe0] shadow-[0_8px_20px_rgba(139,92,255,0.3)] flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-105 transition-transform">
            🖼️
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <div className="text-xs font-bold tracking-[2px] uppercase text-[#ffcf4a] mb-1">
              Bonus Tip
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mb-1">
              Use Nano Banana inside <span className="text-[#ffcf4a] not-italic">Google Flow</span>
            </div>
            <p className="text-xs sm:text-sm text-[#d4c2ec] font-light">
              Paste the generated prompts into Flow to create AI images with Nano Banana.
            </p>
          </div>

          {/* Arrow */}
          <div className="text-2xl sm:text-3xl text-[#8b5cff] group-hover:text-[#ffcf4a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0">
            <ArrowUpRight className="w-7 h-7" />
          </div>
        </a>

        {/* ========================================================
            FOOTER MATCHING SCREENSHOT 9
           ======================================================== */}
        <footer className="pt-6 pb-4 border-t border-[#8b5cff]/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#9b83c4]">
          <div className="font-light text-center sm:text-left">
            Click any gem to open it in Google Gemini
          </div>
          <div className="font-semibold text-center sm:text-right">
            <span className="text-[#8b5cff] font-bold">SaungDigital</span> &middot; Photography Prompt Collection
          </div>
        </footer>

      </div>
    </div>
  );
};
