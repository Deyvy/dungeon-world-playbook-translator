# SDD Init Context — Dungeon World Playbook Translator

**Initialized**: 2026-06-20 (re-init)
**Mode**: Hybrid (Engram + openspec files)
**Previous init**: 2026-06-20 (Engram tools unavailable — local file fallback only)

---

## Project Summary

- **Name**: Dungeon World Playbook Translator
- **Type**: Mixed — greenfield translator architecture + active Vite/React/TS frontend
- **Domain**: Dungeon World TTRPG playbook translation/localization tool
- **Frontend**: Static React replica of "El Guerrero" (Fighter) playbook sheet page 1
- **Existing artifacts**:
  - `playbook-react/` — Vite 8 + React 19 + TypeScript 6 + Tailwind CSS 4 app
  - `recursos/` — `Guerrero.pdf`, `Guerrero_1.png`, `Guerrero_2.png`, fonts, icons
  - `openspec/` — full SDD lifecycle for `ficha-guerrero-react` and exploration for `playbook-translator`
- **Git**: Not initialized

## Detected Stack

| Dimension    | Status                                      |
|--------------|---------------------------------------------|
| Language     | TypeScript 6.0 (strict mode)                |
| Framework    | React 19 + Vite 8                           |
| Build tool   | Vite 8 + TypeScript compiler (`tsc -b`)     |
| Package mgr  | npm (from `package-lock.json`)               |
| Runtime      | Node.js (dev), Browser (runtime)            |
| Styling      | Tailwind CSS 4 + custom CSS (`index.css`)   |

## Detected Conventions

| Dimension         | Status                                          |
|-------------------|-------------------------------------------------|
| Code style        | JSX + TypeScript strict, functional components  |
| Folder structure  | `src/components/` for components, `src/data/` for content, `src/assets/icons/` for SVGs |
| Naming patterns   | PascalCase components, camelCase variables, `.tsx` extensions |
| Linter            | ESLint 10 with `@eslint/js` + `typescript-eslint` |
| Formatter         | Not configured                                  |
| Type checker      | TypeScript 6 strict (`noUnusedLocals`, `noUnusedParameters`, strict null checks) |
| Git hooks         | Not configured                                  |
| AGENTS.md         | Global only (`~/.config/opencode/AGENTS.md`)    |
| Project conventions| No project-level `AGENTS.md`, `.cursorrules`, or `CLAUDE.md` |

## Detected Architecture

### Current (ficha-guerrero-react)
- Print-first, pixel-focused React replica of "El Guerrero" (Fighter) playbook page 1
- Component tree: `App → PlaybookSheet → [VerticalBanner, HeaderRow, SectionHeader, AppearanceSection, ArmorHPDamage, AlignmentSection, StatsGrid → StatBlock×6, BondsSection, MovesSection → MoveCard×3, RaceSection]`
- All content extracted to typed `guerreroData.ts` object
- Grunge effects via CSS `clip-path: polygon()`
- Print styles via `@media print`
- Fixed 794×1123px container (A4 at 96dpi)

### Planned (playbook-translator)
- Structured JSON/YAML playbook model + translation files (recommended)
- Schema-first approach with validation
- Future: AI-assisted translation pipeline

## Existing openspec/ Structure

```
openspec/
├── config.yaml                    ← NEW (created this session)
├── specs/                         ← NEW (empty, for main specs)
├── changes/
│   ├── archive/                   ← NEW (empty)
│   ├── ficha-guerrero-react/      ← Active change (proposal → spec → design → tasks — ready for apply)
│   │   ├── exploration.md
│   │   ├── proposal.md
│   │   ├── spec.md
│   │   ├── design.md
│   │   ├── tasks.md
│   │   └── specs/
│   │       ├── character-sections/spec.md
│   │       ├── moves-section/spec.md
│   │       ├── playbook-sheet/spec.md
│   │       └── stats-grid/spec.md
│   └── playbook-translator/       ← Exploration only (awaiting user decisions)
│       └── exploration.md
```

## Testing Capabilities

See `.atl/testing-capabilities.md` for full table.

**Strict TDD Mode**: Disabled
**Reason**: No test runner or test framework detected. Project has a working frontend but zero test infrastructure.

## Strict TDD Determination

- Strict TDD marker/config found: No (`openspec/config.yaml` has `strict_tdd: false`)
- Test runner exists: No
- Resolution: `strict_tdd: false` — no test runner available

## Artifacts Created / Updated

| Artifact | Path | Action |
|----------|------|--------|
| SDD Config | `openspec/config.yaml` | Created |
| Main specs dir | `openspec/specs/` | Created |
| Archive dir | `openspec/changes/archive/` | Created |
| Testing Capabilities | `.atl/testing-capabilities.md` | Updated |
| SDD Init Context | `.atl/sdd-init-context.md` | Updated |

## Engram Persistence (this session)

Engram tools ARE available. Saved observations:

| Target | topic_key | Action |
|--------|-----------|--------|
| Project context | `sdd-init/dungeon world playbook translator` | Saved |
| Testing capabilities | `sdd/dungeon world playbook translator/testing-capabilities` | Saved |
| Skill registry | `skill-registry` | Saved |

## Next Recommended

| Phase | Why |
|-------|-----|
| `/sdd-apply` for `ficha-guerrero-react` | All specs, design, and tasks are written. Implementation is ready. Tasks are already grouped into 3 reviewable PRs. |
| Or `/sdd-explore` for `playbook-translator` | If the user wants to move to the generic translator, exploration exists but needs user decisions on stack, input/output formats, and use case. |

## Open Questions (from exploration.md — playbook-translator)

1. Primary use case: personal, community, VTT module, or publication?
2. Target users: players, GMs, Foundry VTT users?
3. Translation direction: English → Spanish? Other pairs?
4. Input source: official XML, user Markdown, or custom structured format?
5. Output formats: Markdown, PDF, HTML, JSON, Foundry VTT module?
6. Technical form factor: CLI, web app, desktop app, or library?
7. Language/runtime preference: TypeScript, Python, Go, Rust, etc.?
8. Translation method: human-only, AI-assisted draft + review, or glossary substitution?
9. Edition target: Original Dungeon World or Dungeon World 2 (alpha)?
