# DESIGN_SYSTEM.md

## ASF Digital Direction

### 1. North star
The ASF website is a contemporary presentation of a real Bagé gym with 25 years of continuity.

It should feel like:
- a strong contemporary sports editorial;
- a documented local history;
- a real training place with real people.

It should not feel like:
- a startup;
- a luxury international gym;
- a supplement campaign;
- a fitness app;
- an AI landing-page template.

### 2. Central idea
**HÁ 25 ANOS, TREINO É UMA QUESTÃO DE SAÚDE.**

Every major visual decision should answer:
**Does this belong to ASF, or was it added only because it looks modern?**

If the answer is the latter, remove it.

---

## 3. Visual principles

### Editorial before componentized
Use structure internally, but avoid making the grid visibly repetitive.

Prefer:
- asymmetry with control;
- large photography;
- strong typographic hierarchy;
- intentional whitespace;
- quiet transitions;
- chapter-to-chapter rhythm.

Avoid:
- repeated rounded cards;
- 3×3 benefit grids;
- dashboard patterns;
- floating UI panels;
- ornamental icons everywhere.

### Documentary before aspirational fiction
The real gym is the visual subject.

Do not hide its simplicity or fabricate luxury. The value is continuity, people, guidance and local presence.

### Memory without retro costume
History should appear through:
- 2001 / 2026;
- spacing;
- editorial typography;
- restrained archival treatment;
- historical signature;
- the logo as an object of memory.

Do not use:
- fake paper textures;
- sepia clichés;
- distressed retro filters;
- nostalgic effects unrelated to the brand.

---

## 4. Color system

### Validated working brand colors
The received logo is JPEG-compressed and includes a baked checkerboard. In Phase 1 the checkerboard was removed and the production derivative was compared against the canonical mark. These are the working digital values now locked for implementation.

- ASF Orange — `#F1802E`
- ASF Near Black — `#030708`
- White — `#FFFFFF`

### Supporting neutral
Use a warm off-white to prevent the site from becoming an all-black gym page.

Candidate:
- Warm Paper — `#F3EFE6`

This supporting neutral is not claimed as an official logo color. It is a UI/background neutral selected to support the brand palette.

### Suggested semantic roles
- `--color-ink`: near black / graphite
- `--color-paper`: warm off-white
- `--color-white`: true white
- `--color-accent`: ASF orange
- `--color-muted`: neutral derived for secondary text only after contrast testing

### Orange rule
Orange is a signature, not filler.

Good uses:
- thin timeline/connector line;
- selected numbers;
- active/focus states;
- link accents;
- compact separators with meaning;
- controlled transition moments.

Bad uses:
- painting every section orange;
- arbitrary orange blobs;
- random strokes;
- glowing orange effects.

### Forbidden palette behavior
- purple/blue tech gradients;
- neon glow;
- colorful orbs;
- decorative particle fields.

---

## 5. Typography

### Primary sans
**Archivo**

Planned roles:
- navigation;
- H1/H2 display;
- section labels when needed;
- year numerals;
- training modality list;
- buttons/links.

Reason:
direct, contemporary, sturdy and highly readable without falling into the standard gym clichés of Anton/Bebas.

### Editorial serif
**Newsreader**

Planned roles:
- selected historical statements;
- "Uma Questão de Saúde";
- limited human/editorial contrast;
- optionally one or two proof/social statements.

Reason:
adds memory and humanity without pushing the whole identity into retro aesthetics.

### Weight discipline
Use only the weights that survive visual tests.

Expected range:
- Archivo 400 / 500 / 600 / 700;
- Newsreader 400 / 500, likely italic only if it serves a specific composition.

Do not load weights that are not used.

### Typography behavior
- short line lengths for body copy;
- display text may be large, but never so large that letters clip on common mobile heights;
- use `clamp()` for responsive display sizes;
- retain natural Portuguese line breaks where they improve rhythm;
- no infinite marquee;
- no giant text purely as decoration.

---

## 6. Layout language

### Header
Thin, quiet, always legible.

Desktop:
- ASF mark;
- História;
- Treino;
- Espaço;
- Visite;
- discreet Instagram action.

Mobile:
- separate, intentionally designed menu;
- easy close action;
- no viewport overflow;
- no content trapping;
- restore page scroll after closing.

### Hero
Desktop direction:
- roughly 45% text / 55% photograph as a starting proportion, not a rigid grid;
- text and faces remain separate;
- professor/student image is the primary subject.

