# Exploration: ficha-guerrero-react

## Current State

This is a **greenfield visual replication task**. No source code exists yet. The only prior artifact is `openspec/changes/playbook-translator/exploration.md`, which explored a structured JSON/YAML translator pipeline. That work is related but **not the immediate goal here**: the user explicitly wants the Warrior playbook rendered "tal cual" — visual fidelity comes first, data architecture second.

The source of truth is the two-page Spanish "El Guerrero" character sheet (`recursos/Guerrero_1.png` and `recursos/Guerrero_2.png`). It is a dense, print-oriented layout with:

- A vertical left/right sidebar bearing "EL GUERRERO" and class icons.
- Black grunge header bars with white uppercase labels.
- Circular stat badges (FUE, DES, CON, INT, SAB, CAR) with debuff checkboxes.
- Shield, heart, and d10 icons for armor, hit points, and damage.
- Checkbox groups for alignment, gear, race, moves, and advanced moves.
- Handwritten-style underlined input fields.
- Two-column advanced moves lists on page 2.
- A consumables grid on page 2.

## Affected Areas

Because the project is greenfield, all files will be new:

- `package.json` / `vite.config.ts` — build tooling.
- `index.html` — entry point.
- `src/main.tsx` — React root.
- `src/App.tsx` — top-level page layout (one or two pages).
- `src/components/*` — reusable sheet components.
- `src/index.css` / Tailwind config — grunge textures, custom fonts, print styles.
- `src/assets/*` — SVG icons (shield, heart, d10, scissors, class icon) and any texture images.

## Domain Understanding

### Visual structure that repeats

1. **Black-bar section headers** — used for APARIENCIA, ARMADURA, ALINEAMIENTO, MOVIMIENTOS INICIALES, EQUIPO, MOVIMIENTOS AVANZADOS, etc. The bar is a solid black rectangle with ragged/grunge edges, white uppercase text, and sometimes a small icon on the left.
2. **Circular stat badges** — six identical badges containing the abbreviation (FUE/DES/CON/INT/SAB/CAR), the full stat name above, and a debuff checkbox.
3. **Checkbox list items** — alignment, race, gear, and moves all use square checkboxes with text labels.
4. **Move cards** — a title, an optional starting-move "X" marker, and body text that may contain nested bullet lists and sub-choices with checkboxes.
5. **Sidebar banner** — rotated vertical text + decorative class icon; appears on both pages, mirrored left/right.

### Hard layout problems

- The sheet is **print/paginated** in the source image. Web rendering must choose between:
  - a single long scrollable page,
  - a side-by-side two-page spread,
  - or a print-first stylesheet with page breaks.
- **Grunge aesthetic** — the black bars are not plain rectangles; they have rough edges. This can be approximated with CSS/SVG masks, repeated background images, or ignored if a clean interpretation is acceptable.
- **Circular stat badges** — require careful absolute/relative positioning so the circle overlaps the stat name bar and the black lower band.
- **Vertical sidebar** — the class name is rotated 90°. CSS `writing-mode` or `transform: rotate()` handles this, but font choice and kerning matter.
- **Font matching** — the sheet uses a bold, slightly condensed sans-serif for headers and a readable serif/sans for body. Exact matching requires identifying or substituting fonts (e.g., Bebas Neue, Oswald, or similar free fonts).

## Approaches

### 1. Pure hardcoded page with inline content

Build one or two big components that embed all Spanish text directly in JSX. No JSON schema, no data layer.

- **Pros**: Fastest path to visual fidelity; no schema design overhead; matches "tal cual" intent.
- **Cons**: No reuse for future playbooks; text and layout are tightly coupled; harder to edit or translate later.
- **Effort**: Low

### 2. Hardcoded layout + local data object

Keep the layout components hardcoded, but extract the Warrior content into a local TypeScript object (`guerreroData.ts`) that is passed into reusable presentational components.

- **Pros**: Still prioritizes visual fidelity; separates content from layout; creates a de facto schema for future playbooks without upfront schema design; easy to swap data later.
- **Cons**: Slightly more files; the data object may feel like overkill for a single sheet.
- **Effort**: Low–Medium

