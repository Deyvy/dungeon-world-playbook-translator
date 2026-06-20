# Exploration: Dungeon World Playbook Translator

## Current State

The project is greenfield. The workspace contains only the `.atl/` directory with SDD initialization context, testing capabilities, and skill registry. No source code, build files, package manager, test runner, or runtime have been selected.

Investigation of the Dungeon World ecosystem reveals:

- **Official source format**: The canonical Dungeon World text lives in the [Sagelt/Dungeon-World](https://github.com/Sagelt/Dungeon-World) repository as XML files under `text/{Class}.xml`. These XML files use Adobe InDesign paragraph styles (`aid:pstyle`) and are clearly intended for book layout, not direct player use.
- **Official character-sheet format**: Printable character sheets are Adobe InDesign `.indd` files under `character_sheets/`.
- **Actual playbook structure**: A playbook is a character-class document containing:
  - Class name and narrative intro
  - Names (by race)
  - Look/appearance options
  - Stats and derived values (HP, damage, load)
  - Starting moves (racial moves + class moves)
  - Alignment options
  - Gear/equipment choices
  - Bonds
  - Advanced moves (levels 2–5 and 6–10, with replacement/requirement chains)
- **Translation precedent**: A Spanish translation exists as a Foundry VTT module (`patoarayas/dungeon-world-babele-es`), suggesting translations are typically distributed as structured key/value files (JSON) for VTT platforms.

## Affected Areas

Because this is a greenfield project, no existing source files are affected. The following areas will need to be created and are interdependent:

- **Input parser** — must read at least the official XML format and likely Markdown or JSON alternatives.
- **Playbook data model** — must represent moves, gear, bonds, alignments, races, looks, names, and advanced-move dependencies.
- **Translation engine / workflow** — must handle terminology consistency, mechanical keywords, and flavor text.
- **Output generator** — must render translated playbooks back to human-readable formats (Markdown, PDF, HTML, JSON, etc.).
- **Glossary/terminology store** — critical for consistent translation of game terms (`Hack and Slash`, `Defy Danger`, `Bond`, `Load`, tags, etc.).

## Domain Understanding

### What is a Dungeon World playbook?

A playbook is both a character sheet and a class description. It tells a player how to build and play a character class (Fighter, Wizard, Thief, etc.). It mixes:

1. **Mechanics**: stats, HP, damage, move triggers, roll results (10+, 7–9, 6-).
2. **Choice lists**: names, looks, gear, alignments, bonds, advanced moves.
3. **Flavor/narrative text**: intros, move descriptions, class identity.

### What makes translation hard?

- **Mechanical precision**: Terms like "roll+Str", "hold", "forward", "ongoing", "messy", "forceful", "precise", "clumsy" have specific rules meanings. A translation must preserve these unambiguously.
- **Terminology consistency**: The same term appears across all playbooks. Inconsistent translation breaks cross-class moves and GM references.
- **Trigger phrases**: Moves are triggered by bolded action descriptions (e.g., "When you **attack an enemy in melee**"). These must remain recognizable and mechanically equivalent.
- **Tone**: Playbooks are punchy and atmospheric. Over-literal translation kills the voice.
- **Gender/class names**: Some languages must decide how to handle class gender (e.g., Spanish "El Pícaro/la Pícara").
- **Layout dependence**: The official XML is tightly coupled to InDesign styles, so a translator cannot simply edit XML and expect print-ready output.
- **Cross-references**: Advanced moves replace or require other moves; spell lists reference class spellcasting mechanics.

## Approaches

### 1. Markdown-first translator

Store playbooks as Markdown files with a lightweight convention (YAML frontmatter + Markdown body). The CLI reads Markdown, splits it into segments, applies a translation glossary, and writes translated Markdown.

- **Pros**:
  - Human-readable source; easy to edit by hand or in Git.
  - Simple to version-control and diff.
  - Low tooling complexity.
  - Easy to render to HTML/PDF later.
- **Cons**:
  - Requires converting official XML to Markdown first.
  - Less structured than JSON/YAML; harder to validate move dependencies or gear weights programmatically.
  - Glossary matching is mostly string-based.
- **Effort**: Low

### 2. Structured JSON/YAML playbook + translation files

Model every playbook as structured data (JSON or YAML) with a strict schema: class, sections, moves, gear, bonds, etc. Translations live in parallel locale files or nested `i18n` fields. A CLI validates structure and renders outputs.

- **Pros**:
  - Strong validation (schema checks, missing translations, broken move references).
  - Perfect for VTT modules and future web integrations.
  - Glossary can be applied at the field level with context.
  - Supports multiple output formats from a single source of truth.
- **Cons**:
  - More upfront design and schema work.
  - Authors must learn the schema; raw editing is less pleasant than Markdown.
  - Need a migration path from the official XML.
- **Effort**: Medium

### 3. AI-assisted translation pipeline over structured playbooks

Build on Approach 2 but add an LLM integration. The tool extracts segments, sends them to an LLM with a project glossary and context, receives draft translations, and presents them for human review/approval.

- **Pros**:
  - Accelerates first-pass translation dramatically.
  - LLM can preserve tone better than pure glossary substitution.
  - Human-in-the-loop review keeps quality high.
- **Cons**:
  - LLMs hallucinate mechanics and invent terms.
  - Requires robust validation and glossary enforcement.
  - API costs and rate limits.
  - Much higher complexity; needs prompt engineering and review workflow.
- **Effort**: High

## Recommendation

Start with **Approach 2 (structured JSON/YAML playbook + translation files)** and design it so an LLM can be plugged in later as Approach 3.

Rationale:

- The domain is inherently structured (moves, gear, bonds, requirements). A schema-first model pays off immediately for validation and output generation.
- It creates a clean separation between source content, translation glossary, and translated output.
- It supports the most common real-world distribution formats: Markdown for reading, JSON for VTT integrations, PDF for print.
- It avoids the fragility of parsing free-form Markdown for mechanical data.

A Markdown-first approach is tempting for low friction, but playbooks contain too many mechanical cross-references to be comfortable as plain prose.

## Risks

- **Scope ambiguity**: "Translator" could mean language translation, format conversion, or both. The target use case (personal tool, community project, publisher workflow) is unknown.
- **Input format uncertainty**: We have not decided whether to ingest the official XML directly, accept Markdown, or require a custom JSON/YAML format.
- **Copyright/licensing**: The official Dungeon World text is not public domain. Any tool must process user-supplied source files rather than redistribute them.
- **Quality of machine translation**: If AI-assisted translation is chosen without a strong glossary/review loop, game terminology will drift and rules will become ambiguous.
- **No stack chosen**: Runtime, language, and UI form factor are completely open, so the next phase cannot proceed without user decisions.

## Open Questions for the User

1. **Primary use case**: Are you translating for personal use, a community localization, a VTT module, or publication?
2. **Target users**: Players who want readable playbooks? GMs? Foundry VTT users?
3. **Translation direction**: English → Spanish? Other language pairs?
4. **Input source**: Do you want to process the official XML files, user-provided Markdown, or a custom structured format?
5. **Output formats**: Markdown, PDF, HTML, JSON, Foundry VTT module, or all of the above?
6. **Technical form factor**: CLI tool, web app, desktop app, or library?
7. **Language/runtime preference**: Any preference for TypeScript, Python, Go, Rust, etc.? Must it run on Windows only or be cross-platform?
8. **Translation method**: Human-only workflow, AI-assisted draft with review, or glossary/template-based substitution?
9. **Edition target**: Original Dungeon World or Dungeon World 2 (currently in alpha)?

## Ready for Proposal

**No.**

The project is greenfield and the core scope decisions above are unresolved. The orchestrator should ask the user the open questions (especially 1, 4, 5, 6, 7, and 8) before moving to `sdd-propose`. Once those are answered, a concrete proposal can define the MVP, chosen stack, and first slice of work.
