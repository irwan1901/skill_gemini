import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Copy, 
  Check, 
  Download, 
  Star, 
  BookOpen, 
  User, 
  Layers, 
  Palette
} from 'lucide-react';

interface ConsistentCharactersViewProps {
  onBackToResources: () => void;
  onTriggerToast: (msg: string) => void;
  onGoToCharacterStyles?: () => void;
}

interface SkillCard {
  id: string;
  num: string;
  title: string;
  desc: string;
  typeLabel: string;
  prompt: string;
  icon: 'star' | 'book' | 'user' | 'layers';
  downloadFilename?: string;
  isTip?: boolean;
}

const SKILL_CARDS: SkillCard[] = [
  {
    id: 'character-creator',
    num: '01',
    title: 'Character Creator',
    desc: 'Turns your idea into one clean design: the whole character on a plain background, in one of 35 art styles. Save the character card it writes.',
    typeLabel: 'TYPE @CHARACTER-CREATOR, THEN',
    prompt: 'a little otter sailor in the Soft Heroic Game style. Follow the skill\'s steps.',
    icon: 'star',
    downloadFilename: 'character-creator.zip'
  },
  {
    id: 'character-sheet',
    num: '02',
    title: 'Character Sheet',
    desc: 'Attach your character\'s image and get one sheet: the front, the side and the back, plus three faces, the same design in every view.',
    typeLabel: 'ATTACH THE IMAGE, TYPE @CHARACTER-SHEET, THEN',
    prompt: 'make a character sheet of this character',
    icon: 'book',
    downloadFilename: 'character-sheet.zip'
  },
  {
    id: 'same-character',
    num: '03',
    title: 'Same Character',
    desc: 'Attach the character sheet and describe a new scene: the same face, colours and outfit, in a new place, pose or outfit.',
    typeLabel: 'ATTACH THE SHEET, TYPE @SAME-CHARACTER, THEN',
    prompt: 'this character steering a small wooden sailboat at sunrise, both paws on the tiller, calm sea. Follow the skill\'s steps.',
    icon: 'user',
    downloadFilename: 'same-character.zip'
  },
  {
    id: 'combine-skills',
    num: 'TIP',
    title: 'Combine Skills',
    desc: 'Type @ twice and pick Character Creator and Character Sheet: a new character and its sheet in one message.',
    typeLabel: 'TYPE @CHARACTER-CREATOR AND @CHARACTER-SHEET, THEN',
    prompt: 'a little fox mail carrier, style 9: make the character sheet of this new character. Follow the skills\' steps.',
    icon: 'layers',
    isTip: true
  }
];

const ART_STYLES_35 = [
  { number: 1, name: "Retro Gesture Character Sketch" },
  { number: 2, name: "Dark Angular Wizard" },
  { number: 3, name: "Dark Woodland Sculpted" },
  { number: 4, name: "Gritty Inked Cartoon" },
  { number: 5, name: "Soft Heroic Game" },
  { number: 6, name: "Glossy Stylized Anime 3D" },
  { number: 7, name: "Quirky Cutout Cartoon" },
  { number: 8, name: "Whimsical Inked Storybook" },
  { number: 9, name: "Warm Minimal Chibi" },
  { number: 10, name: "Expressive Caricature Pencil Portrait" },
  { number: 11, name: "Intricate Ink Sketch Explorer" },
  { number: 12, name: "Urban Anime Streetwear" },
  { number: 13, name: "Glossy Sci-Fi Concept" },
  { number: 14, name: "Dark Ornate Armor Concept" },
  { number: 15, name: "Ultra Soft Fluffy Chibi 3D" },
  { number: 16, name: "Dreamy Luminous Storybook Painting" },
  { number: 17, name: "Expressive Painterly Caricature Portrait" },
  { number: 18, name: "Neon Dark Anime Mystic" },
  { number: 19, name: "Sun-Bleached Desert Fantasy" },
  { number: 20, name: "Ornate Dark Occult" },
  { number: 21, name: "Emerald Shadow Mystic Anime" },
  { number: 22, name: "Redline Punk Anime" },
  { number: 23, name: "Bold Tribal Blackwork Vector" },
  { number: 24, name: "Rough Ink Wildlife Sketch" },
  { number: 25, name: "Smooth Monochrome Fantasy Line Art" },
  { number: 26, name: "Samurai Noir Ink Poster" },
  { number: 27, name: "Monochrome Biomechanical Cyberpunk Ink" },
  { number: 28, name: "Grunge Punk Poster" },
  { number: 29, name: "Sepia Ink Fantasy Caricature Sketch" },
  { number: 30, name: "Grotesque Surreal Creature Concept" },
  { number: 31, name: "Vibrant Fantasy Creature Portrait" },
  { number: 32, name: "Painterly Goblin Game" },
  { number: 33, name: "Pop Surreal Streetwear Photo" },
  { number: 34, name: "Abstract Geometric Portrait Painting" },
  { number: 35, name: "Expressive Painterly Cartoon Wildlife" }
];

