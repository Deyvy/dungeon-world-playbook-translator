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
