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

#### Scenario: Arma Distintiva shows all four sub-groups

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
