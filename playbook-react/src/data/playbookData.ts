import type { DamageDie } from './dieIcons';

export interface StatData {
  name: string;
  abbr: string;
  debuff: string;
}

export interface MoveChoice {
  label: string;
}

export interface MoveChoiceGroup {
  heading: string;
  items: MoveChoice[];
  columns?: number;
}

export interface MoveData {
  title: string;
  hasXMark: boolean;
  description?: string;
  subtext?: string;
  choiceGroups?: MoveChoiceGroup[];
  span?: 'half' | 'full';
  /** When set, splits choiceGroups into two side-by-side columns.
   *  Groups [0..splitColumnAt-1] render left, groups [splitColumnAt..] render right. */
  splitColumnAt?: number;
  /** Relationship label shown between title and description (e.g. "Reemplaza a: Despiadado") */
  relationships?: string;
  /** Bullet list items rendered below description */
  detailBullets?: string[];
  /** Force this move into the left or right column in the initial-moves grid */
  column?: 'left' | 'right';
  /** Text rendered after choice groups (supports HTML and underscore blank lines) */
  postText?: string;
}

// --- Page 2 gear interfaces ---

export interface GearItem {
  text: string;
  checkbox?: boolean;
}

export interface GearGroup {
  prompt: string;
  items: GearItem[];
}

export interface GearData {
  maxLoadBase: number;
  fixedItems: string[];
  defenseGroup: GearGroup;
  pickTwoGroup: GearGroup;
  blankLineCount: number;
  consumableRows: {
    icon: string;
    groups: number[];
    iconSize?: string;
    groupGap?: number;
    gap?: string;
  }[];
}

export interface AdvancedMoveGroup {
  instruction: string;
  moves: MoveData[];
}

export interface Page2Data {
  gear: GearData;
  advancedMoves: AdvancedMoveGroup[];
}

export interface PlaybookData {
  meta: { name: string; classIcon: string };
  /** Optional per-playbook example names for each race, displayed below the header row */
  raceNames?: { race: string; names: string[] }[];
  appearance: {
    prompt: string;
    fields: { label: string; options: string }[];
  };
  stats: StatData[];
  statValuesHint: string;
  statModifiers: string;
  hpBase: number;
  damageDie: DamageDie;
  alignment: { label: string; description: string }[];
  bonds: string[];
  moves: MoveData[];
  races: { name: string; description: string }[];
  /** Optional move rendered below the Raza block (for tight page-1 layouts) */
  extraMove?: MoveData;
  /** Optional page 2 data (advanced moves + gear) */
  page2?: Page2Data;
}
