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
