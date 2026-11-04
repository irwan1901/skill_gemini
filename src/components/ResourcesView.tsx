import React, { useState, useMemo } from 'react';
import { Tutorial } from '../types';
import { TUTORIALS_DATA, COMMUNITY_TOOLS, HUB_LINKS } from '../data/ai2playData';
import { 
  Search, 
  Layers, 
  Box, 
  Ghost, 
  Palette, 
  Camera, 
  Shapes, 
  Type, 
  UserRound, 
  Code, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  SlidersHorizontal,
  Flame
} from 'lucide-react';

interface ResourcesViewProps {
  onBackToHome: () => void;
  onSelectTutorial: (tutorial: Tutorial) => void;
  onOpenConsistentCharacters?: () => void;
  onOpenGeminiSkills?: () => void;
  onOpenNanoBanana?: () => void;
  onOpenHalloween?: () => void;
  onOpenPaintingGems?: () => void;
  onOpenPhotographyGems?: () => void;
  onOpenIconArtStyles?: () => void;
  onOpenTypographyArtStyles?: () => void;
  onOpenCharacterArtStyles?: () => void;
  onOpenPhotoshopPlugin?: () => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ 
  onBackToHome, 
  onSelectTutorial,
  onOpenConsistentCharacters,
  onOpenGeminiSkills,
  onOpenNanoBanana,
  onOpenHalloween,
  onOpenPaintingGems,
  onOpenPhotographyGems,
  onOpenIconArtStyles,
  onOpenTypographyArtStyles,
  onOpenCharacterArtStyles,
  onOpenPhotoshopPlugin
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter tutorials based on search query and category
  const filteredTutorials = useMemo(() => {
    return TUTORIALS_DATA.filter((tutorial) => {
      const matchesSearch = 
        tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutorial.ep.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutorial.prompts.some(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.promptText.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = 
        selectedCategory === 'All' || 
        tutorial.category === selectedCategory ||
        (selectedCategory === 'Gemini' && (tutorial.category === 'Gemini Skills' || tutorial.category === 'Gemini Gems'));

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getTutorialIcon = (iconType: string) => {
    switch (iconType) {
      case 'layers': return <Layers className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'box': return <Box className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'ghost': return <Ghost className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'palette': return <Palette className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'camera': return <Camera className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'shapes': return <Shapes className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'type': return <Type className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'user-round': return <UserRound className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'code': return <Code className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'sparkles': return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />;
      default: return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
      
      {/* Top back navigation button */}
      <div className="mb-6 sm:mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-[#a89dc6] hover:text-[#ece9f7] hover:border-[#8b5cff] text-sm font-semibold px-4 py-2 bg-[#161029] border border-[#2b2247] rounded-xl transition-all shadow-[0_2px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_15px_rgba(139,92,255,0.3)] group cursor-pointer"
        >
          <span className="text-base group-hover:-translate-x-1 transition-transform">&larr;</span>
          <span>SaungDigital Home</span>
        </button>
      </div>

      {/* Header section */}
      <header className="text-center mb-10 sm:mb-14 flex flex-col items-center">
        <div 
          onClick={onBackToHome}
          className="w-36 sm:w-48 h-auto mx-auto mb-5 sm:mb-6 cursor-pointer filter drop-shadow-[0_8px_24px_rgba(255,207,74,0.4)] hover:drop-shadow-[0_10px_32px_rgba(255,207,74,0.65)] hover:scale-105 transition-all duration-300"
        >
          <img 
            src="/assets/aistudio/SaungDigital_757c12af.png" 
            alt="SaungDigital logo" 
            className="w-full h-auto object-contain"
          />
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-[#ece9f7]">
          Saung<span className="text-[#ffcf4a] drop-shadow-[0_0_15px_rgba(255,207,74,0.6)]">Digital</span>{' '}
          <span className="text-[#8b5cff] drop-shadow-[0_0_20px_rgba(139,92,255,0.5)]">Resources</span>
        </h1>

        <p className="text-[#a89dc6] text-base sm:text-lg max-w-[640px] mx-auto leading-relaxed px-2">
          Free resources, prompt collections, and downloads from my AI &amp; creative tutorials. Pick a tutorial below to open its resources.
        </p>

        <a
          href={HUB_LINKS.youtubeAI2Play}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 h-[46px] px-6 mt-6 sm:mt-7 bg-[#8b5cff] hover:bg-[#7440e6] text-white rounded-xl text-sm sm:text-base font-bold transition-all shadow-[0_4px_20px_rgba(139,92,255,0.4)] hover:shadow-[0_6px_25px_rgba(139,92,255,0.6)] hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-8z" />
            <path d="M10 9l5 3l-5 3z" />
          </svg>
          Watch on YouTube
        </a>
      </header>

      {/* Interactive Search & Filter Controls */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          
          {/* Search bar */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a89dc6]" />
            <input
              type="text"
              placeholder="Search tutorials, prompts, or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#161029] border border-[#2b2247] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#ece9f7] placeholder-[#6f6494] focus:outline-none focus:border-[#8b5cff] focus:ring-1 focus:ring-[#8b5cff] transition-all shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#a89dc6] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Stats Banner */}
          <div className="flex items-center gap-3 text-xs text-[#a89dc6] self-start sm:self-auto bg-[#161029]/60 px-3.5 py-2 rounded-xl border border-[#2b2247]">
            <span className="flex items-center gap-1.5 text-[#ffcf4a] font-semibold">
              <Flame className="w-3.5 h-3.5" />
              {TUTORIALS_DATA.length} Guides Available
            </span>
            <span>&bull;</span>
            <span>Instant Copy Ready</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold no-scrollbar">
          <span className="text-[#6f6494] flex items-center gap-1 pl-1 pr-2">
            <SlidersHorizontal className="w-3 h-3" />
            Filter:
          </span>
          {['All', 'Google Flow', 'Gemini Skills', 'Gemini Gems', 'Claude AI'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#8b5cff] text-white shadow-[0_0_12px_rgba(139,92,255,0.4)]'
                  : 'bg-[#161029] text-[#a89dc6] border border-[#2b2247] hover:border-[#8b5cff]/60 hover:text-[#ece9f7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tutorials Section */}
      <section className="mb-14">
        <div className="flex items-center gap-4 text-xs font-bold tracking-[3px] uppercase text-[#a89dc6] mb-4.5">
          <span>Tutorials</span>
          <span className="text-[11px] text-[#ffcf4a] font-mono tracking-normal">
            ({filteredTutorials.length})
          </span>
          <div className="flex-1 h-px bg-[#2b2247]" />
        </div>

        {filteredTutorials.length === 0 ? (
          <div className="text-center py-12 bg-[#161029]/40 border border-[#2b2247] rounded-2xl">
            <p className="text-[#a89dc6] text-sm">No tutorials found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-[#8b5cff] hover:underline font-semibold"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2.5">
            {filteredTutorials.map((tutorial, index) => (
              <div
                key={tutorial.id}
                onClick={() => {
                  if (tutorial.id === 'consistent-characters' && onOpenConsistentCharacters) {
                    onOpenConsistentCharacters();
                  } else if (tutorial.id === 'gemini-skills' && onOpenGeminiSkills) {
                    onOpenGeminiSkills();
                  } else if (tutorial.id === 'nano-banana-2-1-beginners' && onOpenNanoBanana) {
                    onOpenNanoBanana();
                  } else if (tutorial.id === 'halloween-nano-banana' && onOpenHalloween) {
                    onOpenHalloween();
                  } else if (tutorial.id === 'gemini-painting-gems' && onOpenPaintingGems) {
                    onOpenPaintingGems();
                  } else if ((tutorial.id === 'gemini-photography-gems' || tutorial.id === 'photography-gems') && onOpenPhotographyGems) {
                    onOpenPhotographyGems();
                  } else if (tutorial.id === 'icon-art-styles' && onOpenIconArtStyles) {
                    onOpenIconArtStyles();
                  } else if (tutorial.id === 'typography-art-styles' && onOpenTypographyArtStyles) {
                    onOpenTypographyArtStyles();
                  } else if (tutorial.id === 'character-art-styles' && onOpenCharacterArtStyles) {
                    onOpenCharacterArtStyles();
                  } else if (tutorial.id === 'vibe-code-photoshop-plugin' && onOpenPhotoshopPlugin) {
                    onOpenPhotoshopPlugin();
                  } else {
                    onSelectTutorial(tutorial);
                  }
                }}
                style={{ animationDelay: `${index * 0.04}s` }}
                className="group flex items-center gap-3.5 sm:gap-4.5 p-3.5 sm:px-5 sm:py-4 bg-[#161029] hover:bg-[#1d1636] border border-[#2b2247] hover:border-[#8b5cff] rounded-2xl transition-all duration-150 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(139,92,255,0.25)] hover:-translate-y-0.5"
              >
                {/* Icon box */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 grid place-items-center bg-[#8b5cff]/15 text-[#b39bff] group-hover:text-white group-hover:bg-[#8b5cff] rounded-xl transition-all duration-200">
                  {getTutorialIcon(tutorial.iconType)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pr-2">
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase text-[#ffcf4a] mb-0.5 flex items-center gap-2">
                    <span>{tutorial.ep}</span>
                    {tutorial.promptsCount && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#8b5cff]/20 text-[#c4b3ff] font-mono tracking-normal normal-case">
                        {tutorial.promptsCount} prompts
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-[16.5px] font-semibold text-[#ece9f7] leading-snug group-hover:text-white transition-colors line-clamp-2">
                    {tutorial.title}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 flex items-center text-[#6f6494] group-hover:text-[#ffcf4a] text-xl transition-colors pl-2">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Community & Tools Section */}
      <section className="mb-14">
        <div className="flex items-center gap-4 text-xs font-bold tracking-[3px] uppercase text-[#a89dc6] mb-4.5">
          <span>Community &amp; Tools</span>
          <div className="flex-1 h-px bg-[#2b2247]" />
        </div>

        <div className="flex flex-col gap-2.5">
          {COMMUNITY_TOOLS.map((tool) => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3.5 sm:gap-4.5 p-3.5 sm:px-5 sm:py-4 bg-[#161029] hover:bg-[#1d1636] border border-[#2b2247] hover:border-[#8b5cff] rounded-2xl transition-all duration-150 shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(139,92,255,0.25)] hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 grid place-items-center bg-[#8b5cff]/15 text-[#b39bff] group-hover:text-white group-hover:bg-[#8b5cff] rounded-xl transition-all duration-200">
                {tool.id === 'discord' ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                    <path d="M19.5 5.5A16 16 0 0 0 15.5 4l-.3.5a13 13 0 0 1 3.5 1.7 12 12 0 0 0-10.4 0A13 13 0 0 1 11.8 4.5L11.5 4A16 16 0 0 0 7.5 5.5C5 9 4.3 12.4 4.6 15.8A16 16 0 0 0 9 18l.6-1c-.7-.2-1.3-.5-1.9-.9l.5-.3a11 11 0 0 0 9.6 0l.5.3c-.6.4-1.2.7-1.9.9l.6 1a16 16 0 0 0 4.4-2.2c.4-4-.7-7.4-2.9-10.3zM9.8 13.9c-.8 0-1.4-.7-1.4-1.6s.6-1.6 1.4-1.6 1.4.7 1.4 1.6-.6 1.6-1.4 1.6zm4.4 0c-.8 0-1.4-.7-1.4-1.6s.6-1.6 1.4-1.6 1.4.7 1.4 1.6-.6 1.6-1.4 1.6z"/>
                  </svg>
                ) : (
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </div>

              <div className="flex-1 min-w-0 pr-2">
                <div className="text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase text-[#ffcf4a] mb-0.5">
                  {tool.ep}
                </div>
                <h3 className="text-sm sm:text-[16.5px] font-semibold text-[#ece9f7] leading-snug group-hover:text-white transition-colors">
                  {tool.title}
                </h3>
              </div>

              <div className="flex-shrink-0 flex items-center text-[#6f6494] group-hover:text-[#ffcf4a] text-lg pl-2">
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 pt-9 border-t border-[#2b2247] text-center text-[#a89dc6] text-sm">
        <div>
          Made by{' '}
          <a
            href={HUB_LINKS.youtubeAI2Play}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b5cff] hover:text-[#a98cff] font-semibold underline decoration-[#8b5cff]/40"
          >
            SaungDigital
          </a>{' '}
          &middot; Subscribe for more AI &amp; creative tutorials
        </div>
        <div className="mt-3 text-xs text-[#6f6494]">
          Not affiliated with, endorsed by, or sponsored by Adobe. Adobe and Photoshop are trademarks of Adobe Inc.
        </div>
      </footer>

    </div>
  );
};
