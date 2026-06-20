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
