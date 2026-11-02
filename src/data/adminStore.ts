import { CharacterStyleItem, CHARACTER_STYLES_DATA } from './characterArtStylesData';

export interface PhotographyGem {
  id?: string;
  num: string;
  prefix: string;
  suffix: string;
  icon: string;
  desc: string;
  gemUrl: string;
  samplePrompt: string;
}

export interface WebsiteSettings {
  siteName: string;
  tagline: string;
  domain: string;
  youtubeUrl: string;
  discordUrl: string;
}

export const DEFAULT_PHOTOGRAPHY_GEMS: PhotographyGem[] = [
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

export const DEFAULT_SETTINGS: WebsiteSettings = {
  siteName: 'SaungDigital',
  tagline: 'Fusion of Innovation and Imagination',
  domain: 'saungdigital.net',
  youtubeUrl: 'https://www.youtube.com/@AI2Play',
  discordUrl: 'https://discord.gg/saungdigital'
};

const PHOTO_GEMS_KEY = 'saungdigital_photography_gems';
const CHAR_STYLES_KEY = 'saungdigital_character_styles';
const SETTINGS_KEY = 'saungdigital_settings';

// Helper to notify other components in same window
function triggerDataChangeEvent() {
  window.dispatchEvent(new Event('saungdigital_data_updated'));
}

export function getStoredPhotographyGems(): PhotographyGem[] {
  try {
    const raw = localStorage.getItem(PHOTO_GEMS_KEY);
    if (!raw) return DEFAULT_PHOTOGRAPHY_GEMS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_PHOTOGRAPHY_GEMS;
  } catch {
    return DEFAULT_PHOTOGRAPHY_GEMS;
  }
}

export function savePhotographyGem(item: PhotographyGem): void {
  const current = getStoredPhotographyGems();
  const index = current.findIndex(g => g.num === item.num);
  let updated: PhotographyGem[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = item;
  } else {
    updated = [...current, item];
  }
  localStorage.setItem(PHOTO_GEMS_KEY, JSON.stringify(updated));
  triggerDataChangeEvent();
}

export function deletePhotographyGem(num: string): void {
  const current = getStoredPhotographyGems();
  const updated = current.filter(g => g.num !== num);
  localStorage.setItem(PHOTO_GEMS_KEY, JSON.stringify(updated));
  triggerDataChangeEvent();
}

export function resetPhotographyGems(): void {
  localStorage.removeItem(PHOTO_GEMS_KEY);
  triggerDataChangeEvent();
}

export function getStoredCharacterStyles(): CharacterStyleItem[] {
  try {
    const raw = localStorage.getItem(CHAR_STYLES_KEY);
    if (!raw) return CHARACTER_STYLES_DATA;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : CHARACTER_STYLES_DATA;
  } catch {
    return CHARACTER_STYLES_DATA;
  }
}

export function saveCharacterStyle(item: CharacterStyleItem): void {
  const current = getStoredCharacterStyles();
  const index = current.findIndex(s => s.id === item.id);
  let updated: CharacterStyleItem[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = item;
  } else {
    updated = [...current, item];
  }
  localStorage.setItem(CHAR_STYLES_KEY, JSON.stringify(updated));
  triggerDataChangeEvent();
}

export function deleteCharacterStyle(id: string): void {
  const current = getStoredCharacterStyles();
  const updated = current.filter(s => s.id !== id);
  localStorage.setItem(CHAR_STYLES_KEY, JSON.stringify(updated));
  triggerDataChangeEvent();
}

export function resetCharacterStyles(): void {
  localStorage.removeItem(CHAR_STYLES_KEY);
  triggerDataChangeEvent();
}

export function getStoredSettings(): WebsiteSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: WebsiteSettings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  triggerDataChangeEvent();
}

// ========================================================
// USER ACCOUNTS & LOGIN ACCESS RIGHTS (HAK AKSES LOGIN)
// ========================================================
export interface UserAccount {
  id: string;
  name: string;
  username: string;
  password?: string;
  role: 'admin' | 'member';
  status: 'active' | 'suspended';
  email: string;
  phone?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface AccessPermissionConfig {
  role: 'admin' | 'member';
  canViewPrompts: boolean;
  canDownloadFiles: boolean;
  canViewCharacters: boolean;
  canAddContent: boolean;
  canEditContent: boolean;
  canDeleteContent: boolean;
  canManageSettings: boolean;
  canBackupRestore: boolean;
}

const USERS_KEY = 'saungdigital_user_accounts';
const PERMISSIONS_KEY = 'saungdigital_access_permissions';

export const DEFAULT_USERS: UserAccount[] = [
  {
    id: 'user-admin',
    name: 'Administrator Utama',
    username: 'admin',
    password: 'saungdigital123',
    role: 'admin',
    status: 'active',
    email: 'admin@saungdigital.net',
    phone: '0812-3456-7890',
    createdAt: '2026-01-01',
    lastLogin: 'Baru saja'
  },
  {
    id: 'user-member-1',
    name: 'Irwan Ahmad Maulana (VIP)',
    username: 'member',
    password: 'member123',
    role: 'member',
    status: 'active',
    email: 'irwanahmad19@gmail.com',
    phone: '0812-8899-7711',
    createdAt: '2026-02-15',
    lastLogin: 'Hari ini'
  },
  {
    id: 'user-member-2',
    name: 'Member Komunitas Kreatif',
    username: 'user',
    password: 'saungdigital',
    role: 'member',
    status: 'active',
    email: 'kreatif@saungdigital.net',
    createdAt: '2026-03-01',
    lastLogin: 'Kemarin'
  }
];

export const DEFAULT_PERMISSIONS: AccessPermissionConfig[] = [
  {
    role: 'admin',
    canViewPrompts: true,
    canDownloadFiles: true,
    canViewCharacters: true,
    canAddContent: true,
    canEditContent: true,
    canDeleteContent: true,
    canManageSettings: true,
    canBackupRestore: true
  },
  {
    role: 'member',
    canViewPrompts: true,
    canDownloadFiles: true,
    canViewCharacters: true,
    canAddContent: false,
    canEditContent: false,
    canDeleteContent: false,
    canManageSettings: false,
    canBackupRestore: false
  }
];

export function getStoredUsers(): UserAccount[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) return DEFAULT_USERS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_USERS;
  } catch {
    return DEFAULT_USERS;
  }
}

export function saveUser(item: UserAccount): void {
  const current = getStoredUsers();
  const index = current.findIndex(u => u.id === item.id);
  let updated: UserAccount[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = item;
  } else {
    updated = [...current, item];
  }
  localStorage.setItem(USERS_KEY, JSON.stringify(updated));
  triggerDataChangeEvent();
}

export function deleteUser(id: string): void {
  const current = getStoredUsers();
  const updated = current.filter(u => u.id !== id);
  localStorage.setItem(USERS_KEY, JSON.stringify(updated));
  triggerDataChangeEvent();
}

export function resetUsers(): void {
  localStorage.removeItem(USERS_KEY);
  triggerDataChangeEvent();
}

export function getStoredPermissions(): AccessPermissionConfig[] {
  try {
    const raw = localStorage.getItem(PERMISSIONS_KEY);
    if (!raw) return DEFAULT_PERMISSIONS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_PERMISSIONS;
  } catch {
    return DEFAULT_PERMISSIONS;
  }
}

export function savePermissions(perms: AccessPermissionConfig[]): void {
  localStorage.setItem(PERMISSIONS_KEY, JSON.stringify(perms));
  triggerDataChangeEvent();
}

