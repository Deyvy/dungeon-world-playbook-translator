import { guerreroData } from '../data/guerreroData';
import StatBlock from './StatBlock';

export default function StatsGrid() {
  const { stats, statValuesHint, statModifiers } = guerreroData;

  return (
    <div className="mb-2">
      {/* Values hint */}
      <p className="font-averia mb-1 text-center text-xs text-gray-600 italic">{statValuesHint}</p>

      {/* 2 rows x 3 cols of stat blocks */}
      <div className="mb-1 grid grid-cols-3 gap-x-4 gap-y-2">
        {stats.map((stat) => (
          <StatBlock key={stat.abbr} stat={stat} />
        ))}
      </div>

      {/* Modifiers */}
      <p className="font-averia text-center text-xs text-gray-600 italic">{statModifiers}</p>
    </div>
  );
}
