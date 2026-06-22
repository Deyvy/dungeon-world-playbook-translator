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

      {/* Single 2-column grid; span:'full' → col-span-2 */}
      <div className="mt-1 grid grid-cols-2 gap-x-2">
        {moves.map((move, i) => (
          <div key={i} className={move.span === 'full' ? 'col-span-2' : ''}>
            <MoveCard move={move} />
          </div>
        ))}
      </div>
    </div>
  );
}
