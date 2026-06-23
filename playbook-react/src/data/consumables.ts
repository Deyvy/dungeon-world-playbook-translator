import rationIcon from '../assets/icons/ration-icon.png';
import ammoIcon from '../assets/icons/ammo-icon.png';
import chestIcon from '../assets/icons/chest-icon.png';
import potionIcon from '../assets/icons/potion-icon.png';
import type { GearData } from './playbookData';

/** Static consumable block — identical for all playbooks. */
export const CONSUMABLE_ROWS: GearData['consumableRows'] = [
  { icon: rationIcon, groups: [5, 5, 5] },
  { icon: ammoIcon, groups: [3, 3, 3, 3] },
  { icon: chestIcon, groups: [5, 5], iconSize: '0.8em', gap: '2px' },
  { icon: potionIcon, groups: [3, 3, 3], groupGap: 0.5 },
];
