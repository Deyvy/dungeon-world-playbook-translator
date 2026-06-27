import type { MoveData } from '../data/playbookData';
import SectionHeader from './SectionHeader';
import MoveCard from './MoveCard';

interface MovesSectionProps {
  moves: MoveData[];
}

export default function MovesSection({ moves }: MovesSectionProps) {
  // Separate stacked, full-span, and column moves
  const stackMoves = moves.filter((m) => m.span === 'stack');
  const fullMoves = moves.filter((m) => m.span === 'full');
  const colMoves = moves.filter((m) => m.span !== 'full' && m.span !== 'stack');

  // Split half-width moves into two independent columns.
  // Process in array order: respect explicit `column`, balance the rest.
  const leftMoves: MoveData[] = [];
  const rightMoves: MoveData[] = [];
  let leftCount = 0;
  let rightCount = 0;

  colMoves.forEach((move) => {
    if (move.column === 'left') {
      leftMoves.push(move);
      leftCount++;
    } else if (move.column === 'right') {
      rightMoves.push(move);
      rightCount++;
    } else if (leftCount <= rightCount) {
      leftMoves.push(move);
      leftCount++;
    } else {
      rightMoves.push(move);
      rightCount++;
    }
  });

  return (
    <div className="mb-2">
      <SectionHeader title="Movimientos Iniciales" />

      <div className="mt-1">
        {/* Full-span moves */}
        {fullMoves.map((move, i) => (
          <div key={`full-${i}`} className="mb-1 border-b border-gray-400 pb-1">
            <MoveCard move={move} />
          </div>
        ))}

        {/* Stacked moves — single column, one below the other */}
        {stackMoves.length > 0 && (
          <div className="flex flex-col" style={{ gap: '6px', marginBottom: '4px' }}>
            {stackMoves.map((move, i) => (
              <MoveCard key={`stack-${i}`} move={move} />
            ))}
          </div>
        )}

        {/* Two independent flex columns — no forced row alignment */}
        {(leftMoves.length > 0 || rightMoves.length > 0) && (
          <div className="grid grid-cols-2 gap-x-2">
            <div className="flex flex-col" style={{ gap: '6px' }}>
              {leftMoves.map((move, i) => (
                <MoveCard key={`left-${i}`} move={move} />
              ))}
            </div>
            <div className="flex flex-col" style={{ gap: '6px' }}>
              {rightMoves.map((move, i) => (
                <MoveCard key={`right-${i}`} move={move} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