Mobile direction:
- text first, image below or another dedicated vertical composition;
- never place headline on faces;
- do not simply scale down desktop.

### Time chapter
- light background;
- large 2001 and 2026;
- meaningful orange connection;
- large breathing room;
- small historic signature/logo presence.

### Human chapter
- typography + copy;
- review themes treated editorially;
- no four-card feature grid.

### Training chapter
- large typographic list;
- accessible hover/focus enhancement;
- content remains complete without hover;
- no fake modality photography.

### Space chapter
- two real environment images;
- one strong composition followed by the other;
- no thumbnail gallery;
- no generic carousel by default.

### Reputation chapter
- large 4.9 / 5;
- simple support text;
- words such as ACOLHIMENTO / ORIENTAÇÃO / ATENDIMENTO can become editorial anchors;
- no repeated star-icon dashboard.

### Health signature chapter
Simple and spacious.

Copy direction:
"Em 2001 já era uma questão de saúde.

25 anos depois,
continua sendo."

No extra effect just to fill space.

### Visit/final chapters
Use confirmed location and Instagram only.
Footer remains minimal.

---

## 7. Spacing
Do not lock the system to tiny repetitive increments if that creates template rhythm.

Use a restrained token set but allow large editorial whitespace.

Planned CSS concepts:
- content max width;
- text measure;
- compact header inset;
- responsive page gutters;
- chapter top/bottom spacing driven by `clamp()`.

Avoid unexplained empty voids, especially on desktop ultra-wide.

---

## 8. Photography

### General treatment
Allowed:
- crop;
- contrast correction;
- light balancing;
- subtle editorial color correction;
- WebP/AVIF export;
- responsive derivatives.

Not allowed:
- architecture changes;
- invented equipment;
- fake people;
- changing walls to luxury materials;
- removing the real identity of the space;
- stretching portrait photography into landscape.

### Hero photo — professor + student
Priorities:
1. preserve both people;
2. preserve teacher/student relationship;
3. preserve hands and coaching action;
4. preserve enough machine context;
5. never cut heads simply to force a layout.

### Environment 01
Read:
- machines;
- blue upholstery;
- dark floor;
- white structure;
- depth.

Use:
large first environment view.

### Environment 02
Read:
- dumbbells;
- mirrors;
- benches;
- compact depth;
- different visual rhythm from environment 01.

Use:
second large environment view.

### Responsive image rule
The phone should not download desktop-sized images when a smaller derivative can preserve quality.

Use:
- `<picture>`;
- AVIF;
- WebP;
- JPEG fallback where needed;
- `srcset`;
- `sizes`;
- intrinsic dimensions or `aspect-ratio`;
- lazy loading outside LCP.

---

## 9. Logo
The original logo must remain recognizable.

Do not:
- redraw letters;
- alter geometry;
- modernize the oval;
- modify the symbol into a different identity.

Known source issue:
the provided JPEG contains the checkerboard as actual pixels.

Phase 1 requirement:
- preserve original;
- create a clean transparent derivative;
- visually compare against original at 100% and small sizes;
- do not remove legitimate white parts of the logo.

Favicon:
prefer ASF letters or a legible subset of the mark, not the full oval if it becomes unreadable.

---

## 10. Motion

### Motion purpose
Every animation must do at least one of:
- reveal hierarchy;
- connect two chapters;
- direct attention;
- make a state change legible;
- add restrained tactile response.

### Allowed
- opacity/transform reveals;
- small typographic masks;
- restrained line growth;
- very light parallax;
- Hero scale around 1.00 → 1.03 maximum;
- subtle button/link feedback.

### Not allowed
- scroll-jacking;
- aggressive snap;
- auto-pulling between sections;
- long pinned sequences;
- parallax everywhere;
- cursor replacement;
- loader theater;
- "animation on every word".

### Technology
GSAP + ScrollTrigger may be added only because they solve:
- controlled reveals;
- scroll-linked line progress;
- small, well-bounded parallax/transitions.

Native scrolling remains in control.

### Reduced motion
When `prefers-reduced-motion: reduce`:
- remove non-essential transforms/parallax;
- avoid scrubbed movement;
- keep content and hierarchy intact;
- preserve instant/low-motion state feedback.

---

## 11. Interaction

### Links
Clear states:
- default;
- hover where supported;
- focus-visible;
- active.

### Buttons
Movement, if any, is very subtle.
No glow.

### Hover rule
Never hide required information behind hover.

Touch users must receive the full content without emulating a pointer.

---

