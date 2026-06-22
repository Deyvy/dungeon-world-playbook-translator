# Exploration: ficha-guerrero-react — Gap Analysis vs. Reference Image

## Current State

The project has a working Vite + React + TypeScript + Tailwind CSS v4 implementation of the "El Guerrero" page-1 playbook sheet. All 13 components exist, fonts are loaded via `@font-face`, the `guerreroData.ts` content object is wired up, and the page renders a single A4-ish sheet with a left sidebar, header, three-column midsection, stats grid, and moves/bonds/race bottom area.

However, when compared to `recursos/Guerrero_1.png`, the current layout follows the *general* section order but misses several structural, positional, and visual details:

- The **right-side panel** (`Vínculos` + `Raza`) is placed at the bottom instead of running down the right edge alongside the stats and moves.
- The **stats badges** use a vertical stack (name → debuff → circle) instead of the reference's horizontal stat card (name box with a black bottom band holding the circle + debuff checkbox).
- The **combat trio** (`Armadura`, `Puntos de Golpe`, `Daño`) only renders header bars; it lacks the input boxes, centered icons, and damage `D10` badge shown in the reference.
- **Movimientos Iniciales** stacks all three moves vertically; the reference shows `Arma Distintiva` as a wide two-column card with `Doblar Barras, Alzar Puertas` and `Blindado` side-by-side underneath.
- The **sidebar** is missing the DW logo at the top and places the scissors icon in the main content area rather than at the bottom of the sidebar.
- The **NIVEL** header field is rendered as an underline instead of the reference's circle.

## Affected Areas

- `src/components/PlaybookSheet.tsx` — overall grid needs restructuring so the right column (`Vínculos`/`Raza`) sits beside stats + moves; scissors placement is wrong.
- `src/components/VerticalBanner.tsx` — missing DW logo; scissors should live here, not in `PlaybookSheet`.
- `src/components/HeaderRow.tsx` — `NIVEL` must become a circle; `"Necesarios: Nivel+7"` should sit top-right with `NIVEL`/`PX`.
- `src/components/ArmorHPDamage.tsx` — needs input boxes, centered SVG icons in grunge headers, and the `D10` damage badge with `+` modifier boxes.
- `src/components/StatBlock.tsx` + `StatsGrid.tsx` — stat card shape is wrong; needs white box + black bottom band with circle on the left and debuff checkbox on the right.
- `src/components/BondsSection.tsx` — must move to the right column; blank slots should render as real fill-in lines and extra writing lines should be added.
- `src/components/RaceSection.tsx` — must move to bottom-right column (content is otherwise close).
- `src/components/MovesSection.tsx` + `MoveCard.tsx` — `Arma Distintiva` needs a custom two-column internal layout; `Doblar Barras`/`Blindado` must render side-by-side.
- `src/index.css` — current theme/custom classes are fine, but new component-specific utilities may be needed (e.g., stat-card bottom band, damage badge).
- `src/data/guerreroData.ts` — content is mostly correct, but `StatData` lacks the `modifier` field mentioned in `design.md` and `MoveData` does not model the reference's "aspecto" as a free-text fill-in line (it is modeled as a checkbox group).
- `openspec/changes/ficha-guerrero-react/spec.md` — contains an incorrect requirement stating stats must render in a "single row"; the reference is a 2×3 grid.

## Approaches

### 1. Incremental component fixes

Patch each component in place while keeping the current `PlaybookSheet` structure mostly intact.

- **Pros**: Smaller individual edits; lower chance of breaking the existing render.
- **Cons**: The layout architecture is still wrong (`Vínculos`/`Raza` at the bottom, moves stacked), so many reference details cannot be fixed without eventually restructuring `PlaybookSheet` anyway.
- **Effort**: Medium

### 2. Layout-first refactor + specialized sub-components

First restructure `PlaybookSheet` into the reference's true grid (header → 3-col midsection → 2-col lower section), then build specialized components for the parts that diverge most: `StatBlock`, `ArmorHPDamage`, `ArmaDistintivaCard`, and a side-by-side `SimpleMovePair`.

- **Pros**: Matches the reference holistically; cleanly separates layout concerns from content; easier to verify visually section by section.
- **Cons**: Touches more files in one pass; requires careful A4 height management to avoid overflow.
- **Effort**: Medium–High

### 3. Reference-image-first rebuild with absolute positioning

Treat the image as a rigid blueprint and use absolute/fixed positioning for every section.

- **Pros**: Pixel-level control; can chase exact reference alignment.
- **Cons**: Fragile, hard to maintain, poor print/accessibility behavior, and overkill for a static replica.
- **Effort**: High

## Recommendation

Use **Approach 2 (layout-first refactor + specialized sub-components)**.

The current code already has the right data layer and component boundaries; the main problem is that the top-level grid and a few high-impact components do not match the reference. Refactoring `PlaybookSheet` first makes every child component simpler to reason about, and creating specialized components for `StatBlock`, `ArmorHPDamage`, and `Arma Distintiva` keeps the implementation maintainable while achieving visual fidelity.

Specific actions:

1. **Redesign `PlaybookSheet`** into:
   - `VerticalBanner` (sidebar)
   - `HeaderRow` (full width)
   - 3-column row: `AppearanceSection` | `ArmorHPDamage` | `AlignmentSection`
   - 2-column row: `StatsGrid` + `MovesSection` on the left (~2/3), `BondsSection` + `RaceSection` on the right (~1/3).
2. **Move the scissors icon** into `VerticalBanner` at the bottom; add the DW logo at the top.
3. **Rebuild `StatBlock`** as a white card with a black bottom band: full stat name top-left, white circle with black abbreviation on the band, debuff text + checkbox to the right.
4. **Rebuild `ArmorHPDamage`** with centered SVG icons in grunge headers and real input/fill-in areas for armor, HP max/current, and damage `D10 + mods`.
5. **Create a dedicated `ArmaDistintiva` layout** with description + weapon type + distance on the left, mejoras + aspecto on the right; render `Doblar Barras` and `Blindado` side-by-side below it.
6. **Fix `HeaderRow`**: `NIVEL` as a circle, `"Necesarios: Nivel+7"` aligned top-right.
7. **Update `BondsSection`** to render fill-in blanks as underlined spaces and add extra blank writing lines.
8. **Correct `spec.md`** to state the stats grid is 2×3, not a single row.

## Risks

- **A4 height overflow**: moving `Vínculos` and `Raza` into the right column and widening `Arma Distintiva` may push content beyond the current `1123px` sheet. Tuning padding, font sizes, and card internal spacing will be required.
- **Tailwind v4 theme constraints**: some reference shapes (e.g., the stat card bottom band, grunge headers with centered icons) may need plain CSS additions in `index.css` or inline styles.
- **Icon fidelity**: the existing SVGs are simple; the reference icons have a hand-drawn/grunge feel. Replacing or styling them may be needed for full visual match.
- **Data model mismatch for `Arma Distintiva`**: the current `MoveData` + `choiceGroups` model does not naturally express the reference's two-column card layout; a one-off component or richer layout hint in data will be necessary.
- **Spec contradiction**: `spec.md` says stats are in a single row, which conflicts with both the reference image and the current 2×3 implementation. The spec should be updated before design/tasks phases proceed.

## Ready for Proposal

**Yes**, with the clarification that the next phase should update `spec.md` to reflect the 2×3 stats grid and the reference's true right-column / two-column moves layout.
