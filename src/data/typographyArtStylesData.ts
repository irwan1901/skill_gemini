export type TypographyCategoryKey =
  | 'metal-chrome'
  | 'glass-crystal'
  | 'vintage-retro'
  | 'gothic-ornamental'
  | 'scifi-mech'
  | 'industrial-grunge'
  | 'stone-ceramic'
  | 'elemental'
  | 'organic-botanical'
  | 'fabric-textile'
  | 'soft-sweet'
  | 'graffiti-painted'
  | 'custom-experimental';

export interface TypographyStyleItem {
  id: string;
  number: number;
  name: string;
  category: string;
  categoryTag: string;
  categoryKey: TypographyCategoryKey;
  displayText: string; // The text rendered in the preview, e.g. "IRON GLORY", "MELT MODE", etc.
  previewType: string;
  bgColor: string;
  textColorTheme: string;
  desc: string;
  prompt: string;
  aspectRatio: string;
}

export const TYPOGRAPHY_CATEGORIES = [
  { key: 'all', label: 'All', count: 65 },
  { key: 'metal-chrome', label: 'Metal & Chrome', count: 9 },
  { key: 'glass-crystal', label: 'Glass & Crystal', count: 3 },
  { key: 'vintage-retro', label: 'Vintage & Retro', count: 7 },
  { key: 'gothic-ornamental', label: 'Gothic & Ornamental', count: 6 },
  { key: 'scifi-mech', label: 'Sci-Fi & Mech', count: 5 },
  { key: 'industrial-grunge', label: 'Industrial & Grunge', count: 4 },
  { key: 'stone-ceramic', label: 'Stone & Ceramic', count: 4 },
  { key: 'elemental', label: 'Elemental', count: 4 },
  { key: 'organic-botanical', label: 'Organic & Botanical', count: 5 },
  { key: 'fabric-textile', label: 'Fabric & Textile', count: 4 },
  { key: 'soft-sweet', label: 'Soft & Sweet', count: 6 },
  { key: 'graffiti-painted', label: 'Graffiti & Painted', count: 3 },
  { key: 'custom-experimental', label: 'Custom & Experimental', count: 5 },
] as const;

