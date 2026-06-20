import type { StatData } from '../data/guerreroData';

interface StatBlockProps {
  stat: StatData;
}

export default function StatBlock({ stat }: StatBlockProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Stat name */}
      <span className="font-averia mb-0.5 text-xs font-bold">{stat.name}</span>
      {/* Debuff row */}
      <div className="mb-0.5 flex items-center gap-1">
        <span className="font-averia text-xs text-gray-600">{stat.debuff}</span>
        <span className="checkbox-square" />
      </div>
      {/* Circle badge */}
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          width: '48px',
          height: '48px',
          background: '#1a1a1a',
          color: 'white',
        }}
      >
        <span className="font-averia text-sm font-bold">{stat.abbr}</span>
      </div>
    </div>
  );
}
