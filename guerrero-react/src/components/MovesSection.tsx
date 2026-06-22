import type { MoveData } from '../data/playbookData';
import SectionHeader from './SectionHeader';
import MoveCard from './MoveCard';

interface MovesSectionProps {
  moves: MoveData[];
}

export default function MovesSection({ moves }: MovesSectionProps) {
  return (
    <div className="mb-2">
      <SectionHeader title="Movimientos Iniciales" />

      {/* Single 2-column grid; span:'full' → col-span-2 + separator line below */}
      <div className="mt-1 grid grid-cols-2 gap-x-2">
        {moves.map((move, i) => {
          const isFull = move.span === 'full';
          return (
            <div
              key={i}
              className={isFull ? 'col-span-2 border-b border-gray-400 pb-1 mb-1' : ''}
            >
              <MoveCard move={move} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