export const ConsistentCharactersView: React.FC<ConsistentCharactersViewProps> = ({
  onBackToResources,
  onTriggerToast,
  onGoToCharacterStyles
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedStyleNum, setCopiedStyleNum] = useState<number | null>(null);

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    onTriggerToast('Prompt copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyStyle = (style: { number: number; name: string }) => {
    navigator.clipboard.writeText(`style ${style.number}: ${style.name}`);
    setCopiedStyleNum(style.number);
    onTriggerToast(`Copied Style #${style.number}: ${style.name}`);
    setTimeout(() => setCopiedStyleNum(null), 2000);
  };

  const handleDownloadSkill = (skill: SkillCard) => {
    if (!skill.downloadFilename) return;
    
    // Create a packaged skill configuration file for Google Gemini
    const skillContent = `# Gemini Skill: ${skill.title}
# SaungDigital Character Skills Pack
# File: ${skill.downloadFilename}

SKILL_NAME: @${skill.id}
PURPOSE: ${skill.desc}

HOW TO USE IN GEMINI:
1. Open gemini.google.com
2. Go to More -> Customize -> Skills tab
3. Click "Create" or "Upload"
4. Upload this skill definition
5. In any chat prompt, call:
   ${skill.typeLabel}
   ${skill.prompt}

PROMPT TEMPLATE:
${skill.prompt}
`;

    const blob = new Blob([skillContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = skill.downloadFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onTriggerToast(`Downloading ${skill.title} skill...`);
  };

  const renderIcon = (type: SkillCard['icon']) => {
    switch (type) {
      case 'star':
        return <Star className="w-5 h-5 text-purple-400" />;
      case 'book':
        return <BookOpen className="w-5 h-5 text-purple-400" />;
      case 'user':
        return <User className="w-5 h-5 text-purple-400" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 animate-rise">
      
      {/* Top Breadcrumb Navigation */}
      <div className="mb-4">
        <button
          onClick={onBackToResources}
          className="inline-flex items-center gap-1.5 text-sm sm:text-base text-[#a89dc6] hover:text-[#ece9f7] font-medium transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Resources</span>
        </button>
      </div>

      {/* Main Title Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2">
            Consistent <span className="text-[#a78bfa] drop-shadow-[0_0_20px_rgba(167,139,250,0.5)]">Characters</span>
          </h1>
          <p className="text-sm sm:text-base">
            <span className="text-[#ffcf4a] font-bold">3 free Gemini skills</span>{' '}
            <span className="text-[#a89dc6]">to design a character, make its sheet and keep it the same in every scene</span>
          </p>
        </div>

        <div className="flex items-center gap-3 self-start lg:self-center">
          <a
            href="https://gemini.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 transition-all hover:-translate-y-0.5"
          >
            <span>Open Gemini</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#171029] border border-[#2b2247] rounded-xl text-xs font-bold text-[#ece9f7] shadow-sm">
            <img 
              src="/assets/aistudio/SaungDigital_757c12af.png" 
              alt="SaungDigital" 
              className="w-5 h-auto object-contain"
            />
            <span>Saung<span className="text-[#ffcf4a]">Digital</span></span>
          </div>
        </div>
      </div>

      {/* 4 Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {SKILL_CARDS.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col justify-between bg-[#150f28] border border-[#2a2046] hover:border-[#8b5cff]/60 rounded-2xl p-5 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(139,92,255,0.2)]"
          >
            <div>
              {/* Card Header: Icon, Title, and Number */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#231742] border border-[#3b2d61] flex items-center justify-center flex-shrink-0">
                    {renderIcon(skill.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {skill.title}
                  </h3>
                </div>

                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                  skill.isTip 
                    ? 'bg-[#8b5cff]/20 text-[#c4b5fd] border border-[#8b5cff]/30' 
                    : 'text-[#6f6494]'
                }`}>
                  {skill.num}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#a89dc6] leading-relaxed mb-4 min-h-[52px]">
                {skill.desc}
              </p>

              {/* Prompt box */}
              <div className="bg-[#0c0817] border border-[#231a3b] rounded-xl p-3 mb-4 relative group">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#ffcf4a] leading-tight">
                    {skill.typeLabel}
                  </span>
                  <button
                    onClick={() => handleCopyPrompt(skill.id, skill.prompt)}
                    className="p-1 rounded-md text-[#a89dc6] hover:text-white hover:bg-[#20163b] transition-colors cursor-pointer"
                    title="Copy prompt"
                  >
                    {copiedId === skill.id ? (
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-[#d1c8eb] font-sans leading-relaxed select-all">
                  {skill.prompt}
                </p>
              </div>
            </div>

            {/* Bottom Button */}
            {skill.isTip ? (
              <a
                href="https://gemini.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-purple-900/50 transition-all hover:-translate-y-0.5"
              >
                <span>Try it in Gemini</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                onClick={() => handleDownloadSkill(skill)}
                className="w-full py-2.5 px-4 bg-[#fbb32b] hover:bg-[#e29e1c] text-slate-950 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-md hover:shadow-amber-500/20 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Download skill</span>
                <Download className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* The 35 art styles section */}
      <div className="bg-[#150f28] border border-[#2a2046] rounded-2xl p-5 sm:p-7 mb-8 shadow-xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#261d3e]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#231742] border border-[#3b2d61] flex items-center justify-center flex-shrink-0 text-purple-400">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                The 35 art styles
              </h2>
              <p className="text-xs text-[#a89dc6] mt-0.5">
                Name a style or its number when you use Character Creator. Click one to copy its name.
              </p>
            </div>
          </div>

          {onGoToCharacterStyles && (
            <button
              onClick={onGoToCharacterStyles}
              className="inline-flex items-center gap-1.5 self-start sm:self-center px-4 py-2 bg-[#20163b] hover:bg-[#2c1f52] border border-[#3b2d61] text-[#c4b5fd] hover:text-white rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
            >
              <span>See each style with a picture</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 4-Column Grid for the 35 Styles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2 text-xs sm:text-[13px]">
          {/* Column 1: 1 - 9 */}
          <div className="space-y-1.5">
            {ART_STYLES_35.slice(0, 9).map((style) => (
              <div
                key={style.number}
                onClick={() => handleCopyStyle(style)}
                className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg hover:bg-[#21163e] cursor-pointer transition-colors group select-none"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="font-bold text-[#ffcf4a] w-5 text-right flex-shrink-0 font-mono">
                    {style.number}
                  </span>
                  <span className="text-[#ece9f7] group-hover:text-white truncate">
                    {style.name}
                  </span>
                </div>
                {copiedStyleNum === style.number ? (
                  <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                ) : (
                  <Copy className="w-3 h-3 text-[#6f6494] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Column 2: 10 - 18 */}
          <div className="space-y-1.5">
            {ART_STYLES_35.slice(9, 18).map((style) => (
              <div
                key={style.number}
                onClick={() => handleCopyStyle(style)}
                className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg hover:bg-[#21163e] cursor-pointer transition-colors group select-none"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="font-bold text-[#ffcf4a] w-5 text-right flex-shrink-0 font-mono">
                    {style.number}
                  </span>
                  <span className="text-[#ece9f7] group-hover:text-white truncate">
                    {style.name}
                  </span>
                </div>
                {copiedStyleNum === style.number ? (
                  <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                ) : (
                  <Copy className="w-3 h-3 text-[#6f6494] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Column 3: 19 - 27 */}
          <div className="space-y-1.5">
            {ART_STYLES_35.slice(18, 27).map((style) => (
              <div
                key={style.number}
                onClick={() => handleCopyStyle(style)}
                className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg hover:bg-[#21163e] cursor-pointer transition-colors group select-none"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="font-bold text-[#ffcf4a] w-5 text-right flex-shrink-0 font-mono">
                    {style.number}
                  </span>
                  <span className="text-[#ece9f7] group-hover:text-white truncate">
                    {style.name}
                  </span>
                </div>
                {copiedStyleNum === style.number ? (
                  <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                ) : (
                  <Copy className="w-3 h-3 text-[#6f6494] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Column 4: 28 - 35 */}
          <div className="space-y-1.5">
            {ART_STYLES_35.slice(27, 35).map((style) => (
              <div
                key={style.number}
                onClick={() => handleCopyStyle(style)}
                className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg hover:bg-[#21163e] cursor-pointer transition-colors group select-none"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="font-bold text-[#ffcf4a] w-5 text-right flex-shrink-0 font-mono">
                    {style.number}
                  </span>
                  <span className="text-[#ece9f7] group-hover:text-white truncate">
                    {style.name}
                  </span>
                </div>
                {copiedStyleNum === style.number ? (
                  <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                ) : (
                  <Copy className="w-3 h-3 text-[#6f6494] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Step-by-Step Instructions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Step 1 */}
        <div className="bg-[#150f28] border border-[#2a2046] rounded-xl p-4 flex items-start gap-3.5">
          <div className="w-7 h-7 rounded-full bg-[#7c3aed] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
            1
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
              Download the skills
            </h4>
            <p className="text-[11px] text-[#a89dc6] leading-relaxed">
              Keep each .zip as it is, no need to unzip it.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <a
          href="https://gemini.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#150f28] border border-[#2a2046] hover:border-[#8b5cff]/50 rounded-xl p-4 flex items-start gap-3.5 transition-colors group cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-[#7c3aed] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
            2
          </div>
          <div className="flex-1">
            <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#c4b5fd] transition-colors mb-0.5 flex items-center justify-between">
              <span>Open Gemini on a computer</span>
              <ExternalLink className="w-3 h-3 text-[#a89dc6]" />
            </h4>
            <p className="text-[11px] text-[#a89dc6] leading-relaxed">
              More, Customize, then the Skills tab.
            </p>
          </div>
        </a>

        {/* Step 3 */}
        <div className="bg-[#150f28] border border-[#2a2046] rounded-xl p-4 flex items-start gap-3.5">
          <div className="w-7 h-7 rounded-full bg-[#7c3aed] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
            3
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
              Create, Upload
            </h4>
            <p className="text-[11px] text-[#a89dc6] leading-relaxed">
              Pick a .zip, then click Create. Do it for all three.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-[#150f28] border border-[#2a2046] rounded-xl p-4 flex items-start gap-3.5">
          <div className="w-7 h-7 rounded-full bg-[#7c3aed] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
            4
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
              Type @ in a new chat
            </h4>
            <p className="text-[11px] text-[#a89dc6] leading-relaxed">
              Pick the skill, write your idea, end with: Follow the skill's steps.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer & Branding */}
      <div className="pt-4 border-t border-[#231a3b] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#6f6494]">
        <p className="text-center sm:text-left">
          Free to use, edit and share. Skills need a Google account (18+). Gemini, Google Flow and Nano Banana are Google products; SaungDigital is not affiliated with Google.
        </p>
        <span className="font-semibold text-[#8b5cff] whitespace-nowrap">
          SaungDigital &middot; Character Skills Pack
        </span>
      </div>

    </div>
  );
};
