# Tasks: Ficha Guerrero — Static React Replica

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~750–850 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 → PR 2 → PR 3 |
| Delivery strategy | auto-chain |
| Chain strategy | pending |

Decision needed before apply: No
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Scaffold + data + base layout | PR 1 | Tailwind/config, fonts, `guerreroData.ts`, container, sidebar, section header |
| 2 | Character sections + stats grid | PR 2 | Header, appearance, armor/HP/damage, alignment, bonds, race, stat badges |
| 3 | Moves section + polish | PR 3 | MoveCard with sub-choices, fine-tune spacing, verify against reference |

## Phase 1: Foundation

- [ ] 1.1 Init Vite + React + TS project, install Tailwind. Files: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`
- [ ] 1.2 Copy `recursos/fonts/` → `public/fonts/`, add `@font-face` for 7 variants (AveriaLibre 5 + Metamorphous) in `src/index.css`
- [ ] 1.3 Configure `tailwind.config.ts` with `font-averia`, `font-metamorphous`, custom colors. Wire Tailwind in `src/index.css`
- [ ] 1.4 Create `src/data/guerreroData.ts` — typed `GuerreroData` interface + all content (stats, moves, bonds, races, alignment, appearance, class names)

## Phase 2: Base Layout

- [ ] 2.1 Create `src/components/VerticalBanner.tsx` — rotated "EL GUERRERO" in Metamorphous, black bg, full-height
- [ ] 2.2 Create `src/components/SectionHeader.tsx` — black bar, `clip-path` grunge edges, white label, optional icon
- [ ] 2.3 Create `src/components/PlaybookSheet.tsx` — fixed ~210mm container, sidebar + content area
- [ ] 2.4 Wire `src/main.tsx` + `src/App.tsx` — render PlaybookSheet at root

## Phase 3: Character Sections Part 1

- [ ] 3.1 Create `src/components/HeaderRow.tsx` — Nombre/Nivel/PX + ENANO/MEDIANO/ELFO/HUMANO name underlines
- [ ] 3.2 Create `src/components/AppearanceSection.tsx` — CUERPO/OJOS/PELO/PIEL fill-in lines
- [ ] 3.3 Create SVG icons in `src/assets/icons/` — `shield.svg`, `heart.svg`, `d10.svg`
- [ ] 3.4 Create `src/components/ArmorHPDamage.tsx` — 3-cell row with SVGs, max/current HP split

## Phase 4: Stats Grid

- [ ] 4.1 Create `src/components/StatBlock.tsx` — CSS circle badge, stat label, debuff checkbox
- [ ] 4.2 Create `src/components/StatsGrid.tsx` — single row of 6 StatBlocks from `guerreroData.stats`

## Phase 5: Character Sections Part 2

- [ ] 5.1 Create `src/components/AlignmentSection.tsx` — Bueno/Neutral/Malvado checkboxes + descriptions
- [ ] 5.2 Create `src/components/BondsSection.tsx` — fill-in-the-blank bond templates with underlines
- [ ] 5.3 Create `src/components/RaceSection.tsx` — Enano/Elfo/Mediano/Humano checkboxes + descriptions

## Phase 6: Moves Section

- [ ] 6.1 Create `src/components/MoveCard.tsx` — title, body, sub-choices (checkboxes, bullet lists, fill-in)
- [ ] 6.2 Create `src/components/MovesSection.tsx` — "Movimientos Iniciales" header + 3 MoveCards from data

## Phase 7: Polish & Verify

- [ ] 7.1 Tune `clip-path` grunge polygon values against reference image
- [ ] 7.2 Add `@media print` styles in `index.css` for single-sheet no-overflow output
- [ ] 7.3 Review rendered sheet against `recursos/Guerrero_1.png`, fix layout discrepancies
