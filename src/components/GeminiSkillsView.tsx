import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Copy, 
  Check, 
  Download, 
  FileText, 
  Layers
} from 'lucide-react';

interface GeminiSkillsViewProps {
  onBackToResources: () => void;
  onTriggerToast: (msg: string) => void;
}

interface SkillCardData {
  id: string;
  num: string;
  title: string;
  desc: string;
  typeLabel: string;
  quote: string;
  zipFile?: string;
  isTip?: boolean;
}

const SKILLS_LIST: SkillCardData[] = [
  {
    id: 'painting-studio',
    num: '01',
    title: 'Painting Studio',
    desc: 'Paints your idea as a real hand-made painting in 10 styles: oil, impasto, watercolor, impressionist, storybook, fantasy and more.',
    typeLabel: 'TYPE @PAINTING-STUDIO, THEN',
    quote: 'a lighthouse on a cliff on a stormy evening, watercolor',
    zipFile: '/gemini-skills/painting-studio.zip'
  },
  {
    id: 'photo-studio',
    num: '02',
    title: 'Photo Studio',
    desc: 'Real-looking photos in 10 styles: portrait, fashion, product, food, interior, travel, selfie, animal, macro, cinematic.',
    typeLabel: 'TYPE @PHOTO-STUDIO, THEN',
    quote: 'a cup of hot chocolate with marshmallows on a snowy windowsill',
    zipFile: '/gemini-skills/photo-studio.zip'
  },
  {
    id: 'card-maker',
    num: '03',
    title: 'Card Maker',
    desc: 'Birthday, wedding and party cards and invitations, with your words spelled right. Stack it with Painting Studio.',
    typeLabel: 'TYPE @CARD-MAKER, THEN',
    quote: 'a birthday card for Emma, she turns 6 and she loves foxes',
    zipFile: '/gemini-skills/card-maker.zip'
  },
  {
    id: 'flow-prompt-helper',
    num: '04',
    title: 'Prompt Helper',
    desc: 'Writes a ready-to-paste prompt for Google Flow: Nano Banana pictures or Veo video clips. Text only.',
    typeLabel: 'TYPE @FLOW-PROMPT-HELPER, THEN',
    quote: 'a fox reading a book under an apple tree',
    zipFile: '/gemini-skills/flow-prompt-helper.zip'
  },
  {
    id: 'room-makeover',
    num: '05',
    title: 'Room Makeover',
    desc: 'Upload a photo of a room and get the same room redecorated, same walls and windows.',
    typeLabel: 'TYPE @ROOM-MAKEOVER, THEN',
    quote: 'make it over in a warm Japandi style',
    zipFile: '/gemini-skills/room-makeover.zip'
  },
  {
    id: 'product-photo',
    num: '06',
    title: 'Product Photo',
    desc: 'Turns a quick phone photo of something you sell into clean shop photos.',
    typeLabel: 'TYPE @PRODUCT-PHOTO, THEN',
    quote: 'make a shop photo of this mug',
    zipFile: '/gemini-skills/product-photo.zip'
  },
  {
    id: 'old-photo-restore',
    num: '07',
    title: 'Old Photo Restore',
    desc: 'Fixes scratches, creases and fading in an old photo and keeps every face the same.',
    typeLabel: 'TYPE @OLD-PHOTO-RESTORE, THEN',
    quote: 'restore this photo and add natural colour',
    zipFile: '/gemini-skills/old-photo-restore.zip'
  },
  {
    id: 'headshot',
    num: '08',
    title: 'Headshot',
    desc: 'A professional profile photo from your selfie, the same face, a smart outfit and a clean background.',
    typeLabel: 'TYPE @HEADSHOT, THEN',
    quote: 'make a professional headshot from this photo',
    zipFile: '/gemini-skills/headshot.zip'
  },
  {
    id: 'my-first-skill',
    num: '09',
    title: 'My First Skill',
    desc: 'A blank template: change the words in CAPITALS in Notepad and upload your own skill.',
    typeLabel: 'TYPE @MY-FIRST-SKILL, THEN',
    quote: 'write your own',
    zipFile: '/gemini-skills/my-first-skill.zip'
  },
  {
    id: 'combine-skills',
    num: 'TIP',
    title: 'Combine Skills',
    desc: 'Use two skills in one message. Painting Studio paints it, Card Maker gets the words right: the best card in all our tests.',
    typeLabel: 'TYPE @PAINTING-STUDIO AND @CARD-MAKER, THEN',
    quote: 'a birthday card for Emma, she turns 6 and she loves foxes',
    isTip: true
  }
];

