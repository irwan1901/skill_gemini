export type CharacterCategoryKey =
  | 'sketch-ink'
  | 'cartoon-caricature'
  | 'anime-manga'
  | 'bw-poster'
  | 'dark-fantasy'
  | 'game-painterly';

export interface CharacterStyleItem {
  id: string;
  number: number;
  name: string;
  category: string;
  categoryTag: string;
  categoryKey: CharacterCategoryKey;
  imageUrl: string;
  fallbackUrl: string;
  desc: string;
  prompt: string;
  aspectRatio: string;
}

export const CHARACTER_CATEGORIES = [
  { key: 'all', label: 'All', count: 35 },
  { key: 'sketch-ink', label: 'Sketch & Ink', count: 5 },
  { key: 'cartoon-caricature', label: 'Cartoon & Caricature', count: 6 },
  { key: 'anime-manga', label: 'Anime & Manga', count: 7 },
  { key: 'bw-poster', label: 'Black & White & Poster', count: 5 },
  { key: 'dark-fantasy', label: 'Dark Fantasy', count: 6 },
  { key: 'game-painterly', label: 'Game & Painterly', count: 6 },
] as const;

export const CHARACTER_STYLES_DATA: CharacterStyleItem[] = [
  {
    "id": "1",
    "number": 1,
    "name": "Retro Gesture Character Sketch Style",
    "category": "Sketch & Ink",
    "categoryTag": "SKETCH & INK",
    "categoryKey": "sketch-ink",
    "imageUrl": "/assets/characters/1.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/1.jpeg",
    "desc": "Retro Gesture Character Sketch Style",
    "prompt": "A loose retro character design sketch style made for expressive character concepts, using rough reddish-brown pencil lines on a clean plain white background. The character should have exaggerated cartoon proportions, sharp angular poses, long tapered limbs, simplified facial features, bold shape language, and confident sweeping gesture lines. Use visible construction marks, quick sketch strokes, light crosshatching, rough contour overlaps, and minimal unfinished shading to make the design feel energetic and hand-drawn. The style should look like an early animation character exploration sheet, playful and expressive, with strong silhouettes, elegant curves, sharp accents, and a lively vintage cartoon design feeling. Keep the character original and clean, with no text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, and no written symbols.",
    "aspectRatio": "1:1"
  },
  {
    "id": "8",
    "number": 8,
    "name": "Whimsical Inked Storybook Character Style",
    "category": "Sketch & Ink",
    "categoryTag": "SKETCH & INK",
    "categoryKey": "sketch-ink",
    "imageUrl": "/assets/characters/8.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/8.jpeg",
    "desc": "Whimsical Inked Storybook Character Style",
    "prompt": "A whimsical hand-drawn character design style with thin expressive ink outlines, quirky exaggerated proportions, and a charming storybook illustration feel. Use loose organic linework, slightly uneven sketchy contours, small scratch details, and simple stylized anatomy with playful silhouette design. The rendering should combine flat color areas with soft textured shading, light pencil-like hatching, subtle grain, and a gently worn illustrated finish. Use a muted but friendly palette with soft greens, warm browns, pale beige, dusty yellow, faded teal, muted orange, and off-white tones. Shapes should feel simple, graphic, and appealing, with expressive faces, stylized features, and a slightly awkward handmade charm that gives the character personality. Keep the background clean and minimal, with only a faint grounding shadow if needed. The final look should feel like original editorial or children’s-book character concept art, playful, clean, and universal for any character. No text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, and no written symbols.",
    "aspectRatio": "1:1"
  },
  {
    "id": "11",
    "number": 11,
    "name": "Intricate Ink Sketch Explorer Style",
    "category": "Sketch & Ink",
    "categoryTag": "SKETCH & INK",
    "categoryKey": "sketch-ink",
    "imageUrl": "/assets/characters/11.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/11.jpeg",
    "desc": "Intricate Ink Sketch Explorer Style",
    "prompt": "A detailed black-and-white character design sketch style with fine ink linework, loose pencil construction, and dense hand-drawn detail. Use expressive sketchy contours, layered crosshatching, thin scratch marks, small mechanical details, fabric folds, seams, straps, pockets, worn surfaces, and tiny decorative imperfections to create a rich concept-art feel. The character should have cute exaggerated proportions, a slightly oversized head, large expressive eyes, compact body shapes, and a whimsical explorer-like design language, but keep the style universal for any character. The drawing should feel imaginative, handcrafted, and full of personality, with a mix of clean readable silhouette and messy organic sketch energy. Use only monochrome black ink and graphite-style shading on a plain white or off-white background, with no color, no polished digital rendering, and no realistic lighting. Keep the final look like an original detailed concept sketch from an artist’s notebook, with no text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, and no written symbols.",
    "aspectRatio": "1:1"
  },
  {
    "id": "24",
    "number": 24,
    "name": "Rough Ink Wildlife Sketch Style",
    "category": "Sketch & Ink",
    "categoryTag": "SKETCH & INK",
    "categoryKey": "sketch-ink",
    "imageUrl": "/assets/characters/24.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/24.jpeg",
    "desc": "Rough Ink Wildlife Sketch Style",
    "prompt": "A loose expressive ink-and-marker sketch style with rough gestural linework, bold scratchy contours, and a traditional concept-art drawing feel. Use energetic black pen strokes, messy construction lines, quick hatching, crosshatching, and uneven sketch marks to build form and movement. Add warm muted wash colors in beige, tan, ochre, brown, charcoal, and soft gray, applied loosely like transparent marker or watercolor over the ink drawing. The style should feel raw, dynamic, and hand-drawn, with strong silhouette readability, dramatic shadow masses, visible texture, imperfect edges, and minimal polished rendering. Keep the background simple with warm paper texture, faint vertical brush marks, rough grounding lines, and lots of empty space around the subject. The final image should look like an original artist sketchbook concept study, expressive and unfinished in a beautiful way, without text, logos, signatures, watermarks, labels, stamps, copyright marks, UI elements, letters, or numbers.",
    "aspectRatio": "1:1"
  },
  {
    "id": "29",
    "number": 29,
    "name": "Sepia Ink Fantasy Caricature Sketch Style",
    "category": "Sketch & Ink",
    "categoryTag": "SKETCH & INK",
    "categoryKey": "sketch-ink",
    "imageUrl": "/assets/characters/29.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/29.jpeg",
    "desc": "Sepia Ink Fantasy Caricature Sketch Style",
    "prompt": "A traditional fantasy character sketch style drawn on warm tan paper, using dark brown ink, graphite-like linework, and white pencil highlights. The style should feel hand-drawn, gritty, and expressive, with exaggerated caricature proportions, sharp facial planes, long noses, heavy brows, twisted anatomy, and slightly grotesque fantasy charm. Use confident scratchy outlines, dense crosshatching, fine parallel hatch marks, messy sketch construction, and strong shadow pockets to sculpt the form. Add bright white highlight strokes on the forehead, nose, cheekbones, hair, muscles, and other raised surfaces to create a dramatic three-tone drawing effect. Keep the palette limited to sepia brown, black-brown ink, warm kraft-paper beige, and white pencil accents, with no full color. The character should feel like an original concept sketch from a fantasy artist’s notebook, raw but controlled, detailed but not over-polished, with expressive personality and strong silhouette. Keep the background plain warm textured paper, with no decorative frame, no scenery, no readable text, no logos, no signatures, no watermarks, no labels, no stamps, no UI elements, no letters, and no numbers.",
    "aspectRatio": "1:1"
  },
  {
    "id": "2",
    "number": 2,
    "name": "Dark Angular Wizard Character Style",
    "category": "Cartoon & Caricature",
    "categoryTag": "CARTOON & CARICATURE",
    "categoryKey": "cartoon-caricature",
    "imageUrl": "/assets/characters/2.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/2.jpeg",
    "desc": "Dark Angular Wizard Character Style",
    "prompt": "A stylized dark fantasy cartoon character design style with bold angular shapes, sharp exaggerated silhouettes, long graphic forms, and a polished animation-ready digital finish. Use clean flat color blocks, crisp edges, soft gradient shading, subtle painterly texture, and controlled shadow shapes to create a dramatic but playful look. The character should feel expressive, theatrical, and slightly mischievous, with strong facial expression, oversized shape language, narrow sharp accents, broad cloak-like forms, pointed design elements, and elegant layered costume shapes. Use a rich moody palette with deep navy, dark teal, blue-green, muted turquoise, soft cream highlights, desaturated purple accents, and small warm orange details for contrast. Add decorative graphic patterns only on clothing or accessories when appropriate, keeping them abstract and simple. The final character should look like a clean modern animated villain concept design, highly stylized but readable, with no text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, and no written symbols.",
    "aspectRatio": "1:1"
  },
  {
    "id": "4",
    "number": 4,
    "name": "Gritty Inked Cartoon Character Style",
    "category": "Cartoon & Caricature",
    "categoryTag": "CARTOON & CARICATURE",
    "categoryKey": "cartoon-caricature",
    "imageUrl": "/assets/characters/4.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/4.jpeg",
    "desc": "Gritty Inked Cartoon Character Style",
    "prompt": "A gritty stylized cartoon character design style with bold black ink outlines, chunky angular shapes, exaggerated proportions, rough hand-drawn energy, and a slightly weird fantasy-comic feeling. The character should have a strong readable silhouette, oversized expressive features, sharp uneven contours, simplified anatomy, blocky forms, and playful asymmetry. Use flat muted colors with rough painterly shading, visible sketchy line texture, small scratch marks, subtle dirt speckles, worn edges, and imperfect hand-painted details. The palette should feel earthy and desaturated, with dark gray, charcoal, dusty teal, faded green, muted blue, dirty cream, pale yellow highlights, dull red accents, and black shadow shapes. Keep the finish clean but intentionally rough, like a polished concept sketch with comic-book ink, textured digital paint, soft off-white background, and minimal grounding shadows. The style should work for any character, without forcing specific costumes, weapons, masks, horns, armor, symbols, props, or accessories unless they are requested. No text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, and no written symbols.",
    "aspectRatio": "1:1"
  },
  {
    "id": "7",
    "number": 7,
    "name": "Quirky Cutout Cartoon Character Style",
    "category": "Cartoon & Caricature",
    "categoryTag": "CARTOON & CARICATURE",
    "categoryKey": "cartoon-caricature",
    "imageUrl": "/assets/characters/7.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/7.jpeg",
    "desc": "Quirky Cutout Cartoon Character Style",
    "prompt": "A playful stylized cartoon character design style with exaggerated caricature proportions, bold simplified shapes, and a clean polished digital illustration finish. Use a graphic cutout look with smooth layered forms, crisp edges, soft inner shading, subtle gradient transitions, and a lightly textured painted surface that feels like refined 2D character concept art with a slight dimensional feel. The style should be expressive and humorous, with oversized facial features, huge mouths, tiny pupils, elastic expressions, long or uneven limbs, and strong silhouette clarity. Use bright but controlled colors, simple value grouping, soft ambient shadows, and selective highlights to keep the character readable and lively without becoming realistic. The overall look should feel whimsical, energetic, and professionally designed, blending flat graphic design with soft sculpted depth, clean background presentation, and a premium animation-ready finish. Keep the style universal so it works for any character, and do not force specific costumes, props, weapons, hats, armor, historical themes, or accessories unless requested. No text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, and no written symbols.",
    "aspectRatio": "1:1"
  },
  {
    "id": "10",
    "number": 10,
    "name": "Expressive Caricature Pencil Portrait Style",
    "category": "Cartoon & Caricature",
    "categoryTag": "CARTOON & CARICATURE",
    "categoryKey": "cartoon-caricature",
    "imageUrl": "/assets/characters/10.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/10.jpeg",
    "desc": "Expressive Caricature Pencil Portrait Style",
    "prompt": "A hand-drawn caricature character art style with exaggerated facial proportions, a long narrow face structure, oversized ears, large rounded eyes, and a playful slightly awkward charm. Use loose expressive linework, visible sketch construction, and layered colored-pencil rendering with fine hatch marks and soft crosshatching. The style should feel like a polished traditional character sketch on warm textured paper, with natural pencil strokes, subtle grain, soft shading, and delicate line variation. Use warm skin tones, earthy browns, muted reds, and gentle orange accents, with lively eyes and expressive brows that give the character personality. Keep the anatomy stylized and elastic, with strong facial expression, quirky appeal, and a clean portrait-illustration feel. The final result should look like an original caricature concept sketch, charming and character-driven, with no text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, and no written symbols.",
    "aspectRatio": "1:1"
  },
  {
    "id": "17",
    "number": 17,
    "name": "Expressive Painterly Caricature Portrait Style",
    "category": "Cartoon & Caricature",
    "categoryTag": "CARTOON & CARICATURE",
    "categoryKey": "cartoon-caricature",
    "imageUrl": "/assets/characters/17.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/17.jpeg",
    "desc": "Expressive Painterly Caricature Portrait Style",
    "prompt": "A bold expressive caricature portrait style with exaggerated facial proportions, distorted anatomy, intense emotional expression, and a polished digital painting finish. Use painterly brushwork, visible texture strokes, sketchy graphic marks, and energetic line accents layered over smooth rendered forms. The style should feel dynamic and modern, mixing semi-realistic skin rendering with caricature exaggeration, sharp facial planes, oversized features, deep wrinkles, stretched expressions, and strong personality. Use high contrast lighting, punchy color blocking, warm skin tones, cool blue and teal backgrounds, and vivid accent colors such as yellow, orange, and turquoise. Add loose abstract brush marks, scribbles, paint streaks, and textured backdrop elements to give the image motion and attitude, while keeping them decorative and non-readable. The final look should feel like a contemporary editorial caricature painting, expressive, stylish, and high-energy, with no readable text, no logos, no signatures, no watermarks, no labels, no tattoos with writing, no brand marks, no UI elements, and no written symbols unless specifically requested.",
    "aspectRatio": "1:1"
  },
  {
    "id": "35",
    "number": 35,
    "name": "Expressive Painterly Cartoon Wildlife Style",
    "category": "Cartoon & Caricature",
    "categoryTag": "CARTOON & CARICATURE",
    "categoryKey": "cartoon-caricature",
    "imageUrl": "/assets/characters/35.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/35.jpeg",
    "desc": "Expressive Painterly Cartoon Wildlife Style",
    "prompt": "A lively expressive cartoon character painting style with exaggerated facial expressions, elastic anatomy, and loose energetic brushwork. Use bold painterly strokes, rough textured edges, visible digital brush marks, white paint flecks, sketchy motion lines, and spontaneous splatter accents to create a fun hand-painted concept-art feel. The character should have oversized eyes, stretched features, open expressive mouth shapes when appropriate, strong silhouette readability, and a playful surprised or excited personality. Use warm natural colors mixed with muted painterly backgrounds, including rusty orange, golden brown, cream, black, white, olive green, teal-gray, and small bright accent strokes. The rendering should feel loose but controlled, with semi-flat shapes, quick highlight marks, rough shadow blocks, and painterly color smears rather than smooth polished realism. Keep the background simple and abstract, with soft brush texture, vertical paint marks, scattered flecks, and no detailed environment unless requested. Make it universal for any character or creature, without forcing deer features, antlers, fur markings, wildlife themes, specific expressions, props, scenery, text, letters, numbers, logos, signatures, watermarks, labels, stamps, or UI elements unless specifically requested.",
    "aspectRatio": "1:1"
  },
  {
    "id": "6",
    "number": 6,
    "name": "Glossy Stylized Anime 3D Character Style",
    "category": "Anime & Manga",
    "categoryTag": "ANIME & MANGA",
    "categoryKey": "anime-manga",
    "imageUrl": "/assets/characters/6.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/6.jpeg",
    "desc": "Glossy Stylized Anime 3D Character Style",
    "prompt": "A polished stylized character art style with a soft anime-inspired 3D illustration look, featuring smooth sculpted forms, clean elegant linework, large expressive eyes, simplified facial features, and refined exaggerated proportions. The rendering should feel glossy and premium, with silky shading, soft skin-like gradients, subtle subsurface glow, crisp highlights, gentle rim lighting, and a clean studio-quality finish. Use delicate facial detail, soft blush tones, controlled contrast, smooth hair clumps with shiny strands, and a sleek modern digital painting aesthetic that blends cute charm with high-end character rendering. The style should feel expressive, playful, and visually striking, with rounded anatomy, graceful curves, polished surfaces, and a slightly doll-like finish without becoming realistic. Use clean backgrounds, minimal distractions, soft ambient shadows, and a vibrant but tasteful color palette. Keep the style universal so it can work for any character, without forcing specific clothing, body type, pose, hairstyle, props, text, logos, signatures, watermarks, labels, stamps, copyright marks, UI elements, or written symbols unless specifically requested.",
    "aspectRatio": "1:1"
  },
  {
    "id": "9",
    "number": 9,
    "name": "Warm Minimal Chibi Character Style",
    "category": "Anime & Manga",
    "categoryTag": "ANIME & MANGA",
    "categoryKey": "anime-manga",
    "imageUrl": "/assets/characters/9.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/9.jpeg",
    "desc": "Warm Minimal Chibi Character Style",
    "prompt": "A cute minimal cartoon character design style with soft rounded shapes, simplified anatomy, oversized head-to-body proportions, and a clean polished illustration finish. Use smooth vector-like forms, gentle curves, tiny simplified facial features, expressive but minimal eyes, and a charming chibi-like silhouette. The rendering should feel soft and tidy, with flat color blocks, very subtle gradient shading, light ambient shadows, soft highlights, and a slightly velvety matte texture. Use a warm friendly palette with cream, beige, peach, coral, terracotta, soft red, muted orange, warm brown, and occasional muted accent colors. Keep the design simple, playful, and highly readable, with minimal linework or very clean thin outlines, soft edges, and a calm modern storybook feel. The background should stay plain and uncluttered, usually in a warm off-white or light cream tone, with only a subtle grounding shadow if needed. The final look should feel adorable, clean, modern, and universal for any character, without forcing specific costumes, props, themes, symbols, text, logos, signatures, watermarks, labels, stamps, copyright marks, UI elements, or written symbols unless specifically requested.",
    "aspectRatio": "1:1"
  },
  {
    "id": "12",
    "number": 12,
    "name": "Urban Anime Streetwear Character Style",
    "category": "Anime & Manga",
    "categoryTag": "ANIME & MANGA",
    "categoryKey": "anime-manga",
    "imageUrl": "/assets/characters/12.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/12.jpeg",
    "desc": "Urban Anime Streetwear Character Style",
    "prompt": "A stylish urban anime character design style with oversized streetwear proportions, chunky clothing shapes, bold graphic silhouettes, and a modern concept-art finish. Use expressive animal-like or chibi-inspired character proportions, large rounded head shapes, compact bodies, oversized jackets, baggy pants, chunky sneakers, layered hoodies, backpacks, patches, straps, zippers, and graphic fashion details only when they fit the requested character. The rendering should mix clean anime linework with painterly sketch energy, using crisp black outlines, loose construction strokes, sharp fabric folds, rough brush texture, flat color blocks, and selective soft shading. Use strong contrast between dark navy, black, white, orange, coral, teal, yellow, gray, and muted urban tones. Add abstract background shapes, paint splashes, small color accents, and dynamic graphic marks, but keep them non-readable and purely decorative. The final character should feel cool, modern, playful, street-fashion inspired, and animation-ready, with no readable text, no logos, no brand symbols, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, no letters, and no numbers.",
    "aspectRatio": "1:1"
  },
  {
    "id": "15",
    "number": 15,
    "name": "Ultra Soft Fluffy Chibi 3D Style",
    "category": "Anime & Manga",
    "categoryTag": "ANIME & MANGA",
    "categoryKey": "anime-manga",
    "imageUrl": "/assets/characters/15.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/15.jpeg",
    "desc": "Ultra Soft Fluffy Chibi 3D Style",
    "prompt": "An ultra-cute stylized 3D character illustration style with extremely soft fluffy surfaces, rounded chibi proportions, oversized glossy eyes, tiny simplified features, and a gentle heartwarming expression. Use plush toy-like forms, silky fine fur or soft fuzzy texture when appropriate, smooth sculpted shapes, soft pastel shading, subtle blush tones, and a polished high-end digital render finish. The style should feel adorable, cozy, and premium, with clean silhouette design, minimal anatomy detail, tiny feet or limbs, soft curves, and a sweet innocent charm. Use a light pastel palette with pink, cream, peach, blush, ivory, and other soft candy-like colors, with delicate highlights, soft ambient light, gentle rim glow, and very subtle shadows. Keep the background minimal, bright, and clean, usually white or very light pastel, with no clutter. The final look should feel like a fluffy collectible character render, cute, soft, and universal for any character, without forcing specific animals, props, clothing, accessories, text, logos, signatures, watermarks, labels, stamps, copyright marks, UI elements, or written symbols unless specifically requested.",
    "aspectRatio": "1:1"
  },
  {
    "id": "18",
    "number": 18,
    "name": "Neon Dark Anime Mystic Character Style",
    "category": "Anime & Manga",
    "categoryTag": "ANIME & MANGA",
    "categoryKey": "anime-manga",
    "imageUrl": "/assets/characters/18.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/18.jpeg",
    "desc": "Neon Dark Anime Mystic Character Style",
    "prompt": "A dramatic dark anime character illustration style with sharp elegant linework, layered clothing shapes, intense expressive eyes, and a polished cinematic digital painting finish. Use strong silhouette design, flowing hair or fur shapes when appropriate, crisp ink-like contours, smooth gradient shading, deep shadow layers, and glowing neon accent lighting. The palette should feel moody and high contrast, with charcoal black, dark navy, slate gray, muted cream, electric cyan, bright teal, hot magenta, and small coral light accents. Add abstract decorative pattern work only as non-readable graphic shapes, using angular lines, geometric accents, glowing fragments, and layered color motifs that stay part of the design without becoming symbols or text. The style should feel mysterious, powerful, stylish, and fantasy-anime inspired, with a premium character-poster look, soft atmospheric background haze, floating light particles, and dramatic rim light. Keep it universal for any character, without forcing skulls, masks, feathers, horns, tribal objects, weapons, cultural clothing, face paint, jewelry, or specific accessories unless requested. No readable text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, no letters, and no numbers.",
    "aspectRatio": "1:1"
  },
  {
    "id": "21",
    "number": 21,
    "name": "Emerald Shadow Mystic Anime Style",
    "category": "Anime & Manga",
    "categoryTag": "ANIME & MANGA",
    "categoryKey": "anime-manga",
    "imageUrl": "/assets/characters/21.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/21.jpeg",
    "desc": "Emerald Shadow Mystic Anime Style",
    "prompt": "A dark mystical anime-inspired illustration style with sharp clean linework, strong silhouette design, and a polished cinematic digital painting finish. Use deep shadow-heavy rendering, layered costume shapes, elegant facial features, and a dramatic high-contrast mood. The style should combine smooth cel-shaded surfaces with soft painterly blending, crisp edge control, subtle texture, and luminous glow effects. Use a restrained palette built around black, charcoal, deep teal, muted forest green, smoky gray, and intense glowing emerald light accents. Add ornamental non-readable graphic motifs, circular aura-like shapes, soft energy halos, and abstract decorative patterning only when appropriate, keeping them atmospheric rather than symbolic. The overall look should feel mysterious, powerful, ancient, and supernatural, with glowing eyes or light accents when fitting the subject, soft ambient haze, and a premium dark fantasy poster feel. Keep it universal for any character, without forcing skulls, feathers, masks, headdresses, jewelry, tribal elements, ritual objects, weapons, or specific cultural details unless requested. No text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, no letters, and no numbers.",
    "aspectRatio": "1:1"
  },
  {
    "id": "22",
    "number": 22,
    "name": "Redline Punk Anime Character Style",
    "category": "Anime & Manga",
    "categoryTag": "ANIME & MANGA",
    "categoryKey": "anime-manga",
    "imageUrl": "/assets/characters/22.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/22.jpeg",
    "desc": "Redline Punk Anime Character Style",
    "prompt": "A high-energy stylized anime and graphic-novel character design style with bold angular shapes, exaggerated facial features, huge expressive grins, sharp teeth, dramatic eyes, and a rebellious street-punk attitude. Use clean confident linework, crisp cel shading, semi-painted rendering, and strong shape language with spiky silhouettes, chunky accessories, and a polished character-poster finish. The palette should be intense and graphic, dominated by red, black, off-white, charcoal, and warm skin tones, with strong contrast and selective accent colors. The design should feel modern, edgy, mischievous, and slightly chaotic, mixing urban fashion, techwear, punk, and futuristic details in a simplified but highly appealing way. Push expression, attitude, and silhouette clarity, with close-up or mid-shot compositions, bold framing, and a flat or lightly textured graphic background using abstract shapes, panels, or non-readable symbols only as design elements. Keep the rendering sleek, clean, and striking, with a premium anime illustration feel and strong visual impact. Make it universal for any character or creature, without forcing specific items like headphones, hats, goggles, masks, weapons, graffiti symbols, or mechanical parts unless requested. No readable text, no letters, no logos, no signatures, no watermarks, no labels, and no extra random background objects.",
    "aspectRatio": "1:1"
  },
  {
    "id": "23",
    "number": 23,
    "name": "Bold Tribal Blackwork Vector Style",
    "category": "Black & White & Poster",
    "categoryTag": "BLACK & WHITE & POSTER",
    "categoryKey": "bw-poster",
    "imageUrl": "/assets/characters/23.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/23.jpeg",
    "desc": "Bold Tribal Blackwork Vector Style",
    "prompt": "A bold black-and-white tribal blackwork illustration style with strong vector-like linework, high contrast, and clean graphic shapes. Use thick confident outlines, solid black fills, sharp negative space, ornamental curves, geometric motifs, and decorative patterning integrated directly into the character design. The style should feel like a mix of tattoo flash, tribal ornament, stencil art, and logo-ready mascot illustration, with simplified but expressive anatomy, strong silhouettes, and a polished symmetrical or near-symmetrical composition when it fits the subject. Keep the rendering flat and graphic with no shading except through black fill, line density, and negative space. Add energetic decorative accents around the subject such as abstract shapes, swirls, spikes, leaves, droplets, rays, or symbolic flourishes, but keep them clean and intentional. The final look should be crisp, iconic, bold, and highly readable, suitable for stickers, t-shirts, emblems, decals, tattoos, or mascot art. Make it universal so it works for any character, creature, or subject, without forcing tribal face markings, weapons, clothing, or specific cultural elements unless requested. No color, no gradients, no realistic textures, no soft painterly rendering, no background scenery, no readable text, no letters, no logos, no signatures, and no watermarks.",
    "aspectRatio": "1:1"
  },
  {
    "id": "25",
    "number": 25,
    "name": "Smooth Monochrome Fantasy Character Line Art",
    "category": "Black & White & Poster",
    "categoryTag": "BLACK & WHITE & POSTER",
    "categoryKey": "bw-poster",
    "imageUrl": "/assets/characters/25.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/25.jpeg",
    "desc": "Smooth Monochrome Fantasy Character Line Art",
    "prompt": "A polished monochrome fantasy character illustration style with clean black linework, smooth grayscale shading, and sculpted white surfaces. Use elegant controlled outlines, soft shadow gradients, crisp form separation, and detailed but restrained line accents. The character should feel dimensional and premium, like a refined black-and-white concept illustration, not a coloring page. Keep the shapes large, readable, and clean, with flowing organic forms, layered surface details, subtle hatching only where needed, and smooth light-gray volume shading. Use mostly white and pale gray surfaces with black outlines and deep shadows placed selectively for contrast. The background should stay plain white or very minimal, with no ornate frame, no decorative border, no mandala pattern, no floral background, no zentangle fill, no wallpaper texture, no page layout, and no excessive pattern density. Focus the detail on the character only. No text, no logos, no signatures, no watermarks, no labels, no stamps, no UI elements, no letters, and no numbers.",
    "aspectRatio": "1:1"
  },
  {
    "id": "26",
    "number": 26,
    "name": "Samurai Noir Ink Poster Style",
    "category": "Black & White & Poster",
    "categoryTag": "BLACK & WHITE & POSTER",
    "categoryKey": "bw-poster",
    "imageUrl": "/assets/characters/26.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/26.jpeg",
    "desc": "Samurai Noir Ink Poster Style",
    "prompt": "A dramatic samurai-noir poster illustration style with a dark armored vigilante standing in a powerful full-body pose, rendered in a bold high-contrast mix of black, off-white, and deep crimson red. Use sharp angular armor shapes, a flowing tattered cape, katana-inspired weapons, and a strong graphic silhouette. The style should feel like a fusion of Japanese ink poster art, gritty comic-book painting, and minimalist action concept art. Use rough dry-brush textures, ink splatters, distressed edges, expressive brush strokes, and selective painterly detail rather than fully polished realism. Keep the character highly detailed but the overall composition clean and graphic.  Emphasize moody shadows, brutal elegance, and a stoic intimidating presence. The palette should stay very limited: black, charcoal gray, bone white, and intense red accents. Background should be plain light beige or parchment-like, with lots of negative space, no clutter, no ornate scenery, and no unnecessary objects. The final look should feel like a premium stylized poster, cinematic, edgy, and iconic.",
    "aspectRatio": "1:1"
  },
  {
    "id": "27",
    "number": 27,
    "name": "Monochrome Biomechanical Cyberpunk Ink Style",
    "category": "Black & White & Poster",
    "categoryTag": "BLACK & WHITE & POSTER",
    "categoryKey": "bw-poster",
    "imageUrl": "/assets/characters/27.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/27.jpeg",
    "desc": "Monochrome Biomechanical Cyberpunk Ink Style",
    "prompt": "A highly detailed monochrome biomechanical illustration style in black, white, and soft gray, blending cyberpunk portrait design with dense technical line art and surreal machine anatomy. Create a centered close-up character portrait with a futuristic human or android face, smooth pale skin mixed with exposed mechanical structures, cables, sockets, tubes, panels, and intricate robotic components fused into the head, neck, and shoulders. Use oversized round goggles or circular optical lenses as a strong focal point, surrounded by a complex crown of machinery, instruments, wires, antennas, and industrial devices that feel layered, engineered, and slightly chaotic. The rendering should be ultra detailed, using crisp ink lines, fine crosshatching, precise contour work, mechanical texture, tiny surface scratches, small splatters, and high-contrast graphic shading. Keep the composition symmetrical or near-symmetrical, with a clean frontal portrait feel, strong vertical presence, and a white or very light background filled with scattered technical details, abstract black circles, ink specks, cables, and minimal sci-fi shapes. The overall mood should feel futuristic, cerebral, eerie, elegant, and visually dense, like a fusion of manga ink illustration, concept art, biomechanical design, and retro-futurist machine portraiture. Avoid bright colors and keep the image strictly black and white or grayscale. No readable text, no letters, no numbers, no logos, no watermark, no signature, no labels, and no UI elements.",
    "aspectRatio": "1:1"
  },
  {
    "id": "28",
    "number": 28,
    "name": "Grunge Punk Skeleton Poster Style",
    "category": "Black & White & Poster",
    "categoryTag": "BLACK & WHITE & POSTER",
    "categoryKey": "bw-poster",
    "imageUrl": "/assets/characters/28.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/28.jpeg",
    "desc": "Grunge Punk Skeleton Poster Style",
    "prompt": "A gritty punk-rock character poster style with a raw underground music aesthetic, distressed textures, aggressive attitude, and a semi-realistic digital painting finish. Use rough painterly brushwork, scratched surfaces, splattered paint, worn fabric detail, chipped edges, dirty overlays, and chaotic collage-like background marks. The character should feel rebellious and intense, with sharp silhouette shapes, exaggerated punk styling, dramatic facial expression, hard lighting, and strong visual attitude. Use a limited grunge palette with deep black, dark charcoal, faded denim blue, dirty beige, rust brown, muted teal, blood red, and small yellow accent marks. The rendering should mix realistic material detail with stylized poster energy, using high contrast shadows, textured highlights, paint drips, dust speckles, and rough graphic layers. Keep the background messy but controlled, like a weathered concert poster or street-art wall, with abstract stains, torn-paper textures, paint splashes, and non-readable graphic marks only. Make it universal for any character or creature, without forcing skeletons, guitars, mohawks, goggles, weapons, skulls, leather jackets, music props, or punk accessories unless requested. No readable text, no letters, no numbers, no logos, no signatures, no watermarks, no labels, no brand marks, and no UI elements.",
    "aspectRatio": "1:1"
  },
  {
    "id": "3",
    "number": 3,
    "name": "Dark Woodland Sculpted Character Style",
    "category": "Dark Fantasy",
    "categoryTag": "DARK FANTASY",
    "categoryKey": "dark-fantasy",
    "imageUrl": "/assets/characters/3.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/3.jpeg",
    "desc": "Dark Woodland Sculpted Character Style",
    "prompt": "A stylized fantasy character design style with a premium 3D sculpted look, soft clay-like materials, rounded carved forms, layered handmade details, and a dark cinematic presentation. The character should feel handcrafted and animation-ready, with simplified but rich shapes, chunky proportions, expressive features, clean sculpted edges, and a tactile toy-like finish. Use warm earthy browns, muted beige, soft cream, moss green, dusty teal, dark charcoal, and subtle glowing accent colors. Materials should look like carved wood, soft matte clay, worn leather, layered fabric, feathers, leaves, bark, bone-like surfaces, and natural handmade ornaments, but only when they fit the character. Lighting should be dramatic and soft, with a dark neutral background, gentle rim light, warm highlights, controlled shadows, and subtle ambient glow. Add small natural details, layered armor-like shapes, organic curves, carved surface grooves, tiny imperfections, and soft painted texture while keeping the design clean and readable. The final character should look like a polished fantasy game or animation collectible figure, original, expressive, and highly detailed, with no text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, and no written symbols.",
    "aspectRatio": "1:1"
  },
  {
    "id": "14",
    "number": 14,
    "name": "Dark Ornate Armor Concept Style",
    "category": "Dark Fantasy",
    "categoryTag": "DARK FANTASY",
    "categoryKey": "dark-fantasy",
    "imageUrl": "/assets/characters/14.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/14.jpeg",
    "desc": "Dark Ornate Armor Concept Style",
    "prompt": "A dark fantasy concept-art style with polished semi-realistic digital painting, elegant hard-surface rendering, and rich ornamental detailing. Use strong sculpted forms, clean silhouette design, layered shapes, sharp edges, and controlled asymmetry to create a noble, dramatic, high-end fantasy look. The rendering should feel painterly but refined, with smooth matte-metal surfaces, subtle brushed texture, soft highlights, gentle edge wear, and deep shadow separation. Use a restrained moody palette built around gunmetal gray, charcoal, steel, muted silver, aged gold accents, and soft smoky neutrals. Add decorative engraved motifs, filigree-like trim, layered plates, and tasteful surface embellishment only when appropriate, keeping them elegant and not overly busy. The style should feel regal, battle-worn, mysterious, and premium, with soft atmospheric shading, minimal background distraction, and a clean concept illustration presentation. Keep it universal so it can work for any subject, without forcing helmets, feathers, wings, armor pieces, weapons, symbols, or specific fantasy objects unless requested. No text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, and no written symbols.",
    "aspectRatio": "1:1"
  },
  {
    "id": "19",
    "number": 19,
    "name": "Sun-Bleached Desert Fantasy Concept Style",
    "category": "Dark Fantasy",
    "categoryTag": "DARK FANTASY",
    "categoryKey": "dark-fantasy",
    "imageUrl": "/assets/characters/19.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/19.jpeg",
    "desc": "Sun-Bleached Desert Fantasy Concept Style",
    "prompt": "A cinematic fantasy character concept art style with tall elegant proportions, layered flowing shapes, and a sun-bleached painterly finish. Use semi-realistic digital painting with soft atmospheric lighting, dusty warm shadows, textured brushwork, and clean readable silhouette design. The style should feel mysterious, ancient, and dramatic, with long vertical forms, weathered materials, cloth-like layers, bone-like pale surfaces, worn leather, faded painted details, and delicate ornamental accents only when they fit the requested character. Use a restrained desert palette with warm cream, sand beige, dusty brown, muted red, faded turquoise, pale teal, bone white, soft gray, and hazy golden light. Add subtle windblown motion, soft edge transitions, atmospheric dust, distant haze, and painterly background simplification to create a grand mythic feeling. Keep it universal for any character, without forcing skulls, masks, horns, feathers, staffs, bones, cultural objects, tribal patterns, weapons, specific costumes, or desert scenery unless requested. No text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, no letters, and no numbers.",
    "aspectRatio": "1:1"
  },
  {
    "id": "20",
    "number": 20,
    "name": "Ornate Dark Occult Character Style",
    "category": "Dark Fantasy",
    "categoryTag": "DARK FANTASY",
    "categoryKey": "dark-fantasy",
    "imageUrl": "/assets/characters/20.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/20.jpeg",
    "desc": "Ornate Dark Occult Character Style",
    "prompt": "A highly detailed dark fantasy character illustration style with ornate symmetrical design, elegant flowing linework, and a refined gothic storybook finish. Use intricate decorative shapes, thin curling line details, layered costume forms, long graceful limbs, sharp silhouettes, and a mysterious otherworldly mood. The rendering should combine clean ink-like outlines with flat muted colors, soft cel-shading, delicate gradients, and subtle paper-texture warmth. Use a restrained palette of black, charcoal, warm cream, beige, muted gold, dusty gray, bone white, and deep red accent colors. Add ornamental abstract background flourishes, circular framing shapes, curling vine-like lines, and eye-like decorative motifs only as style elements when appropriate, keeping them non-readable and not symbolic unless requested. The character should feel elegant, eerie, ancient, and highly designed, with refined fantasy poster composition, clean shapes, and dense decorative detail without becoming messy. Keep it universal for any character, without forcing masks, eyes, tentacles, robes, occult symbols, religious symbols, bones, specific creatures, cultural objects, text, logos, signatures, watermarks, labels, stamps, UI elements, letters, numbers, or written symbols unless specifically requested.",
    "aspectRatio": "1:1"
  },
  {
    "id": "30",
    "number": 30,
    "name": "Grotesque Surreal Creature Concept Art Style",
    "category": "Dark Fantasy",
    "categoryTag": "DARK FANTASY",
    "categoryKey": "dark-fantasy",
    "imageUrl": "/assets/characters/30.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/30.jpeg",
    "desc": "Grotesque Surreal Creature Concept Art Style",
    "prompt": "A dark surreal creature concept art style with a clean character-design presentation, featuring a full-body subject isolated on a plain light background. The style should feel like polished concept art for a strange fantasy or sci-fi creature, with an eerie unsettling mood, elongated anatomy, oversized head, thin limbs, bony hands, crouched animal-like posture, and a disturbing but carefully designed silhouette. Use a muted palette of pale flesh tones, dirty ivory, dusty blue, faded coral, tan, and worn black, with soft desaturated shading and subtle painterly rendering. Surfaces should show cracked skin, scars, bandages, worn fabric, dangling cords, stitched or patched details, and strange ornamental attachments for a bio-organic, ritualistic, almost post-apocalyptic feel. Keep the rendering clean and detailed, with crisp edges, smooth form modeling, subtle texture, and strong focus on anatomy, costume damage, and odd design features. The subject should feel original, creepy, fragile, and intelligent, like a high-end creature design sheet. Keep the composition centered and minimal, with no busy environment, no scenery, no decorative frame, no readable text, no logo, no watermark, no signature, and no extra characters.",
    "aspectRatio": "1:1"
  },
  {
    "id": "31",
    "number": 31,
    "name": "Vibrant Fantasy Creature Portrait Style",
    "category": "Dark Fantasy",
    "categoryTag": "DARK FANTASY",
    "categoryKey": "dark-fantasy",
    "imageUrl": "/assets/characters/31.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/31.jpeg",
    "desc": "Vibrant Fantasy Creature Portrait Style",
    "prompt": "A polished fantasy creature portrait style with bold symmetrical framing, intense facial expression, and rich semi-realistic digital painting. Use strong sculpted facial planes, exaggerated creature anatomy, sharp ears or silhouette accents when appropriate, thick expressive brows, dramatic eyes, large tusk-like or fang-like forms only if requested, and a clean centered bust composition. The rendering should feel high-end and detailed, with smooth painterly blending, crisp edges, soft skin or fur texture, subtle scale-like surface detail when fitting the subject, and carefully painted hair or mane strands. Use a vivid fantasy palette built around turquoise, cyan, teal, deep green, warm ivory, bronze, leather brown, and glowing amber accents. Add small ornamental accessories, beads, rings, wraps, carved pieces, or natural materials only when they support the requested character, keeping them secondary to the face. The style should feel powerful, tribal-fantasy inspired but not tied to any real culture, with a clean light background, strong silhouette, dramatic color contrast, and premium character concept-art finish. Make it universal for any character or creature, without forcing tusks, piercings, jewelry, tattoos, face paint, horns, cultural symbols, weapons, masks, or specific fantasy race features unless requested. No readable text, no letters, no numbers, no logos, no signatures, no watermarks, no labels, no stamps, and no UI elements.",
    "aspectRatio": "1:1"
  },
  {
    "id": "5",
    "number": 5,
    "name": "Soft Heroic Game Character Style",
    "category": "Game & Painterly",
    "categoryTag": "GAME & PAINTERLY",
    "categoryKey": "game-painterly",
    "imageUrl": "/assets/characters/5.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/5.jpeg",
    "desc": "Soft Heroic Game Character Style",
    "prompt": "A polished stylized fantasy game character design style with chunky heroic proportions, rounded forms, expressive faces, and a clean premium digital painting finish. The character should feel friendly, bold, and animation-ready, with simplified anatomy, large readable shapes, soft sculpted volume, clean edges, and appealing exaggerated features. Use smooth painterly shading, gentle gradients, warm rim lighting, soft ambient shadows, and subtle material definition without making it realistic. The style should have a vibrant but balanced color palette with warm skin tones, rich browns, muted greens, deep blues, soft creams, gold accents, and warm orange highlights. Materials should look softly painted and slightly toy-like, with rounded metal, matte leather, clean fabric, soft hair or fur, and carefully shaped accessories only when requested. Keep the design bright, charming, and readable, with a fantasy character concept-art feel, gentle background gradients, minimal grounding shadow, and a polished collectible illustration look. Do not force weapons, armor, tools, hats, costumes, props, text, logos, signatures, watermarks, labels, stamps, copyright marks, UI elements, numbers, or written symbols unless specifically requested.",
    "aspectRatio": "1:1"
  },
  {
    "id": "13",
    "number": 13,
    "name": "Glossy Sci-Fi Concept Illustration Style",
    "category": "Game & Painterly",
    "categoryTag": "GAME & PAINTERLY",
    "categoryKey": "game-painterly",
    "imageUrl": "/assets/characters/13.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/13.jpeg",
    "desc": "Glossy Sci-Fi Concept Illustration Style",
    "prompt": "A polished futuristic concept-art style with clean hard-surface design, rounded geometric forms, and a sleek semi-realistic digital painting finish. Use smooth sculpted volumes, crisp panel-like shape separation, subtle mechanical detailing, elegant contour lines, and a refined industrial design feel. The rendering should combine sharp graphic clarity with soft painterly shading, using controlled highlights, glossy reflections, ambient occlusion, and clean shadow shapes to give the image a premium sci-fi look. Use a bright modern palette built around orange, white, cream, dark brown, and charcoal accents, with occasional metallic gray details and soft neutral backgrounds. The overall style should feel compact, intelligent, and highly designed, with simplified but sophisticated forms, precise edges, layered components, and a clean concept-sheet presentation. Keep it universal so it can work for any subject, applying the same sleek futuristic design language without forcing specific robot parts, wings, weapons, or machine components unless requested. No text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, and no written symbols.",
    "aspectRatio": "1:1"
  },
  {
    "id": "16",
    "number": 16,
    "name": "Dreamy Luminous Storybook Painting Style",
    "category": "Game & Painterly",
    "categoryTag": "GAME & PAINTERLY",
    "categoryKey": "game-painterly",
    "imageUrl": "/assets/characters/16.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/16.jpeg",
    "desc": "Dreamy Luminous Storybook Painting Style",
    "prompt": "A dreamy painterly illustration style with soft cinematic lighting, luminous color blending, and a magical storybook atmosphere. Use rich painterly brushwork, glowing highlights, soft bloom, gentle depth haze, and smooth transitions between color masses to create an emotional, immersive look. The palette should lean toward vibrant blues, turquoise, cyan, aqua, lavender, and warm golden light accents, with subtle pink and peach highlights for contrast. Shapes should feel soft and slightly simplified, with delicate edges, atmospheric perspective, floating light particles, reflective surfaces, and a tranquil fantasy mood. The rendering should feel polished but painterly, with expressive light beams, soft reflections, subtle texture, and a calm enchanting tone. Keep the style universal so it can apply to any subject, without forcing specific animals, people, scenery, or props unless requested. No text, no logos, no signatures, no watermarks, no labels, no stamps, no copyright marks, no UI elements, and no written symbols.",
    "aspectRatio": "1:1"
  },
  {
    "id": "32",
    "number": 32,
    "name": "Painterly Goblin Game Character Style",
    "category": "Game & Painterly",
    "categoryTag": "GAME & PAINTERLY",
    "categoryKey": "game-painterly",
    "imageUrl": "/assets/characters/32.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/32.jpeg",
    "desc": "Painterly Goblin Game Character Style",
    "prompt": "A colorful stylized fantasy game character illustration style with chunky exaggerated proportions, bold readable silhouettes, and a playful mischievous mood. Use a painterly digital finish with soft brush texture, rounded forms, crisp focal details, and slightly rough hand-painted edges. The character should feel compact, expressive, and creature-like, with oversized head proportions, large glowing eyes when appropriate, sharp teeth or claw-like accents only if requested, and strong cartoon-fantasy shape language. Use warm metallic tones, rusty browns, dark leather colors, muted stone gray, bright green glow accents, purple highlights, orange-gold details, and cool blue background shadows. Materials should feel hand-painted and tactile, with worn metal, rough fabric, chipped paint, leather straps, small rivets, and fantasy gadget-like details only when they fit the requested subject. The lighting should feel dramatic but playful, with soft atmospheric depth, glowing focal points, warm highlights, and shadowy cave-like or fantasy ambience when appropriate. Keep the final look like a polished collectible game character splash art, readable, fun, and detailed without becoming realistic. Make it universal for any character or creature, without forcing pirate elements, skulls, swords, hooks, mechanical parts, glowing eyes, caves, weapons, or props unless specifically requested. No readable text, no letters, no numbers, no logos, no signatures, no watermarks, no labels, no stamps, and no UI elements.",
    "aspectRatio": "1:1"
  },
  {
    "id": "33",
    "number": 33,
    "name": "Pop Surreal Streetwear Character Photo Style",
    "category": "Game & Painterly",
    "categoryTag": "GAME & PAINTERLY",
    "categoryKey": "game-painterly",
    "imageUrl": "/assets/characters/33.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/33.jpeg",
    "desc": "Pop Surreal Streetwear Character Photo Style",
    "prompt": "A vibrant pop-surreal character portrait style with a fashion-editorial photography look, realistic textures, bold streetwear styling, and playful anthropomorphic character design. Use crisp studio lighting, sharp realistic detail, clean shadows, and a bright graphic background with flat saturated color fields. The subject should feel stylish, youthful, and urban, with exaggerated character features, expressive face design, realistic fabric folds, detailed accessories, casual layered clothing, and confident street-fashion attitude. Use a punchy color palette, warm skin tones, and deep shadow accents. The rendering should mix photoreal clothing and materials with surreal character anatomy, creating a premium advertising-campaign feel, clean but slightly strange, fashionable, playful, and eye-catching. Use a simple flat background with one large circular color shape or bold geometric color block behind the subject when appropriate. Keep it universal for any character or creature, without forcing monkey features, backpacks, caps, tattoos, jewelry, streetwear, sneakers, or specific accessories unless requested. No readable text, no letters, no numbers, no logos, no brand marks, no signatures, no watermarks, no labels, no stamps, and no UI elements.",
    "aspectRatio": "1:1"
  },
  {
    "id": "34",
    "number": 34,
    "name": "Abstract Geometric Portrait Painting Style",
    "category": "Game & Painterly",
    "categoryTag": "GAME & PAINTERLY",
    "categoryKey": "game-painterly",
    "imageUrl": "/assets/characters/34.jpeg",
    "fallbackUrl": "https://ai2play.net/character-art-styles/34.jpeg",
    "desc": "Abstract Geometric Portrait Painting Style",
    "prompt": "A bold abstract geometric portrait style with cubist-inspired facial construction, expressive painterly texture, and layered modern graphic shapes. Use fragmented planes, sharp angular features, blocky color sections, thick black contours, rough brush strokes, dripping paint marks, thin sketch lines, and overlapping rectangles to build the character’s face. The rendering should feel handmade and energetic, mixing acrylic painting, collage-like shape design, urban mural texture, and contemporary abstract portrait art. Use a vibrant palette with turquoise, teal, orange, red, yellow, cream, black, dark brown, and muted green, balanced with strong contrast and visible brush texture. The subject should remain readable as a character or portrait, but the forms should be broken into expressive geometric pieces with asymmetry, stylized eyes, simplified lips, angular nose shapes, and graphic shadow blocks. Keep the background painterly and abstract, with soft color fields, rough edges, subtle scratches, and non-readable marks only. Make it universal for any character, creature, or subject, without forcing a human face, specific ethnicity, text, symbols, letters, numbers, logos, signatures, watermarks, labels, stamps, or UI elements.",
    "aspectRatio": "1:1"
  }
];
