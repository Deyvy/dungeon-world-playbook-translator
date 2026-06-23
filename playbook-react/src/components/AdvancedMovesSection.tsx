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
             style={{ fontSize: '10px', color: '#6c6e70', display: 'block', marginBottom: '6px', marginTop: '6px' }}
            className="italic leading-relaxed"
          >
            {group.instruction}
          </span>

          {/* 2-column grid of MoveCards (column-major: first half left, second half right) */}
          <div
            className="grid gap-x-6"
            style={{ gridTemplateColumns: '1fr 1fr', gap: '8px 16px' }}
          >
            <div className="flex flex-col" style={{ gap: '6px' }}>
              {group.moves
                .slice(0, Math.ceil(group.moves.length / 2))
                .map((move, mi) => (
                  <MoveCard key={mi} move={move} />
                ))}
            </div>
            <div className="flex flex-col" style={{ gap: '6px' }}>
              {group.moves
                .slice(Math.ceil(group.moves.length / 2))
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
                margin: '15px 0 10px',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
