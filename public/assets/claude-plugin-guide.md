# Photoshop UXP Plugin Guide (for building with an AI assistant)

A portable, brand-neutral guide for building **UXP plugins for Adobe Photoshop**: dockable HTML/CSS/JS **panels**
that live inside Photoshop (like the Layers or Swatches panel). Drop this file into the root of your plugin
project so your AI coding assistant has the hard-won rules up front, then ask it to build your plugin.

Compiled (June 2026) from Adobe's UXP developer docs, the official sample repo, and lessons verified by actually
shipping a panel on **Photoshop 2026 (v27.7)**. Read the **Critical gotchas** before writing code: UXP is not a
browser, and a panel's execution model has real rules that differ from a one-off script.

> Paths shown use Windows (`%APPDATA%` = `C:\Users\<you>\AppData\Roaming`). On macOS the equivalent root is
> `~/Library/Application Support`. Replace the `com.example.*` ids and sample names with your own.

---

## Environment

| | |
|---|---|
| App | Adobe Photoshop 2023 or newer; verified on **2026 (v27.x)** (manifest schema **v5**, `apiVersion: 2`) |
| OS | Windows or macOS |
| Working folder | one folder per plugin (your choice of location) |
| Build/run tool | **UXP Developer Tool (UDT)**, installed from Creative Cloud (needs admin) |
| Editor | VS Code, or any editor |

---

## Script vs. plugin: when to build which

Photoshop has two automation paths. Build a **script** (`.jsx` ExtendScript or `.psjs` UXP script) for one-shot,
run-on-demand automation where a native dialog is enough. Build a **plugin** (this guide) when you want:

- a persistent, dockable panel
- a custom, modern UI (HTML/CSS)
- live preview or interactivity
- to remember settings, react to events, or distribute it (`.ccx` or Marketplace)

A plugin can do everything a script can (same `photoshop` API plus `batchPlay`) and also gets the panel,
persistence, the Imaging API, and distribution. It costs more to build and needs the UXP Developer Tool.

---

## The recommended stack (sensible defaults)

For a first or mid-size branded panel, this stack avoids a build pipeline and the rough edges:

- **Vanilla JS** (no React or bundler) plus plain `index.html`, `index.js`, `styles.css`.
- **`manifestVersion: 5`** (`host` as an array, `data.apiVersion: 2`, `minVersion: "23.3.0"`).
- **UI = built-in Spectrum widgets plus custom CSS.** Use the zero-config `sp-*` widgets (`sp-slider`,
  `sp-radio-group`, `sp-button`, `sp-dropdown`, `sp-textfield`) for fiddly controls, and your own `<div>` plus CSS
  for the header and custom rows. **Skip Spectrum Web Components (SWC):** it needs a build step, is version-locked,
  and its `sp-slider` is not UXP-ready.
- **Pixel reading = the Imaging API** (`require("photoshop").imaging.getPixels`): read real pixels at a
  downsampled size and process them in JS.
- **Writes = `batchPlay` inside `core.executeAsModal`.**

---

## Critical gotchas (read before writing code)

1. **State changes MUST be wrapped in `core.executeAsModal(fn, {commandName})`, and so must `imaging.getPixels`**
   (verified on PS 27.7: `getPixels` outside a modal throws "only allowed from inside a modal scope"). Unlike a
   standalone script (implicitly modal), a panel is not. Any `batchPlay` or DOM mutation, or `getPixels`, outside a
   modal scope throws. Keep the callback short: wrap `getPixels` plus `batchPlay` writes in the modal, but do heavy
   CPU work and file pickers outside it. A contended lock gives `e.number === 9`.

2. **Everything is async.** `batchPlay`, `getPixels`, `getData`, all storage, and `executeAsModal` return Promises:
   `await` them. Click handlers must be `async`. A missing `await` silently breaks ordering.

