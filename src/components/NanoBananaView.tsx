import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Copy, 
  Check, 
  Download, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Info, 
  Image as ImageIcon,
  Paperclip,
  Sparkles,
  Layers,
  Palette,
  Package,
  ShoppingBag,
  CreditCard,
  Store,
  User,
  Scissors,
  Wand2,
  FileSpreadsheet
} from 'lucide-react';

interface NanoBananaViewProps {
  onBackToResources: () => void;
  onTriggerToast: (msg: string) => void;
}

interface IdeaRow {
  picSrc?: string;
  picAspect?: 'wide' | 'tall' | 'square';
  label: string;
  ratio: string;
  refs: string;
  prompt: string;
  cutnote?: string;
}

interface IdeaCard {
  id: string;
  num: string;
  title: string;
  desc: string;
  part: string;
  tag: string;
  tagColor: string;
  icon: React.ReactNode;
  rows: IdeaRow[];
}

interface SectionPart {
  id: string;
  title: string;
  desc: string;
  dotColor: string;
}

const PARTS: SectionPart[] = [
  {
    id: 'first',
    title: 'First image',
    desc: 'Start with a short idea and see what the model chooses for you.',
    dotColor: '#7dd3fc'
  },
  {
    id: 'better',
    title: 'Better prompts',
    desc: 'Answer a few simple questions: what is it, where is it, what light, what camera, and the style at the end.',
    dotColor: '#a78bfa'
  },
  {
    id: 'logo',
    title: 'Logo',
    desc: 'Pick the square shape and put the exact words in double quotes.',
    dotColor: '#f472b6'
  },
  {
    id: 'every',
    title: 'Your logo on everything',
    desc: 'Add the logo as an image with +, then put it on anything you need.',
    dotColor: '#fb923c'
  },
  {
    id: 'chars',
    title: 'Characters',
    desc: 'Make Mia once on the Characters page, then add her to any prompt.',
    dotColor: '#4ade80'
  },
  {
    id: 'edit',
    title: 'Edit your photo',
    desc: 'Upload a photo, or open one you made, and write what you want to change.',
    dotColor: '#facc15'
  },
  {
    id: 'together',
    title: 'Put it together',
    desc: 'Several images in one prompt: a flyer, a social post and a brand board.',
    dotColor: '#c084fc'
  }
];

