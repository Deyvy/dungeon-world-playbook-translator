# Proposal: Static React Replica of "El Guerrero" Playbook Sheet (Page 1)

## Intent

Build a static, print-oriented React replica of the "El Guerrero" Dungeon World playbook sheet (page 1) to establish the visual foundation for future interactive and multi-playbook features.

## Scope

### In Scope
- Page 1 visual replica: header (nombre/nivel/PX), appearance, armor/HP/damage, alignment, stats grid (6 circular badges), bonds, initial moves, race selection
- Vite + React + TypeScript + Tailwind CSS stack
- Hardcoded layout components with content extracted to typed `guerreroData.ts`
- SVG/CSS for grunge black-bar headers and icons

### Out of Scope
- Interactivity (checkboxes, inputs non-functional)
- Page 2 (gear, advanced moves, consumables)
- PDF export
- Generic playbook schema or data-driven architecture

## Capabilities

### New Capabilities
- `playbook-sheet`: Top-level layout, vertical sidebar, header row, print-first container
- `stats-grid`: Six circular stat badges (FUE, DES, CON, INT, SAB, CAR) with debuff checkboxes
- `character-sections`: Reusable section header, appearance, armor/HP/damage, alignment, bonds, race
- `moves-section`: Initial moves list with MoveCard component

### Modified Capabilities
- None

## Approach

Use Vite + React + TypeScript + Tailwind CSS. Keep layout components hardcoded and pixel-focused. Extract all Spanish Warrior content into a local typed data object (`guerreroData.ts`) so components remain reusable for future playbooks without upfront schema design. Use SVG/CSS for grunge black-bar edges, circular stat badges, and custom icons (shield, heart, d10). Apply print-oriented sizing so the page fits a single sheet.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `package.json` / `vite.config.ts` | New | Build tooling |
| `src/main.tsx` | New | React root |
| `src/App.tsx` | New | Top-level page layout |
| `src/components/*` | New | Reusable sheet components |
| `src/data/guerreroData.ts` | New | Typed content object |
| `src/index.css` | New | Tailwind + grunge/print styles |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Font matching | Med | Use free condensed fonts (Oswald/Bebas Neue) as close approximations |
| Grunge texture fidelity | Med | Fallback to clean CSS rectangles if SVG masks prove brittle |
| Print layout precision | Low | Fixed-width container approximating A4/Letter ratio |

## Rollback Plan

Delete `src/` contents and revert `package.json` to pre-Vite state. No production data affected.

## Dependencies

- Node.js + npm
- Free fonts: Oswald or Bebas Neue

## Success Criteria

- [ ] Rendered page visually matches `recursos/Guerrero_1.png` closely enough to be recognizable as the same character sheet
- [ ] All page 1 sections present and positioned correctly
- [ ] Layout prints on a single sheet without overflow