3. **UXP is NOT a browser.** The panel renders HTML/CSS via a custom engine:
   - Flexbox yes; CSS Grid no. No `gap` (use `margin`), no `transition`, `transform`, `animation`, `box-shadow`,
     `cursor`, or `z-index`. Only about 74 CSS properties exist.
   - `<div>` and `<span>` are fine; `<ul>`, `<li>`, `<em>`, `<strong>` render as plain boxes (style them yourself).
   - No `<canvas>`. Reference local assets (your logo) with the **`plugin://`** scheme, not `file://`.
   - Wire events with **`addEventListener`**, not `onclick=` attributes.
   - Custom web fonts are unreliable; design with the system or host font.

4. **The manifest `id` must match your code.** A panel `"id": "main"` in `manifest.json` must appear as
   `panels: { main: {...} }` in `entrypoints.setup(...)`: exact and case-sensitive. The key is lowercase
   **`entrypoints`** (not `entryPoints`). Manifest changes need a full **Unload then Load**.

5. **`green` is keyed `grain`** in every `RGBColor` descriptor (`{_obj:"RGBColor", red, grain, blue}`). Using
   `green` silently yields 0.

6. **Swatch and swatch-folder descriptors are undocumented** (ScriptListener-derived) but verified working:
   `make` to `_ref:"colors"` (plus `name`, `color`) and `make` to `_ref:"swatchFolderClass"`. Capture more via the
   Actions panel **Copy as Javascript** if a build rejects them.

7. **Imaging API: modal, downsample, dispose.** Call `getPixels` inside `executeAsModal`. Pass a small `targetSize`
   (about 256px long edge), read `imageData.getData({chunky:true})` (an RGBA `Uint8Array`), and call
   `imageData.dispose()` right after. Large undisposed buffers hit the plugin memory limit.

---

## Verified the hard way (shipping a real panel)

Confirmed on PS 27.7 by actually shipping a panel. These override guesses.

### Photoshop API (what works in a panel)
- **`new SolidColor()` is NOT constructable** here ("SolidColor is not a constructor"), so the DOM
  `selection.fill(SolidColor,...)` and `createTextLayer({color})` paths are out. Build every color with batchPlay
  **`RGBColor`** (green key `grain`): `fill` for selections, `set` `_ref:"color"` `_property:"foregroundColor"`
  for the foreground, and the text color inside `make textLayer`. Reading `app.foregroundColor.rgb`
  (`.red`/`.green`/`.blue`, 0-255) DOES work; only the constructor is dead.
- **Clipboard:** `require("uxp").clipboard` is undefined here. Use `navigator.clipboard.setContent({"text/plain": s})`
  (async), fall back to `navigator.clipboard.writeText`, and report real success (do not assume it worked).
- **Color picker (verified):** open Photoshop's own via batchPlay `showColorPicker` with the dialog flag as a
  PER-DESCRIPTOR option — `{_obj:"showColorPicker", _options:{dialogOptions:"display"}}` — inside `executeAsModal`
  with **`interactive: true`**. The result is not a clean RGBColor, so `set` `_ref:"color"`
  `_property:"foregroundColor"` to seed the foreground first, open the picker, then read the chosen color back from
  `app.foregroundColor.rgb` after OK. Restore the user's previous foreground in a `finally` so Cancel is a no-op.
- **Editable gradient:** `make` `_ref:"contentLayer"` with `using:{_obj:"contentLayer", type:{_obj:"gradientLayer",
  angle, type, gradient:{...}}}` makes an EDITABLE Gradient Fill layer (it auto-masks to a selection). The bare
  `gradientClassEvent` (gradient-tool drag) bakes pixels and REQUIRES `from`/`to` paint points or it throws a
  program error. Prefer the fill layer.
- **Eyedropper:** no dedicated event. `select` `_ref:"eyedropperTool"`, then `addNotificationListener` for `set`
  and filter the descriptor `_target` to `foregroundColor`; read `app.foregroundColor.rgb` in the callback. Read
  the prior tool via `get` `property:"tool"` on `application`/`targetEnum` and restore it on stop (fall back to `moveTool`).
- **Is there a selection?** UXP `doc.selection.bounds` THROWS when none exists (ExtendScript returned undefined):
  `try { hasSel = !!doc.selection.bounds } catch (e) { hasSel = false }`.
