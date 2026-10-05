# QA_CHECKLIST.md

This checklist is cumulative. A phase is not complete because the code compiles; it is complete only after the relevant visual and behavioral checks pass.

## Global project rules
- [ ] The repository remains the source of truth.
- [ ] `PROJECT_STATE.md` is read before starting a new session.
- [ ] `DESIGN_SYSTEM.md` is read before visual changes.
- [ ] This checklist is read before declaring a phase complete.
- [ ] No unconfirmed phone number is published.
- [ ] No unconfirmed opening hours are published.
- [ ] No invented price/plan/promotion is published.
- [ ] No fake equipment, people or third-party gym photography appears.
- [ ] The site still feels specifically like ASF if inspected without the code context.

## Phase 0 — audit and preparation
- [x] Repository inspected.
- [x] Repository confirmed empty at start.
- [x] Available canonical assets reviewed.
- [x] Logo source format/dimensions reviewed.
- [x] Logo checkerboard verified as baked pixels rather than alpha.
- [x] Hero photo source format/dimensions reviewed.
- [x] Both environment photos visually reviewed.
- [x] Exact runtime-file metadata gap for environment photos documented.
- [x] Stack direction defined.
- [x] Narrative architecture defined.
- [x] Visual direction defined.
- [x] Motion rules defined.
- [x] Responsive rules defined.
- [x] Accessibility rules defined.
- [x] Performance rules defined.
- [x] Content truth/unknowns documented.
- [x] `PROJECT_STATE.md` created.
- [x] `DESIGN_SYSTEM.md` created.
- [x] `QA_CHECKLIST.md` created.
- [x] No major site sections implemented.
- [x] Phase 0 checkpoint committed.

## Phase 1 — foundation
- [x] Vite + TypeScript initialized only after CONTINUAR.
- [x] No unnecessary framework introduced.
- [x] Dependencies documented by purpose.
- [x] Semantic HTML shell exists.
- [x] CSS reset is scoped and predictable.
- [x] Design tokens created from validated palette.
- [x] Archivo/Newsreader loading strategy tested.
- [x] Only needed font weights loaded.
- [x] Header works with keyboard.
- [x] Mobile menu opens/closes correctly.
- [x] Closing menu restores scrolling.
- [x] Menu never exceeds viewport.
- [x] No FOUC/code flash caused by navigation implementation.
- [x] Clean logo derivative preserves original geometry.
- [x] Checkerboard is not visible.
- [x] Original logo is preserved unchanged.
- [x] Favicon remains readable at small sizes.
- [x] Original photos are preserved.
- [x] Environment photo binaries/dimensions verified before derivatives.
- [x] First responsive image derivatives generated.
- [x] 320 px foundation checked.
- [x] 390 px foundation checked.
- [x] 768 px foundation checked.
- [x] 1366 px foundation checked.
- [x] 1920 px foundation checked.
- [x] No horizontal overflow.
- [x] Production build succeeds. GitHub Actions run `37330177870` passed on the Phase 1 feature commit.

## Phase 2 — hero + history
- [ ] Hero uses professor/student photo.
- [ ] Desktop composition protects faces/hands/action.
- [ ] Mobile text is not placed on faces.
- [ ] H1 is never clipped.
- [ ] Hero does not force 100svh if content needs more space.
- [ ] Intro motion is subtle.
- [ ] No preloader.
- [ ] Hero image LCP strategy checked.
- [ ] 2001 / 2026 section is factual only.
- [ ] No invented intermediate milestones.
- [ ] Orange timeline/connection has meaning.
- [ ] Scroll remains native.
- [ ] 320 tested.
- [ ] 390 tested.
- [ ] 768 tested.
- [ ] 1366 tested.
- [ ] 1920 tested.
- [ ] Reduced motion works.
- [ ] No console errors.

## Phase 3 — people + training
- [ ] "O jeito ASF" text is specific to guidance/presence.
- [ ] No generic agency/AI phrases.
- [ ] Public-review themes are summarized honestly.
- [ ] No invented testimonial is shown.
- [ ] No testimonial text exceeds what is justified.
- [ ] Training modalities are only confirmed modalities.
- [ ] Modalities are not five generic cards.
- [ ] Hover enhancement has equivalent non-hover access.
- [ ] Keyboard focus is clear.
- [ ] Mobile layout has no overlaps/crops.
- [ ] No fake modality imagery added.
- [ ] No console errors.

## Phase 4 — space + social proof
- [ ] Only real ASF environment photography is used.
- [ ] No architecture/equipment is fabricated.
- [ ] Photo 01 appears large enough to read the space.
- [ ] Photo 02 appears as a distinct second moment.
- [ ] No unnecessary thumbnail grid.
- [ ] No slider unless a real need emerges.
- [ ] Image crops preserve natural proportions.
- [ ] Responsive derivatives load correctly.
- [ ] Non-LCP images are lazy-loaded.
- [ ] Width/height or aspect-ratio prevents CLS.
- [ ] 4.9 / 5 is labeled as public evaluations.
- [ ] No unstable review count is hardcoded.
- [ ] Social proof does not look like a dashboard.
- [ ] No repeated star-icon decoration.
- [ ] No console errors.

