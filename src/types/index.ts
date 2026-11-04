export interface PromptItem {
  id: string;
  title: string;
  promptText: string;
  ratio?: string;
  step?: string;
  note?: string;
  command?: string;
}

export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  category: 'Gemini Skills' | 'Google Flow' | 'Gemini Gems' | 'Claude AI';
  ep: string;
  description: string;
  iconType: string;
  youtubeUrl: string;
  toolUrl?: string;
  promptsCount?: number;
  prompts: PromptItem[];
  tips?: string[];
}

export interface CommunityTool {
  id: string;
  title: string;
  ep: string;
  description: string;
  url: string;
  isExternal: boolean;
  iconType: string;
  badge?: string;
}

export type ActiveTab = 'hub' | 'resources' | 'consistent-characters' | 'gemini-skills' | 'nano-banana' | 'halloween' | 'painting-gems' | 'photography-gems' | 'icon-art-styles' | 'typography-art-styles' | 'character-art-styles' | 'photoshop-plugin' | 'admin';
