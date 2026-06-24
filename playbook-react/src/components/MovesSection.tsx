import type { MoveData } from '../data/playbookData';
import SectionHeader from './SectionHeader';
import MoveCard from './MoveCard';

interface MovesSectionProps {
  moves: MoveData[];
}

export default function MovesSection({ moves }: MovesSectionProps) {
  // Separate full-span moves from column moves
  const fullMoves = moves.filter((m) => m.span === 'full');
  const colMoves = moves.filter((m) => m.span !== 'full');

  // Split half-width moves into two independent columns.
  // Respect an explicit `column` override; distribute the rest by parity.
  const leftMoves: MoveData[] = [];
  const rightMoves: MoveData[] = [];
  const unassigned: MoveData[] = [];

  colMoves.forEach((move) => {
    if (move.column === 'left') leftMoves.push(move);
    else if (move.column === 'right') rightMoves.push(move);
    else unassigned.push(move);
  });

  unassigned.forEach((move, i) => {
    if (i % 2 === 0) leftMoves.push(move);
    else rightMoves.push(move);
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

        {/* Two independent flex columns — no forced row alignment */}
        {(leftMoves.length > 0 || rightMoves.length > 0) && (
          <div className="grid grid-cols-2 gap-x-2">
            <div className="flex flex-col">
              {leftMoves.map((move, i) => (
                <MoveCard key={`left-${i}`} move={move} />
              ))}
            </div>
            <div className="flex flex-col">
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
