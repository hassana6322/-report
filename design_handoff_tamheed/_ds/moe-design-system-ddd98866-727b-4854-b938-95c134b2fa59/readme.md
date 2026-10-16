# MOE Design System — وزارة التعليم (Ministry of Education, Saudi Arabia)

A design system rebuilt from the ministry's own 2025 brand kit: the third edition of the
visual identity guide, the official Arabic presentation template, the certificate and
invitation templates, the A4 guide (دليل) template, the supplied logo artwork, and the
supplied Arabic typefaces. Everything here is Arabic-first and right-to-left by default.

## Sources supplied for this build

| Source | What was taken from it |
| --- | --- |
| `moe_brand_guideline2025 (1).pdf` — دليل الهوية البصرية، وزارة التعليم، الإصدار الثالث، أكتوبر 2025 | Logo philosophy, logo analysis and misuse rules, the two colour palettes, the specified typeface, print applications (letterhead, envelopes, notepad, business cards, roll-ups, email signature) |
| `MOE_Presentation_templates_Ar (1)/قوالب عروض الوزارة بالعربي النسخة المحدثة.pptx` (71 slides, 13 layouts, 1280×720) | Deck grid, title/divider/agenda/indicator/timeline/icon slide types, working colour values, icon set, photography, logo placement |
| `certificates (1)/شهادة شكر .pptx`, `شهادة حضور .pptx` (1280×720) | Certificate geometry, copy, colour roles, decorative furniture |
| `MOE_invitation (1)/الدعوات.pptx` (A4, 720×1040) | Invitation layout, the icon + metadata footer row |
| `Guide_templates (1)/قوالب الادلة النسخة المحدثة.pptx` (A4, 745×1044, 5 pages) | Guide document pages, classification header strip (`FDC-Public`) |
| `MOE_logo (1)/` and `MOE_logo-20260830T161307Z-1-001/` | Logo artwork: transparent PNG, gradient plate, JPG, vector PDF |
| Mounted codebase `خطوط بهيج/` | Bahij TheSansArabic TTFs, eight weights |
| `Font-20260830T161244Z-1-001/Thmanyah-Font-Family (1)/` | Thmanyah Sans / Serif Display / Serif Text webfonts + licence PDFs |
| `design_chats-000/` | Empty chat exports — no design content |

Duplicate uploads (`certificates-20260830T161227Z-1-001`, `MOE_logo-20260830T161307Z-1-001`)
were identical to their siblings. `uploads/DS_Store (1)` is a macOS artefact.

No product codebase, Figma file or web/app UI was supplied, so this system covers the
**brand + document/deck surfaces**, not a software product. If the ministry has a portal or
app, send the repo or Figma link and the UI kits can be extended.

## Organisation / product context

The Ministry of Education is the Saudi government body responsible for general education,
higher education and scientific research. The 2025 identity frames the ministry as a system
in balance: <q>تطوير نظام تعليمي متكامل يحقق التوازن بين جميع الأطراف الفاعلة في العملية التعليمية،
من الأفراد إلى القطاعات المختلفة</q>. The logo is a field of interlocking dots reading as both a
book and a palm tree; the Arabic wordmark is a modernised Kufi, matched by a Latin wordmark
cut in the same key. Communications sit inside Saudi Vision 2030 and lean on themes of
technology, research, tolerance and national values. The National Curriculum Center appears
as a partner mark inside the deck template.

## Content fundamentals

- **Language.** Arabic first, formal Modern Standard Arabic. Latin appears as a translation
  layer (logo wordmark, business cards, slide labels), never as the primary voice.
- **Register.** Institutional and courteous. Documents address the reader with honorifics:
  `المكـرم:`, `سعادة وكيل الوزارة`, `معالي الوزير`, and close with formulae such as
  `راجين لكم دوام التوفيق ،،،` and `نأمل حضوركم في الموعد الموضح أدناه،،`. The trailing
  `،،،` (three Arabic commas) is a house convention — keep it.
- **Person.** Institutional "we" (`نشكــــر لكـــم`, `يسرنـــا دعوتكـــم`) addressing a formal
  plural "you" (`لكم`, `حضوركم`). Never first-person singular, never casual second person.
- **Deck copy.** Nominal headline phrases, not sentences: `عنوان العرض`, `عنوان الشريحة`,
  `فاصل`, `المحتويات`, `أيقونات`, `شكراً لكم`. Ordinals are spelled (`أولاً`, `ثانياً`, `ثالثاً`,
  `رابعاً`) or set as two digits (`01`–`08`).
- **Numbers and dates.** Hijri and Gregorian are given together, Hijri first
  (`30 رجـب 1446` / `30 ينــايــر 2025`). Figures use compact suffixes (`72.3M`, `456,1M`) and
  percentages are bare (`72%`, `38%`).
