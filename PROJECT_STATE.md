# PROJECT_STATE.md

## Project
ASF — Academia Super Forma  
Location: Bagé / Rio Grande do Sul  
Repository: `Victor-gon-code/academia_asf`  
Official digital channel currently allowed: Instagram `@asf.academiasuperforma`

## Status
**PHASE 3 COMPLETE — WAITING FOR "CONTINUAR"**

Do not start Phase 4 until the user explicitly replies **CONTINUAR**.

## Objective
Create a small institutional website with very high visual resolution, authored specifically for ASF, with contemporary sports-editorial direction and the historical weight of a local gym founded in 2001.

The site must not feel like a generic gym landing page, startup, national chain, premium international gym, supplement brand, app, or AI-generated template.

## Central concept
**"HÁ 25 ANOS, TREINO É UMA QUESTÃO DE SAÚDE."**

This is not only a headline. It is the organizing logic for composition, typography, photography, copy, pacing, motion and section order.

Narrative spine:
**ENTRADA → TEMPO → GENTE → TREINO → ESPAÇO → PROVA → SAÚDE → VISITA**

## Confirmed content facts
- Brand: ASF Academia Super Forma.
- City: Bagé / RS.
- Public address: Rua Quinze de Novembro, 1510, São Judas, Bagé / RS.
- Business started in 2001.
- In 2026, the story reaches 25 years.
- Historical signature in the logo: "Uma Questão de Saúde".
- Public positioning: "A 1ª academia da Zona Leste".
- Publicly found services: musculação, treinamento funcional, treino de força, fisiculturismo, preparação física para concursos.
- Public reputation found around 4.9 / 5.
- Repeated public-review themes: acolhimento, professores presentes, orientação, atendimento, atenção aos alunos.

## Content that must NOT be published as fact yet
- phone;
- WhatsApp;
- opening hours;
- prices;
- monthly fees;
- plans;
- promotions;
- enrollment conditions;
- trial-class claims;
- equipment quantity or brands;
- staff quantity;
- staff qualifications not explicitly confirmed.

Until confirmed, Instagram is the primary digital contact.

## Repository audit
The GitHub repository was completely empty at the start of Phase 0.

No source files, framework, package manifest, assets, history documents, styles, scripts or build setup existed.

A bootstrap commit was required only because GitHub cannot create a multi-file tree on a repository with no parent commit through the available contents workflow. The Phase 0 checkpoint commit is the source-of-truth commit for the project direction.

## Canonical asset audit

### Asset 01 — ASF logo
Available file inspected:
`Gemini_Generated_Image_ugkodpugkodpugko(1).jpg`

Technical facts:
- JPEG / RGB;
- 2048 × 906 px;
- aspect ratio ≈ 2.2605:1;
- source size ≈ 313,615 bytes;
- no alpha channel;
- the checkerboard is baked into the JPEG and is NOT real transparency.

Visual findings:
- oval ASF mark;
- near-black base;
- white lettering and rings;
- orange signature;
- "Academia Super Forma" above;
- "Uma Questão de Saúde" below.

Required handling:
- preserve original unchanged;
- never show the baked checkerboard on the website;
- create a clean derived version later without redrawing the lettering or changing geometry;
- derive favicon from the ASF letters/symbol rather than forcing the full oval at tiny sizes.

Color sampling from the received JPEG (provisional because JPEG compression and baked checkerboard influence edge pixels):
- validated ASF orange core: `#F1802E`;
- near-black core ≈ `#030708`;
- white ≈ `#FFFFFF`.

Final design tokens must be revalidated from the cleaned derivative in Phase 1.

### Asset 02 — professor accompanying student
Available file inspected:
`Gemini_Generated_Image_4j2ak54j2ak54j2a(1).jpg`

Technical facts:
- JPEG / RGB;
- 1649 × 2048 px;
- aspect ratio ≈ 0.8052;
- source size ≈ 692,137 bytes;
- portrait orientation.

Visual findings:
- strongest human image;
- professor in orange shirt directly accompanying the student;
- action is legible through hands, posture and equipment;
- real, simple gym environment;
- good separation between the two people;
- naturally supports the brand themes of presence, care and orientation.

Planned use:
- primary Hero photograph;
- desktop crop must preserve both people and the action;
- mobile crop must preserve faces/context, not only arms/equipment;
- no heavy stylization or architecture manipulation.

### Asset 03 — environment 01
Received canonical file verified in Phase 1:
`Imagem do ChatGPT 5 de out. de 2026, 11_24_54.png`

Technical facts:
- PNG / RGBA;
- 442 × 547 px;
- source size ≈ 362,729 bytes;
- portrait orientation.

