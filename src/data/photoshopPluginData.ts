export interface PluginStep {
  number: number;
  title: string;
  desc: string;
  tip?: string;
}

export interface ClaudeVibePrompt {
  id: string;
  title: string;
  category: string;
  prompt: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: PluginStep[] = [
  {
    number: 1,
    title: 'Install UDT',
    desc: 'Get the free UXP Developer Tool from Creative Cloud.',
    tip: 'Requires admin rights. Enables live reloading and debugging for Photoshop UXP panels.'
  },
  {
    number: 2,
    title: 'Developer Mode',
    desc: 'Enable it in Photoshop, Preferences, Plugins, then restart.',
    tip: 'In Photoshop Preferences > Plugins > check "Enable Developer Mode".'
  },
  {
    number: 3,
    title: 'Add the guide',
    desc: 'Put CLAUDE.md in a new folder and open it in Claude Code.',
    tip: 'Place CLAUDE.md into the root of your plugin directory so Claude AI reads all rules automatically.'
  },
  {
    number: 4,
    title: 'Describe it',
    desc: 'Tell Claude what panel to build. It writes all the files.',
    tip: 'Describe your UI elements, buttons, and Photoshop document interactions.'
  },
  {
    number: 5,
    title: 'Run & share',
    desc: 'Load it in Photoshop, then package a .ccx to share.',
    tip: 'Use UDT to test with live reload, then click "Package" to produce an installable .ccx file.'
  }
];

export const STARTER_VIBE_PROMPTS: ClaudeVibePrompt[] = [
  {
    id: 'starter-1',
    title: 'Color Palette Extractor Panel',
    category: 'Example Plugin',
    description: 'Generates harmonious color swatches and gradient previews from the current active Photoshop document.',
    prompt: `Read CLAUDE.md and build a complete Adobe Photoshop UXP panel named "Color Palette Studio".
Requirements:
1. Manifest schema version 5, entrypoint index.html, target Photoshop 2024-2026.
2. A modern dark UI with buttons to:
   - "Sample Active Layer Colors": Extracts dominant 5 colors using Photoshop imaging API.
   - "Create Swatch Group": Calls executeAsModal to add new swatches to the active document.
   - "Export Gradient Card": Creates a new artboard with a gradient aesthetic showcase.
3. Include error boundary, clean styling, and zero external npm bundle dependencies.`
  },
  {
    id: 'starter-2',
    title: 'One-Click Batch Artboard Exporter',
    category: 'Productivity',
    description: 'Scans all artboards in the document and exports them as optimized WebP and PNG assets.',
    prompt: `Read CLAUDE.md and build a Photoshop UXP panel called "Artboard Turbo Export".
Features:
1. List all artboards in the current document with checkboxes.
2. Format dropdown: PNG, WebP (quality slider 10-100), and JPG.
3. Export button that wraps exportDocument in executeAsModal with a progress bar.
4. Output directory picker using UXP storage.localFileSystem.getFolder().`
  },
  {
    id: 'starter-3',
    title: 'Smart Layer Renamer & Organizer',
    category: 'Workflow',
    description: 'Automatically cleans up messy layer trees with BEM or design system naming conventions.',
    prompt: `Read CLAUDE.md and write a Photoshop UXP panel for batch renaming layers:
- Add prefix/suffix
- Find and replace text
- Number sequentially (e.g., Icon_01, Icon_02)
- Auto-group selected layers into color-coded folders based on type (Text, Shape, Pixel, Adjustment)`
  }
];