- **Emphasis.** Achieved with weight and colour, not italics, ALL-CAPS or exclamation marks.
  The templates stretch Arabic letterforms (kashida) for emphasis in formal headings —
  `يسرنـــــــــــــــــــا دعوتكـــــــــم` — which is decorative, not required.
- **Emoji.** Never. No emoji appears anywhere in the ministry's material.
- **Latin casing.** Sentence case for sentences (`You are always a student, You have to keep
  moving forward.`), all-caps only for the URL lockup (`WWW.MOE.GOV.SA`) and classification
  labels (`FDC-Public`).
- **Vibe.** Calm, official, forward-looking. Confident but never promotional; the imagery
  carries the ambition and the copy stays plain.

## Visual foundations

**Colour.** Six primary colours (§08): green `#07a869`, teal `#0da9a6`, blue `#3d7eb9`,
petrol `#15445a`, sand `#c1b489`, grey `#c2c1c1`. Six supporting colours (§09): deep purple
`#351375`, violet `#7258a4`, periwinkle `#7a80ff`, sky `#69cee3`, teal-blue `#218caa`, steel
`#3078a6`. The Office templates work in a slightly hotter version of the same family (petrol
`#003845`, mint `#5fdda9`, cyan `#0dcfda`, bright violet `#9338ff`); those exact values are
kept in `tokens/colors.css` so recreations match the files. Deep purple carries titles and
primary actions; steel blue carries body copy in documents; sky blue is the subtitle colour.
At most two background colours per document: the F2F2F2 canvas and one dark petrol plate.

**Gradient.** One gradient only — the logo's blue → teal → green, horizontally or at 135°.
It is used behind the logo plate, on hero fills and for a single hero data figure. No other
gradient, and never a purple-blue "AI" gradient.

**Type.** The guideline specifies **Helvetica Neue W23 for SKY**, Regular and Bold only, for
both Arabic and Latin. That font was not supplied; **Bahij TheSansArabic** (eight weights,
supplied in the mounted folder) is used as the working substitute and is what
`--font-core` resolves to. Bold for every heading, Regular for body. Deck sizes are literal:
54px title, 28px divider, 18–20px bold slide titles, 16px body, 12px footers. Thmanyah Sans
/ Serif Display / Serif Text were also supplied and are wired up as `--font-editorial`, but
they are **not** part of the identity guideline — use them only for long-form editorial work.

**Layout.** Deck artboard 1280×720, 68px side gutters, title chip 54px from the top, logo in
the top outer corner, `WWW.MOE.GOV.SA` in the bottom opposite corner, page number bottom
outer. Certificates are 1280×720 landscape with a 20px inset plate; invitations are A4
720×1040 with a 27px plate; guides are A4 745×1044 with a 12px classification strip pinned
to the top edge. Print rule: 1.5cm minimum from the logo to the nearest page edge.

**Shape.** Three corner treatments do most of the identity's work:
`round1Rect` — one fully rounded corner (title chips, divider plates, section headers);
`round2DiagRect` — two diagonally opposed rounded corners (subtitle chips);
same-side rounded rectangles (guide content bands and contents rows). Everyday cards use a
16px radius; controls are pills. Nothing is sharp-cornered except full-bleed photography.

**Decoration.** Four supplied elements and nothing else: 45° stadium/capsule outlines in
mint `#2ac482` and violet (2px stroke, ~67% opacity, always cropped by the page edge), a blue
dot-grid tile, and two flat hexagons (purple, petrol). Do not invent new ornament.

**Backgrounds.** Mostly flat: F2F2F2 canvas or white plate. Photography is used full-bleed on
covers and title slides, half-bleed on split layouts. No textures, no noise, no patterned
fills beyond the dot grid.

**Imagery.** Cool and blue-teal: Saudi students and researchers in labs, VR headsets, tablets,
holographic data overlays, an aerial campus shot. Faces are lit clean and cool; several shots
carry a literal digital-network overlay. Over photography either flood navy at ~68% or run a
bottom-up petrol protection gradient, then knock the text out in white.

**Borders and shadows.** 1px `#d5d5d5` hairlines; 2px for emphasis; a 5px solid keyline beside
divider plates. Shadows are cool and shallow — `0 2px 6px rgba(0,56,69,.08)` up to
`0 16px 40px rgba(0,56,69,.14)`. The guideline explicitly forbids a shadow behind the logo.

**Transparency and blur.** Used sparingly: decorative capsules at ~60–67% opacity, modal
scrims at petrol 72% with a 14px blur. Body content is never translucent.

**Motion.** Restrained and functional. 140ms for hover, 220ms for state changes, 380ms for
progress fills, on `cubic-bezier(.2,0,.2,1)`. Fades and short slides only — no bounce, no
spring, no parallax. Hover darkens a fill or tints a ghost surface; press scales to 98.5%;
focus draws a 2px sky-blue ring plus a 3px halo. Nothing animates on the logo.

