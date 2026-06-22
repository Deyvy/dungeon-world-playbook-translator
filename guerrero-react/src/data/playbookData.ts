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
  description: string;
  subtext?: string;
  choiceGroups?: MoveChoiceGroup[];
  span?: 'half' | 'full';
}

export interface PlaybookData {
  meta: { name: string; classIcon: string };
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
}
