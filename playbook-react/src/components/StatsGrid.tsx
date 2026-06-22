import type { StatData } from '../data/playbookData';
import StatBlock from './StatBlock';

interface StatsGridProps {
  stats: StatData[];
  statValuesHint: string;
  statModifiers: string;
}

export default function StatsGrid({ stats, statValuesHint, statModifiers }: StatsGridProps) {
  return (
    <div>
      {/* Values hint (above the stat blocks) — vertically centered in the gap */}
      <p className="font-averia text-center text-xs text-gray-600 italic" style={{ marginTop: '0', marginBottom: '7px' }}>{statValuesHint}</p>

      {/* 2 rows x 3 cols of stat blocks */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px 8px', marginBottom: '4px' }}>
        {stats.map((stat) => (
          <StatBlock key={stat.abbr} stat={stat} />
        ))}
      </div>

      {/* Modifiers (below the stat blocks) */}
      <p className="font-averia text-center text-xs text-gray-600 italic">{statModifiers}</p>
    </div>
  );
}
