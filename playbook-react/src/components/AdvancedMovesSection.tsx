import type { AdvancedMoveGroup, MoveData } from '../data/playbookData';
import MoveCard from './MoveCard';
import SectionHeader from './SectionHeader';

interface AdvancedMovesSectionProps {
  groups: AdvancedMoveGroup[];
}

function distributeMoves(moves: MoveData[]): { left: MoveData[]; right: MoveData[] } {
  const hasExplicit = moves.some((m) => m.column != null);

  if (!hasExplicit) {
    const half = Math.ceil(moves.length / 2);
    return { left: moves.slice(0, half), right: moves.slice(half) };
  }

  const left: MoveData[] = [];
  const right: MoveData[] = [];
  let leftCount = 0;
  let rightCount = 0;

  moves.forEach((move) => {
    if (move.column === 'left') {
      left.push(move);
      leftCount++;
    } else if (move.column === 'right') {
      right.push(move);
      rightCount++;
    } else if (leftCount <= rightCount) {
      left.push(move);
      leftCount++;
    } else {
      right.push(move);
      rightCount++;
    }
  });

  return { left, right };
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
            dangerouslySetInnerHTML={{ __html: group.instruction }}
          />

          {/* 2-column grid of MoveCards respecting column property */}
          <div
            className="grid gap-x-6"
            style={{ gridTemplateColumns: '1fr 1fr', gap: '8px 16px' }}
          >
            {(() => {
              const { left, right } = distributeMoves(group.moves);
              return (
                <>
                  <div className="flex flex-col" style={{ gap: '6px' }}>
                    {left.map((move, mi) => (
                      <MoveCard key={mi} move={move} />
                    ))}
                  </div>
                  <div className="flex flex-col" style={{ gap: '6px' }}>
                    {right.map((move, mi) => (
                      <MoveCard key={mi} move={move} />
                    ))}
                  </div>
                </>
              );
            })()}
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
