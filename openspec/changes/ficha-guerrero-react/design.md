# Design: Static React Replica of "El Guerrero" Playbook Sheet (Page 1)

## Technical Approach

Vite + React + TypeScript + Tailwind CSS. Hardcoded layout components with content extracted to a typed `guerreroData.ts` object. Grunge effects via CSS `clip-path` and inline SVG. Print-first fixed-width container (~210mm). No interactivity — checkboxes and inputs are visual only.

## Architecture Decisions

| Decision | Option | Tradeoff | Choice |
|----------|--------|----------|--------|
| Font loading | `public/` + `@font-face` vs `vite-plugin-fonts` vs `import` | `public/` is simplest, no build plugin needed; `import` gives hashing but adds config | `public/fonts/` + CSS `@font-face` in `index.css` |
| Grunge headers | `clip-path` vs SVG mask vs `border-image` | `clip-path` is pure CSS, no assets, easy to tune; SVG mask is more precise but requires files | `clip-path` with `polygon()` for rough edges |
| Stat badges | CSS `border-radius: 50%` + absolute positioning vs SVG | CSS is simpler, composes with Tailwind; SVG is pixel-perfect but overkill | CSS circles with absolute positioning |
| Print layout | Fixed-width container + `@media print` vs CSS columns vs `@page` rules | Fixed-width A4 container is most predictable; `@page` adds complexity for marginal gain | Fixed 210mm container + `@media print` styles |
| Tailwind config | Extend theme (colors, fonts, utilities) vs arbitrary values | Extended theme gives semantic names (`font-averia`, `text-grunge-black`); arbitrary values are faster but noisy | Extend `tailwind.config.ts` with custom theme |

## Data Flow

```
guerreroData.ts (typed content)
       │
       ▼
  App.tsx ─→ PlaybookSheet.tsx
                  │
    ┌─────────────┼──────────────────┐
    ▼             ▼                  ▼
VerticalBanner  HeaderRow    SectionHeader (reusable)
                                  │
              ┌───────────────────┼──────────────────
              ▼                   ▼                  ▼
    AppearanceSection    ArmorHPDamage       AlignmentSection
              │                   │
              ▼                   ▼
         StatsGrid           BondsSection
              │
    ┌─────────┼─────────┐
    ▼         ▼         ▼
  StatBlock StatBlock StatBlock  (×6)
              │
              ▼
         MovesSection
              │
              ▼
          MoveCard (×N)
              │
              ▼
          RaceSection
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `package.json` | Create | Vite + React + TS + Tailwind deps |
| `vite.config.ts` | Create | Vite configuration |
| `tailwind.config.ts` | Create | Custom theme: Averia Libre, Metamorphous, grunge colors |
| `tsconfig.json` | Create | TypeScript strict config |
| `index.html` | Create | HTML entry, loads `src/main.tsx` |
| `src/main.tsx` | Create | React root, renders `<App />` |
| `src/App.tsx` | Create | Top-level layout, wraps `PlaybookSheet` |
| `src/index.css` | Create | Tailwind imports, `@font-face`, grunge classes, print styles |
| `src/data/guerreroData.ts` | Create | Typed content object for El Guerrero page 1 |
| `src/components/PlaybookSheet.tsx` | Create | Main container: sidebar + content area |
| `src/components/VerticalBanner.tsx` | Create | Left sidebar with rotated "EL GUERRERO" (Metamorphous) |
| `src/components/SectionHeader.tsx` | Create | Reusable black bar with `clip-path` grunge edges |
| `src/components/HeaderRow.tsx` | Create | Nombre/Nivel/PX + race name lists |
| `src/components/AppearanceSection.tsx` | Create | Cuerpo/Ojos/Pelo/Piel fields |
| `src/components/ArmorHPDamage.tsx` | Create | Shield (armor), heart (HP), d10 (damage) row |
| `src/components/AlignmentSection.tsx` | Create | Bueno/Neutral/Malvado checkboxes |
| `src/components/StatsGrid.tsx` | Create | 3×2 grid of `StatBlock` components |
| `src/components/StatBlock.tsx` | Create | Stat card with circular badge + debuff checkbox |
| `src/components/BondsSection.tsx` | Create | Fill-in-the-blank bond lines |
| `src/components/MovesSection.tsx` | Create | Initial moves container |
| `src/components/MoveCard.tsx` | Create | Move with title, description, checkbox groups |
| `src/components/RaceSection.tsx` | Create | Enano/Elfo/Mediano/Humano checkboxes |
| `src/assets/icons/shield.svg` | Create | Armor shield icon |
| `src/assets/icons/heart.svg` | Create | HP heart icon |
| `src/assets/icons/d10.svg` | Create | Damage d10 die icon |
| `src/assets/icons/scissors.svg` | Create | Bottom-left decorative scissors icon |

## Interfaces / Contracts

```typescript
// src/data/guerreroData.ts
export interface StatData {
  name: string;       // "Fuerza"
  abbr: string;       // "FUE"
  modifier: string;   // "+2"
  debuff: string;     // "Debilitado -1"
}

export interface MoveChoice {
  label: string;
  description?: string;
}

export interface MoveData {
  title: string;
  hasXMark: boolean;
  description: string;
  choices?: { heading: string; items: MoveChoice[] }[];
}

export interface GuerreroData {
  header: {
    raceNames: { race: string; names: string[] }[];
    requiredLevel: string; // "Nivel+7"
  };
  appearance: {
    prompt: string;
    fields: { label: string; options: string[] }[];
  };
  stats: StatData[];          // 6 entries
  statValues: string[];       // "16(+2), 15(+1), ..."
  statModifiers: string;      // "1-3: -3 || 4-5: -2 || ..."
  alignment: { label: string; description: string }[];
  bonds: string[];            // fill-in templates
  moves: MoveData[];
  races: { name: string; description: string }[];
}

export const guerreroData: GuerreroData = { /* ... */ };
```

```typescript
// Component props
interface SectionHeaderProps { title: string; icon?: string; }
interface StatBlockProps { stat: StatData; }
interface MoveCardProps { move: MoveData; }
interface VerticalBannerProps { text: string; side: "left" | "right"; }
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | Component rendering with data props | Vitest + React Testing Library — render each component with mock data, assert key text/structure |
| Visual | Layout matches reference image | Manual comparison against `recursos/Guerrero_1.png`; optional Playwright screenshot diff |
| Print | Single-sheet output | Manual `Ctrl+P` verification; check no overflow at 210mm width |

No automated E2E planned for this static replica.

## Migration / Rollout

No migration required. Greenfield project — no existing code, no data, no users.

## Open Questions

- [ ] Should `VerticalBanner` support a `side` prop for future right-side variants (page 2), or hardcode left-only for now?
- [ ] Grunge `clip-path` polygon values need tuning against the reference image — will iterate during apply.