const IDEAS: IdeaCard[] = [
  {
    id: 'card-1',
    num: '01',
    title: 'Your first image',
    desc: 'A short idea is enough to start. The colours, the light, the plate and even the cup of tea were chosen by the model.',
    part: 'first',
    tag: 'First image',
    tagColor: 'text-[#7dd3fc] border-[#7dd3fc]/40',
    icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/01.jpg',
        picAspect: 'wide',
        label: 'Prompt',
        ratio: '16:9',
        refs: 'No images to add, just the prompt',
        prompt: 'Pastel macarons on a white marble table.'
      }
    ]
  },
  {
    id: 'card-2',
    num: '02',
    title: 'The macaron product photo',
    desc: 'Now we choose: twelve macarons in blush pink, sage green and cream, soft morning light, a product photo at table height. These colour words are the brand palette, used in every prompt.',
    part: 'better',
    tag: 'Better prompts',
    tagColor: 'text-[#a78bfa] border-[#a78bfa]/40',
    icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/02.jpg',
        picAspect: 'wide',
        label: 'Prompt',
        ratio: '16:9',
        refs: 'No images to add, just the prompt',
        prompt: 'A product photo of pastel macarons for a small French pastry shop. Twelve macarons in blush pink, sage green and cream stand in neat rows on a two-tier cream ceramic cake stand, each with a smooth matte top, a ruffled foot and a thin layer of filling. The stand sits on a pale linen tablecloth, with a small glass vase of dried pink roses at the right and a few loose macarons in front. Soft morning light comes from a window at camera-left and leaves gentle shadows on the right. Shot at table height with an 85mm lens at f/4, the cream wall behind softly blurred. Soft pastel colours with true whites, airy and elegant.'
      }
    ]
  },
  {
    id: 'card-3',
    num: '03',
    title: 'The Pastelle logo',
    desc: 'The word Pastelle in a thin serif, a small gold macaron above it and the words MACARON BOUTIQUE under it. Both versions spelled everything right.',
    part: 'logo',
    tag: 'Logo',
    tagColor: 'text-[#f472b6] border-[#f472b6]/40',
    icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/03.jpg',
        picAspect: 'square',
        label: 'Prompt',
        ratio: '1:1',
        refs: 'No images to add, just the prompt',
        prompt: 'A logo for a macaron boutique on a plain blush pink background. In the centre, the word "Pastelle" in an elegant, thin serif typeface in deep sage green. Above the word, a small line drawing of one macaron with a tiny sprig of two leaves, drawn in thin soft gold lines. Under the word, the words "MACARON BOUTIQUE" in small, widely spaced sans-serif capitals in sage green. Flat design, clean lines, generous space around the logo.'
      }
    ]
  },
  {
    id: 'card-4',
    num: '04',
    title: 'Gift box',
    desc: 'Click +, find the logo in your project and click Add to prompt. Now the model can see it.',
    part: 'every',
    tag: 'Logo on everything',
    tagColor: 'text-[#fb923c] border-[#fb923c]/40',
    icon: <Package className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/04.jpg',
        picAspect: 'wide',
        label: 'Prompt',
        ratio: '16:9',
        refs: 'Images to add: the logo (card 03)',
        prompt: 'A product photo of macaron gift boxes for the boutique whose logo is in the reference image. A square blush pink box with a lid stands at the left, the logo from the reference image printed in soft gold foil in the centre of the lid, tied with a thin sage green satin ribbon in a small bow. At the right, a second box stands open, showing six macarons in blush pink, sage green and cream in two neat rows on cream tissue paper. The boxes sit on a pale marble counter with a few dried pink rosebuds scattered around them. Soft daylight from a window at camera-left, gentle shadows on the right. Shot at table height with an 85mm lens at f/5.6, the cream wall behind softly blurred. Soft pastel colours with true whites, airy and elegant.'
      }
    ]
  },
  {
    id: 'card-5',
    num: '05',
    title: 'Tote bag',
    desc: 'The same logo added as an image, printed on a canvas tote bag.',
    part: 'every',
    tag: 'Logo on everything',
    tagColor: 'text-[#fb923c] border-[#fb923c]/40',
    icon: <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/05.jpg',
        picAspect: 'wide',
        label: 'Prompt',
        ratio: '16:9',
        refs: 'Images to add: the logo',
        prompt: 'A product mockup photo of a cream canvas tote bag hanging from the back of a light wooden chair, the logo from the reference image printed in sage green in the middle of the bag. The bag has two long cotton handles and soft natural folds in the fabric. Beside the chair, a small round marble table holds a cup of tea on a saucer. A cream wall behind with soft shadows from a window. Soft daylight from camera-left. Shot at eye level with a 50mm lens at f/4, the bag sharp. Soft pastel colours, natural fabric texture.'
      }
    ]
  },
  {
    id: 'card-6',
    num: '06',
    title: 'Business cards and stickers',
    desc: 'Stationery for the shop: business cards, a sticker and a small paper bag, all with the same logo.',
    part: 'every',
    tag: 'Logo on everything',
    tagColor: 'text-[#fb923c] border-[#fb923c]/40',
    icon: <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/06.jpg',
        picAspect: 'wide',
        label: 'Prompt',
        ratio: '16:9',
        refs: 'Images to add: the logo',
        prompt: 'A top-down flat lay photo of stationery for a macaron boutique on a cream linen surface. Two business cards lie side by side: one shows the logo from the reference image in sage green on blush pink, the other is plain sage green. Beside them, a round blush pink sticker with the same logo, a small cream paper bag with the logo printed on the front, a loose sage green satin ribbon and two macarons, one blush pink and one cream. The items are spaced apart in a calm, balanced layout. Soft even daylight from the top left with gentle shadows. Shot from directly above with a 50mm lens, everything sharp. Soft pastel colours, real paper texture.'
      }
    ]
  },
  {
    id: 'card-7',
    num: '07',
    title: 'Shop front',
    desc: 'The logo on a sage green sign above the shop window. Every time, the logo stays the same.',
    part: 'every',
    tag: 'Logo on everything',
    tagColor: 'text-[#fb923c] border-[#fb923c]/40',
    icon: <Store className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/07.jpg',
        picAspect: 'wide',
        label: 'Prompt',
        ratio: '16:9',
        refs: 'Images to add: the logo',
        prompt: 'A photo of a small macaron shop front on a quiet cobblestone street in the morning. Above the large shop window hangs a sage green sign with the logo from the reference image in soft gold. Through the clean glass, white shelves hold rows of pastel macarons in blush pink, sage green and cream. A blush pink wooden door stands at the right, with two potted white hydrangeas beside it and a small wooden bench under the window. The cream stone walls on both sides are plain. Soft morning light falls across the front from camera-left. Shot at eye level from across the street with a 35mm lens at f/8, the whole shop front sharp. Soft pastel colours, real stone and wood texture.'
      }
    ]
  },
  {
    id: 'card-8',
    num: '08',
    title: 'Mia, the pastry chef',
    desc: 'Click Characters on the left and describe her. Click Format, and Flow turns it into a full character prompt. Then click Create body, give her a name, Mia, and click Done.',
    part: 'chars',
    tag: 'Characters',
    tagColor: 'text-[#4ade80] border-[#4ade80]/40',
    icon: <User className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/08.jpg',
        picAspect: 'wide',
        label: 'Step 1 · Describe her, then click Format',
        ratio: 'Characters page',
        refs: 'No images to add: typed on the Characters page',
        prompt: 'A pastry chef in her early 30s with shoulder-length chestnut brown hair tied back in a low bun, a few loose strands framing her face, light freckles across her nose, warm brown eyes and a calm, friendly smile. She wears a cream linen shirt with the sleeves rolled to her elbows and a sage green apron.'
      },
      {
        label: 'Step 2 · Create body',
        ratio: "Mia's page",
        refs: "No images to add: typed on Mia's page, under Create body",
        prompt: 'Slim build, average height. A cream linen shirt with the sleeves rolled up, a sage green apron down to her knees, light beige trousers and white canvas sneakers. She stands relaxed, arms at her sides.'
      }
    ]
  },
  {
    id: 'card-9',
    num: '09',
    title: 'Mia pipes macaron shells',
    desc: 'Click +, open Characters and add Mia. Write her name first, then what she is doing, and say what each hand does.',
    part: 'chars',
    tag: 'Characters',
    tagColor: 'text-[#4ade80] border-[#4ade80]/40',
    icon: <Wand2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/09.jpg',
        picAspect: 'wide',
        label: 'Prompt',
        ratio: '16:9',
        refs: 'Images to add: Mia (from Characters)',
        prompt: 'Mia, a pastry chef, pipes pale pink macaron shells onto a baking tray in a bright pastel bakery kitchen. Her right hand squeezes a white piping bag and her left hand steadies the tray on a white marble counter, where rows of small round pink shells sit in neat lines. Behind her, open shelves hold cream bowls and glass jars, softly blurred. Soft daylight comes from a window at camera-left. A waist-up shot at eye level with a 50mm lens at f/2.8, her face sharp, looking down at her work with a small smile. Natural skin texture, soft pastel colours.'
      }
    ]
  },
  {
    id: 'card-10',
    num: '10',
    title: 'Mia ties the ribbon',
    desc: 'Mia on our gift box, with the logo added as a second image.',
    part: 'chars',
    tag: 'Characters',
    tagColor: 'text-[#4ade80] border-[#4ade80]/40',
    icon: <Package className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/10.jpg',
        picAspect: 'wide',
        label: 'Prompt',
        ratio: '16:9',
        refs: 'Images to add: Mia (from Characters) + the logo',
        prompt: 'Mia ties a sage green satin ribbon into a bow on a square blush pink macaron gift box at a cream packing table. The logo from the reference image is printed in soft gold foil in the centre of the lid. Her two hands hold the two ends of the ribbon, pulling the bow tight. Beside her, a short stack of folded pink boxes and a spool of sage green ribbon. She looks down at the bow with a small smile. Morning light from a window at camera-right. A medium shot from the front at chest height with a 50mm lens at f/4, her face and the box sharp. Natural skin texture, soft pastel colours.'
      }
    ]
  },
  {
    id: 'card-11',
    num: '11',
    title: 'Mia at the counter',
    desc: 'Same face, same apron. Small text far in the background, like the little cards on the counter, can still come out as random letters, so keep important text big and close.',
    part: 'chars',
    tag: 'Characters',
    tagColor: 'text-[#4ade80] border-[#4ade80]/40',
    icon: <User className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/11.jpg',
        picAspect: 'wide',
        label: 'Prompt',
        ratio: '16:9',
        refs: 'Images to add: Mia (from Characters) + the logo',
        prompt: 'Mia stands behind the counter of a small pastel macaron shop and holds a square blush pink gift box toward the camera with both hands, smiling at the viewer. The logo from the reference image is printed in soft gold foil on the lid. In front of her, a glass display case shows rows of pastel macarons in blush pink, sage green and cream. Behind her, a sage green wall with a round brass mirror and a vase of dried pink roses on a shelf. Soft warm daylight from the shop window at camera-left. A medium shot at eye level with a 50mm lens at f/4, her face and the box sharp. Natural skin texture, soft pastel colours.'
      }
    ]
  },
  {
    id: 'card-12',
    num: '12',
    title: 'From phone photo to product photo',
    desc: 'Click +, then Upload media, and open your photo. In the box at the bottom, write what you want to change. For this demo the phone photo was made with AI first; use a photo of your own instead.',
    part: 'edit',
    tag: 'Edit',
    tagColor: 'text-[#facc15] border-[#facc15]/40',
    icon: <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/12.jpg',
        picAspect: 'wide',
        label: 'Step 1 · Start photo (or your own)',
        ratio: '16:9',
        refs: 'No images to add, just the prompt',
        prompt: 'An ordinary phone photo taken at home of freshly baked pastel macarons on a baking tray lined with parchment paper, on a cluttered kitchen counter. The macarons are blush pink, sage green and cream, a few of them slightly uneven, with crumbs and a dusting of powdered sugar on the parchment. Beside the tray, a glass mixing bowl with a whisk, a bag of almond flour folded shut and a crumpled tea towel. Warm yellow ceiling light from above, a little flat, the framing slightly tilted, like a quick snapshot from a phone.'
      },
      {
        picSrc: '/nano-banana-2-1-beginners/13.jpg',
        picAspect: 'wide',
        label: 'Step 2 · Upload it, open it and use this edit',
        ratio: 'Edit',
        refs: 'Edit: typed in the image view of the uploaded photo',
        prompt: 'Turn this into a clean product photo: the same macarons arranged in neat rows on a cream ceramic cake stand on a pale marble table, soft daylight from a window at the left, a softly blurred cream wall behind. Keep the colours and shapes of the macarons.'
      }
    ]
  },
  {
    id: 'card-13',
    num: '13',
    title: 'Swap the flowers',
    desc: 'Small changes work too. Say what to change and what to keep: only the flowers changed.',
    part: 'edit',
    tag: 'Edit',
    tagColor: 'text-[#facc15] border-[#facc15]/40',
    icon: <Scissors className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/14.jpg',
        picAspect: 'wide',
        label: 'Edit · On the macaron photo from card 02',
        ratio: 'Edit',
        refs: 'Edit: typed in the image view of the macaron photo (card 02)',
        prompt: 'Replace the dried pink roses in the glass vase with two fresh white peonies. Keep everything else exactly the same.'
      }
    ]
  },
  {
    id: 'card-14',
    num: '14',
    title: 'Grand opening flyer',
    desc: 'Two images, the logo and the macaron photo, and the vertical 9:16 ratio. The words in quotes all came out right.',
    part: 'together',
    tag: 'Together',
    tagColor: 'text-[#c084fc] border-[#c084fc]/40',
    icon: <FileSpreadsheet className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/15.jpg',
        picAspect: 'tall',
        label: 'Prompt',
        ratio: '3:4',
        refs: 'Images to add: 1. the logo, 2. the macaron photo (card 02)',
        prompt: 'A printed flyer design for the grand opening of a macaron boutique, filling the whole image, on a cream background with a thin sage green border. At the top, the logo from the first reference image. In the middle, the macaron photo from the second reference image inside a tall frame with rounded top corners. Below it, the words "GRAND OPENING" in large, elegant sage green serif capitals, then "Saturday, May 10" in a soft gold script, then "A free macaron with every box" in small sage green letters. A few small dried rosebud illustrations in the corners. Clean, balanced layout with generous space, in the style of fine wedding stationery.'
      }
    ]
  },
  {
    id: 'card-15',
    num: '15',
    title: 'Social media post',
    desc: 'A square post: the words NEW FLAVOURS above the gift box, and the logo below it.',
    part: 'together',
    tag: 'Together',
    tagColor: 'text-[#c084fc] border-[#c084fc]/40',
    icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/16.jpg',
        picAspect: 'square',
        label: 'Prompt',
        ratio: '1:1',
        refs: 'Images to add: 1. the logo, 2. the gift box photo (card 04)',
        prompt: 'A square social media post for a macaron boutique, on a soft blush pink background. In the centre, the gift box photo from the second reference image, inside a rounded frame with a thin sage green border. Above it, the words "NEW FLAVOURS" in large, elegant sage green serif capitals. Below it, the logo from the first reference image, small and centred. A few dried rosebuds in the corners. Clean, elegant layout with generous space, flat graphic design filling the whole image.'
      }
    ]
  },
  {
    id: 'card-16',
    num: '16',
    title: 'Brand board',
    desc: 'Three images: the logo, the photo and the gift box. Nano Banana put them in a clean layout, with the four colours and their names.',
    part: 'together',
    tag: 'Together',
    tagColor: 'text-[#c084fc] border-[#c084fc]/40',
    icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
    rows: [
      {
        picSrc: '/nano-banana-2-1-beginners/17.jpg',
        picAspect: 'wide',
        label: 'Prompt',
        ratio: '16:9',
        refs: 'Images to add: 1. the logo, 2. the macaron photo, 3. the gift box photo',
        prompt: 'A brand identity presentation board for a macaron boutique, laid out on a cream background in a clean grid. At the top left, the logo from the first reference image. Under the logo, four round colour swatches in a row, in blush pink, sage green, cream and soft gold, with one word under each in small sage green letters: "Blush", "Sage", "Cream", "Gold". On the right side, the macaron photo from the second reference image and the gift box photo from the third reference image, in two rectangular frames with thin sage green borders. At the bottom left, the words "Brand Board" in a thin elegant serif. Generous space between every element, elegant and calm, like a page from a designer\'s portfolio.'
      }
    ]
  }
];