Visual findings:
- white resistance machines;
- blue upholstery;
- dark rubber floor;
- visible depth through the training room;
- straightforward, real local-gym character;
- useful for the first large environment composition.

Initial responsive WebP/AVIF derivatives were generated and inspected locally in Phase 1. They will enter the production bundle only when the “O Espaço” chapter is implemented, avoiding unused payload now.

### Asset 04 — environment 02
Received canonical file verified in Phase 1:
`Imagem do ChatGPT 5 de out. de 2026, 11_25_03.png`

Technical facts:
- PNG / RGBA;
- 437 × 551 px;
- source size ≈ 387,640 bytes;
- portrait orientation.

Visual findings:
- dumbbell rack in foreground;
- mirrors;
- benches/equipment;
- blue details;
- bright ceiling;
- useful visual depth and a different training-area reading from Asset 03.

Initial responsive WebP/AVIF derivatives were generated and inspected locally in Phase 1. They will enter the production bundle only when the “O Espaço” chapter is implemented.

## Asset policy
These four images are canonical.

Do not replace them with:
- Unsplash;
- stock photography;
- fake people;
- third-party gyms;
- AI-generated environments;
- invented equipment.

If more visual material is required, derive it only from:
- crops/details of the four canonical images;
- surfaces;
- typography;
- color;
- CSS texture;
- geometry clearly derived from the ASF mark.

## Chosen technical direction
Planned stack for Phase 1:
- Vite;
- TypeScript;
- semantic HTML;
- organized modern CSS;
- GSAP + ScrollTrigger only where motion has a clear narrative job.

Explicitly not planned:
- React;
- Tailwind;
- UI component libraries;
- Three.js;
- Lenis;
- scroll-jacking;
- aggressive scroll-snap.

Dependency rule: every dependency must solve a documented problem.

## Planned source architecture
The exact tree may evolve if implementation proves a simpler structure is better.

```text
src/
  main.ts
  styles/
    reset.css
    tokens.css
    base.css
    layout.css
    sections.css
    responsive.css
  scripts/
    motion.ts
    navigation.ts
  assets/
    original/
    derived/
public/
  favicons/
index.html
```

## Creative decisions locked in Phase 0
- sports-editorial contemporary visual language;
- historical memory of 2001 without retro caricature;
- documentary use of real ASF photography;
- orange used as signature, not random fill;
- contrast among off-white, orange and graphite/black;
- no futuristic visual language;
- no generic benefit-card grids;
- no ornamental 3D;
- no meaningless motion;
- no text over faces in the Hero;
- native-feeling scrolling;
- mobile gets dedicated art direction rather than compressed desktop.

## Typography direction
Primary direction:
- **Archivo** for navigation, interface, display headings and numbers;
- **Newsreader** for selected historical statements, signature moments and limited editorial contrast.

Reason:
Archivo carries the direct, athletic, utilitarian side of ASF without becoming a cliché condensed-gym font. Newsreader brings memory and human texture to selected moments without turning the site into a retro composition.

Use few weights. Avoid font proliferation.

## Planned narrative content
1. Header — thin navigation, discrete Instagram action.
2. Hero — "Há 25 anos, treino é uma questão de saúde."
3. 2001 / 2026 — time and continuity.
4. O jeito ASF — presence and accompaniment.
5. Treino — typographic list of confirmed modalities.
6. O espaço — two real environment photographs in large editorial composition.
7. Prova social — 4.9 / 5 and recurring reputation themes, not a dashboard.
8. Uma Questão de Saúde — simple, strong signature chapter.
9. Visite — confirmed address + map + Instagram.
10. Final — "25 anos depois, a porta continua aberta."

## Motion direction
Motion must:
- reveal hierarchy;
- connect chapters;
- guide focus;
- remain subtle;
- preserve native scrolling;
- work with `prefers-reduced-motion`.

Hero target:
- logo appears;
- headline reveals through restrained masks;
- photo enters softly;
- first scroll may shift photo scale only around 1.00 → 1.03;
- a meaningful orange line can connect to the time chapter.

No effect is allowed merely to demonstrate technique.

## Responsiveness direction
Must be explicitly reviewed around:
320, 360, 390, 430, 768, 1024, 1280, 1440 and 1920 px.

Implementation principles:
- use `clamp()`, `min()`, `max()`, `minmax()`;
- use fluid grid/flex;
- use `aspect-ratio`, `object-fit`, `object-position`;
- avoid fixed heights for text-heavy mobile sections;
- use `svh/dvh` carefully;
- minimize absolute positioning for main mobile content.

## Performance direction
- preserve originals;
- generate WebP/AVIF derivatives only when justified;
- use `<picture>`, `srcset`, `sizes`;
- preload only the actual LCP image if required;
- lazy-load non-critical images;
- set intrinsic dimensions/aspect ratio to reduce CLS;
- keep JS minimal;
- prioritize LCP, CLS and INP;
- no video or WebGL budget in this project.