## Files

| Path | Contents |
| --- | --- |
| `styles.css` | Entry point — `@import`s only |
| `tokens/` | `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`, `base.css` |
| `assets/fonts/` | Bahij TheSansArabic ×8, Thmanyah ×10 |
| `assets/logo/` | `moe-logo.png`, `moe-logo-trimmed.png`, `moe-logo-white.png`, `moe-logo-gradient-bg.png`, `moe-url-wordmark*.png` |
| `assets/icons/` | 13 supplied SVG icons (+ PNG twins) |
| `assets/patterns/` | Capsule outlines, dot grid, hexagons, watermark marks |
| `assets/photos/` | 9 brand photographs |
| `assets/partners/` | National Curriculum Center mark |
| `components/` | React primitives, grouped `core / forms / feedback / navigation / brand` |
| `slides/` | Deck kit: `deck-slides.jsx`, one HTML per slide type, `index.html` click-through |
| `ui_kits/documents/` | Certificates + invitation workspace |
| `ui_kits/guide/` | A4 guide document, five page types |
| `guidelines/` | Foundation specimen cards (Colors, Type, Spacing, Brand) |
| `templates/moe-deck/` | Starting-point template: five-slide ministry deck |
| `templates/moe-certificate/` | Starting-point template: certificate of thanks |
| `SKILL.md` | Agent-skill wrapper |

## Components

**core** — `Button`, `IconButton`, `Icon`, `Card`, `Badge`, `Tag`
**forms** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
**feedback** — `Alert`, `Dialog`, `ProgressBar`
**navigation** — `Tabs`, `Breadcrumb`
**brand** — `Logo`, `TitleBadge`, `DiagChip`, `SectionDivider`, `StatTile`, `NumberedItem`, `Decor`

Each component directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one
`@dsCard` HTML showing its states.

### Intentional additions

The supplied sources define documents and slides, not a software component library, so the
UI primitives were authored to the brand rather than copied from a source inventory:

- `Icon` — wrapper over the supplied SVG files, so no one hand-draws a substitute.
- `Decor` — wrapper over the four supplied decorative elements, for the same reason.
- `TitleBadge`, `DiagChip`, `SectionDivider`, `StatTile`, `NumberedItem` — direct extractions
  of shapes that recur across the .pptx templates; they exist so recreations stay accurate.
- `Button`, `IconButton`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `Card`, `Badge`,
  `Tag`, `Alert`, `Dialog`, `ProgressBar`, `Tabs`, `Breadcrumb` — a standard screen set, styled
  entirely from brand tokens. No ministry screen was supplied to copy, so treat these as
  brand-correct defaults rather than reproductions.

## Iconography

- The ministry supplies its own icons inside the templates: flat SVGs at 192×192, each paired
  with a PNG fallback. All 13 are copied into `assets/icons/`.
- Two stylistic families coexist: **solid** single-colour glyphs in deep purple
  (calendar, stopwatch, buildings — used on invitations) and **outlined** two-tone glyphs in
  teal / sky / steel / purple (teams, charts, strategy, presentation — used in the deck).
  Stroke weight in the outlined set is heavy (≈8px on a 192px box) with rounded joins.
- The icons ship pre-coloured. Do not recolour them with CSS filters, do not mix the two
  families inside one row, and do not scale below 40px — the artwork is not optimised for it.
- There is **no icon font and no sprite sheet**. Where the deck needed a glyph the icon set
  does not cover, the original designers dropped in a Wingdings-style character rasterised by
  PowerPoint; those artefacts were not carried over.
- Emoji are never used. Unicode symbols appear only as typographic marks: `‹ ›` chevrons,
  `×` for dismiss, `،،،` in formal closings, `…` in placeholder copy.
- No Lucide/Heroicons substitution was needed. If a consuming design needs an icon outside
  the 13 supplied, ask the ministry's communication department for artwork rather than
  substituting a third-party set.

## Known substitutions and gaps

1. **Font.** `Helvetica Neue W23 for SKY` (guideline §10–11) was not supplied.
   Bahij TheSansArabic stands in. Send the licensed files and only `tokens/fonts.css` changes.
2. **Logo vector.** Only raster PNG/JPG plus a PDF were supplied; the system references the
   trimmed PNG and a mechanically generated white knockout. An SVG or EPS would be better.
3. **No product UI.** No app, portal or website source was provided, so no software UI kit
   exists yet.
4. **Icon coverage.** 13 icons only. Common needs (search, settings, download, user) are not
   covered by supplied artwork.
5. **Thmanyah licence.** `LICENSE.pdf` / `ترخيص خط ثمانية.pdf` ship with the family; confirm the
   ministry's right to use it before shipping it in public work.