export const NanoBananaView: React.FC<NanoBananaViewProps> = ({
  onBackToResources,
  onTriggerToast
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Lightbox state
  const [activeLightboxPic, setActiveLightboxPic] = useState<{ src: string; caption: string } | null>(null);

  // All visible pictures for lightbox navigation
  const allPics = React.useMemo(() => {
    const list: { src: string; caption: string }[] = [];
    IDEAS.forEach(idea => {
      if (selectedFilter === 'all' || idea.part === selectedFilter) {
        idea.rows.forEach(r => {
          if (r.picSrc) {
            list.push({ src: r.picSrc, caption: `${idea.title} - ${r.label}` });
          }
        });
      }
    });
    return list;
  }, [selectedFilter]);

  // Handle escape and arrow keys for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeLightboxPic) return;
      if (e.key === 'Escape') setActiveLightboxPic(null);
      if (e.key === 'ArrowRight') {
        const curIdx = allPics.findIndex(p => p.src === activeLightboxPic.src);
        if (curIdx >= 0 && curIdx < allPics.length - 1) {
          setActiveLightboxPic(allPics[curIdx + 1]);
        }
      }
      if (e.key === 'ArrowLeft') {
        const curIdx = allPics.findIndex(p => p.src === activeLightboxPic.src);
        if (curIdx > 0) {
          setActiveLightboxPic(allPics[curIdx - 1]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxPic, allPics]);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onTriggerToast('Prompt copied to clipboard!');
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const handleDownloadAll = () => {
    const lines: string[] = [
      'Nano Banana 2.1 in Google Flow, the Pastelle brand: all the prompts',
      'AI2Play (ai2play.net/nano-banana-2-1-beginners.html)',
      '====================================================\n'
    ];

    PARTS.forEach(part => {
      lines.push(`\n== ${part.title.toUpperCase()} ==\n`);
      const partIdeas = IDEAS.filter(i => i.part === part.id);
      partIdeas.forEach(idea => {
        lines.push(`${idea.num}  ${idea.title}`);
        idea.rows.forEach(row => {
          lines.push(`[${row.label}] ${row.refs}`);
          lines.push(`"${row.prompt}"\n`);
        });
      });
    });

    const blob = new Blob([lines.join('\r\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nano Banana 2.1 beginners prompts - AI2Play.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onTriggerToast('All prompts downloaded (.txt)!');
  };

  return (
    <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-8 animate-rise">
      
      {/* Back button */}
      <div className="mb-3">
        <button
          onClick={onBackToResources}
          className="inline-flex items-center gap-1.5 text-sm sm:text-base text-[#a89dc6] hover:text-[#ece9f7] font-medium transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Resources</span>
        </button>
      </div>

      {/* Header section matching original site */}
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-7 sm:mb-9">
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Nano Banana 2.1 in <span className="text-[#8b5cff] drop-shadow-[0_0_20px_rgba(139,92,255,0.55)]">Google Flow</span>
          </h1>
          <p className="text-base sm:text-lg text-[#a89dc6] mt-3">
            <b className="text-[#ffcf4a] font-bold">Full tutorial for beginners:</b> the Pastelle macaron brand from the video, every prompt ready to copy
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 sm:gap-3.5 flex-wrap">
          <a
            href="https://flow.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-[48px] px-5 sm:px-6 rounded-xl bg-[#8b5cff] hover:bg-[#7440e6] text-white font-bold text-sm sm:text-base transition-all shadow-[0_4px_20px_rgba(139,92,255,0.4)] hover:shadow-[0_6px_25px_rgba(139,92,255,0.6)]"
          >
            <span>Open Google Flow</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={handleDownloadAll}
            className="inline-flex items-center gap-2 h-[48px] px-4 sm:px-5 rounded-xl bg-[#161029] border border-[#2b2247] hover:border-[#8b5cff] text-[#ece9f7] font-bold text-sm sm:text-base transition-all hover:bg-[#1d1636] cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#8b5cff]" />
            <span>All prompts (.txt)</span>
          </button>

          <a
            href="https://www.youtube.com/@AI2Play"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-[48px] px-4 sm:px-5 rounded-xl bg-[#161029] border border-[#2b2247] hover:border-[#8b5cff] text-[#ece9f7] font-bold text-sm sm:text-base transition-all hover:bg-[#1d1636]"
          >
            <img src="/assets/aistudio/SaungDigital_757c12af.png" alt="SaungDigital" className="w-7 h-5 sm:w-8 sm:h-6 object-contain" />
            <span>SaungDigital on YouTube</span>
          </a>
        </div>
      </header>

      {/* 4 Steps Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
        <a 
          href="https://flow.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#161029] border border-[#2b2247] hover:border-[#8b5cff] transition-all group"
        >
          <span className="w-9 h-9 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.4)]">
            1
          </span>
          <div>
            <b className="block text-sm sm:text-base font-bold text-white group-hover:text-[#ffcf4a] transition-colors">
              Open Google Flow
            </b>
            <span className="block text-xs text-[#a89dc6] mt-0.5 leading-snug">
              Sign in with your Google account and click New project.
            </span>
          </div>
        </a>

        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#161029] border border-[#2b2247]">
          <span className="w-9 h-9 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.4)]">
            2
          </span>
          <div>
            <b className="block text-sm sm:text-base font-bold text-white">Pick the settings</b>
            <span className="block text-xs text-[#a89dc6] mt-0.5 leading-snug">
              Image, the shape shown on the card, Nano Banana 2.1, and x2 for two versions.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#161029] border border-[#2b2247]">
          <span className="w-9 h-9 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.4)]">
            3
          </span>
          <div>
            <b className="block text-sm sm:text-base font-bold text-white">Add the images</b>
            <span className="block text-xs text-[#a89dc6] mt-0.5 leading-snug">
              Only when a card lists them: click +, pick each one and click Add to prompt.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#161029] border border-[#2b2247]">
          <span className="w-9 h-9 rounded-full bg-[#8b5cff] text-white font-extrabold text-sm grid place-items-center flex-shrink-0 shadow-[0_0_12px_rgba(139,92,255,0.4)]">
            4
          </span>
          <div>
            <b className="block text-sm sm:text-base font-bold text-white">Paste a prompt</b>
            <span className="block text-xs text-[#a89dc6] mt-0.5 leading-snug">
              Copy it from a card below, paste it and press the arrow.
            </span>
          </div>
        </div>
      </div>

      {/* Important Info Note Banner */}
      <div className="flex items-start gap-3 p-4 mb-6 rounded-xl border border-dashed border-[#3a2f5e] bg-[#161029]/50 text-xs sm:text-sm text-[#a89dc6] leading-relaxed">
        <Info className="w-5 h-5 flex-shrink-0 text-[#ffcf4a] mt-0.5" />
        <div>
          <b className="text-[#ece9f7] font-semibold">Made on a free Google account.</b> Every image on this page was made in Google Flow with Nano Banana 2.1 on a free account. Images use 0 credits, but there is a usage limit, so you may have to wait a little. To save an image, click Download: 1K or 2K Upscaled on a free account; 4K needs a paid plan.
        </div>
      </div>

      {/* Filter Chips Bar (Sticky) */}
      <nav className="flex flex-wrap items-center gap-2 mb-8 sticky top-16 z-20 py-2.5 bg-[#0c0714]/90 backdrop-blur-md">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`h-9 px-4 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
            selectedFilter === 'all'
              ? 'bg-[#8b5cff] border-[#8b5cff] text-white shadow-[0_0_12px_rgba(139,92,255,0.5)]'
              : 'bg-[#161029] border-[#2b2247] text-[#a89dc6] hover:border-[#8b5cff] hover:text-white'
          }`}
        >
          All 16
        </button>
        {PARTS.map((part) => (
          <button
            key={part.id}
            onClick={() => setSelectedFilter(part.id)}
            className={`h-9 px-3.5 sm:px-4 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              selectedFilter === part.id
                ? 'bg-[#8b5cff] border-[#8b5cff] text-white shadow-[0_0_12px_rgba(139,92,255,0.5)]'
                : 'bg-[#161029] border-[#2b2247] text-[#a89dc6] hover:border-[#8b5cff] hover:text-white'
            }`}
          >
            {part.title}
          </button>
        ))}
      </nav>

      {/* Main Ideas Sections */}
      <div className="space-y-12">
        {PARTS.map((part) => {
          if (selectedFilter !== 'all' && selectedFilter !== part.id) return null;
          const partIdeas = IDEAS.filter((i) => i.part === part.id);

          return (
            <section key={part.id} className="space-y-5">
              {/* Part Header */}
              <div className="pb-2 border-b border-[#2b2247]">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#ece9f7] flex items-center gap-2.5">
                  <span 
                    className="w-3 h-3 rounded-full flex-shrink-0" 
                    style={{ backgroundColor: part.dotColor }}
                  />
                  <span>{part.title}</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#a89dc6] mt-1">
                  {part.desc}
                </p>
              </div>

              {/* Ideas Cards inside this part */}
              <div className="space-y-5">
                {partIdeas.map((idea) => (
                  <article
                    key={idea.id}
                    id={idea.id}
                    className="p-5 sm:p-6 rounded-2xl bg-[#161029] border border-[#2b2247] hover:border-[#3a2f5e] transition-all"
                  >
                    {/* Idea Top Head */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#8b5cff]/15 text-[#b39bff] grid place-items-center flex-shrink-0">
                        {idea.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-[#ece9f7] leading-tight">
                          {idea.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#a89dc6] mt-1 leading-relaxed">
                          {idea.desc}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <span className="text-xl sm:text-2xl font-extrabold text-[#8579ad]">
                          {idea.num}
                        </span>
                        <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${idea.tagColor}`}>
                          {idea.tag}
                        </span>
                      </div>
                    </div>

                    {/* Idea Rows (Picture + Prompt Box) */}
                    <div className="space-y-4 pt-2">
                      {idea.rows.map((row, rIdx) => {
                        const copyKey = `${idea.id}-${rIdx}`;
                        const isCopied = copiedKey === copyKey;

                        return (
                          <div 
                            key={rIdx} 
                            className={`grid gap-4 sm:gap-6 items-start pt-4 border-t border-[#2b2247]/80 ${
                              row.picSrc 
                                ? 'grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)]' 
                                : 'grid-cols-1'
                            }`}
                          >
                            {/* Image with zoom thumbnail */}
                            {row.picSrc && (
                              <div className="relative group cursor-zoom-in">
                                <div 
                                  onClick={() => setActiveLightboxPic({ src: row.picSrc!, caption: `${idea.title}: ${row.label}` })}
                                  className={`rounded-xl overflow-hidden bg-[#100b20] border border-[#2b2247] group-hover:border-[#8b5cff] transition-all ${
                                    row.picAspect === 'tall' 
                                      ? 'max-w-[280px] sm:max-w-[320px]' 
                                      : row.picAspect === 'square' 
                                        ? 'max-w-[280px] sm:max-w-[320px]' 
                                        : 'max-w-full lg:max-w-[420px]'
                                  }`}
                                >
                                  <img 
                                    src={row.picSrc} 
                                    alt={idea.title} 
                                    loading="lazy"
                                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                                  />
                                </div>
                                <span className="absolute bottom-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded bg-black/70 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                  Click to enlarge
                                </span>
                              </div>
                            )}

                            {/* Prompt text and labels */}
                            <div className="flex flex-col gap-2.5 min-w-0">
                              <div className="flex items-center gap-2.5 flex-wrap">
                                <span className="text-[11px] font-extrabold tracking-wider uppercase text-[#ffcf4a]">
                                  {row.label}
                                </span>
                                <span className="text-[10px] font-bold text-[#c4b3ff] border border-[#3a2f5e] bg-[#1d1636] px-2 py-0.5 rounded-md">
                                  {row.ratio}
                                </span>
                              </div>

                              {/* References info */}
                              <div className="flex items-center gap-2 text-xs text-[#a89dc6]">
                                <Paperclip className="w-3.5 h-3.5 text-[#ffcf4a] flex-shrink-0" />
                                <span>{row.refs}</span>
                              </div>

                              {/* The Prompt String in Box */}
                              <div 
                                onClick={() => handleCopy(copyKey, row.prompt)}
                                className="p-3.5 rounded-xl bg-[#0c0714] border border-[#2b2247] text-xs sm:text-[13.5px] text-[#d9d3ef] leading-relaxed cursor-pointer hover:border-[#8b5cff]/60 hover:bg-[#120b22] transition-colors"
                              >
                                "{row.prompt}"
                              </div>

                              {/* Copy button */}
                              <button
                                onClick={() => handleCopy(copyKey, row.prompt)}
                                className={`inline-flex items-center gap-2 self-start h-10 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                                  isCopied
                                    ? 'bg-[#3ecf8e] text-[#0c0714] shadow-[0_0_15px_rgba(62,207,142,0.6)]'
                                    : 'bg-[#ffcf4a] hover:bg-[#ffd965] text-[#1a1030] shadow-[0_2px_10px_rgba(255,207,74,0.3)]'
                                }`}
                              >
                                {isCopied ? (
                                  <>
                                    <Check className="w-4 h-4 stroke-[2.5]" />
                                    <span>Copied!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-4 h-4 stroke-[2.5]" />
                                    <span>Copy prompt</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer matching original */}
      <footer className="mt-14 pt-8 border-t border-[#2b2247] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6f6494] text-center sm:text-left">
        <p>
          Images made in Google Flow with Nano Banana 2.1 in October 2026; your results will differ a little each time. Pastelle is a brand invented for this tutorial. Google Flow and Nano Banana are Google products; SaungDigital is not affiliated with Google.
        </p>
        <span className="font-bold text-[#8b5cff] whitespace-nowrap">
          SaungDigital &middot; Pastelle Brand Prompts
        </span>
      </footer>

      {/* Interactive Lightbox Modal for Full Resolution Images */}
      {activeLightboxPic && (
        <div 
          onClick={() => setActiveLightboxPic(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxPic(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#161029] border border-[#2b2247] hover:border-[#8b5cff] text-white grid place-items-center cursor-pointer z-60"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const curIdx = allPics.findIndex(p => p.src === activeLightboxPic.src);
              if (curIdx > 0) setActiveLightboxPic(allPics[curIdx - 1]);
              else setActiveLightboxPic(allPics[allPics.length - 1]);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#161029]/80 border border-[#2b2247] hover:border-[#8b5cff] text-white grid place-items-center cursor-pointer z-60"
            aria-label="Previous picture"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const curIdx = allPics.findIndex(p => p.src === activeLightboxPic.src);
              if (curIdx < allPics.length - 1) setActiveLightboxPic(allPics[curIdx + 1]);
              else setActiveLightboxPic(allPics[0]);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#161029]/80 border border-[#2b2247] hover:border-[#8b5cff] text-white grid place-items-center cursor-pointer z-60"
            aria-label="Next picture"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <figure 
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[85vh] flex flex-col items-center gap-3"
          >
            <img 
              src={activeLightboxPic.src} 
              alt={activeLightboxPic.caption}
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-[#2b2247]" 
            />
            <figcaption className="text-sm font-semibold text-[#a89dc6] text-center">
              {activeLightboxPic.caption}
            </figcaption>
          </figure>
        </div>
      )}

    </div>
  );
};
