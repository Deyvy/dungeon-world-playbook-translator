import d4Icon from '../assets/icons/d4-icon.png';
import d6Icon from '../assets/icons/d6-icon.png';
import d8Icon from '../assets/icons/d8-icon.png';
import d10Icon from '../assets/icons/d10-icon.png';

export type DamageDie = 'd4' | 'd6' | 'd8' | 'd10';

export const DIE_ICONS: Record<DamageDie, string> = {
  d4: d4Icon,
  d6: d6Icon,
  d8: d8Icon,
  d10: d10Icon,
};
