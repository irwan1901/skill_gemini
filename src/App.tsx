import { useState, useEffect } from 'react';
import { ActiveTab, Tutorial } from './types';
import { HUB_LINKS } from './data/ai2playData';
import { HubView } from './components/HubView';
import { ResourcesView } from './components/ResourcesView';
import { GeminiSkillsView } from './components/GeminiSkillsView';
import { NanoBananaView } from './components/NanoBananaView';
import { HalloweenView } from './components/HalloweenView';
import { PaintingGemsView } from './components/PaintingGemsView';
import { PhotographyGemsView } from './components/PhotographyGemsView';
import { IconArtStylesView } from './components/IconArtStylesView';
import { TypographyArtStylesView } from './components/TypographyArtStylesView';
import { CharacterArtStylesView } from './components/CharacterArtStylesView';
import { PhotoshopPluginView } from './components/PhotoshopPluginView';
import { AdminView } from './components/AdminView';
import { TutorialModal } from './components/TutorialModal';
import { Toast } from './components/Toast';
import { Compass, BookOpen, Sparkles, Box, Ghost, Palette, Camera } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('hub');
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with browser URL / hash for intuitive navigation
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('halloween')) {
        setActiveTab('halloween');
      } else if (hash.includes('nano-banana')) {
        setActiveTab('nano-banana');
      } else if (hash.includes('gemini-skills')) {
        setActiveTab('gemini-skills');
      } else if (hash.includes('painting-gems')) {
        setActiveTab('painting-gems');
      } else if (hash.includes('photography-gems')) {
        setActiveTab('photography-gems');
      } else if (hash.includes('icon-art-styles')) {
        setActiveTab('icon-art-styles');
      } else if (hash.includes('typography-art-styles')) {
        setActiveTab('typography-art-styles');
      } else if (hash.includes('character-art-styles')) {
        setActiveTab('character-art-styles');
      } else if (hash.includes('photoshop') || hash.includes('vibe-code')) {
        setActiveTab('photoshop-plugin');
      } else if (hash.includes('admin') || hash.includes('login')) {
        setActiveTab('admin');
      } else if (hash.includes('resources')) {
        setActiveTab('resources');
      } else {
        setActiveTab('hub');
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === 'halloween') {
      window.location.hash = 'halloween';
    } else if (tab === 'nano-banana') {
      window.location.hash = 'nano-banana';
    } else if (tab === 'gemini-skills') {
      window.location.hash = 'gemini-skills';
    } else if (tab === 'painting-gems') {
      window.location.hash = 'painting-gems';
    } else if (tab === 'photography-gems') {
      window.location.hash = 'photography-gems';
    } else if (tab === 'icon-art-styles') {
      window.location.hash = 'icon-art-styles';
    } else if (tab === 'typography-art-styles') {
      window.location.hash = 'typography-art-styles';
    } else if (tab === 'character-art-styles') {
      window.location.hash = 'character-art-styles';
    } else if (tab === 'photoshop-plugin') {
      window.location.hash = 'photoshop-plugin';
    } else if (tab === 'admin') {
      window.location.hash = 'admin';
    } else if (tab === 'resources') {
      window.location.hash = 'resources';
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTriggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0c0714] text-[#ece9f7] flex flex-col selection:bg-[#8b5cff]/40 selection:text-white pb-16 sm:pb-0">
      
      {/* Main Content Area */}
      <div className="flex-1">
        {activeTab === 'hub' && (
          <HubView 
            onGoToResources={() => handleTabChange('resources')} 
            onGoToAdmin={() => handleTabChange('admin')}
          />
        )}

        {activeTab === 'resources' && (
          <ResourcesView 
            onBackToHome={() => handleTabChange('hub')}
            onSelectTutorial={(tutorial) => setSelectedTutorial(tutorial)}
            onOpenGeminiSkills={() => handleTabChange('gemini-skills')}
            onOpenNanoBanana={() => handleTabChange('nano-banana')}
            onOpenHalloween={() => handleTabChange('halloween')}
            onOpenPaintingGems={() => handleTabChange('painting-gems')}
            onOpenPhotographyGems={() => handleTabChange('photography-gems')}
            onOpenIconArtStyles={() => handleTabChange('icon-art-styles')}
            onOpenTypographyArtStyles={() => handleTabChange('typography-art-styles')}
            onOpenCharacterArtStyles={() => handleTabChange('character-art-styles')}
            onOpenPhotoshopPlugin={() => handleTabChange('photoshop-plugin')}
          />
        )}

        {activeTab === 'gemini-skills' && (
          <GeminiSkillsView
            onBackToResources={() => handleTabChange('resources')}
            onTriggerToast={handleTriggerToast}
          />
        )}

        {activeTab === 'nano-banana' && (
          <NanoBananaView
            onBackToResources={() => handleTabChange('resources')}
            onTriggerToast={handleTriggerToast}
          />
        )}

        {activeTab === 'halloween' && (
          <HalloweenView
            onBackToResources={() => handleTabChange('resources')}
            onTriggerToast={handleTriggerToast}
          />
        )}

        {activeTab === 'painting-gems' && (
          <PaintingGemsView
            onBackToResources={() => handleTabChange('resources')}
            onGoToSkills={() => handleTabChange('gemini-skills')}
            onTriggerToast={handleTriggerToast}
          />
        )}

        {activeTab === 'photography-gems' && (
          <PhotographyGemsView
            onBackToResources={() => handleTabChange('resources')}
            onGoToSkills={() => handleTabChange('gemini-skills')}
            onTriggerToast={handleTriggerToast}
          />
        )}

        {activeTab === 'icon-art-styles' && (
          <IconArtStylesView
            onBackToResources={() => handleTabChange('resources')}
            onTriggerToast={handleTriggerToast}
          />
        )}

        {activeTab === 'typography-art-styles' && (
          <TypographyArtStylesView
            onBackToResources={() => handleTabChange('resources')}
            onTriggerToast={handleTriggerToast}
          />
        )}

        {activeTab === 'character-art-styles' && (
          <CharacterArtStylesView
            onBackToResources={() => handleTabChange('resources')}
            onTriggerToast={handleTriggerToast}
          />
        )}

        {activeTab === 'photoshop-plugin' && (
          <PhotoshopPluginView
            onBackToResources={() => handleTabChange('resources')}
            onTriggerToast={handleTriggerToast}
          />
        )}

        {activeTab === 'admin' && (
          <AdminView
            onBackToHome={() => handleTabChange('hub')}
            onNavigateToTab={(tab) => handleTabChange(tab as any)}
            onTriggerToast={handleTriggerToast}
          />
        )}
      </div>

      {/* Mobile Floating Bottom Bar for Quick 1-Tap Access */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#100b20]/95 backdrop-blur-lg border-t border-[#2b2247] px-2 py-2 flex items-center justify-around">
        <button
          onClick={() => handleTabChange('hub')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-1 rounded-lg transition-colors ${
            activeTab === 'hub' 
              ? 'text-[#8b5cff]' 
              : 'text-[#a89dc6] hover:text-[#ece9f7]'
          }`}
        >
          <Compass className={`w-4 h-4 ${activeTab === 'hub' ? 'text-[#8b5cff]' : ''}`} />
          <span>Hub</span>
        </button>

        <button
          onClick={() => handleTabChange('resources')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-1 rounded-lg transition-colors ${
            activeTab === 'resources' 
              ? 'text-[#8b5cff]' 
              : 'text-[#a89dc6] hover:text-[#ece9f7]'
          }`}
        >
          <BookOpen className={`w-4 h-4 ${activeTab === 'resources' ? 'text-[#8b5cff]' : ''}`} />
          <span>Resources</span>
        </button>

        <button
          onClick={() => handleTabChange('halloween')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-1 rounded-lg transition-colors ${
            activeTab === 'halloween' 
              ? 'text-[#ff9f43]' 
              : 'text-[#a89dc6] hover:text-[#ece9f7]'
          }`}
        >
          <Ghost className={`w-4 h-4 ${activeTab === 'halloween' ? 'text-[#ff9f43]' : ''}`} />
          <span>Halloween</span>
        </button>

        <button
          onClick={() => handleTabChange('nano-banana')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-1 rounded-lg transition-colors ${
            activeTab === 'nano-banana' 
              ? 'text-[#7dd3fc]' 
              : 'text-[#a89dc6] hover:text-[#ece9f7]'
          }`}
        >
          <Box className={`w-4 h-4 ${activeTab === 'nano-banana' ? 'text-[#7dd3fc]' : ''}`} />
          <span>Flow</span>
        </button>

        <button
          onClick={() => handleTabChange('painting-gems')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-1 rounded-lg transition-colors ${
            activeTab === 'painting-gems' 
              ? 'text-[#c084fc]' 
              : 'text-[#a89dc6] hover:text-[#ece9f7]'
          }`}
        >
          <Palette className={`w-4 h-4 ${activeTab === 'painting-gems' ? 'text-[#c084fc]' : ''}`} />
          <span>Gems</span>
        </button>

        <button
          onClick={() => handleTabChange('gemini-skills')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-1 rounded-lg transition-colors ${
            activeTab === 'gemini-skills' 
              ? 'text-[#ffcf4a]' 
              : 'text-[#a89dc6] hover:text-[#ece9f7]'
          }`}
        >
          <Sparkles className={`w-4 h-4 ${activeTab === 'gemini-skills' ? 'text-[#ffcf4a]' : ''}`} />
          <span>Skills</span>
        </button>
      </div>

      {/* Tutorial Detail Modal for Other Tutorials */}
      <TutorialModal 
        tutorial={selectedTutorial} 
        onClose={() => setSelectedTutorial(null)}
        onTriggerToast={handleTriggerToast}
      />

      {/* Floating Neon Toast Notification */}
      <Toast message={toastMessage} />

    </div>
  );
}
