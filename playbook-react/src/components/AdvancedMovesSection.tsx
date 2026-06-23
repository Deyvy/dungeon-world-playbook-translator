import type { AdvancedMoveGroup } from '../data/playbookData';
import MoveCard from './MoveCard';
import SectionHeader from './SectionHeader';

interface AdvancedMovesSectionProps {
  groups: AdvancedMoveGroup[];
}

export default function AdvancedMovesSection({ groups }: AdvancedMovesSectionProps) {
  return (
    <div className="flex flex-col h-full">
      <SectionHeader title="MOVIMIENTOS AVANZADOS" />

      {groups.map((group, gi) => (
        <div key={gi}>
          {/* Instruction text */}
          <span
            style={{ fontSize: '10px', color: '#6c6e70', display: 'block', marginBottom: '10px', marginTop: '10px' }}
            className="italic leading-relaxed"
          >
            {group.instruction}
          </span>

          {/* 2-column grid of MoveCards */}
          <div
            className="grid gap-x-6"
            style={{ gridTemplateColumns: '1fr 1fr', gap: '15px 25px' }}
          >
            <div className="flex flex-col" style={{ gap: '12px' }}>
              {group.moves
                .filter((_, i) => i % 2 === 0)
                .map((move, mi) => (
                  <MoveCard key={mi} move={move} />
                ))}
            </div>
            <div className="flex flex-col" style={{ gap: '12px' }}>
              {group.moves
                .filter((_, i) => i % 2 === 1)
                .map((move, mi) => (
                  <MoveCard key={mi} move={move} />
                ))}
            </div>
          </div>

          {/* Divider between tiers (after first group) */}
          {gi < groups.length - 1 && (
            <div
              style={{
                borderBottom: '1px solid #ccc',
                margin: '25px 0 15px',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
