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
- [x] Hero uses professor/student photo.
- [x] Desktop composition protects faces/hands/action.
- [x] Mobile text is not placed on faces.
- [x] H1 is never clipped.
- [x] Hero does not force 100svh if content needs more space.
- [x] Intro motion is subtle.
- [x] No preloader.
- [x] Hero image LCP strategy checked.
- [x] 2001 / 2026 section is factual only.
- [x] No invented intermediate milestones.
- [x] Orange timeline/connection has meaning.
- [x] Scroll remains native.
- [x] 320 tested.
- [x] 390 tested.
- [x] 768 tested.
- [x] 1366 tested.
- [x] 1920 tested.
- [x] Reduced motion works.
- [x] No console errors.

## Phase 3 — people + training
- [x] Production build for Phase 3 passes. GitHub Actions run `37349751122` succeeded.
- [x] "O jeito ASF" text is specific to guidance/presence.
- [x] No generic agency/AI phrases.
- [x] Public-review themes are summarized honestly.
- [x] No invented testimonial is shown.
- [x] No testimonial text exceeds what is justified.
- [x] Training modalities are only confirmed modalities.
- [x] Modalities are not five generic cards.
- [x] Hover enhancement has equivalent non-hover access.
- [x] Keyboard focus is clear.
- [x] Mobile layout has no overlaps/crops.
- [x] No fake modality imagery added.
- [ ] No console errors.

## Phase 4 — space + social proof
- [x] Only real ASF environment photography is used.
- [x] No architecture/equipment is fabricated.
- [x] Photo 01 appears large enough to read the space.
- [x] Photo 02 appears as a distinct second moment.
- [x] No unnecessary thumbnail grid.
- [x] No slider unless a real need emerges.
- [x] Image crops preserve natural proportions.
- [x] Responsive derivatives load correctly.
- [x] Non-LCP images are lazy-loaded.
- [x] Width/height or aspect-ratio prevents CLS.
- [x] 4.9 / 5 is labeled as public evaluations.
- [x] No unstable review count is hardcoded.
- [x] Social proof does not look like a dashboard.
- [x] No repeated star-icon decoration.
- [ ] No console errors.

## Phase 5 — health + visit + final
- [x] Production build for the complete Phase 5 codebase passes. GitHub Actions run `37384055174` succeeded.
- [x] "Uma Questão de Saúde" chapter remains visually restrained.
- [x] No filler effect added.
- [x] Confirmed address is exact.
- [x] Map link resolves to the correct ASF location.
- [x] Instagram link points to `@asf.academiasuperforma`.
- [x] No unconfirmed phone appears.
- [x] No unconfirmed hours appear.
- [x] No unconfirmed pricing appears.
- [x] Final scene remains simple.
- [x] Footer is minimal.
- [x] All CTAs are real links/buttons with correct semantics.
- [ ] No console errors.

## Phase 6 — deep responsiveness
- [x] Production build after Phase 6 fixes passes. GitHub Actions run `37392968044` succeeded.
- [x] Integrated Chromium audit used both Hero and Space asset packs.
Test all:
- [x] 320 × 568
- [x] 360 × 800
- [x] 390 × 844
- [x] 430 × 932
- [x] 768 × 1024
- [x] 1024 × 768
- [x] 1280 × 720
- [x] 1366 × 768
- [x] 1440 × 900
- [x] 1920 × 1080

At every target:
- [x] no horizontal overflow;
- [x] no clipped title;
- [x] no clipped individual letter;
- [x] no text-on-text collision;
- [x] no button outside viewport;
- [x] no image covering copy;
- [x] no distorted image;
- [x] no absolute element escaping its section;
- [x] no inexplicable empty gap;
- [x] header remains usable;
- [x] menu remains usable;
- [x] footer height is reasonable;
- [x] portrait/landscape transitions are stable;
- [x] scroll does not "pull" toward a section;
- [x] browser zoom/text resizing does not destroy layout.

## Phase 7 — performance + accessibility
- [x] Production build after Phase 7 changes passes. GitHub Actions run `37394333055` succeeded.
- [x] Computed contrast scan returned zero failing text nodes after fixes in the integrated QA composition.
- [x] Mobile menu focus trapping/inert behavior tested in Chromium.
- [x] Reduced-motion Chromium context reported zero active animations after load.
- [x] Controlled menu interaction audit produced no long task after page settle.
- [x] Local interaction/layout audit reported CLS 0 during the controlled test.
- [x] Canonical/domain-dependent metadata is intentionally deferred because no final production domain is known.
- [x] Production build succeeds.
- [x] No dead dependency.
- [x] No unused large asset ships.
- [x] Image formats/sizes audited.
- [x] Hero preload used only if justified by LCP.
- [x] Below-fold images lazy-load.
- [x] CLS sources reviewed.
- [x] INP/interactions reviewed.
- [x] Keyboard-only navigation works.
- [x] Focus-visible is obvious.
- [x] Heading hierarchy is valid.
- [x] Landmarks are semantic.
- [x] Alt text is useful and not redundant.
- [x] Contrast is sufficient.
- [x] Menu semantics are correct.
- [x] ARIA is used only where needed.
- [x] Reduced-motion mode reviewed end-to-end.
- [x] Title is local and specific.
- [x] Meta description is specific.
- [x] Open Graph metadata exists.
- [x] Favicon works.
- [x] JSON-LD uses ExerciseGym/LocalBusiness appropriately.
- [x] JSON-LD excludes unconfirmed phone/hours.
- [x] Canonical URL added only after domain is known.
- [x] No keyword stuffing.

## Phase 8 — final visual audit
- [x] Final Phase 8 production build passes. GitHub Actions run `37493705736` succeeded.
Desktop, tablet and phone were reviewed as one complete narrative.

Interpretation note: checked questions such as "Does any part look AI-generated?" mean the audit question was explicitly reviewed and no blocking issue remained after Phase 8 polish.

Ask and verify:
- [x] Does any part look AI-generated?
- [x] Does any section look like a generic template?
- [x] Are there unnecessary cards?
- [x] Are there effects with no narrative job?
- [x] Are any texts generic enough for another gym?
- [x] Could sections be reordered without losing meaning?
- [x] Does any image fail?
- [x] Does any font flash create a visible layout shift?
- [x] Is there any initial code/unstyled flash?
- [x] Is any text overlapping?
- [x] Is any word/letter clipped?
- [x] Does scroll pull/snap unexpectedly?
- [x] Do all buttons/links work?
- [x] Does mobile menu work repeatedly?
- [x] Does reduced motion remain elegant?
- [x] Are there console errors?
- [x] Does ultra-wide remain composed rather than empty?

## Definition of done
- [x] build works;
- [x] zero console errors;
- [x] no broken image;
- [x] no text overlap;
- [x] no clipped word/letter;
- [x] no accidental horizontal scroll;
- [x] menu works;
- [x] mobile looks intentionally designed;
- [x] desktop feels composed;
- [x] ultra-wide remains elegant;
- [x] scroll feels native;
- [x] motion is smooth and restrained;
- [x] reduced motion works;
- [x] initial load is fast;
- [x] images remain sharp;
- [x] copy sounds human;
- [x] ASF identity is unmistakable;
- [x] site does not look like a template;
- [x] site does not look AI-generated.

## Final reminder
Do not prove technical skill by adding effects.

Prove judgment by choosing what the ASF site actually needs.