- DOM calls that DO work: `app.createDocument(opts)`, `doc.createLayer`, `doc.createLayerGroup({fromLayers})`,
  `doc.resizeCanvas(w, h, constants.AnchorPosition.TOPCENTER)`, `doc.selection.selectRectangle(bounds,
  constants.SelectionType.REPLACE, feather, antiAlias)`, `doc.activeLayers[0]`, `layer.bounds`,
  `doc.width`/`height`/`resolution` (plain pixel numbers).
- **Text via batchPlay** `make textLayer`: `textClickPoint` is a PERCENT of the doc size (convert px to percent);
  size is `pointsUnit` (px-at-resolution = `desiredPx * 72 / doc.resolution`). To center vertically, read
  `layer.bounds` after creation and nudge with a `move`/`offset` (pixelsUnit).
- **Listeners:** the object form `addNotificationListener([{event:"set"}], cb)` works (docs also show a string
  array). A callback must NOT re-enter `executeAsModal`; only read state or `setTimeout`. Remove with the same cb
  reference, and add a panel `hide()` cleanup so it does not outlive the UI.
- **Text layer font name:** `fontPostScriptName:"SegoeUIBlack"` (with `fontName:"Segoe UI"`, `fontStyleName:"Black"`)
  renders Segoe UI Black. A WRONG PostScript name SILENTLY substitutes a default font (no throw), so verify the name
  (Alchemist, or Actions panel **Copy as Javascript**) and keep a fallback such as `Arial-Black`.
- **Fit + center a layer on the canvas:** `layer.bounds` returns plain px numbers. Scale with a `transform`
  (`width`/`height` `percentUnit`, `freeTransformCenterState:"QCSAverage"`) using `scale = min(targetW/w, targetH/h)`
  to fit BOTH axes, then RE-READ `bounds` and `move` by an `offset` (`pixelsUnit`) so the layer center lands on the
  canvas center. Works for multi-line text.

### UXP UI and CSS (confirmed)
- No ancestor-hover: `.parent:hover .child` does nothing; `:hover` works only on the element itself.
- No `grid`, `gap`, `box-shadow`, `z-index`, `transition`. Layout is flexbox plus margins; stack order is DOM order.
- **The `title` attribute DOES show a tooltip** on hover (no custom tooltip needed).
- **Panel scrolling** (so a small screen reaches every control): `body { overflow-y: auto }` with the body bounded
  to `height: 100%` and the content `.panel { min-height: 100vh }`. Without it, a tall layout clips off-screen.
- **Multi-line `<textarea>` returns `\r`** (not `\n`) for line breaks. Read it with
  `value.replace(/\r\n|\r/g, "\n").split("\n")`. Photoshop text layers also use `\r`, so convert `\n`→`\r` when
  building a `textKey`.
- **No way to measure rendered text.** There is no `<canvas>`/`measureText`, and `offsetWidth`/`offsetHeight`/
  `getBoundingClientRect()` on an OFF-SCREEN or `visibility:hidden`/`display:none` node return **0** — so the classic
  "measure a hidden probe to auto-fit text" trick silently fails (the computed scale blows up and the text fills the
  whole box). Size text DETERMINISTICALLY instead (estimate width from character count × per-glyph em-widths, and
  height from the line count), or measure only a VISIBLE, laid-out element. `el.clientWidth` on a visible element
  DOES work.
- **No `aspect-ratio`.** For a square box (e.g. a 1:1 preview), set `height = clientWidth` from JS on load and on
  the window `resize` event.

### Manifest, icons, packaging (confirmed)
- **Icons must be declared in TWO places** or packaging fails ("Icons are not specified for panel entrypoints"): a
  top-level `icons` array (the Manage Plugins list, species `pluginList`) AND an `icons` array on EACH panel
  entrypoint (the tab). Both can point at the same PNG. `scale:[1,2]` looks for `name.png` and `name@2x.png`.
- **Icon requirements (verified):** PNG, **RGB color (not grayscale)**, with transparency; **24x24 at @1x and
  48x48 at @2x**. A grayscale PNG silently fails to render as the panel icon.
