# Delta for ficha-guerrero-react

This change adds four new specs (no existing specs to modify). Each maps to a capability declared in the proposal.

---

# Playbook Sheet Specification

## Purpose

Defines the print-oriented page container, project setup, font loading, vertical class sidebar, and grunge section header primitive that all other sections compose inside.

## Requirements

### Requirement: Project Setup

The project MUST initialize as a Vite + React + TypeScript application with Tailwind CSS configured. The system MUST register the seven font files shipped in `recursos/fonts/` via `@font-face` declarations in `src/index.css`: AveriaLibre (Light, Regular, Bold, plus Italic and BoldItalic variants) exposed as a Tailwind family `font-averia`, and Metamorphous Regular exposed as `font-metamorphous`.

#### Scenario: Dev server boots cleanly

- GIVEN a fresh checkout of the project
- WHEN `npm install && npm run dev` runs
- THEN Vite serves the app on a local port
- AND Tailwind utilities apply without build errors
- AND all seven font files load (no 404s in the network tab)

#### Scenario: Font families usable in JSX

- GIVEN Tailwind is configured
- WHEN a component uses `className="font-averia font-bold"`
- THEN the rendered text uses AveriaLibre Bold, not a fallback

### Requirement: Print-First Page Container

The top-level page container MUST approximate A4 / US Letter proportions (target aspect ~1:1.41) at a fixed pixel width suitable for on-screen inspection. The container MUST use a single-column main area flanked by a vertical sidebar occupying the full height of the container.

#### Scenario: Single sheet renders without overflow

- GIVEN the app loads at the design viewport
- WHEN the page renders
- THEN exactly one playbook sheet is visible
- AND the main content and sidebar share the same fixed-width container
- AND no horizontal scrollbar appears

### Requirement: Vertical Class Sidebar

The sidebar MUST display the rotated text "EL GUERRERO" using `font-metamorphous`. The text MUST be rotated 90 degrees and run full-height on the page edge, with a black background and contrasting letterform.

#### Scenario: Sidebar visible with rotated title

- GIVEN the app loads
- WHEN the page renders
- THEN the vertical "EL GUERRERO" sidebar is visible
- AND the text is rendered in Metamorphous Regular
- AND the text orientation is vertical, not horizontal

### Requirement: Grunge Section Header

A reusable SectionHeader component MUST render a black rectangular bar with ragged or textured left and right edges, an optional leading icon, and a white uppercase label using `font-averia` Bold. The bar MUST be the visual primitive used by every section title on the sheet.

#### Scenario: SectionHeader renders with grunge edges

- GIVEN a SectionHeader is mounted with `label="APARIENCIA"`
- WHEN the page renders
- THEN a black bar with white uppercase "APARIENCIA" text is visible
- AND the bar edges are not plain rectangles (ragged, masked, or textured)
- AND the label uses AveriaLibre Bold, not a system fallback

---

# Stats Grid Specification

## Purpose

Defines the six circular stat badges (FUE, DES, CON, INT, SAB, CAR) that occupy the central stats panel of the sheet, each with a debuff checkbox.

## Requirements

### Requirement: Six Stat Badges

The stats grid MUST render exactly six StatBlock components in a single row, in the order Fuerza, Destreza, Constitución, Inteligencia, Sabiduría, Carisma. Each badge MUST display its abbreviation (FUE / DES / CON / INT / SAB / CAR) inside a circular shape, the full stat name as a label above the circle, and exactly one empty square debuff checkbox. All stat names and abbreviations MUST be sourced from `guerreroData.ts`, not hardcoded in JSX.

#### Scenario: All six badges visible in order

- GIVEN the app loads
- WHEN the page renders
- THEN six stat badges appear in a single row
- AND they appear in the order FUE, DES, CON, INT, SAB, CAR
- AND each shows its abbreviation inside a circle, the full name above, and a debuff checkbox

#### Scenario: Stat text comes from data object

- GIVEN a developer inspects the data file
- WHEN the six stat entries are listed
- THEN each entry contains both the full name and the abbreviation
- AND the rendered badges read from those entries, not from JSX literals

### Requirement: Circular Badge Geometry

Each badge MUST be a perfect circle with a contrasting fill (white interior with dark border, or dark interior with light text) and the abbreviation centered inside. The circle MUST be the dominant visual element of the stat block, larger than the label and the debuff checkbox.

#### Scenario: Circle is the dominant element

- GIVEN a stat block is rendered
- WHEN measuring its bounding box
- THEN the circular element occupies the majority of the badge width
- AND the abbreviation text is visually centered inside the circle
- AND the debuff checkbox does not overlap the circle

---

# Character Sections Specification

## Purpose

Defines the six content sections of page 1 outside the sidebar and stats grid: header, appearance, armor/HP/damage, alignment, bonds, and race. All text content is sourced from `guerreroData.ts` so components remain reusable.

## Requirements

### Requirement: Header Section

The header MUST render a row with three labeled fill-in fields (Nombre, Nivel, PX) and a class-name list (ENANO, MEDIANO, ELFO, HUMANO) each followed by a small input line for the player's name. All fields MUST use `font-averia` Regular with a handwritten-line style (label plus underline).

#### Scenario: Header fields and class list visible