### 3. Full schema-driven architecture first

Design a JSON/YAML playbook schema, validate it, and render from it, continuing the prior exploration's recommendation.

- **Pros**: Aligns with the long-term translator vision; reusable across all classes.
- **Cons**: Premature for "just make it look like the image"; schema work delays visual delivery; the prior exploration already identified unresolved scope questions that should be answered first.
- **Effort**: Medium–High

## Recommendation

Use **Approach 2** for this first iteration:

- Tech stack: **Vite + React + TypeScript + Tailwind CSS**.
- Keep layout components hardcoded and pixel-focused.
- Extract Warrior content into a local `guerreroData.ts` object so components are reusable and future playbooks can follow the same shape.
- Add a small plain-CSS/SVG layer for grunge edges and icons that Tailwind cannot express cleanly.

Rationale: it satisfies "por ahora solamente quiero que sea tal cual" while avoiding a dead-end hardcode. The local data object becomes the seed of the schema explored in `playbook-translator/exploration.md`, without blocking the visual work on schema debates.

## Proposed Component Hierarchy

```
App
└─ PlaybookSheet
   ├─ VerticalClassBanner          (EL GUERRERO sidebar, left/right variants)
   ├─ HeaderRow                    (Nombre, Nivel, PX, name lists)
   ├─ SectionHeader                (reusable black bar + icon)
   ├─ AppearanceSection
   ├─ ArmorHPDamageGroup           (shield, heart, d10)
   ├─ AlignmentSection             (checkbox list)
   ├─ StatsGrid
   │  └─ StatBlock × 6             (FUE, DES, CON, INT, SAB, CAR)
   ├─ BondsSection
   ├─ InitialMovesSection
   │  └─ MoveCard × N              (title, body, nested choices)
   ├─ RaceSection                  (checkbox list)
   ├─ GearSection                  (page 2)
   ├─ AdvancedMovesSection         (page 2, two columns)
   │  └─ MoveCard × N
   └─ ConsumablesSection           (page 2 grid)
```

### Styling plan

- **Tailwind** for grid/flex layout, spacing, typography scale, and responsive behavior.
- **Plain CSS/SVG** for:
  - Grunge black-bar backgrounds (SVG mask or background image).
  - Circular stat badges (`border-radius: 50%`, absolute positioning).
  - Custom checkbox styling.
  - Vertical sidebar text (`writing-mode: vertical-rl` or `rotate`).
- **Print styles** (`@media print`) if PDF/print output is desired, defining page breaks and hiding chrome.

## Risks

- **Layout mismatch**: the original is a print PDF; translating it to a responsive web layout will require compromises.
- **Font availability**: matching the exact typography may require purchasing or substituting fonts.
- **Grunge fidelity**: achieving the rough-edged black bars purely in CSS is non-trivial; may need raster/SVG assets.
- **Two-page rendering**: side-by-side page 1 + page 2 may not fit narrow viewports; scrolling may break the visual "sheet" feel.
- **Scope creep**: the sheet includes equipment and advanced moves (page 2); the user must confirm whether page 2 is in scope or only page 1.
- **Unclear relationship to translator project**: this work could either be a standalone visual demo or the UI layer of the structured translator. That decision affects data modeling.

## Open Questions

1. Should the component render **page 1 only** or **both pages** of the Warrior sheet?
2. Should it be **interactive** (working checkboxes and input fields) or a **static visual replica**?
3. Is **print/PDF output** a requirement, or is on-screen viewing enough?
4. Should the layout be a **single scrollable page**, a **two-page spread**, or a **print-first page-break layout**?
5. Are we building a **standalone demo** or the future UI for the playbook translator?
6. Are there preferred **free fonts** to approximate the sheet's typography?

## Ready for Proposal

**Yes, with caveats.**

The visual task is clear enough to propose a Vite + React + TypeScript + Tailwind implementation of the Warrior sheet using Approach 2 (hardcoded layout + local data object). The orchestrator should confirm the open questions above — especially page scope, interactivity, and print needs — before the proposal is finalized.