- **Side-loaded icon behavior (Adobe-confirmed, important):** Creative Cloud Desktop's "Manage plugins" list will
  NOT show your icon for a locally installed `.ccx` (it shows a generic tile); that is by design. Photoshop's own
  Plugins panel does show it. On a cold machine (one that never had the plugin loaded), the panel tile may not
  appear until a full Photoshop restart. A custom icon shows reliably in every surface only when the plugin is
  distributed through the Adobe Marketplace, where the icon comes from the verified listing. So a missing tile in a
  tester's Creative Cloud or a fresh install is usually cosmetic, not a build bug.
- **UDT Package does NOT honor `.uxpignore`**; it ships every file in the plugin folder. Keep dev notes, design
  docs, and source SVGs OUTSIDE the plugin folder (a sibling folder) so they never reach the `.ccx`.
- **Where a double-clicked `.ccx` installs (verified):** `%APPDATA%\Adobe\UXP\Plugins\External\<id>_<version>\`
  (for example `...\External\com.example.my-plugin_1.0.0\`), holding exactly the shipped files, so it doubles as a
  check that the `.ccx` was clean. To uninstall, use Creative Cloud Desktop, Manage plugins, the **•••** menu,
  **Uninstall** (or **Disable** to keep it installed but switched off). Uninstall deletes the whole
  `<id>_<version>` folder, so an empty `External\` means nothing is installed. This installed copy is separate from
  a UDT-loaded dev copy (PS reads the dev code in place from your project folder), so the two can run at once and
  show as duplicate panels: unload the dev row in UDT before testing the installed `.ccx`.
- A manifest change needs a full **Unload then Load** (Watch hot-reloads only HTML/CSS/JS).
- **Panel opening size — `minimumSize` is the only reliable lever.** Photoshop REMEMBERS a panel's last size and
  IGNORES `preferredDockedSize` after the first-ever load, so bumping the preferred size will not resize an existing
  (already-opened) panel. `minimumSize` is always enforced — raise its `height` to guarantee the controls stay
  visible on load. (Changing the panel `id` also forces `preferredDockedSize` again, since PS treats it as a
  brand-new panel — handy to reset during dev.)

### Tooling
- **Rasterize plugin icons from an SVG with `sharp`:** `npm install sharp --prefix <tmp>`, then run a node script
  with `NODE_PATH=<tmp>/node_modules` (a plain `npx --package=sharp node script.js` did NOT expose `sharp` to
  `require`). Shrink big source SVGs with `npx svgo in.svg -o out.svg --precision=1`.
- **Persistence:** `uxp.storage.localFileSystem.getDataFolder()` then `createFile(name, {overwrite:true})` and
  `write(JSON, {format: formats.utf8})`; read with `getEntry` plus `read`. Handle the first-run missing file with a
  try/catch default. Debounce writes that a slider drag would fire repeatedly.
  - `getDataFolder()` resolves to `%APPDATA%\Adobe\UXP\PluginsStorage\PHSP\<hostMajor>\<channel>\<plugin-id>\PluginData\`
    (`<hostMajor>` = 27 for PS 2026; `<channel>` = **Developer** for a UDT-loaded plugin, **External** for an
    installed `.ccx`). The two channels keep **separate** data, so a fresh install starts with empty settings even
    if you used the dev copy a lot. A CC uninstall removes the installed copy's data, but not the Developer-channel
    data of your dev copy.

---

## Minimal "hello panel" (the shape of every plugin)

`manifest.json` (panel id `main` matches `panels.main`):
```json
{
  "manifestVersion": 5,
  "id": "com.example.hello",
  "name": "Hello Panel",
  "version": "1.0.0",
  "main": "index.html",
  "host": [{ "app": "PS", "minVersion": "23.3.0", "data": { "apiVersion": 2 } }],
  "entrypoints": [
    { "type": "panel", "id": "main", "label": { "default": "Hello Panel" },
      "minimumSize": { "width": 230, "height": 200 },
      "preferredDockedSize": { "width": 260, "height": 360 } }
  ]
}
```
`index.html` loads `<script src="index.js"></script>` plus your UI. `index.js`:
```javascript
const { entrypoints } = require("uxp");
const { app, core, action } = require("photoshop");

