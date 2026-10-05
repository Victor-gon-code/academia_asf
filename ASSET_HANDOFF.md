# ASF — Asset handoff

The Phase 2 code expects the optimized Hero photograph files in:

`public/assets/hero/`

Required files:

- `professor-aluno-640.avif`
- `professor-aluno-960.avif`
- `professor-aluno-1280.avif`
- `professor-aluno-1649.avif`
- `professor-aluno-640.webp`
- `professor-aluno-960.webp`
- `professor-aluno-1280.webp`
- `professor-aluno-1649.webp`
- `professor-aluno-original.jpg`

## Why they are not in the repository yet

The GitHub connector available in this session can write source/text files, but it does not expose a reliable upload action for local binary image files.

The image pack is therefore delivered separately to the user as a ready-to-drop ZIP.

## Placement

After pulling the repository, extract the ZIP at the repository root.

The ZIP already contains:

`public/assets/hero/...`

No filenames need to be changed.

## Integrity

These assets are derived only from the canonical professor/student photograph supplied for ASF.

Processing performed:
- resize;
- AVIF export;
- WebP export;
- original JPEG preserved as fallback.

No people, equipment, architecture or visual content were generated or altered.


---

## Phase 4 — space photographs

Extract the Phase 4 ZIP at the repository root.

It creates:

`public/assets/space/`

Required files:
- `ambiente-01-320.avif`
- `ambiente-01-full.avif`
- `ambiente-01-320.webp`
- `ambiente-01-full.webp`
- `ambiente-01-original.png`
- `ambiente-02-320.avif`
- `ambiente-02-full.avif`
- `ambiente-02-320.webp`
- `ambiente-02-full.webp`
- `ambiente-02-original.png`

The source photographs are only resized/compressed. They are not upscaled or visually reconstructed.
