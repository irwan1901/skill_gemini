import { Tutorial, CommunityTool } from '../types';

export const TUTORIALS_DATA: Tutorial[] = [
  {
    id: 'gemini-skills',
    slug: 'gemini-skills.html',
    title: 'Gemini Skills: Full Tutorial for Beginners + Free Skills',
    category: 'Gemini Skills',
    ep: 'Gemini Skills',
    description: 'Eight free Gemini skills and a template to download, edit, and upload. Turn your prompts into reusable skills with @ mentions.',
    iconType: 'layers',
    youtubeUrl: 'https://www.youtube.com/@AI2Play',
    toolUrl: 'https://gemini.google.com/',
    promptsCount: 10,
    prompts: [
      {
        id: 'gs-1',
        title: 'Painting Studio',
        command: '@painting-studio',
        promptText: 'a lighthouse on a cliff on a stormy evening, watercolor',
        note: 'Classical oil, impasto, watercolor, impressionist, storybook, fantasy, art nouveau, surreal, game art.',
        ratio: '16:9'
      },
      {
        id: 'gs-2',
        title: 'Photo Studio',
        command: '@photo-studio',
        promptText: 'a cup of hot chocolate with marshmallows on a snowy windowsill',
        note: 'Clean studio lighting, natural depth of field, warm cinematic tone.',
        ratio: '16:9'
      },
      {
        id: 'gs-3',
        title: 'Card Maker',
        command: '@card-maker',
        promptText: 'a birthday card for Emma, she turns 6 and she loves foxes',
        note: 'Creates festive typography, charming character art and balanced borders.',
        ratio: '1:1'
      },
      {
        id: 'gs-4',
        title: 'Prompt Helper',
        command: '@flow-prompt-helper',
        promptText: 'a fox reading a book under an apple tree',
        note: 'Expands minimal ideas into rich compositional cues for Google Flow.',
        ratio: '16:9'
      },
      {
        id: 'gs-5',
        title: 'Room Makeover',
        command: '@room-makeover',
        promptText: 'make it over in a warm Japandi style with light oak wood and natural sunlight',
        note: 'Upload a room photo, then ask Gemini to transform aesthetic and materials.',
        ratio: '16:9'
      },
      {
        id: 'gs-6',
        title: 'Product Photo',
        command: '@product-photo',
        promptText: 'make a shop photo of this ceramic coffee mug with soft morning shadows',
        note: 'Commercial e-commerce lighting with podium reflections.',
        ratio: '1:1'
      },
      {
        id: 'gs-7',
        title: 'Old Photo Restore',
        command: '@old-photo-restore',
        promptText: 'restore this vintage family photo, remove scratches and add natural color',
        note: 'Restoration prompt that recovers facial clarity and authentic skin tones.',
        ratio: '3:4'
      },
      {
        id: 'gs-8',
        title: 'Headshot',
        command: '@headshot',
        promptText: 'make a professional LinkedIn headshot from this casual photo, navy blazer, soft bokeh studio background',
        note: 'Polishes casual photos into studio-quality executive portraits.',
        ratio: '1:1'
      },
      {
        id: 'gs-9',
        title: 'My First Skill (Template)',
        command: '@my-first-skill',
        promptText: 'Write your own custom Gemini system prompt and instructions in the provided JSON template.',
        note: 'Reusable scaffold for defining your own Gemini custom skill.',
        ratio: 'Text'
      },
      {
        id: 'gs-10',
        title: 'Combine Skills (Pro Tip)',
        command: '@painting-studio + @card-maker',
        promptText: 'a birthday card for Emma, she turns 6 and she loves foxes, watercolor style with golden hand-lettering',
        note: 'Stacking two skills simultaneously for compound stylistic workflows.',
        ratio: '1:1'
      }
    ],
    tips: [
      'Type @ in Google Gemini to invoke your installed skills.',
      'You can combine multiple skills in a single prompt for hybrid results.',
      'Download the prompt package and import into your Gemini settings.'
    ]
  },
  {
    id: 'nano-banana-2-1-beginners',
    slug: 'nano-banana-2-1-beginners.html',
    title: 'Nano Banana 2.1 in Google Flow: Full Tutorial for Beginners',
    category: 'Google Flow',
    ep: 'Google Flow',
    description: 'Learn the complete workflow of Nano Banana 2.1 in Google Flow, from single prompt generation to brand identity, typography, and character consistency.',
    iconType: 'box',
    youtubeUrl: 'https://www.youtube.com/@AI2Play',
    toolUrl: 'https://flow.google.com/',
    promptsCount: 12,
    prompts: [
      {
        id: 'nb-1',
        title: 'Your First Image',
        promptText: 'Twelve French macarons in blush pink, sage green and cream on a marble plate, soft morning light, tea cup in background',
        ratio: '16:9',
        step: 'Step 1'
      },
      {
        id: 'nb-2',
        title: 'The Macaron Product Photo',
        promptText: 'Product photo at table height: twelve macarons in blush pink, sage green and cream on fine porcelain, soft directional morning sunlight, brand palette consistency',
        ratio: '16:9',
        step: 'Step 2'
      },
      {
        id: 'nb-3',
        title: 'The Pastelle Brand Logo',
        promptText: 'The word "Pastelle" in an elegant thin serif font, a delicate gold macaron icon centered above it and the words "MACARON BOUTIQUE" centered underneath, crisp minimalist white background',
        ratio: '1:1',
        step: 'Step 3'
      },
      {
        id: 'nb-4',
        title: 'Luxury Gift Box with Logo',
        promptText: 'Luxury packaging gift box in blush pink and sage green, the Pastelle gold macaron logo embossed in gold foil on the lid, satin ribbon bow, studio shot',
        ratio: '16:9',
        step: 'Step 4'
      },
      {
        id: 'nb-5',
        title: 'Printed Canvas Tote Bag',
        promptText: 'Pastelle boutique branded canvas tote bag hanging on wooden peg, clean typography logo printed on fabric, cotton texture visible, soft lighting',
        ratio: '16:9',
        step: 'Step 5'
      },
      {
        id: 'nb-6',
        title: 'Business Cards and Stickers',
        promptText: 'Boutique stationery mockup: luxury embossed business cards, gold foil circular sticker, and small pastry paper bag, all featuring the Pastelle logo',
        ratio: '16:9',
        step: 'Step 6'
      },
      {
        id: 'nb-7',
        title: 'Pastry Shop Front',
        promptText: 'Charming Parisian pastry shop facade, sage green wooden storefront, large clean glass window showing displays, gold serif signage "Pastelle MACARON BOUTIQUE" above entrance',
        ratio: '16:9',
        step: 'Step 7'
      },
      {
        id: 'nb-8',
        title: 'Mia, The Pastry Chef (Character Consistency)',
        promptText: 'Mia, a friendly 28-year-old French pastry chef with chestnut hair tied in a neat bun, warm smile, wearing a cream linen baker coat and sage green apron',
        ratio: '1:1',
        step: 'Step 8 (Characters Page)'
      },
      {
        id: 'nb-9',
        title: 'Mia Pipes Macaron Shells',
        promptText: 'Mia the pastry chef using both hands to carefully pipe pastel pink macaron batter onto a silicone baking mat, focused expression, bakery kitchen background',
        ratio: '16:9',
        step: 'Step 9'
      },
      {
        id: 'nb-10',
        title: 'Mia Ties the Ribbon',
        promptText: 'Mia smiling at the camera as she ties a silk cream ribbon around the Pastelle gift box on a marble counter, warm natural boutique light',
        ratio: '16:9',
        step: 'Step 10'
      },
      {
        id: 'nb-11',
        title: 'From Phone Photo to Product Photo',
        promptText: 'Professional commercial studio conversion: elevate composition, replace messy background with clean seamless pastel studio gradient, enhance lighting and reflections',
        ratio: '16:9',
        step: 'Step 11'
      },
      {
        id: 'nb-12',
        title: 'Grand Opening Poster Flyer',
        promptText: 'Vertical advertising flyer for "Pastelle Grand Opening": features the macaron box, gold serif headline text, date and location banner, elegant luxury aesthetic',
        ratio: '9:16',
        step: 'Step 12'
      }
    ],
    tips: [
      'Use Flow Characters feature to lock face and hair across multiple scenes.',
      'Always use precise color keywords (e.g. blush pink, sage green) across prompts for cohesive branding.',
      'Add quotation marks around typography to help Nano Banana 2.1 render exact lettering.'
    ]
  },
  {
    id: 'halloween-nano-banana',
    slug: 'halloween-nano-banana.html',
    title: '22 FREE Halloween Ideas with Nano Banana 2.1 (Google Flow)',
    category: 'Google Flow',
    ep: 'Google Flow',
    description: 'Spooky, atmospheric and whimsical Halloween prompt concepts engineered specifically for Nano Banana in Google Flow.',
    iconType: 'ghost',
    youtubeUrl: 'https://www.youtube.com/@AI2Play',
    toolUrl: 'https://flow.google.com/',
    promptsCount: 22,
    prompts: [
      {
        id: 'hw-1',
        title: 'Neon Jack-o-Lantern Tavern',
        promptText: 'Cozy magical tavern interior illuminated by glowing carved neon pumpkins, warm amber and violet volumetric fog, wooden counter with potion bottles, photorealistic',
        ratio: '16:9'
      },
      {
        id: 'hw-2',
        title: 'Cute Ghost Barista',
        promptText: 'An adorable friendly translucent ghost wearing a tiny apron, steaming pumpkin spice latte art with foam ghost, cozy autumn coffee shop, whimsical Pixar 3D style',
        ratio: '1:1'
      },
      {
        id: 'hw-3',
        title: 'Haunted Victorian Conservatory',
        promptText: 'Glass Victorian greenhouse overrun with glowing carnivorous plants, moonlight pouring through broken stained glass panes, misty twilight atmosphere, 8k cinematic',
        ratio: '16:9'
      },
      {
        id: 'hw-4',
        title: 'Cyberpunk Witch Laboratory',
        promptText: 'Modern cyberpunk witch preparing glowing potions, holographic recipe screens floating in dark room, neon cyan and magenta reflections on glass vials',
        ratio: '16:9'
      }
    ]
  },
  {
    id: 'gemini-painting-gems',
    slug: 'gemini-painting-gems.html',
    title: '10 Free Gemini Painting Gems for Nano Banana',
    category: 'Gemini Gems',
    ep: 'Gemini Gems',
    description: '10 free prompt writers for painting styles in Nano Banana: Classical Oil, Impasto, Watercolor, Impressionist, Storybook, Fantasy, Art Nouveau, Surreal, Game Art, and Modern Art.',
    iconType: 'palette',
    youtubeUrl: 'https://www.youtube.com/@AI2Play',
    promptsCount: 10,
    prompts: [
      {
        id: 'pg-1',
        title: '01 Classical Oil',
        command: 'Gemini Gem 01',
        promptText: 'Old Master portraits, Dutch still lifes, Baroque drama, academic scenes and Renaissance pet portraits. Example: a cat as a king in a royal portrait',
        ratio: '16:9'
      },
      {
        id: 'pg-2',
        title: '02 Impasto',
        command: 'Gemini Gem 02',
        promptText: 'Thick, textured oil paint: swirling landscapes and starry nights, palette knife flowers and bold portraits. Example: a lighthouse in a storm',
        ratio: '16:9'
      },
      {
        id: 'pg-3',
        title: '03 Watercolor',
        command: 'Gemini Gem 03',
        promptText: 'Loose landscapes and seascapes, ink and wash street sketches, and delicate animals, birds and flowers. Example: a Venice canal at sunset',
        ratio: '16:9'
      },
      {
        id: 'pg-4',
        title: '04 Impressionist',
        command: 'Gemini Gem 04',
        promptText: 'Gardens and water lilies, rivers and harbours, rainy boulevards and people in dappled sunlight. Example: water lilies like Monet',
        ratio: '16:9'
      },
      {
        id: 'pg-5',
        title: '05 Storybook',
        command: 'Gemini Gem 05',
        promptText: 'Gouache picture-book paintings: cozy animal families, bedtime scenes, mid-century style and fairy tales. Example: a hedgehog baking bread in a tiny kitchen',
        ratio: '1:1'
      },
      {
        id: 'pg-6',
        title: '06 Fantasy',
        command: 'Gemini Gem 06',
        promptText: 'Epic fantasy oil paintings: heroes and dragons, vast castles and citadels, and dark haunted forests. Example: a knight facing a dragon',
        ratio: '16:9'
      },
      {
        id: 'pg-7',
        title: '07 Art Nouveau',
        command: 'Gemini Gem 07',
        promptText: 'Flowing panels with halos and flowers, portraits glowing with real gold leaf, and sleek 1920s Art Deco. Example: a woman with a peacock',
        ratio: '3:4'
      },
      {
        id: 'pg-8',
        title: '08 Surreal',
        command: 'Gemini Gem 08',
        promptText: 'One impossible idea painted with calm realism, whimsical pop surrealism, and soft pastel dreamscapes. Example: a tree in the desert, like Dali',
        ratio: '16:9'
      },
      {
        id: 'pg-9',
        title: '09 Game Art',
        command: 'Gemini Gem 09',
        promptText: 'Stylized hand-painted game art: heroes in action, huge monsters and colourful fantasy game worlds. Example: an orc warrior with a giant axe',
        ratio: '16:9'
      },
      {
        id: 'pg-10',
        title: '10 Modern Art',
        command: 'Gemini Gem 10',
        promptText: 'Cubist portraits, geometric and expressive abstraction, boho wall art and bold fauvist colour. Example: a fox in a summer garden',
        ratio: '1:1'
      }
    ]
  },
  {
    id: 'gemini-photography-gems',
    slug: 'gemini-photography-gems.html',
    title: '10 Free Gemini Photography Gems for Nano Banana 2',
    category: 'Gemini Gems',
    ep: 'Gemini Gems',
    description: '10 free prompt writers for realistic Nano Banana 2 photos: Portrait, Selfie, Fashion, Product, Food & Drink, Architecture, Landscape, Animal, Macro, and Cinematic.',
    iconType: 'camera',
    youtubeUrl: 'https://www.youtube.com/@AI2Play',
    promptsCount: 10,
    prompts: [
      {
        id: 'ph-1',
        title: '01 Portrait',
        command: 'Photography Gem 01',
        promptText: 'Headshots, environmental portraits, couples, families and beauty close-ups with real skin and natural light. Example: a woman with freckles in a sunflower field',
        ratio: '4:5'
      },
      {
        id: 'ph-2',
        title: '02 Selfie',
        command: 'Photography Gem 02',
        promptText: "Casual phone photos that look like a real camera roll: arm's length, mirror, group, flash and 0.5 ultra-wide. Example: a group selfie of four friends at a music festival",
        ratio: '9:16'
      },
      {
        id: 'ph-3',
        title: '03 Fashion',
        command: 'Photography Gem 03',
        promptText: 'Editorials, lookbooks, catalog shots, street style and outfit flat lays, with the outfit as the hero. Example: a woman in a flowing white dress in the desert',
        ratio: '4:5'
      },
      {
        id: 'ph-4',
        title: '04 Product',
        command: 'Photography Gem 04',
        promptText: 'Packshots, hero shots, lifestyle scenes and mockups. Add a photo of your own product in Flow to place it anywhere. Example: a perfume bottle on a black rock with water splashes',
        ratio: '1:1'
      },
      {
        id: 'ph-5',
        title: '05 Food & Drink',
        command: 'Photography Gem 05',
        promptText: 'Plated dishes, table spreads, cocktails, coffee, bakes and menu shots that look good enough to eat. Example: a stack of pancakes with berries and maple syrup',
        ratio: '1:1'
      },
      {
        id: 'ph-6',
        title: '06 Architecture',
        command: 'Photography Gem 06',
        promptText: 'Interiors, modern buildings, historic streets, cozy cabins and aerial city views with clean lines and scale. Example: a brutalist concrete building with green vines',
        ratio: '16:9'
      },
      {
        id: 'ph-7',
        title: '07 Landscape',
        command: 'Photography Gem 07',
        promptText: 'Mountains, coasts, forests, deserts and night skies, with deep depth and dramatic weather and light. Example: a misty pine forest with sun rays through the trees',
        ratio: '16:9'
      },
      {
        id: 'ph-8',
        title: '08 Animal',
        command: 'Photography Gem 08',
        promptText: 'Pets at home, wildlife in the field, action shots and cute close-ups with sharp eyes and natural fur. Example: a border collie catching a frisbee in mid-air',
        ratio: '16:9'
      },
      {
        id: 'ph-9',
        title: '09 Macro',
        command: 'Photography Gem 09',
        promptText: 'Extreme close-ups of insects, water drops, flowers, textures and tiny details with shallow depth of field. Example: a water droplet on a dandelion seed',
        ratio: '1:1'
      },
      {
        id: 'ph-10',
        title: '10 Cinematic',
        command: 'Photography Gem 10',
        promptText: 'Widescreen movie stills, moody lighting, smoke, rain, silhouettes and quiet character moments that tell a story. Example: a lonely diner on a rainy highway at night',
        ratio: '16:9'
      }
    ]
  },
  {
    id: 'icon-art-styles',
    slug: 'icon-art-styles.html',
    title: '75 Icon Art Styles for Nano Banana',
    category: 'Google Flow',
    ep: 'Google Flow',
    description: 'Massive library of 75 icon art styles for app icons, gaming UI, web design, and digital badges with consistent isometric and flat perspectives.',
    iconType: 'shapes',
    youtubeUrl: 'https://www.youtube.com/@AI2Play',
    toolUrl: 'https://flow.google.com/',
    promptsCount: 75,
    prompts: [
      {
        id: 'ic-1',
        title: '3D Claymorphic App Icon',
        promptText: 'App icon of a golden compass with teal pointer, soft claymorphic 3D rendering, matte finish, rounded squircle base, soft diffused studio shadows, iOS 18 style',
        ratio: '1:1'
      },
      {
        id: 'ic-2',
        title: 'Cyberpunk Neon Glyph',
        promptText: 'Icon of a cyber skull with circuit traces, vibrant glowing neon cyan and electric violet lines, dark glossy obsidian background, vector clean aesthetic',
        ratio: '1:1'
      },
      {
        id: 'ic-3',
        title: 'Pixel Art Retro 16-Bit',
        promptText: '16-bit RPG inventory icon of a magical potion bottle, crisp pixel clusters, hand-crafted dither shading, black outline, nostalgic game art',
        ratio: '1:1'
      },
      {
        id: 'ic-4',
        title: 'Frosted Glassmorphism',
        promptText: 'Weather forecast app icon of cloud and sun, frosted translucent glass with rainbow refraction edges, blurred background element, premium modern UI',
        ratio: '1:1'
      }
    ]
  },
  {
    id: 'typography-art-styles',
    slug: 'typography-art-styles.html',
    title: '65 Typography Art Styles for Nano Banana',
    category: 'Google Flow',
    ep: 'Google Flow',
    description: 'Text-effect prompts for Nano Banana. Swap the TEXT and colors, then copy or download and paste into Google Flow.',
    iconType: 'type',
    youtubeUrl: 'https://www.youtube.com/@AI2Play',
    toolUrl: 'https://flow.google.com/',
    promptsCount: 65,
    prompts: [
      {
        id: 'ty-1',
        title: 'Liquid Chrome 3D Lettering',
        promptText: 'The word "FUTURE" sculpted in liquid molten chrome metal with iridescent oil slick reflections, bold sans-serif, high gloss, floating against pure black studio background',
        ratio: '16:9'
      },
      {
        id: 'ty-2',
        title: 'Puffy Y2K Bubble Gum Lettering',
        promptText: 'The word "SWEET" in inflatable glossy candy pink bubble letters, inflated 3D helium balloon aesthetic, plastic wrinkles, studio rim light, vibrant pop',
        ratio: '16:9'
      },
      {
        id: 'ty-3',
        title: 'Neon Sign Glass Tube',
        promptText: 'The text "OPEN 24/7" crafted with glowing magenta and cyan glass neon gas tubes mounted on dark brick wall, atmospheric reflections and wall glow',
        ratio: '16:9'
      },
      {
        id: 'ty-4',
        title: 'Embossed Gold Foil Serif',
        promptText: 'The text "LUXURY" in high-contrast classical didone serif typeface, embossed in shimmering warm gold foil on dark charcoal handmade deckle paper',
        ratio: '16:9'
      }
    ]
  },
  {
    id: 'character-art-styles',
    slug: 'character-art-styles.html',
    title: '35 Nano Banana Character Art Styles You Can Create in Google Flow',
    category: 'Google Flow',
    ep: 'Google Flow',
    description: '35 distinct character styles: Pixar 3D, Anime cel-shading, Cyberpunk operative, Claymation, Low-poly, Chibi figurine, and Comic book ink.',
    iconType: 'user-round',
    youtubeUrl: 'https://www.youtube.com/@AI2Play',
    toolUrl: 'https://flow.google.com/',
    promptsCount: 35,
    prompts: [
      {
        id: 'ch-1',
        title: 'Pixar Animation Character',
        promptText: 'A curious young inventor girl with goggles on forehead, messy curly brown hair, expressive big hazel eyes, warm cinematic lighting, Pixar Disney 3D character design',
        ratio: '1:1'
      },
      {
        id: 'ch-2',
        title: 'Makoto Shinkai Anime Aesthetic',
        promptText: 'School student standing by a train platform with cherry blossom petals falling, Makoto Shinkai anime style, vibrant cloud formations, golden hour lens flare',
        ratio: '16:9'
      },
      {
        id: 'ch-3',
        title: 'Claymation Stop-Motion Figure',
        promptText: 'Charming clay detective figurine with trench coat and magnifying glass, visible fingerprint clay textures, stop-motion lighting, Aardman animations charm',
        ratio: '1:1'
      }
    ]
  },
  {
    id: 'vibe-code-photoshop-plugin',
    slug: 'vibe-code-photoshop-plugin.html',
    title: 'How to Vibe Code a Photoshop Plugin with Claude AI',
    category: 'Claude AI',
    ep: 'Claude AI',
    description: 'Build your own Adobe Photoshop UXP plugins from scratch without prior JavaScript experience using Claude AI vibe coding workflows.',
    iconType: 'code',
    youtubeUrl: 'https://www.youtube.com/@AI2Play',
    promptsCount: 8,
    prompts: [
      {
        id: 'vc-1',
        title: 'UXP Plugin Architecture Prompt',
        command: 'Claude Architect Prompt',
        promptText: 'You are an expert Adobe Photoshop UXP plugin engineer. Write a clean manifest.json (version 5) and React/HTML index file for a plugin that generates automatic color palettes from the active document layers.',
        note: 'Photoshop UXP manifest and sandbox configuration.'
      },
      {
        id: 'vc-2',
        title: 'Batch Action Generator Script',
        command: 'Photoshop API Script',
        promptText: 'Write a Photoshop UXP executeAsModal script that loops through all open artboards, applies an unsharp mask filter, and exports each as WebP at 90% quality.',
        note: 'Photoshop executeAsModal pattern script.'
      }
    ],
    tips: [
      'Always request UXP Manifest v5 for Photoshop 2024+ compatibility.',
      'Wrap all state modifications in Photoshop inside executeAsModal.',
      'Use Claude Artifacts to test UI components before packing.'
    ]
  },
  {
    id: 'photography-gems',
    slug: 'photography-gems.html',
    title: 'Nano Banana 2: Realistic Photography Prompts With Google Gems',
    category: 'Gemini Gems',
    ep: 'Google Gems',
    description: 'Harness custom Google Gems configured to output prompt strings that bypass plastic AI skin and deliver hyper-realistic candid photography.',
    iconType: 'sparkles',
    youtubeUrl: 'https://www.youtube.com/@AI2Play',
    promptsCount: 15,
    prompts: [
      {
        id: 'rg-1',
        title: 'Golden Hour Portrait with Natural Imperfections',
        command: 'Realistic Photo Gem',
        promptText: 'Raw 35mm candid portrait of an artist in sunlit Brooklyn loft studio, natural skin texture, freckles, flyaway hairs, golden hour sunlight streaming through industrial factory window, Kodak Tri-X 400 aesthetic, not overly smoothed',
        ratio: '4:5'
      },
      {
        id: 'rg-2',
        title: 'Moody Nordic Coastal Landscape',
        command: 'Landscape Gem',
        promptText: 'Lofoten islands dramatic jagged fjord peaks in winter snow, breaking icy Atlantic waves on black sand beach, overcast moody twilight, shot on Phase One XF, ultra-high dynamic range',
        ratio: '16:9'
      }
    ]
  }
];

export const COMMUNITY_TOOLS: CommunityTool[] = [
  {
    id: 'discord',
    title: 'Join the AI2Play Discord Community',
    ep: 'Community · Free',
    description: 'Connect with creators, share your prompt generations, get help with Google Flow & Gemini, and participate in weekly design challenges.',
    url: 'https://discord.gg/gggpkVgBf3',
    isExternal: true,
    iconType: 'discord',
    badge: 'Official Discord'
  },
  {
    id: 'openart',
    title: 'OpenArt: Generate AI Images & Videos Online',
    ep: 'Recommended Tool',
    description: 'High-speed cloud generative platform for AI images, animation, upscale models, and creative video synthesis.',
    url: 'https://openart.ai/home?via=ioan',
    isExternal: true,
    iconType: 'sparkle',
    badge: 'Creator Pick'
  }
];

export const HUB_LINKS = {
  youtubeAI2Play: 'https://www.youtube.com/@AI2Play',
  youtubePixaroma: 'https://www.youtube.com/@pixaroma',
  discord: 'https://discord.gg/gggpkVgBf3',
  donate: 'https://shop.pixaroma.com/pages/donate'
};
