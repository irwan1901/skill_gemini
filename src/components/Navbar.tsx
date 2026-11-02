import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { HUB_LINKS } from '../data/ai2playData';
import { 
  Compass, 
  BookOpen, 
  Heart, 
  ExternalLink, 
  Menu, 
  X, 
  Youtube, 
  Sparkles,
  Box,
  Ghost,
  Palette,
  Camera,
  Grid3X3,
  Type,
  UserRound,
  Puzzle
} from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenTutorial?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2b2247]/80 bg-[#0c0714]/85 backdrop-blur-md transition-all">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <button
          onClick={() => setActiveTab('hub')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="relative w-10 h-8 flex items-center justify-center">
            <img 
              src="/assets/aistudio/SaungDigital_757c12af.png" 
              alt="SaungDigital logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,207,74,0.5)] group-hover:scale-110 transition-transform duration-200" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-[0.1em] text-lg text-[#ece9f7] leading-none group-hover:text-white transition-colors">
              Saung<span className="text-[#ffcf4a] drop-shadow-[0_0_8px_rgba(255,207,74,0.6)]">Digital</span>
            </span>
            <span className="text-[10px] text-[#a89dc6] font-medium tracking-wide">
              Companion Hub
            </span>
          </div>
        </button>

        {/* Desktop Navigation Navigation Items */}
        <nav className="hidden md:flex items-center gap-1 bg-[#161029]/80 p-1 rounded-xl border border-[#2b2247] overflow-x-auto no-scrollbar flex-nowrap shrink">
          <button
            onClick={() => setActiveTab('hub')}
            className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === 'hub'
                ? 'bg-[#8b5cff] text-white shadow-[0_0_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-[#ece9f7] hover:bg-[#1d1636]'
            }`}
          >
            <Compass className="w-4 h-4 flex-shrink-0" />
            <span>Link Hub</span>
          </button>

          <button
            onClick={() => setActiveTab('resources')}
            className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === 'resources'
                ? 'bg-[#8b5cff] text-white shadow-[0_0_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-[#ece9f7] hover:bg-[#1d1636]'
            }`}
          >
            <BookOpen className="w-4 h-4 flex-shrink-0" />
            <span>Resources</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#ffcf4a]/20 text-[#ffcf4a] border border-[#ffcf4a]/30 font-bold">
              10
            </span>
          </button>

          <button
            onClick={() => setActiveTab('gemini-skills')}
            className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === 'gemini-skills'
                ? 'bg-[#8b5cff] text-white shadow-[0_0_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-[#ece9f7] hover:bg-[#1d1636]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#ffcf4a] flex-shrink-0" />
            <span>Gemini Skills</span>
          </button>

          <button
            onClick={() => setActiveTab('nano-banana')}
            className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === 'nano-banana'
                ? 'bg-[#8b5cff] text-white shadow-[0_0_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-[#ece9f7] hover:bg-[#1d1636]'
            }`}
          >
            <Box className="w-4 h-4 text-[#7dd3fc] flex-shrink-0" />
            <span>Nano Banana</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#7dd3fc]/20 text-[#7dd3fc] border border-[#7dd3fc]/40 font-bold">
              2.1
            </span>
          </button>

          <button
            onClick={() => setActiveTab('halloween')}
            className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === 'halloween'
                ? 'bg-[#8b5cff] text-white shadow-[0_0_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-[#ece9f7] hover:bg-[#1d1636]'
            }`}
          >
            <Ghost className="w-4 h-4 text-[#ff9f43] flex-shrink-0" />
            <span>Halloween</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#ff9f43]/20 text-[#ff9f43] border border-[#ff9f43]/40 font-bold">
              22
            </span>
          </button>

          <button
            onClick={() => setActiveTab('painting-gems')}
            className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === 'painting-gems'
                ? 'bg-[#8b5cff] text-white shadow-[0_0_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-[#ece9f7] hover:bg-[#1d1636]'
            }`}
          >
            <Palette className="w-4 h-4 text-[#c084fc] flex-shrink-0" />
            <span>Painting Gems</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#c084fc]/20 text-[#c084fc] border border-[#c084fc]/40 font-bold">
              10
            </span>
          </button>

          <button
            onClick={() => setActiveTab('photography-gems')}
            className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === 'photography-gems'
                ? 'bg-[#8b5cff] text-white shadow-[0_0_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-[#ece9f7] hover:bg-[#1d1636]'
            }`}
          >
            <Camera className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
            <span>Photo Gems</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/40 font-bold">
              10
            </span>
          </button>

          <button
            onClick={() => setActiveTab('icon-art-styles')}
            className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === 'icon-art-styles'
                ? 'bg-[#8b5cff] text-white shadow-[0_0_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-[#ece9f7] hover:bg-[#1d1636]'
            }`}
          >
            <Grid3X3 className="w-4 h-4 text-[#2bd4a0] flex-shrink-0" />
            <span>75 Icon Styles</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#2bd4a0]/20 text-[#2bd4a0] border border-[#2bd4a0]/40 font-bold">
              75
            </span>
          </button>

          <button
            onClick={() => setActiveTab('typography-art-styles')}
            className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === 'typography-art-styles'
                ? 'bg-[#8b5cff] text-white shadow-[0_0_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-[#ece9f7] hover:bg-[#1d1636]'
            }`}
          >
            <Type className="w-4 h-4 text-[#ffcf4a] flex-shrink-0" />
            <span>65 Typography</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#ffcf4a]/20 text-[#ffcf4a] border border-[#ffcf4a]/40 font-bold">
              65
            </span>
          </button>

          <button
            onClick={() => setActiveTab('character-art-styles')}
            className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === 'character-art-styles'
                ? 'bg-[#8b5cff] text-white shadow-[0_0_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-[#ece9f7] hover:bg-[#1d1636]'
            }`}
          >
            <UserRound className="w-4 h-4 text-[#f472b6] flex-shrink-0" />
            <span>35 Characters</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#f472b6]/20 text-[#f472b6] border border-[#f472b6]/40 font-bold">
              35
            </span>
          </button>

          <button
            onClick={() => setActiveTab('photoshop-plugin')}
            className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === 'photoshop-plugin'
                ? 'bg-[#8b5cff] text-white shadow-[0_0_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-[#ece9f7] hover:bg-[#1d1636]'
            }`}
          >
            <Puzzle className="w-4 h-4 text-[#c084fc] flex-shrink-0" />
            <span>Photoshop Plugin</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#c084fc]/20 text-[#e9d5ff] border border-[#c084fc]/40 font-bold">
              UXP
            </span>
          </button>
        </nav>

        {/* Desktop Action Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0">
          <a
            href={HUB_LINKS.youtubeAI2Play}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#8b5cff]/20 text-[#ece9f7] border border-[#8b5cff]/40 hover:bg-[#8b5cff] hover:text-white transition-all shadow-[0_0_12px_rgba(139,92,255,0.2)] whitespace-nowrap"
          >
            <Youtube className="w-3.5 h-3.5 text-[#ffcf4a]" />
            <span>@SaungDigital</span>
          </a>

          <a
            href={HUB_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#a89dc6] hover:text-[#ece9f7] hover:bg-[#161029] border border-transparent hover:border-[#2b2247] transition-all whitespace-nowrap"
          >
            <span>Discord</span>
            <ExternalLink className="w-3 h-3 text-[#6f6494]" />
          </a>

          <a
            href={HUB_LINKS.donate}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#ffcf4a] bg-[#ffcf4a]/10 border border-[#ffcf4a]/25 hover:bg-[#ffcf4a]/20 transition-all whitespace-nowrap"
          >
            <Heart className="w-3.5 h-3.5 fill-[#ffcf4a]" />
            <span>Donate</span>
          </a>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setActiveTab(activeTab === 'hub' ? 'resources' : 'hub')}
            className="px-2.5 py-1 text-xs font-bold rounded-lg bg-[#8b5cff]/20 text-[#ece9f7] border border-[#8b5cff]/40"
          >
            {activeTab === 'hub' ? 'Resources →' : '← Hub'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#a89dc6] hover:text-white bg-[#161029] border border-[#2b2247] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#2b2247] bg-[#100b20] px-4 py-4 space-y-2 animate-rise">
          <button
            onClick={() => {
              setActiveTab('hub');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors ${
              activeTab === 'hub' 
                ? 'bg-[#8b5cff] text-white shadow-[0_0_15px_rgba(139,92,255,0.4)]' 
                : 'text-[#ece9f7] hover:bg-[#161029]'
            }`}
          >
            <span className="flex items-center gap-3">
              <Compass className="w-5 h-5" />
              Link Hub (index.html)
            </span>
            <span className="text-xs opacity-75">Home</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('resources');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors ${
              activeTab === 'resources' 
                ? 'bg-[#8b5cff] text-white shadow-[0_0_15px_rgba(139,92,255,0.4)]' 
                : 'text-[#ece9f7] hover:bg-[#161029]'
            }`}
          >
            <span className="flex items-center gap-3">
              <BookOpen className="w-5 h-5" />
              Tutorial Resources
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#ffcf4a]/20 text-[#ffcf4a] border border-[#ffcf4a]/30 font-bold">
              10 Guides
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('gemini-skills');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors ${
              activeTab === 'gemini-skills' 
                ? 'bg-[#8b5cff] text-white shadow-[0_0_15px_rgba(139,92,255,0.4)]' 
                : 'text-[#ece9f7] hover:bg-[#161029]'
            }`}
          >
            <span className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#ffcf4a]" />
              Free Gemini Skills
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#ffcf4a]/20 text-[#ffcf4a] border border-[#ffcf4a]/30 font-bold">
              8 + Template
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('nano-banana');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors ${
              activeTab === 'nano-banana' 
                ? 'bg-[#8b5cff] text-white shadow-[0_0_15px_rgba(139,92,255,0.4)]' 
                : 'text-[#ece9f7] hover:bg-[#161029]'
            }`}
          >
            <span className="flex items-center gap-3">
              <Box className="w-5 h-5 text-[#7dd3fc]" />
              Nano Banana 2.1 (Google Flow)
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#7dd3fc]/20 text-[#7dd3fc] border border-[#7dd3fc]/40 font-bold">
              16 Prompts
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('halloween');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors ${
              activeTab === 'halloween' 
                ? 'bg-[#8b5cff] text-white shadow-[0_0_15px_rgba(139,92,255,0.4)]' 
                : 'text-[#ece9f7] hover:bg-[#161029]'
            }`}
          >
            <span className="flex items-center gap-3">
              <Ghost className="w-5 h-5 text-[#ff9f43]" />
              22 Halloween Ideas
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#ff9f43]/20 text-[#ff9f43] border border-[#ff9f43]/30 font-bold">
              Spooky & Move
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('painting-gems');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors ${
              activeTab === 'painting-gems' 
                ? 'bg-[#8b5cff] text-white shadow-[0_0_15px_rgba(139,92,255,0.4)]' 
                : 'text-[#ece9f7] hover:bg-[#161029]'
            }`}
          >
            <span className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-[#c084fc]" />
              10 Gemini Painting Gems
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#c084fc]/20 text-[#c084fc] border border-[#c084fc]/30 font-bold">
              10 Styles
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('photography-gems');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors ${
              activeTab === 'photography-gems' 
                ? 'bg-[#8b5cff] text-white shadow-[0_0_15px_rgba(139,92,255,0.4)]' 
                : 'text-[#ece9f7] hover:bg-[#161029]'
            }`}
          >
            <span className="flex items-center gap-3">
              <Camera className="w-5 h-5 text-[#38bdf8]" />
              10 Photography Gems
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/30 font-bold">
              10 Styles
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('icon-art-styles');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors ${
              activeTab === 'icon-art-styles' 
                ? 'bg-[#8b5cff] text-white shadow-[0_0_15px_rgba(139,92,255,0.4)]' 
                : 'text-[#ece9f7] hover:bg-[#161029]'
            }`}
          >
            <span className="flex items-center gap-3">
              <Grid3X3 className="w-5 h-5 text-[#2bd4a0]" />
              75 Icon Art Styles
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#2bd4a0]/20 text-[#2bd4a0] border border-[#2bd4a0]/30 font-bold">
              75 Styles
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('typography-art-styles');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors ${
              activeTab === 'typography-art-styles' 
                ? 'bg-[#8b5cff] text-white shadow-[0_0_15px_rgba(139,92,255,0.4)]' 
                : 'text-[#ece9f7] hover:bg-[#161029]'
            }`}
          >
            <span className="flex items-center gap-3">
              <Type className="w-5 h-5 text-[#ffcf4a]" />
              65 Typography Styles
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#ffcf4a]/20 text-[#ffcf4a] border border-[#ffcf4a]/30 font-bold">
              65 Styles
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('character-art-styles');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors ${
              activeTab === 'character-art-styles' 
                ? 'bg-[#8b5cff] text-white shadow-[0_0_15px_rgba(139,92,255,0.4)]' 
                : 'text-[#ece9f7] hover:bg-[#161029]'
            }`}
          >
            <span className="flex items-center gap-3">
              <UserRound className="w-5 h-5 text-[#f472b6]" />
              35 Character Styles
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#f472b6]/20 text-[#f472b6] border border-[#f472b6]/30 font-bold">
              35 Styles
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('photoshop-plugin');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors ${
              activeTab === 'photoshop-plugin' 
                ? 'bg-[#8b5cff] text-white shadow-[0_0_15px_rgba(139,92,255,0.4)]' 
                : 'text-[#ece9f7] hover:bg-[#161029]'
            }`}
          >
            <span className="flex items-center gap-3">
              <Puzzle className="w-5 h-5 text-[#c084fc]" />
              Vibe Code Photoshop Plugin
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#c084fc]/20 text-[#e9d5ff] border border-[#c084fc]/30 font-bold">
              Claude AI
            </span>
          </button>

          <div className="pt-2 border-t border-[#2b2247]/60 grid grid-cols-2 gap-2">
            <a
              href={HUB_LINKS.youtubeAI2Play}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#161029] border border-[#2b2247] text-xs font-semibold text-[#ece9f7]"
            >
              <Youtube className="w-4 h-4 text-red-400" />
              SaungDigital YT
            </a>

            <a
              href={HUB_LINKS.youtubePixaroma}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#161029] border border-[#2b2247] text-xs font-semibold text-[#ece9f7]"
            >
              <Youtube className="w-4 h-4 text-[#8b5cff]" />
              Pixaroma
            </a>

            <a
              href={HUB_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#161029] border border-[#2b2247] text-xs font-semibold text-[#ece9f7]"
            >
              <Sparkles className="w-4 h-4 text-[#8b5cff]" />
              Discord
            </a>

            <a
              href={HUB_LINKS.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#ffcf4a]/10 border border-[#ffcf4a]/30 text-xs font-semibold text-[#ffcf4a]"
            >
              <Heart className="w-4 h-4 fill-[#ffcf4a]" />
              Donate
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