export const TYPOGRAPHY_STYLES_DATA: TypographyStyleItem[] = [
  // ==========================================
  // 1. METAL & CHROME (9 items)
  // Exactly matching Row 1 of Screenshot 6:
  // #9, #17, #20, #28, #33 + #37, #38, #63, #1
  // ==========================================
  {
    id: '9',
    number: 9,
    name: 'Extruded Metal Title',
    category: 'Metal & Chrome',
    categoryTag: 'METAL & CHROME',
    categoryKey: 'metal-chrome',
    displayText: 'IRON GLORY',
    previewType: 'extruded-metal',
    bgColor: '#0a0910',
    textColorTheme: 'gold-steel',
    desc: 'Heavy 3D extruded cinematic title typography with polished 24k gold bevels, brushed steel front faces, and sharp specular highlights.',
    prompt: 'The words "IRON GLORY" sculpted as a heavy 3D extruded metallic cinematic title, thick golden bevel edges with polished chrome faces, dramatic low-angle studio lighting, intense specular rim reflections, floating against deep pitch black background, 8k octane render.',
    aspectRatio: '1:1'
  },
  {
    id: '17',
    number: 17,
    name: 'Polished Chrome Script',
    category: 'Metal & Chrome',
    categoryTag: 'METAL & CHROME',
    categoryKey: 'metal-chrome',
    displayText: 'OWN THE NIGHT',
    previewType: 'chrome-script',
    bgColor: '#0c0a14',
    textColorTheme: 'silver-mirror',
    desc: 'High-contrast liquid polished chrome serif script with sharp calligraphic flared serifs and sparkling star glints.',
    prompt: 'The phrase "OWN THE NIGHT" in elegant high-fashion serif calligraphy lettering sculpted from liquid polished mirror chrome, ultra-reflective metallic chrome finish reflecting soft studio lights, sparkling starburst specular flares on letter tips, dark obsidian void background.',
    aspectRatio: '1:1'
  },
  {
    id: '20',
    number: 20,
    name: 'Liquid Chrome Puff',
    category: 'Metal & Chrome',
    categoryTag: 'METAL & CHROME',
    categoryKey: 'metal-chrome',
    displayText: 'MELT MODE',
    previewType: 'chrome-puff',
    bgColor: '#0e0b18',
    textColorTheme: 'liquid-mercury',
    desc: 'Puffy 3D liquid chrome inflated balloon lettering with mirror reflections, organic melted droop curves, and Y2K aesthetic.',
    prompt: 'The text "MELT MODE" in puffy inflated 3D liquid mercury chrome bubble letters, molten fluid drip distortion on bottom curves, hyper-reflective mirror reflections, smooth rounded balloon volume, isolated on dark minimal studio background.',
    aspectRatio: '1:1'
  },
  {
    id: '28',
    number: 28,
    name: 'Molten Rose Gold Ribbon',
    category: 'Metal & Chrome',
    categoryTag: 'METAL & CHROME',
    categoryKey: 'metal-chrome',
    displayText: 'Liquid Motion',
    previewType: 'rose-gold-ribbon',
    bgColor: '#120d1c',
    textColorTheme: 'rose-gold',
    desc: 'Flowing ribbon-like cursive lettering in molten rose gold with dynamic fluid curls, silky metallic sheen, and luxury glow.',
    prompt: 'The cursive words "Liquid Motion" formed by a single continuous fluid ribbon of molten reflective rose gold metal, dynamic floating swirls, warm copper-pink metallic sheen, soft studio rim lighting, dark purple-black luxury background.',
    aspectRatio: '1:1'
  },
  {
    id: '33',
    number: 33,
    name: 'Emerald Velvet Sign',
    category: 'Metal & Chrome',
    categoryTag: 'METAL & CHROME',
    categoryKey: 'metal-chrome',
    displayText: 'Velvet Sign',
    previewType: 'velvet-script',
    bgColor: '#fbfaf7',
    textColorTheme: 'emerald-velvet',
    desc: 'Deep emerald green 3D velvet calligraphic script with realistic fabric flocking, soft ambient drop shadow, and elegant craft luxury.',
    prompt: 'The text "Velvet Sign" in fluid 3D script lettering with deep royal emerald green fuzzy flocked velvet texture, soft tactile textile surface, crisp drop shadow cast onto clean ivory white background, boutique typography photography.',
    aspectRatio: '1:1'
  },
  {
    id: '37',
    number: 37,
    name: 'Magnetic Metal Block',
    category: 'Metal & Chrome',
    categoryTag: 'METAL & CHROME',
    categoryKey: 'metal-chrome',
    displayText: 'MAGNETIC',
    previewType: 'magnetic-block',
    bgColor: '#08080f',
    textColorTheme: 'brushed-titanium',
    desc: 'Heavy brushed titanium magnetic mechanical blocks with chamfered edges, micro-precision bolts, and subtle blue magnetic force fields.',
    prompt: 'The word "MAGNETIC" in heavy monolithic brushed titanium sans-serif blocks, precision chamfered edges, hairline brushed metal texture, soft subtle cyan magnetic glow along seams, pitch black engineering studio background.',
    aspectRatio: '1:1'
  },
  {
    id: '38',
    number: 38,
    name: 'Molten Lava Core',
    category: 'Metal & Chrome',
    categoryTag: 'METAL & CHROME',
    categoryKey: 'metal-chrome',
    displayText: 'MOLTEN',
    previewType: 'molten-lava',
    bgColor: '#120707',
    textColorTheme: 'lava-fire',
    desc: 'Incandescent molten magma rock lettering with intense interior fire glow, cooling volcanic crust, and floating burning embers.',
    prompt: 'The word "MOLTEN" sculpted from cooling volcanic basalt rock, glowing cracked fissures revealing blazing incandescent orange-yellow magma lava inside, fiery heat distortion, dark smoky black background with floating embers.',
    aspectRatio: '1:1'
  },
  {
    id: '63',
    number: 63,
    name: 'Forged Black Iron',
    category: 'Metal & Chrome',
    categoryTag: 'METAL & CHROME',
    categoryKey: 'metal-chrome',
    displayText: 'FORGED',
    previewType: 'forged-iron',
    bgColor: '#161314',
    textColorTheme: 'black-iron',
    desc: 'Heavy blacksmith hand-hammered black wrought iron block lettering with raw forge scale, chiseled bevels, and charred timber backing.',
    prompt: 'The word "FORGED" constructed from heavy hand-hammered blacksmith wrought iron, rough textured anvil marks, raw dark iron patina with subtle orange forge heat lingering at base, dark industrial background.',
    aspectRatio: '1:1'
  },
  {
    id: '1',
    number: 1,
    name: 'Damascus Steel Blade',
    category: 'Metal & Chrome',
    categoryTag: 'METAL & CHROME',
    categoryKey: 'metal-chrome',
    displayText: 'DAMASCUS',
    previewType: 'damascus-steel',
    bgColor: '#0b0c10',
    textColorTheme: 'pattern-steel',
    desc: 'Folded multi-layer Damascus steel blade typography with swirling organic woodgrain water wave etched patterns and razor edge polish.',
    prompt: 'The word "DAMASCUS" sculpted in folded pattern-welded Damascus steel, prominent acid-etched wavy woodgrain steel layers, razor sharp polished bevels, dark moody studio lighting.',
    aspectRatio: '1:1'
  },

  // ==========================================
  // 2. GLASS & CRYSTAL (3 items)
  // Matches #23 shown in Screenshot 6 Row 2 + #2, #4
  // ==========================================
  {
    id: '23',
    number: 23,
    name: 'Fluted Frosted Glass',
    category: 'Glass & Crystal',
    categoryTag: 'GLASS & CRYSTAL',
    categoryKey: 'glass-crystal',
    displayText: 'GLASS',
    previewType: 'fluted-glass',
    bgColor: '#0a1520',
    textColorTheme: 'cyan-glass',
    desc: 'Translucent cyan frosted fluted ribbed glass cylinders refracting light with prismatic caustics and soft blur.',
    prompt: 'The word "GLASS" in bold 3D capital letters crafted from translucent fluted ribbed cyan glass, internal light refraction, ribbed vertical texture, soft frosted surface with prismatic caustics, dark studio background.',
    aspectRatio: '1:1'
  },
  {
    id: '2',
    number: 2,
    name: 'Prismatic Diamond Crystal',
    category: 'Glass & Crystal',
    categoryTag: 'GLASS & CRYSTAL',
    categoryKey: 'glass-crystal',
    displayText: 'CRYSTAL',
    previewType: 'diamond-crystal',
    bgColor: '#080614',
    textColorTheme: 'prismatic-rainbow',
    desc: 'Faceted optical quartz crystal diamond typography with brilliant internal rainbow dispersion and sharp geometric facets.',
    prompt: 'The word "CRYSTAL" in sharp faceted gem-cut optical quartz crystal, internal rainbow spectral dispersion prisms, sparkling diamond fire highlights, floating on dark obsidian background.',
    aspectRatio: '1:1'
  },
  {
    id: '4',
    number: 4,
    name: 'Neon Glass Tube Glow',
    category: 'Glass & Crystal',
    categoryTag: 'GLASS & CRYSTAL',
    categoryKey: 'glass-crystal',
    displayText: 'NEON LIGHTS',
    previewType: 'neon-glass-tube',
    bgColor: '#050711',
    textColorTheme: 'neon-magenta-cyan',
    desc: 'Real bent gas-filled glass neon tube sign with internal glow, wiring brackets, and realistic ambient wall radiance.',
    prompt: 'The text "NEON LIGHTS" in vibrant handmade glass neon sign tubes, glowing electric magenta and cyan noble gas, authentic glass bends and black wire support clips, dark midnight atmosphere with wall illumination.',
    aspectRatio: '1:1'
  },

  // ==========================================
  // 3. VINTAGE & RETRO (7 items)
  // Matches #64 in Screenshot 6 Row 2 + vintage styles
  // ==========================================
  {
    id: '64',
    number: 64,
    name: 'Vintage Diner 3D Sign',
    category: 'Vintage & Retro',
    categoryTag: 'VINTAGE & RETRO',
    categoryKey: 'vintage-retro',
    displayText: 'Retro',
    previewType: 'retro-diner-sign',
    bgColor: '#181216',
    textColorTheme: 'turquoise-cream',
    desc: '1950s American roadside diner script with thick layered extrusion, turquoise enamel faces, cream drop shadows, and chrome rims.',
    prompt: 'The script word "Retro" in 1950s American diner sign typography, turquoise enamel face with cream and coral layered 3D drop shadow, polished chrome rim trim, nostalgic warm vintage lighting.',
    aspectRatio: '1:1'
  },
  {
    id: '5',
    number: 5,
    name: '1970s Sunset Rainbow Stripe',
    category: 'Vintage & Retro',
    categoryTag: 'VINTAGE & RETRO',
    categoryKey: 'vintage-retro',
    displayText: 'SUNSHINE',
    previewType: 'retro-70s-stripe',
    bgColor: '#fdf7eb',
    textColorTheme: 'warm-stripes',
    desc: 'Groovy 1970s curved multi-stripe typography with harvest gold, burnt orange, avocado green and chocolate contours.',
    prompt: 'The word "SUNSHINE" in 1970s groovy bold flared typography, thick concentric multi-stripe contours in mustard yellow, burnt orange, terracotta and warm brown, aged warm cream paper background.',
    aspectRatio: '1:1'
  },
  {
    id: '6',
    number: 6,
    name: 'Victorian Gilded Wood Sign',
    category: 'Vintage & Retro',
    categoryTag: 'VINTAGE & RETRO',
    categoryKey: 'vintage-retro',
    displayText: 'APOTHECARY',
    previewType: 'victorian-gold',
    bgColor: '#141712',
    textColorTheme: 'gold-leaf-wood',
    desc: 'Hand-carved Victorian storefront sign with distressed black walnut timber, 23k gold leaf letter bevels and flourishes.',
    prompt: 'The word "APOTHECARY" in Victorian serif letterforms carved into aged dark walnut wood, gilded genuine 23k gold leaf embossed faces, ornate floral corner flourishes, antique London storefront vibe.',
    aspectRatio: '1:1'
  },
  {
    id: '7',
    number: 7,
    name: '1980s Synthwave Chrome',
    category: 'Vintage & Retro',
    categoryTag: 'VINTAGE & RETRO',
    categoryKey: 'vintage-retro',
    displayText: 'RADICAL',
    previewType: 'synthwave-chrome',
    bgColor: '#0c071e',
    textColorTheme: 'chrome-sunset',
    desc: 'Outrun synthwave italic chrome typography reflecting a neon grid sunset horizon with pink and cyan glows.',
    prompt: 'The word "RADICAL" in slanted heavy 1980s retro arcade chrome text, mirror chrome reflecting an orange neon horizon line, purple laser grid ground below, vibrant 80s synthwave cover art.',
    aspectRatio: '1:1'
  },
  {
    id: '8',
    number: 8,
    name: 'Distressed Letterpress Woodblock',
    category: 'Vintage & Retro',
    categoryTag: 'VINTAGE & RETRO',
    categoryKey: 'vintage-retro',
    displayText: 'PRINTERS',
    previewType: 'letterpress-wood',
    bgColor: '#f8f4ea',
    desc: 'Heavy vintage woodblock letterpress type with authentic ink bleed, woodgrain fiber voids, and rich charcoal oil ink.',
    textColorTheme: 'black-ink',
    prompt: 'The word "PRINTERS" in massive antique woodblock letterpress poster type, natural woodgrain distress voids in ink, heavy textured black oil ink on deckled cotton paper, vintage printing press aesthetic.',
    aspectRatio: '1:1'
  },
  {
    id: '10',
    number: 10,
    name: 'Mid-Century Matchbook Print',
    category: 'Vintage & Retro',
    categoryTag: 'VINTAGE & RETRO',
    categoryKey: 'vintage-retro',
    displayText: 'STRIKE ON BOX',
    previewType: 'midcentury-match',
    bgColor: '#f4ede2',
    textColorTheme: 'vermilion-navy',
    desc: 'Mid-century graphic advertising with offset 2-color screenprint registration, gritty newsprint halftone, and retro charm.',
    prompt: 'The words "STRIKE ON BOX" in mid-century 1950s advertising typography, misregistered vermilion red and navy blue printing ink, coarse cardboard halftone grain, retro commercial graphic.',
    aspectRatio: '1:1'
  },
  {
    id: '11',
    number: 11,
    name: 'Art Deco Brass & Enamel',
    category: 'Vintage & Retro',
    categoryTag: 'VINTAGE & RETRO',
    categoryKey: 'vintage-retro',
    displayText: 'METROPOLIS',
    previewType: 'art-deco-brass',
    bgColor: '#10171a',
    textColorTheme: 'brass-black-enamel',
    desc: '1920s Chrysler building style geometric Art Deco letterforms in polished brushed brass and glossy black lacquer inlay.',
    prompt: 'The word "METROPOLIS" in pure 1920s Art Deco geometric typography, polished gilded brass outlines inlaid with deep glossy black piano lacquer, stepped geometric sunburst accents, Gatsby luxury.',
    aspectRatio: '1:1'
  },

  // ==========================================
  // 4. GOTHIC & ORNAMENTAL (6 items)
  // ==========================================
  {
    id: '12',
    number: 12,
    name: 'Blackletter Cathedral Inlay',
    category: 'Gothic & Ornamental',
    categoryTag: 'GOTHIC & ORNAMENTAL',
    categoryKey: 'gothic-ornamental',
    displayText: 'SANCTUARY',
    previewType: 'gothic-blackletter',
    bgColor: '#0e0b16',
    textColorTheme: 'carved-stone-gold',
    desc: 'Medieval German Fraktur blackletter carved into cathedral limestone with genuine gold leaf leafing in the hollows.',
    prompt: 'The word "SANCTUARY" in ornate medieval Fraktur blackletter calligraphy, deep 3D chiseled relief into ancient gothic cathedral stone, luminous gold leaf gilding in the incised strokes.',
    aspectRatio: '1:1'
  },
  {
    id: '13',
    number: 13,
    name: 'Baroque Gilded Gold Filigree',
    category: 'Gothic & Ornamental',
    categoryTag: 'GOTHIC & ORNAMENTAL',
    categoryKey: 'gothic-ornamental',
    displayText: 'MAJESTY',
    previewType: 'baroque-filigree',
    bgColor: '#120c18',
    textColorTheme: 'baroque-gold',
    desc: 'Intricate 17th-century French Baroque scrolling acanthus leaves and golden rococo filigree forming calligraphic letterforms.',
    prompt: 'The word "MAJESTY" formed by intricate French Baroque rococo scrolls and golden acanthus leaf filigree, 24k polished gold leaf with deep shaded recesses, royal palace ballroom grandeur.',
    aspectRatio: '1:1'
  },
  {
    id: '14',
    number: 14,
    name: 'Eldritch Dark Sorcery Glyphs',
    category: 'Gothic & Ornamental',
    categoryTag: 'GOTHIC & ORNAMENTAL',
    categoryKey: 'gothic-ornamental',
    displayText: 'ABYSS',
    previewType: 'eldritch-glyphs',
    bgColor: '#080511',
    textColorTheme: 'purple-arcane',
    desc: 'Occult arcane runes carved in obsidian basalt stone radiating unearthly ultraviolet and violet energy mist.',
    prompt: 'The word "ABYSS" in jagged demonic blackletter typography carved into cracked black obsidian stone, glowing violet arcane sorcery runes pulsing along edges, ethereal dark smoke curling around letters.',
    aspectRatio: '1:1'
  },
  {
    id: '15',
    number: 15,
    name: 'Victorian Engraved Money Bill',
    category: 'Gothic & Ornamental',
    categoryTag: 'GOTHIC & ORNAMENTAL',
    categoryKey: 'gothic-ornamental',
    displayText: 'TREASURY',
    previewType: 'money-engraving',
    bgColor: '#18241e',
    textColorTheme: 'banknote-green',
    desc: 'Intricate steel plate banknote guilloche intaglio engraving with micro-crosshatching and bank note filigree borders.',
    prompt: 'The word "TREASURY" in master steel-engraved currency banknote lettering, ultra-fine microscopic guilloche lathe patterns, shaded hatched intaglio lettering, antique green certificate paper.',
    aspectRatio: '1:1'
  },
  {
    id: '16',
    number: 16,
    name: 'Illuminated Celtic Manuscript',
    category: 'Gothic & Ornamental',
    categoryTag: 'GOTHIC & ORNAMENTAL',
    categoryKey: 'gothic-ornamental',
    displayText: 'AVALON',
    previewType: 'celtic-illuminated',
    bgColor: '#121f18',
    textColorTheme: 'celtic-emerald-gold',
    desc: 'Book of Kells insular majuscule calligraphy with intricate interlaced serpent knotwork and jewel lapis lazuli inlays.',
    prompt: 'The word "AVALON" in insular Celtic uncial script calligraphy, letters formed from complex intertwined dragon ribbon knots, vermilion red, lapis blue and malachite green gouache on vellum.',
    aspectRatio: '1:1'
  },
  {
    id: '18',
    number: 18,
    name: 'Spiked Cursed Iron Blackletter',
    category: 'Gothic & Ornamental',
    categoryTag: 'GOTHIC & ORNAMENTAL',
    categoryKey: 'gothic-ornamental',
    displayText: 'DARK SOULS',
    previewType: 'spiked-iron',
    bgColor: '#0e080b',
    textColorTheme: 'blood-iron',
    desc: 'Barbed wrought dark iron gothic lettering with jagged executioner spikes and subtle glowing crimson blood veins.',
    prompt: 'The words "DARK SOULS" in jagged barbed gothic blackletter forged from pitted black iron, sharp protruding spikes, glowing red ember veins pulsing through the metal, dark fog atmosphere.',
    aspectRatio: '1:1'
  },

  // ==========================================
  // 5. SCI-FI & MECH (5 items)
  // ==========================================
  {
    id: '19',
    number: 19,
    name: 'Cyberpunk Hologram Laser',
    category: 'Sci-Fi & Mech',
    categoryTag: 'SCI-FI & MECH',
    categoryKey: 'scifi-mech',
    displayText: 'NEO TOKYO',
    previewType: 'cyber-holo',
    bgColor: '#070617',
    textColorTheme: 'laser-cyan-pink',
    desc: 'Floating 3D vector wireframe hologram typography with horizontal scanlines, RGB chromatic aberration and neon flare.',
    prompt: 'The text "NEO TOKYO" projected as a glowing 3D wireframe laser hologram, vivid cyan and hot magenta light beams, horizontal CRT scanlines, optical digital glitch chromatic aberration, pitch black city backdrop.',
    aspectRatio: '1:1'
  },
  {
    id: '21',
    number: 21,
    name: 'Mecha Heavy Armor Stencil',
    category: 'Sci-Fi & Mech',
    categoryTag: 'SCI-FI & MECH',
    categoryKey: 'scifi-mech',
    displayText: 'GUNDAM 01',
    previewType: 'mecha-stencil',
    bgColor: '#171922',
    textColorTheme: 'mecha-white-orange',
    desc: 'Military mecha armor plate stenciled typography with industrial caution hazard stripes, hydraulic rivets, and weathered paint.',
    prompt: 'The stencil text "GUNDAM 01" painted on white and battleship grey composite mecha armor plating, orange hazard caution stripes, recessed hex bolts, chipped paint weathering, sci-fi hangar lighting.',
    aspectRatio: '1:1'
  },
  {
    id: '22',
    number: 22,
    name: 'Glowing PCB Circuit Trace',
    category: 'Sci-Fi & Mech',
    categoryTag: 'SCI-FI & MECH',
    categoryKey: 'scifi-mech',
    displayText: 'CYBERCORE',
    previewType: 'pcb-trace',
    bgColor: '#051613',
    textColorTheme: 'pcb-gold-green',
    desc: 'Golden microchip mother-board bus traces and glowing green silicon conduits forming geometric circuit letterforms.',
    prompt: 'The word "CYBERCORE" formed entirely from shiny golden PCB copper traces and solder pads, glowing neon green data pathways, matte dark green circuit board substrate, macro tech photography.',
    aspectRatio: '1:1'
  },
  {
    id: '24',
    number: 24,
    name: 'Warp Drive Telemetry HUD',
    category: 'Sci-Fi & Mech',
    categoryTag: 'SCI-FI & MECH',
    categoryKey: 'scifi-mech',
    displayText: 'WARP SPEED',
    previewType: 'warp-hud',
    bgColor: '#050a16',
    textColorTheme: 'hud-orange-cyan',
    desc: 'Orbital trajectory vectors, digital HUD telemetry coordinates, and glowing amber velocity meters shaping futuristic type.',
    prompt: 'The words "WARP SPEED" composed of razor-sharp glowing cockpit HUD telemetry vectors, digital altitude coordinates, neon amber and cyan wireframe arcs, pure true black deep space background.',
    aspectRatio: '1:1'
  },
  {
    id: '25',
    number: 25,
    name: 'Alien Monolith Glyph',
    category: 'Sci-Fi & Mech',
    categoryTag: 'SCI-FI & MECH',
    categoryKey: 'scifi-mech',
    displayText: 'ORIGIN',
    previewType: 'alien-monolith',
    bgColor: '#090812',
    textColorTheme: 'monolith-cyan',
    desc: 'Towering extraterrestrial black glass monolith with alien geometric conduits pulsating with bioluminescent cyan light.',
    prompt: 'The word "ORIGIN" carved in alien geometric hieroglyphs on a colossal pitch black matte monolith, glowing bioluminescent cyan energy pulsating inside the laser-etched lines, sci-fi cinematic.',
    aspectRatio: '1:1'
  },

  // ==========================================
  // 6. INDUSTRIAL & GRUNGE (4 items)
  // ==========================================
  {
    id: '26',
    number: 26,
    name: 'Heavy Rusted Steel Stencil',
    category: 'Industrial & Grunge',
    categoryTag: 'INDUSTRIAL & GRUNGE',
    categoryKey: 'industrial-grunge',
    displayText: 'HEAVY CARGO',
    previewType: 'rusted-steel',
    bgColor: '#1e1411',
    textColorTheme: 'rust-orange',
    desc: 'Industrial warehouse stencil spray painted on oxidized rusted iron plates with flaking paint and corrosion.',
    prompt: 'The words "HEAVY CARGO" spray-stenciled in faded white paint onto heavily rusted corten steel plates, flaking orange rust blisters, industrial weld seams, gritty shipyard macro shot.',
    aspectRatio: '1:1'
  },
  {
    id: '27',
    number: 27,
    name: 'Peeling Concrete Billboard',
    category: 'Industrial & Grunge',
    categoryTag: 'INDUSTRIAL & GRUNGE',
    categoryKey: 'industrial-grunge',
    displayText: 'DISRUPT',
    previewType: 'peeling-concrete',
    bgColor: '#242426',
    textColorTheme: 'torn-paper-paint',
    desc: 'Layers of torn vintage wheatpaste posters and weather-beaten spray paint revealing rough brutalist concrete.',
    prompt: 'The word "DISRUPT" created from layers of ripped wheatpaste posters and distressed black paint on raw brutalist cast concrete, peeling paper edges, urban decay street art aesthetic.',
    aspectRatio: '1:1'
  },
  {
    id: '29',
    number: 29,
    name: 'Corrugated Shipping Container',
    category: 'Industrial & Grunge',
    categoryTag: 'INDUSTRIAL & GRUNGE',
    categoryKey: 'industrial-grunge',
    displayText: 'CARRIER 9',
    previewType: 'shipping-container',
    bgColor: '#10212e',
    textColorTheme: 'container-yellow',
    desc: 'Bold industrial stenciled letters running across vertical corrugations of an ocean freight shipping container.',
    prompt: 'The text "CARRIER 9" stenciled in industrial bold yellow paint across the corrugated ridges of a weathered blue ocean shipping container, industrial rivets, chipped paint, dockyard atmosphere.',
    aspectRatio: '1:1'
  },
  {
    id: '30',
    number: 30,
    name: 'Toxic Acid Corroded Hazard',
    category: 'Industrial & Grunge',
    categoryTag: 'INDUSTRIAL & GRUNGE',
    categoryKey: 'industrial-grunge',
    displayText: 'BIOHAZARD',
    previewType: 'toxic-acid',
    bgColor: '#111a0c',
    textColorTheme: 'toxic-lime-black',
    desc: 'Corrosive sizzling lime green chemical acid dissolving through heavy steel warning plates with smoking bubbles.',
    prompt: 'The word "BIOHAZARD" in bold industrial warning font, letters partially melted and sizzling from bubbling radioactive neon lime acid, corroded metal plate, rising vapor steam, dark hazard zone.',
    aspectRatio: '1:1'
  },

  // ==========================================
  // 7. STONE & CERAMIC (4 items)
  // ==========================================
  {
    id: '31',
    number: 31,
    name: 'Chiseled Roman Marble Inscription',
    category: 'Stone & Ceramic',
    categoryTag: 'STONE & CERAMIC',
    categoryKey: 'stone-ceramic',
    displayText: 'IMPERATOR',
    previewType: 'roman-marble',
    bgColor: '#ede9e3',
    textColorTheme: 'chiseled-marble',
    desc: 'Trajan style monumental classical Roman capitals incised with sharp V-cut chisels into Carrara white marble.',
    prompt: 'The Latin word "IMPERATOR" carved in classical Roman Trajan monumental capitals, sharp V-cut chiseled incisions into fine Italian white Carrara marble, subtle grey natural veining, dramatic museum side lighting.',
    aspectRatio: '1:1'
  },
  {
    id: '32',
    number: 32,
    name: 'Cracked Basalt Volcanic Slab',
    category: 'Stone & Ceramic',
    categoryTag: 'STONE & CERAMIC',
    categoryKey: 'stone-ceramic',
    displayText: 'TITAN',
    previewType: 'basalt-slab',
    bgColor: '#131317',
    textColorTheme: 'grey-stone',
    desc: 'Colossal prehistoric monolithic typography carved directly into jagged volcanic black basalt cliffs.',
    prompt: 'The word "TITAN" carved in ancient heavy monolithic stone blocks into a dark volcanic basalt cliff face, jagged rocky fractures, deep textured stone grain, cold atmospheric mountain mist.',
    aspectRatio: '1:1'
  },
  {
    id: '34',
    number: 34,
    name: 'Glazed Delft Blue Porcelain',
    category: 'Stone & Ceramic',
    categoryTag: 'STONE & CERAMIC',
    categoryKey: 'stone-ceramic',
    displayText: 'HOLLAND',
    previewType: 'delft-porcelain',
    bgColor: '#f8fafc',
    textColorTheme: 'cobalt-porcelain',
    desc: '17th-century Dutch Delft pottery typography hand-painted with cobalt oxide floral vines on glossy white ceramic glaze.',
    prompt: 'The word "HOLLAND" in elegant 17th-century baroque script painted on glossy white Delft ceramic tiles, rich cobalt blue underglaze brushwork, micro crackle glaze texture, fine porcelain sheen.',
    aspectRatio: '1:1'
  },
  {
    id: '35',
    number: 35,
    name: 'Terracotta Aztec Sun Relief',
    category: 'Stone & Ceramic',
    categoryTag: 'STONE & CERAMIC',
    categoryKey: 'stone-ceramic',
    displayText: 'SOLARIS',
    previewType: 'aztec-terracotta',
    bgColor: '#241711',
    textColorTheme: 'terracotta-sun',
    desc: 'Pre-Columbian Mesoamerican red terracotta clay relief carving with stepped geometric sun rays and turquoise inlays.',
    prompt: 'The word "SOLARIS" sculpted in Pre-Columbian Mesoamerican relief glyphs, warm unglazed red terracotta clay, geometric stepped temple motifs, inlaid polished turquoise stone accents.',
    aspectRatio: '1:1'
  },

  // ==========================================
  // 8. ELEMENTAL (4 items)
  // ==========================================
  {
    id: '36',
    number: 36,
    name: 'Blazing Fire Phoenix Flame',
    category: 'Elemental',
    categoryTag: 'ELEMENTAL',
    categoryKey: 'elemental',
    displayText: 'INFERNO',
    previewType: 'phoenix-fire',
    bgColor: '#100505',
    textColorTheme: 'blazing-fire',
    desc: 'Sculpted living fire typography with incandescent yellow flame tongues, turbulent curling plasma, and flying embers.',
    prompt: 'The word "INFERNO" formed from pure roaring living flames, bright yellow-white core heat with turbulent licking orange flame tongues, rising spark embers, black night atmosphere.',
    aspectRatio: '1:1'
  },
  {
    id: '39',
    number: 39,
    name: 'Frozen Glacial Blue Ice',
    category: 'Elemental',
    categoryTag: 'ELEMENTAL',
    categoryKey: 'elemental',
    displayText: 'GLACIER',
    previewType: 'glacial-ice',
    bgColor: '#061320',
    textColorTheme: 'glacial-cyan',
    desc: 'Chiseled Antarctic glacier ice typography with internal frozen air bubbles, subzero cyan translucency, and frost rime.',
    prompt: 'The word "GLACIER" sculpted from massive blocks of translucent Arctic blue glacial ice, trapped microscopic air bubbles, frosty white rime on outer edges, subzero crisp studio lighting.',
    aspectRatio: '1:1'
  },
  {
    id: '40',
    number: 40,
    name: 'Swirling Tidal Ocean Water',
    category: 'Elemental',
    categoryTag: 'ELEMENTAL',
    categoryKey: 'elemental',
    displayText: 'TSUNAMI',
    previewType: 'ocean-water',
    bgColor: '#051824',
    textColorTheme: 'ocean-spray',
    desc: 'Crystalline fluid water typography shaped by dynamic crashing tidal wave splashes and frothy white sea foam.',
    prompt: 'The word "TSUNAMI" formed entirely from dynamic high-speed splashing crystal-clear ocean water, curling wave crests, microscopic airborne water droplets, frothy sea foam edges, deep navy backdrop.',
    aspectRatio: '1:1'
  },
  {
    id: '41',
    number: 41,
    name: 'Electric Lightning Arc',
    category: 'Elemental',
    categoryTag: 'ELEMENTAL',
    categoryKey: 'elemental',
    displayText: 'VOLTAGE',
    previewType: 'lightning-arc',
    bgColor: '#08051a',
    textColorTheme: 'electric-blue',
    desc: 'Blinding million-volt electric Tesla coil plasma lightning bolts snapping through air to form crackling letter contours.',
    prompt: 'The word "VOLTAGE" shaped by crackling high-voltage blue and violet electric plasma lightning arcs, branching electrical discharge sparks, intense core bloom, pitch dark laboratory background.',
    aspectRatio: '1:1'
  },

  // ==========================================
  // 9. ORGANIC & BOTANICAL (5 items)
  // ==========================================
  {
    id: '42',
    number: 42,
    name: 'Moss & Forest Vine Overgrowth',
    category: 'Organic & Botanical',
    categoryTag: 'ORGANIC & BOTANICAL',
    categoryKey: 'organic-botanical',
    displayText: 'WILDLIFE',
    previewType: 'moss-vines',
    bgColor: '#0f1710',
    textColorTheme: 'moss-green',
    desc: 'Lush living green moss, twisting ivy vines, and tiny forest ferns engulfing heavy carved stone letters.',
    prompt: 'The word "WILDLIFE" formed from dense velvety green forest moss, twisting ivy tendrils and miniature woodland ferns growing over stone letter bases, soft dappled morning canopy sunlight.',
    aspectRatio: '1:1'
  },
  {
    id: '43',
    number: 43,
    name: 'Blooming Spring Wildflower',
    category: 'Organic & Botanical',
    categoryTag: 'ORGANIC & BOTANICAL',
    categoryKey: 'organic-botanical',
    displayText: 'FLORA',
    previewType: 'blooming-flowers',
    bgColor: '#fdfbf7',
    textColorTheme: 'floral-petal',
    desc: 'Delicate botanical typography composed of fresh blooming pink peonies, ranunculus, lavender sprigs, and eucalyptus leaves.',
    prompt: 'The word "FLORA" delicately crafted from fresh blooming botanical flowers: blush pink peonies, purple lavender, golden buttercups and eucalyptus sprigs, studio photography on soft ivory paper.',
    aspectRatio: '1:1'
  },
  {
    id: '44',
    number: 44,
    name: 'Intertwined Tree Root Branch',
    category: 'Organic & Botanical',
    categoryTag: 'ORGANIC & BOTANICAL',
    categoryKey: 'organic-botanical',
    displayText: 'ANCIENT',
    previewType: 'tree-roots',
    bgColor: '#16110e',
    textColorTheme: 'bark-root-brown',
    desc: 'Ancient gnarled oak tree roots and twisting wood branches organically intertwined to form fantasy letterforms.',
    prompt: 'The word "ANCIENT" formed from thick gnarled ancient oak tree roots and mossy branches, twisting organic wood fiber, rough bark texture, earthy forest floor lighting.',
    aspectRatio: '1:1'
  },
  {
    id: '45',
    number: 45,
    name: 'Succulent Desert Cactus',
    category: 'Organic & Botanical',
    categoryTag: 'ORGANIC & BOTANICAL',
    categoryKey: 'organic-botanical',
    displayText: 'OASIS',
    previewType: 'succulent-cactus',
    bgColor: '#faf6ee',
    textColorTheme: 'succulent-green',
    desc: 'Plump geometric echeveria succulent rosettes, saguaro ribs, and tiny golden thorns shaping desert type.',
    prompt: 'The word "OASIS" sculpted from plump velvety green echeveria succulents, prickly pear pads with fine golden needles, soft pastel mint and dusty rose tips, warm desert terracotta background.',
    aspectRatio: '1:1'
  },
  {
    id: '46',
    number: 46,
    name: 'Autumn Amber Maple Leaf',
    category: 'Organic & Botanical',
    categoryTag: 'ORGANIC & BOTANICAL',
    categoryKey: 'organic-botanical',
    displayText: 'AUTUMN',
    previewType: 'autumn-leaves',
    bgColor: '#1b120c',
    textColorTheme: 'autumn-amber',
    desc: 'Crisp pressed Japanese maple leaves in vibrant crimson, burnt orange, and amber gold arranged into elegant serif lettering.',
    prompt: 'The word "AUTUMN" composed of overlapping pressed autumn maple leaves in rich shades of scarlet, burnt amber and warm ochre, delicate leaf vein textures, dark wood background.',
    aspectRatio: '1:1'
  },

  // ==========================================
  // 10. FABRIC & TEXTILE (4 items)
  // ==========================================
  {
    id: '47',
    number: 47,
    name: 'Denim Jeans Orange Stitching',
    category: 'Fabric & Textile',
    categoryTag: 'FABRIC & TEXTILE',
    categoryKey: 'fabric-textile',
    displayText: 'DENIM CO',
    previewType: 'denim-stitch',
    bgColor: '#162233',
    textColorTheme: 'denim-blue',
    desc: 'Heavy raw indigo denim twill fabric with authentic double-row copper orange thread stitching and brass rivets.',
    prompt: 'The words "DENIM CO" embroidered into dark raw indigo selvedge denim fabric, thick double-row copper orange heavy duty contrast stitching, visible diagonal cotton twill weave, brass pocket rivets.',
    aspectRatio: '1:1'
  },
  {
    id: '48',
    number: 48,
    name: 'Cozy Cable Knit Wool',
    category: 'Fabric & Textile',
    categoryTag: 'FABRIC & TEXTILE',
    categoryKey: 'fabric-textile',
    displayText: 'WINTER',
    previewType: 'cable-knit',
    bgColor: '#f4ede6',
    textColorTheme: 'cream-wool',
    desc: 'Chunky Irish Aran cable-knit sweater stitches in soft unbleached merino wool yarn forming pillowy cozy letters.',
    prompt: 'The word "WINTER" knitted from chunky unbleached cream Aran wool yarn, intricate cable-knit braided sweater pattern, soft fuzzy wool fibers, warm cozy fireplace lighting.',
    aspectRatio: '1:1'
  },
  {
    id: '49',
    number: 49,
    name: 'Embroidered Scouting Patch',
    category: 'Fabric & Textile',
    categoryTag: 'FABRIC & TEXTILE',
    categoryKey: 'fabric-textile',
    displayText: 'SCOUT CLUB',
    previewType: 'embroidered-patch',
    bgColor: '#181524',
    textColorTheme: 'embroidery-colors',
    desc: 'Dense satin embroidery stitching with raised thread texture, thick merrowed border edge, and twill backing.',
    prompt: 'The text "SCOUT CLUB" stitched as a vintage scout tactical patch, raised dense satin embroidery thread, thick gold merrowed stitched border, textured twill backing, macro needlework detail.',
    aspectRatio: '1:1'
  },
  {
    id: '50',
    number: 50,
    name: 'Royal Gold Damask Brocade',
    category: 'Fabric & Textile',
    categoryTag: 'FABRIC & TEXTILE',
    categoryKey: 'fabric-textile',
    displayText: 'ROYALTY',
    previewType: 'gold-damask',
    bgColor: '#1a0e1c',
    textColorTheme: 'gold-brocade',
    desc: 'Lustrous woven silk damask fabric with embossed metallic gold thread jacquard floral scrollwork.',
    prompt: 'The word "ROYALTY" woven into rich royal burgundy silk jacquard brocade, raised shimmering metallic 24k gold thread floral motifs, luxury tapestry texture, palace ballroom side lighting.',
    aspectRatio: '1:1'
  },

  // ==========================================
  // 11. SOFT & SWEET (6 items)
  // ==========================================
  {
    id: '51',
    number: 51,
    name: 'Puffy Marshmallow Bubble',
    category: 'Soft & Sweet',
    categoryTag: 'SOFT & SWEET',
    categoryKey: 'soft-sweet',
    displayText: 'FLUFFY',
    previewType: 'puffy-marshmallow',
    bgColor: '#fdf2f8',
    textColorTheme: 'pastel-puff',
    desc: 'Squishy pillowy sugar marshmallow letters dusted with fine powdery confectioner sugar in pastel pink and white.',
    prompt: 'The word "FLUFFY" in squishy soft 3D marshmallow bubble letters, dusted with fine powdered confectioner sugar, soft bounce volume, pastel pink and ivory white tones, clean studio background.',
    aspectRatio: '1:1'
  },
  {
    id: '52',
    number: 52,
    name: 'Translucent Gelatin Gummy',
    category: 'Soft & Sweet',
    categoryTag: 'SOFT & SWEET',
    categoryKey: 'soft-sweet',
    displayText: 'GUMMY',
    previewType: 'gelatin-gummy',
    bgColor: '#fdf4ff',
    textColorTheme: 'gummy-candy',
    desc: 'Translucent fruit gelatin gummy candy typography with vibrant internal subsurface scattering and glossy sugar sheen.',
    prompt: 'The word "GUMMY" in translucent 3D gummy candy letters, glowing internal subsurface scattering in cherry red and bright lemon yellow, glossy candy coat reflections, sweet confection aesthetic.',
    aspectRatio: '1:1'
  },
  {
    id: '53',
    number: 53,
    name: 'Melting Chocolate Drizzle',
    category: 'Soft & Sweet',
    categoryTag: 'SOFT & SWEET',
    categoryKey: 'soft-sweet',
    displayText: 'CHOCOLAT',
    previewType: 'melting-chocolate',
    bgColor: '#17100b',
    textColorTheme: 'dark-chocolate',
    desc: 'Glossy tempered dark Belgian chocolate typography with rich flowing molten chocolate syrup drips.',
    prompt: 'The word "CHOCOLAT" sculpted from solid glossy tempered dark Belgian chocolate blocks, flowing silky molten chocolate syrup drizzling over the letters, cocoa powder dusting, pastry chef presentation.',
    aspectRatio: '1:1'
  },
  {
    id: '54',
    number: 54,
    name: 'Cotton Candy Sugar Cloud',
    category: 'Soft & Sweet',
    categoryTag: 'SOFT & SWEET',
    categoryKey: 'soft-sweet',
    displayText: 'DREAM',
    previewType: 'cotton-candy',
    bgColor: '#fdf4f8',
    textColorTheme: 'cotton-candy-pink',
    desc: 'Spun sugar cotton candy typography with airy micro-threads, pastel carnival pink and blue swirls, and sugary glow.',
    prompt: 'The word "DREAM" sculpted from airy wisps of spun sugar cotton candy, delicate pastel pink and sky blue spun candy fibers, soft cloud-like volume, dreamy whimsical studio lighting.',
    aspectRatio: '1:1'
  },
  {
    id: '55',
    number: 55,
    name: 'Glazed Donut Sprinkle Frosting',
    category: 'Soft & Sweet',
    categoryTag: 'SOFT & SWEET',
    categoryKey: 'soft-sweet',
    displayText: 'BAKERY',
    previewType: 'glazed-donut',
    bgColor: '#faf5ea',
    textColorTheme: 'donut-sprinkles',
    desc: 'Golden-brown baked donut letters dipped in glossy strawberry pink glaze and covered in colorful rainbow sprinkles.',
    prompt: 'The word "BAKERY" in fluffy baked golden donut letters, generously dipped in thick glossy strawberry pink sugar glaze, showered with colorful rainbow sprinkles, bakery counter macro photography.',
    aspectRatio: '1:1'
  },
  {
    id: '56',
    number: 56,
    name: 'Puffy Silicone Rubber',
    category: 'Soft & Sweet',
    categoryTag: 'SOFT & SWEET',
    categoryKey: 'soft-sweet',
    displayText: 'BOUNCE',
    previewType: 'silicone-rubber',
    bgColor: '#f1f5f9',
    textColorTheme: 'pastel-silicone',
    desc: 'Smooth matte pastel silicone rubber typography with soft bevels, flexible tactile feel, and contemporary accessory aesthetic.',
    prompt: 'The word "BOUNCE" in rounded 3D soft-touch matte silicone rubber letters, clean pastel mint and coral tones, smooth injection-molded seamless edges, minimal product photography.',
    aspectRatio: '1:1'
  },

  // ==========================================
  // 12. GRAFFITI & PAINTED (3 items)
  // ==========================================
  {
    id: '57',
    number: 57,
    name: 'Dripping Street Aerosol Spray',
    category: 'Graffiti & Painted',
    categoryTag: 'GRAFFITI & PAINTED',
    categoryKey: 'graffiti-painted',
    displayText: 'URBAN',
    previewType: 'graffiti-aerosol',
    bgColor: '#14141c',
    textColorTheme: 'neon-spray-paint',
    desc: 'Bold wildstyle subway graffiti with fat-cap aerosol spray flares, drips running down brick wall, and neon highlights.',
    prompt: 'The word "URBAN" in authentic New York wildstyle graffiti bubble letters, spray painted in vibrant electric yellow and hot magenta, wet paint drips running down dark textured brick wall, street art masterpiece.',
    aspectRatio: '1:1'
  },
  {
    id: '58',
    number: 58,
    name: 'Thick Impasto Palette Knife',
    category: 'Graffiti & Painted',
    categoryTag: 'GRAFFITI & PAINTED',
    categoryKey: 'graffiti-painted',
    displayText: 'ARTIST',
    previewType: 'oil-impasto-text',
    bgColor: '#181622',
    textColorTheme: 'impasto-oil',
    desc: 'Thick sculpting oil paint applied with a palette knife, heavy textured paint ridges, and glossy oil paint sheen.',
    prompt: 'The word "ARTIST" sculpted from heavy thick oil paint applied with a steel palette knife, prominent knife blade strokes and ridges in cobalt blue, vermilion red and cadmium yellow, textured canvas weave.',
    aspectRatio: '1:1'
  },
  {
    id: '59',
    number: 59,
    name: 'Splattered Ink Wash Calligraphy',
    category: 'Graffiti & Painted',
    categoryTag: 'GRAFFITI & PAINTED',
    categoryKey: 'graffiti-painted',
    displayText: 'BUSHIDO',
    previewType: 'ink-wash-shodo',
    bgColor: '#faf6ee',
    textColorTheme: 'sumi-black-ink',
    desc: 'Traditional Japanese Shodo horsehair brush calligraphy with explosive raw ink splatter and flying white dry brush strokes.',
    prompt: 'The word "BUSHIDO" rendered in dynamic Japanese master Shodo brush calligraphy, massive expressive black Sumi ink strokes with flying white dry brush texture and explosive ink splatters on fibrous washi rice paper.',
    aspectRatio: '1:1'
  },

  // ==========================================
  // 13. CUSTOM & EXPERIMENTAL (5 items)
  // ==========================================
  {
    id: '60',
    number: 60,
    name: 'Origami Folded Paper Foil',
    category: 'Custom & Experimental',
    categoryTag: 'CUSTOM & EXPERIMENTAL',
    categoryKey: 'custom-experimental',
    displayText: 'ORIGAMI',
    previewType: 'origami-paper-foil',
    bgColor: '#faf8f2',
    textColorTheme: 'folded-paper',
    desc: 'Geometric folded washi craft paper typography with razor sharp mountain and valley crease lines and delicate paper shadows.',
    prompt: 'The word "ORIGAMI" sculpted from geometric folded Japanese washi paper, crisp sharp crease folds, tactile fibrous paper texture with subtle gold foil rim accents, soft directional studio lighting.',
    aspectRatio: '1:1'
  },
  {
    id: '61',
    number: 61,
    name: 'Bioluminescent Deep Sea Jelly',
    category: 'Custom & Experimental',
    categoryTag: 'CUSTOM & EXPERIMENTAL',
    categoryKey: 'custom-experimental',
    displayText: 'ABYSSAL',
    previewType: 'bioluminescent-jelly',
    bgColor: '#030712',
    textColorTheme: 'deep-sea-glow',
    desc: 'Ethereal translucent jellyfish bell typography floating in abyssal depths with glowing neon cyan tentacles.',
    prompt: 'The word "ABYSSAL" formed from translucent deep-sea jellyfish organisms, glowing internal bioluminescent cyan and violet organs, floating delicate stinging tentacles, pitch black ocean trench abyss.',
    aspectRatio: '1:1'
  },
  {
    id: '62',
    number: 62,
    name: 'Miniature Toy Brick Build',
    category: 'Custom & Experimental',
    categoryTag: 'CUSTOM & EXPERIMENTAL',
    categoryKey: 'custom-experimental',
    displayText: 'BUILDER',
    previewType: 'lego-toy-brick',
    bgColor: '#f1f5f9',
    textColorTheme: 'primary-bricks',
    desc: 'Constructed from colorful modular plastic toy building bricks with circular stud connectors, bevels, and primary gloss.',
    prompt: 'The word "BUILDER" constructed entirely from miniature colorful plastic interlocking toy building bricks with circular studs on top, bright red, yellow and blue pieces, macro toy photography.',
    aspectRatio: '1:1'
  },
  {
    id: '65',
    number: 65,
    name: 'Shimmering Holographic Foil',
    category: 'Custom & Experimental',
    categoryTag: 'CUSTOM & EXPERIMENTAL',
    categoryKey: 'custom-experimental',
    displayText: 'SPECTRUM',
    previewType: 'holographic-spectrum',
    bgColor: '#0a0916',
    textColorTheme: 'holo-rainbow',
    desc: 'Hot-stamped metallic silver rainbow holographic foil typography refracting light in vivid spectral color bands.',
    prompt: 'The word "SPECTRUM" stamped in reflective silver rainbow holographic foil, prismatic chromatic light dispersion shifting across letter bevels, embossed tactile edges, dark obsidian background.',
    aspectRatio: '1:1'
  },
  {
    id: '3',
    number: 3,
    name: 'Smoked Liquid Glass',
    category: 'Custom & Experimental',
    categoryTag: 'CUSTOM & EXPERIMENTAL',
    categoryKey: 'custom-experimental',
    displayText: 'OBSIDIAN',
    previewType: 'smoked-liquid-glass',
    bgColor: '#08060c',
    textColorTheme: 'smoked-amber-glass',
    desc: 'Molten dark smoked amber quartz glass with fluid ripple caustics, soft internal bubbles, and luxury perfume flacon gloss.',
    prompt: 'The word "OBSIDIAN" sculpted from dark smoked amber quartz glass, molten fluid curvature, internal air bubble inclusions catching golden rim light, deep dark luxury studio aesthetic.',
    aspectRatio: '1:1'
  }
];