export const GeminiSkillsView: React.FC<GeminiSkillsViewProps> = ({
  onBackToResources,
  onTriggerToast
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    onTriggerToast('Prompt copied to clipboard!');
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleDownload = (skill: SkillCardData) => {
    if (!skill.zipFile) return;
    const a = document.createElement('a');
    a.href = skill.zipFile;
    a.download = `${skill.id}.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    onTriggerToast(`Downloading ${skill.title} .zip...`);
  };

  return (
    <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-8 animate-rise">
      
      {/* Top Bar Link */}
      <div className="mb-3">
        <button
          onClick={onBackToResources}
          className="inline-flex items-center gap-1.5 text-sm sm:text-base text-[#a89dc6] hover:text-[#ece9f7] font-medium transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Resources</span>
        </button>
      </div>

      {/* Header section matching screenshot */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-7 sm:mb-9">
        <div>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-none text-white">
            Free <span className="text-[#8b5cff] drop-shadow-[0_0_20px_rgba(139,92,255,0.55)]">Gemini Skills</span>
          </h1>
          <p className="text-base sm:text-xl text-[#a89dc6] mt-3 sm:mt-3.5">
            <b className="text-[#ffcf4a] font-bold">8 free skills + a template</b> to download, edit and upload
          </p>
        </div>

        {/* Top Right Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <a
            href="https://gemini.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-[50px] sm:h-[56px] px-6 sm:px-7 rounded-2xl bg-[#8b5cff] hover:bg-[#7440e6] text-white font-bold text-base sm:text-lg transition-all shadow-[0_4px_22px_rgba(139,92,255,0.45)] hover:shadow-[0_6px_28px_rgba(139,92,255,0.7)] hover:-translate-y-0.5"
          >
            <span>Open Gemini</span>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href="https://www.youtube.com/@AI2Play"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 h-[50px] sm:h-[56px] px-5 sm:px-6 rounded-2xl bg-[#161029] border border-[#2b2247] hover:border-[#8b5cff] text-white font-bold text-base sm:text-lg transition-all hover:bg-[#1d1636]"
          >
            <img 
              src="/assets/aistudio/SaungDigital_757c12af.png" 
              alt="SaungDigital" 
              className="w-8 h-6 sm:w-9 sm:h-7 object-contain filter drop-shadow-[0_0_8px_rgba(255,207,74,0.5)]" 
            />
            <span>SaungDigital</span>
          </a>
        </div>
      </header>

      {/* 10 Cards Grid: 5 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 mb-8">
        {SKILLS_LIST.map((skill) => {
          const isCopied = copiedId === skill.id;

          return (
            <div
              key={skill.id}
              className={`flex flex-col rounded-2xl sm:rounded-[22px] p-5 sm:p-6 transition-all duration-200 border ${
                skill.isTip
                  ? 'bg-gradient-to-b from-[#8b5cff]/20 to-[#161029] border-[#8b5cff] shadow-[0_0_24px_rgba(139,92,255,0.25)] hover:border-[#a585ff]'
                  : 'bg-[#161029] border-[#2b2247] hover:border-[#3a2f5e]'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#8b5cff]/15 text-[#b39bff] grid place-items-center flex-shrink-0">
                  {skill.isTip ? (
                    <Layers className="w-6 h-6" />
                  ) : (
                    <FileText className="w-6 h-6" />
                  )}
                </div>

                <h3 className="text-lg sm:text-[20px] font-bold text-[#ece9f7] leading-tight flex-1">
                  {skill.title}
                </h3>

                <span className={`text-xl sm:text-2xl font-extrabold ${skill.isTip ? 'text-[#8b5cff]' : 'text-[#8579ad]'}`}>
                  {skill.num}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13.5px] text-[#a89dc6] leading-relaxed mb-4 flex-1">
                {skill.desc}
              </p>

              {/* Example Quote Box */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#100b20] border border-[#2b2247] mb-4 flex items-start gap-2.5">
                <div className="flex-1 min-w-0">
                  <small className="block text-[9.5px] sm:text-[10px] font-bold tracking-[1.5px] uppercase text-[#ffcf4a] mb-1 leading-snug">
                    {skill.typeLabel}
                  </small>
                  <p className="text-xs sm:text-[13px] text-[#ece9f7] leading-snug font-normal">
                    {skill.quote}
                  </p>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(skill.id, skill.quote)}
                  className={`w-9 h-9 flex-shrink-0 grid place-items-center rounded-lg border transition-all cursor-pointer ${
                    isCopied
                      ? 'border-[#3ecf8e] text-[#3ecf8e] bg-[#3ecf8e]/10'
                      : 'border-[#3a2f5e] bg-[#1d1636] text-[#c4b3ff] hover:border-[#8b5cff] hover:text-white'
                  }`}
                  aria-label="Copy prompt"
                >
                  {isCopied ? (
                    <Check className="w-4 h-4 text-[#3ecf8e]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Bottom Action Button (Yellow Download or Purple Try in Gemini) */}
              {skill.isTip ? (
                <a
                  href="https://gemini.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 h-11 sm:h-12 rounded-xl bg-[#8b5cff] hover:bg-[#7440e6] text-white text-xs sm:text-sm font-bold shadow-[0_4px_16px_rgba(139,92,255,0.4)] transition-all cursor-pointer"
                >
                  <span>Try it in Gemini</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  onClick={() => handleDownload(skill)}
                  className="w-full flex items-center justify-center gap-2 h-11 sm:h-12 rounded-xl bg-[#ffcf4a] hover:bg-[#ffd965] text-[#1a1030] text-xs sm:text-sm font-extrabold transition-all cursor-pointer shadow-[0_2px_12px_rgba(255,207,74,0.3)] hover:shadow-[0_4px_16px_rgba(255,207,74,0.5)]"
                >
                  <span>Download skill</span>
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              )}

            </div>
          );
        })}
      </div>

      {/* Bottom Step Guide Bar (4 columns) matching screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        
        {/* Step 1 */}
        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#161029] border border-[#2b2247]">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm sm:text-base grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.5)]">
            1
          </div>
          <div>
            <div className="text-sm sm:text-base font-bold text-white">
              Download a skill
            </div>
            <div className="text-xs text-[#a89dc6] mt-0.5">
              Keep the .zip as it is, no need to unzip it.
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
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm sm:text-base grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.5)]">
            2
          </div>
          <div className="flex-1">
            <div className="text-sm sm:text-base font-bold text-white flex items-center justify-between">
              <span>Open Gemini on a computer</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#a89dc6] group-hover:text-[#ffcf4a] transition-colors" />
            </div>
            <div className="text-xs text-[#a89dc6] mt-0.5">
              More, Customize, then the Skills tab.
            </div>
          </div>
        </a>

        {/* Step 3 */}
        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#161029] border border-[#2b2247]">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm sm:text-base grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.5)]">
            3
          </div>
          <div>
            <div className="text-sm sm:text-base font-bold text-white">
              Create, Upload
            </div>
            <div className="text-xs text-[#a89dc6] mt-0.5">
              Pick the .zip, then click Create.
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#161029] border border-[#2b2247]">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm sm:text-base grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.5)]">
            4
          </div>
          <div>
            <div className="text-sm sm:text-base font-bold text-white">
              Type @ in a chat
            </div>
            <div className="text-xs text-[#a89dc6] mt-0.5">
              Pick the skill and type your idea.
            </div>
          </div>
        </div>

      </div>

      {/* Footer matching screenshot */}
      <footer className="pt-4 border-t border-[#2b2247]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#6f6494] text-center sm:text-left">
        <p>
          Free to use, edit and share. Skills need a Google account (18+). Gemini, Google Flow and Nano Banana are Google products; SaungDigital is not affiliated with Google.
        </p>
        <span className="font-semibold text-[#8b5cff] whitespace-nowrap">
          SaungDigital &middot; Gemini Skills Pack
        </span>
      </footer>

    </div>
  );
};