## Phase 5 — health + visit + final
- [ ] "Uma Questão de Saúde" chapter remains visually restrained.
- [ ] No filler effect added.
- [ ] Confirmed address is exact.
- [ ] Map link resolves to the correct ASF location.
- [ ] Instagram link points to `@asf.academiasuperforma`.
- [ ] No unconfirmed phone appears.
- [ ] No unconfirmed hours appear.
- [ ] No unconfirmed pricing appears.
- [ ] Final scene remains simple.
- [ ] Footer is minimal.
- [ ] All CTAs are real links/buttons with correct semantics.
- [ ] No console errors.

## Phase 6 — deep responsiveness
Test all:
- [ ] 320 × 568
- [ ] 360 × 800
- [ ] 390 × 844
- [ ] 430 × 932
- [ ] 768 × 1024
- [ ] 1024 × 768
- [ ] 1280 × 720
- [ ] 1366 × 768
- [ ] 1440 × 900
- [ ] 1920 × 1080

At every target:
- [ ] no horizontal overflow;
- [ ] no clipped title;
- [ ] no clipped individual letter;
- [ ] no text-on-text collision;
- [ ] no button outside viewport;
- [ ] no image covering copy;
- [ ] no distorted image;
- [ ] no absolute element escaping its section;
- [ ] no inexplicable empty gap;
- [ ] header remains usable;
- [ ] menu remains usable;
- [ ] footer height is reasonable;
- [ ] portrait/landscape transitions are stable;
- [ ] scroll does not "pull" toward a section;
- [ ] browser zoom/text resizing does not destroy layout.

## Phase 7 — performance + accessibility
- [ ] Production build succeeds.
- [ ] No dead dependency.
- [ ] No unused large asset ships.
- [ ] Image formats/sizes audited.
- [ ] Hero preload used only if justified by LCP.
- [ ] Below-fold images lazy-load.
- [ ] CLS sources reviewed.
- [ ] INP/interactions reviewed.
- [ ] Keyboard-only navigation works.
- [ ] Focus-visible is obvious.
- [ ] Heading hierarchy is valid.
- [ ] Landmarks are semantic.
- [ ] Alt text is useful and not redundant.
- [ ] Contrast is sufficient.
- [ ] Menu semantics are correct.
- [ ] ARIA is used only where needed.
- [ ] Reduced-motion mode reviewed end-to-end.
- [ ] Title is local and specific.
- [ ] Meta description is specific.
- [ ] Open Graph metadata exists.
- [ ] Favicon works.
- [ ] JSON-LD uses ExerciseGym/LocalBusiness appropriately.
- [ ] JSON-LD excludes unconfirmed phone/hours.
- [ ] Canonical URL added only after domain is known.
- [ ] No keyword stuffing.

## Phase 8 — final visual audit
Desktop, tablet and phone must all be navigated visually.

Ask and verify:
- [ ] Does any part look AI-generated?
- [ ] Does any section look like a generic template?
- [ ] Are there unnecessary cards?
- [ ] Are there effects with no narrative job?
- [ ] Are any texts generic enough for another gym?
- [ ] Could sections be reordered without losing meaning?
- [ ] Does any image fail?
- [ ] Does any font flash create a visible layout shift?
- [ ] Is there any initial code/unstyled flash?
- [ ] Is any text overlapping?
- [ ] Is any word/letter clipped?
- [ ] Does scroll pull/snap unexpectedly?
- [ ] Do all buttons/links work?
- [ ] Does mobile menu work repeatedly?
- [ ] Does reduced motion remain elegant?
- [ ] Are there console errors?
- [ ] Does ultra-wide remain composed rather than empty?

## Definition of done
- [ ] build works;
- [ ] zero console errors;
- [ ] no broken image;
- [ ] no text overlap;
- [ ] no clipped word/letter;
- [ ] no accidental horizontal scroll;
- [ ] menu works;
- [ ] mobile looks intentionally designed;
- [ ] desktop feels composed;
- [ ] ultra-wide remains elegant;
- [ ] scroll feels native;
- [ ] motion is smooth and restrained;
- [ ] reduced motion works;
- [ ] initial load is fast;
- [ ] images remain sharp;
- [ ] copy sounds human;
- [ ] ASF identity is unmistakable;
- [ ] site does not look like a template;
- [ ] site does not look AI-generated.

## Final reminder
Do not prove technical skill by adding effects.

Prove judgment by choosing what the ASF site actually needs.