- GIVEN the app loads
- WHEN the page renders
- THEN the labels Nombre, Nivel, and PX each appear with an adjacent fill-in line
- AND the four class labels ENANO, MEDIANO, ELFO, HUMANO each appear with an adjacent fill-in line

### Requirement: Appearance Section

The Appearance section MUST render four labeled fill-in lines for CUERPO, OJOS, PELO, and PIEL, each represented as a label followed by a long horizontal underline.

#### Scenario: Four appearance lines render

- GIVEN the app loads
- WHEN the page renders
- THEN the labels CUERPO, OJOS, PELO, PIEL are each visible
- AND each label is followed by a horizontal fill-in line

### Requirement: Armor / Hit Points / Damage Group

The combat-stat group MUST render three labeled cells: Armadura (with a shield SVG icon), Puntos de Golpe (with a heart SVG icon, split into max and current), and Daño (with a d10 SVG icon). Icons MUST be SVG, sized to fit their cell, and cell labels MUST be uppercase `font-averia` Bold.

#### Scenario: Combat trio visible with SVG icons

- GIVEN the app loads
- WHEN the page renders
- THEN three cells appear: Armadura with shield icon, Puntos de Golpe with heart icon and a max/current split, Daño with d10 icon
- AND each cell renders an SVG icon (not a placeholder or text)

### Requirement: Alignment Section

The alignment section MUST render three options: Bueno, Neutral, Malvado. Each option MUST include a checkbox, the option name, and a one-line description. The option names and descriptions MUST be sourced from `guerreroData.ts`.

#### Scenario: Three alignment options render

- GIVEN the app loads
- WHEN the page renders
- THEN three alignment rows are visible
- AND each row contains a checkbox, a name (Bueno / Neutral / Malvado), and a description
- AND descriptions come from the typed data object, not from JSX literals

### Requirement: Bonds Section

The bonds section MUST render N fill-in-the-blank sentence templates sourced from `guerreroData.ts`. Each template MUST contain one or more underlined fill-in slots that are visually distinct from the surrounding prose.

#### Scenario: Bond templates render

- GIVEN the app loads
- WHEN the page renders
- THEN at least one bond sentence template is visible
- AND each template has visible underlined fill-in slots
- AND templates come from the typed data object

### Requirement: Race Section

The race section MUST render four options: Enano, Elfo, Mediano, Humano. Each option MUST include a checkbox, the race name, and a short description sourced from `guerreroData.ts`.

#### Scenario: Four race options render

- GIVEN the app loads
- WHEN the page renders
- THEN four race rows are visible
- AND each row contains a checkbox, a name (Enano / Elfo / Mediano / Humano), and a description
- AND descriptions come from the typed data object

---

# Moves Section Specification

## Purpose

Defines the "Movimientos Iniciales" section and the reusable MoveCard component that renders each starting move with its title, body, nested sub-choices, and improvements.

## Requirements

### Requirement: Initial Moves List

The moves section MUST render a "Movimientos Iniciales" section header followed by a vertical list of three MoveCard components in this order: "Arma Distintiva", "Doblar Barras, Alzar Puertas", "Blindado". All move titles and bodies MUST be sourced from `guerreroData.ts`.

#### Scenario: Three starting moves render in order

- GIVEN the app loads
- WHEN the page renders
- THEN a "Movimientos Iniciales" section header is visible
- AND exactly three MoveCards appear in the order Arma Distintiva, Doblar Barras Alzar Puertas, Blindado
- AND titles come from the typed data object

### Requirement: MoveCard Component

A MoveCard MUST render a bold uppercase title, an optional starting-move marker, body prose, and any nested sub-choices (checkbox groups or bullet lists) defined per-move in `guerreroData.ts`. The card MUST be visually distinct from the grunge section header (typically a bordered or white-background block, not a black bar).

#### Scenario: MoveCard renders title, body, and sub-choices

- GIVEN a MoveCard with body text and a sub-choice list is mounted
- WHEN the page renders
- THEN the move title appears bold and uppercase
- AND body prose is visible
- AND sub-choices render as checkboxes or bullet lists
- AND the card does not use the grunge section-header style

### Requirement: Arma Distintiva Sub-Choices

The "Arma Distintiva" MoveCard MUST include three checkbox sub-groups and a fill-in line: weapon type (multiple options such as hacha, espada, martillo, lanza, maza), distance (cercana, cercana y lejos), aspect (a free-text fill-in line), and a Mejoras list. All four sub-groups MUST be sourced from the data object.

#### Scenario: Arma Dististiva shows all four sub-groups

- GIVEN the app loads
- WHEN the page renders
- THEN the Arma Distintiva move shows weapon-type checkboxes, distance checkboxes, an aspect fill-in line, and a Mejoras list
- AND all four sub-groups come from the typed data object

### Requirement: Doblar Barras and Blindado Cards

The "Doblar Barras, Alzar Puertas" and "Blindado" MoveCards MUST each render their title and body text only for this static replica, with no nested sub-choices.

#### Scenario: Two simple moves render

- GIVEN the app loads
- WHEN the page renders
- THEN the Doblar Barras, Alzar Puertas move shows its title and body
- AND the Blindado move shows its title and body
- AND neither move renders nested sub-choices