## Accessibility direction
Mandatory:
- semantic HTML;
- valid heading hierarchy;
- landmarks;
- useful alt text;
- keyboard navigation;
- visible `:focus-visible`;
- sufficient contrast;
- accessible mobile menu;
- buttons for actions;
- links for navigation;
- `prefers-reduced-motion`.

## Phase history

### Phase 0 — Audit and preparation
Status: **COMPLETE**
Completed:
- verified target repository;
- confirmed repository started empty;
- inspected the two file-backed assets technically;
- visually inspected both environment photographs;
- confirmed baked checkerboard problem in logo;
- sampled provisional brand color values;
- defined concept, stack, narrative architecture, asset rules, responsive principles, motion rules, performance rules and accessibility rules;
- created `PROJECT_STATE.md`;
- created `DESIGN_SYSTEM.md`;
- created `QA_CHECKLIST.md`.

No large website sections were developed.

### Phase 1 — Foundation
Status: **COMPLETE**

Completed:
- initialized Vite + TypeScript without React or a UI framework;
- created semantic document shell;
- split CSS into reset, tokens, base, layout, sections and responsive layers;
- validated working ASF palette after cleaning the logo: `#F1802E`, `#030708`, `#FFFFFF` plus warm UI paper `#F3EFE6`;
- kept Archivo + Newsreader with only the planned weights;
- built the thin desktop header and dedicated mobile navigation;
- implemented keyboard/Escape handling, focus-visible states and body scroll restoration;
- generated a clean SVG derivative by automatically tracing the cleaned canonical raster logo rather than freely redrawing it;
- generated a compact ASF mark derivative for the header;
- generated an ASF favicon using letter geometry extracted from the canonical mark;
- verified exact dimensions of all four canonical images;
- generated initial AVIF/WebP photo derivatives locally for later chapters without shipping unused image payload in Phase 1;
- validated TypeScript locally with `tsc --noEmit`;
- visually reviewed the foundation in Chromium at 320×568, 390×844, 768×1024, 1366×768 and 1920×1080;
- confirmed no horizontal overflow at those viewports;
- tested mobile menu open/close, focus transfer, Escape close and scroll lock restoration;
- added GitHub Actions production-build validation.

No Hero/history narrative was implemented; that remains Phase 2.

Production build validation:
- GitHub Actions run `37330177870` completed successfully on the Phase 1 feature commit `15182c1b52fadc82aaa536fd21f2e3361ec99dff`.
- `npm run build` therefore passed in the repository CI environment.

### Phase 2 — Hero + history
Status: **COMPLETE**

Completed:
- replaced the Phase 1 foundation preview with the real opening narrative;
- built a split editorial Hero using the professor + student canonical photograph;
- kept text away from faces and important action;
- added dedicated mobile composition with text first and photography below;
- added responsive AVIF/WebP `<picture>` markup and original JPEG fallback;
- added explicit LCP preload for the Hero AVIF source;
- implemented the headline "HÁ 25 ANOS, TREINO É UMA QUESTÃO DE SAÚDE";
- built the 2001 → 2026 historical chapter without inventing intermediate milestones;
- added the historical ASF logo as a small archive/signature object;
- used native Web Animations API + requestAnimationFrame scroll progress instead of adding GSAP because the current motion needs are small and bounded;
- added restrained opening masks, Hero photo scale from 1.00 → 1.03, orange handoff line, and history-line progress;
- preserved native scrolling with no pin, scroll snap, smooth-scroll library or scroll-jacking;
- respected `prefers-reduced-motion` by bypassing significant animation;
- TypeScript validation passed locally with `tsc --noEmit`;
- visually reviewed 320×568, 390×844, 768×1024, 1366×768 and 1920×1080;
- confirmed no horizontal overflow at all reviewed widths;
- verified the mobile menu after the Hero integration;
- verified Escape close and body-scroll restoration;
- ran the motion script in Chromium with no page/console errors;
- verified scroll-linked transforms and reduced-motion bypass.

### Hero binary asset handoff
The GitHub connector used in this session can write repository text/code but does not provide a reliable local-binary upload path for these image derivatives.

Therefore the production Hero code intentionally expects the following files under:
`public/assets/hero/`

- `professor-aluno-640.avif`
- `professor-aluno-960.avif`
- `professor-aluno-1280.avif`
- `professor-aluno-1649.avif`
- `professor-aluno-640.webp`
- `professor-aluno-960.webp`
- `professor-aluno-1280.webp`
- `professor-aluno-1649.webp`
- `professor-aluno-original.jpg`