entrypoints.setup({ panels: { main: { show() {} } } });   // 'main' matches the manifest id

document.getElementById("go").addEventListener("click", async () => {
  await core.executeAsModal(async () => {
    await action.batchPlay([{ _obj: "make", _target: [{ _ref: "layer" }] }], {});
  }, { commandName: "New Layer" });
});
```
Tip: clone Adobe's official samples (linked below) and load one in UDT first to verify your toolchain.

---

## Dev workflow (one-time setup, then iterate)

**One-time:**
1. Creative Cloud, All apps, install **UXP Developer Tools (UDT)**. Launch it, then **Enable Developer Mode**
   (approve the admin/UAC prompt).
2. Photoshop, Edit, Preferences, Plugins, check **Enable Developer Mode**, then restart Photoshop.
3. In UDT, confirm **Adobe Photoshop** appears under Connected Applications.

**Iterate:**
4. UDT, **Add Plugin**, pick the project's `manifest.json`, row **•••**, **Load**. In PS open **Plugins, [name]**,
   then drag the tab to dock it.
5. Edit in your editor, then UDT row **•••**, **Watch** (auto-reload on save). **•••**, **Debug** opens Chrome
   DevTools (console, breakpoints, inspect the panel DOM).
6. Changed `manifest.json`? **•••**, **Unload**, then **Load** (the manifest is read at load time).

**Package and share:** UDT row **•••**, **Package**, produces a **`.ccx`**. Recipients double-click it and choose
*Install locally* (a one-time "unverified developer" warning is expected for a side-loaded plugin). For public or
free distribution, submit via the **Adobe Developer Distribution** portal (needs an Adobe-issued plugin ID and a
publisher profile); it then appears in the Creative Cloud Marketplace with one-click install, auto-update, and a
custom icon that shows in every surface.

### Publishing the source or the .ccx to GitHub safely
If you put the project or the `.ccx` on GitHub, do not run a rapid automated burst (create a new repo, push, and
upload a binary release within seconds) through the `gh` CLI. That "fresh repo that ends in a binary or zip upload"
pattern can trip GitHub's automated spam and abuse detection and get the whole account temporarily suspended (a
false positive that then needs a support appeal). Space the steps out, and prefer creating the repo and uploading
the `.ccx` release through the github.com website. Read-only `gh` calls are fine; only the rapid create, push, and
upload writes are risky.

---

## Project conventions

- One plugin equals one folder with `manifest.json`, `index.html`, `index.js`, `styles.css`, `icons/`.
- Vanilla JS, manifest v5, no SWC unless a project truly needs it.
- Wrap every document write in `executeAsModal`; keep the callback to just the `batchPlay`. `await` everything.
- Theme-aware CSS via `prefers-color-scheme` (four values: darkest, dark, light, lightest) and `--uxp-host-*`
  variables; reference the logo via `plugin://`.
- When unsure of a `batchPlay` descriptor or an API signature, verify it (Adobe docs, the Actions panel Copy as
  Javascript, or the Alchemist plugin) before coding. UXP fails silently on a wrong descriptor key.

---

## Authoritative docs
- UXP for Photoshop: [developer.adobe.com/photoshop/uxp/2022](https://developer.adobe.com/photoshop/uxp/2022/) ·
  Manifest v5: [manifest-v5](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/) ·
  UDT: [devtool](https://developer.adobe.com/photoshop/uxp/2022/guides/devtool/)
- Imaging API: [imaging](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/media/imaging/) ·
  executeAsModal: [executeasmodal](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/media/executeasmodal/)
- Plugin icons: [plugin-icons](https://developer.adobe.com/photoshop/uxp/2021/guides/uxp_guide/uxp-misc/plugin-icons/)
- Official samples (clone these): [github.com/AdobeDocs/uxp-photoshop-plugin-samples](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples)
- UXP developer forum: [forums.creativeclouddeveloper.com](https://forums.creativeclouddeveloper.com/)