## 12. Responsive art direction

Target review widths:
- 320;
- 360;
- 390;
- 430;
- 768;
- 1024;
- 1280;
- 1440;
- 1920.

Key principle:
**Mobile is not small desktop.**

Prefer:
- content-driven `min-height`;
- responsive padding;
- dedicated crop decisions;
- stacking that preserves hierarchy;
- limited absolute positioning.

Never allow:
- clipped letters;
- text over text;
- buttons outside viewport;
- images covering copy;
- accidental horizontal scroll;
- stretched images;
- mobile header/menu taller than viewport.

---

## 13. Accessibility
Design with:
- semantic landmarks;
- one clear H1;
- logical heading order;
- keyboard operation;
- focus-visible;
- real links and buttons;
- descriptive alt text;
- sufficient text/background contrast;
- touch targets that are practical on mobile;
- reduced motion.

ARIA is used only where native semantics are insufficient.

---

## 14. Performance
Sophistication must come from decisions, not load.

Budget direction:
- no Three.js;
- no autoplay video;
- minimal JS;
- few font files;
- optimized responsive photography;
- no unused dependencies;
- no excessive preloads.

Priorities:
1. LCP;
2. CLS;
3. INP.

---

## 15. Copy voice

### Desired
- short;
- specific;
- observational;
- grounded;
- human;
- local without fake regional slang.

### Avoid
- Eleve;
- Transforme;
- Potencialize;
- Descubra;
- experiência única;
- excelência;
- jornada;
- sua melhor versão;
- supere seus limites;
- performance sem limites;
- resultados extraordinários;
- mais que uma academia.

Final copy test:
**Could this exact sentence be on any gym website?**
If yes, rewrite it.

---

## 16. Anti-template / anti-AI test
Reject any implementation showing:
- repetitive cards;
- same component repeated without narrative purpose;
- arbitrary gradients;
- overly rounded everything;
- generic icons;
- disconnected sections;
- headline clichés;
- excessive decorative lines;
- effects added only because they are fashionable.

Final identity test:
**If "ASF" is replaced by another gym name and almost nothing else needs to change, the direction is still too generic.**

---

## 17. Technical styling rules
Preferred:
- CSS custom properties;
- Grid/Flexbox;
- `clamp()`;
- `min()`;
- `max()`;
- `minmax()`;
- `aspect-ratio`;
- `object-fit`;
- `object-position`;
- container queries only where they materially simplify a component.

Avoid:
- JS for layout that CSS can solve;
- premature abstractions;
- giant unstructured CSS file;
- hard-coded section heights for text content on mobile.

---

## 18. Locked Phase 0 decision
The impact of ASF will come from:
**typography + real photography + spacing + composition + rhythm + restrained motion.**

Not from:
3D, glow, generic UI effects or spectacle.


---

## 19. Phase 1 implementation checkpoint
The foundation has been visually reviewed at 320, 390, 768, 1366 and 1920 px.

Locked implementation choices:
- Vite + TypeScript;
- no React;
- no Tailwind;
- no UI component library;
- no GSAP until Phase 2 demonstrates a real motion need;
- native scrolling;
- dedicated mobile navigation;
- asset payload is demand-driven: canonical photographs are not bundled until their narrative chapters use them.

The current foundation intentionally stops before the Hero. It is a technical/visual base, not an attempt to pre-build later phases.


---

## 20. Phase 2 opening narrative implementation
The Hero and 2001 → 2026 chapter now define the opening rhythm.

### Hero composition
- desktop: dark editorial copy area + real professor/student photograph;
- mobile: copy first, photograph below;
- important faces, hands and coaching action remain readable;
- orange is reserved for the health line and chapter connection;
- the Hero may grow beyond one viewport on mobile when content needs it.

### History composition
- off-white chapter;
- large 2001 / 2026 endpoints;
- orange connection line;
- no fabricated intermediate dates;
- historical logo appears as a small archive/signature object.

### Motion technology decision
GSAP was **not added** in Phase 2.

Reason:
the required motion is limited to opening reveals, a maximum 1.03 image scale, and two simple scroll-progress lines. Native Web Animations API plus a requestAnimationFrame-throttled passive scroll listener solves these needs with less JavaScript and no extra dependency.

If later phases genuinely require timeline orchestration or complex ScrollTrigger behavior, GSAP can still be introduced with a documented reason.

### Reduced motion
When `prefers-reduced-motion: reduce` is active, the motion module returns before starting significant animation and CSS removes transform-based effects.