A ready-to-drop ZIP was generated for the user. These files are simple optimized derivatives of the canonical professor/student photograph; no people, equipment or architecture were altered.

### Phase 3 — People + training
Status: **COMPLETE**

Completed:
- GitHub Actions production build passed on commit `04d2b8a72efe18921b7a3d1899fe7e51b8a43c69` (run `37349751122`);
- added the "O jeito ASF" chapter without introducing new photography;
- used only public-review themes already documented for the project: acolhimento, orientação, atendimento, atenção, professores presentes and acompanhamento;
- explicitly presented those words as a synthesis of recurring public-review themes rather than as invented quotations;
- added no fabricated testimonial, name, rating count or staff claim;
- built the chapter as typography + copy + line structure instead of cards;
- added the confirmed training modalities as one editorial numbered list;
- included only musculação, treinamento funcional, treino de força, fisiculturismo and preparação física para concursos;
- added no price, plan, package, schedule, equipment or qualification claim;
- kept hover effects supplementary: all words and modality content remain permanently visible without pointer interaction;
- added subtle section-entry reveals with IntersectionObserver + Web Animations API;
- kept native scrolling and did not add GSAP;
- preserved reduced-motion behavior by skipping motion initialization when requested;
- added dedicated mobile layouts for the human and training chapters;
- reused no fake imagery and added no new binary asset dependency.

Validation note:
- the production build is confirmed;
- the new Phase 3 code introduces no image paths or external binaries;
- full browser-console and screenshot QA remains part of the later integrated visual pass after the Hero asset handoff is present locally, so the Phase 3 console checkbox is intentionally not falsified.

### Phase 4 — Space + social proof
Status: **NOT STARTED**
Only start after the user replies **CONTINUAR**.

Planned:
- two real ASF environment photographs;
- responsive AVIF/WebP derivatives;
- large editorial image composition rather than gallery cards;
- 4.9 / 5 reputation treatment with careful labeling;
- recurring review themes without fabricated quotes;
- lazy-loading and CLS checks;
- mobile/desktop visual validation.

## Current problems / risks
1. Public phone/WhatsApp/hour information is divergent and must remain unpublished.
2. No final production domain is defined yet, so canonical URL metadata remains pending.
3. 4.9/5 is changeable public reputation data; if surfaced in production, it should be reviewed near launch.
4. The canonical raster logo must remain archived outside the generated SVG derivative; the SVG is a traced production derivative, not a replacement identity.
5. Google Fonts is currently external. Font self-hosting can be reconsidered during the performance phase if measurements justify it.
6. The Hero binary image derivatives are not committed by the current connector. Before local review/deploy, copy the provided asset pack into `public/assets/hero/`. The code and build intentionally use stable public paths for this handoff.

## Main files modified in Phase 3
- `index.html`
- `src/scripts/motion.ts`
- `src/styles/sections.css`
- `src/styles/responsive.css`
- `README.md`
- `PROJECT_STATE.md`
- `DESIGN_SYSTEM.md`
- `QA_CHECKLIST.md`

## Main files modified in Phase 2
- `index.html`
- `src/main.ts`
- `src/scripts/motion.ts`
- `src/styles/sections.css`
- `src/styles/responsive.css`
- `ASSET_HANDOFF.md`
- `README.md`
- `PROJECT_STATE.md`
- `DESIGN_SYSTEM.md`
- `QA_CHECKLIST.md`

## Main files modified in Phase 1
- `package.json`
- `tsconfig.json`
- `index.html`
- `.gitignore`
- `.github/workflows/ci.yml`
- `README.md`
- `src/main.ts`
- `src/vite-env.d.ts`
- `src/scripts/navigation.ts`
- `src/styles/reset.css`
- `src/styles/tokens.css`
- `src/styles/base.css`
- `src/styles/layout.css`
- `src/styles/sections.css`
- `src/styles/responsive.css`
- `src/assets/derived/logo-asf-clean.svg`
- `src/assets/derived/logo-asf-mark.svg`
- `public/favicon.svg`
- `PROJECT_STATE.md`
- `DESIGN_SYSTEM.md`
- `QA_CHECKLIST.md`

## Main files modified in Phase 0
- `PROJECT_STATE.md`
- `DESIGN_SYSTEM.md`
- `QA_CHECKLIST.md`

## Things intentionally not tested yet
The following belong to later phases:
- below-fold image loading for the space chapter;
- final Core Web Vitals/Lighthouse on the complete production page;
- final SEO/JSON-LD;
- canonical URL after the production domain is known;
- final cross-browser production audit after every chapter exists.

## Next action
Wait for the exact user command:

**CONTINUAR**

Then begin Phase 4 only.
