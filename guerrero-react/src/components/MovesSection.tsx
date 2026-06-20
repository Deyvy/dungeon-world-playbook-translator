import { guerreroData } from '../data/guerreroData';
import SectionHeader from './SectionHeader';
import MoveCard from './MoveCard';

export default function MovesSection() {
  const { moves } = guerreroData;

  return (
    <div className="mb-2">
      <SectionHeader title="Movimientos Iniciales" />
      <div className="mt-1">
        {moves.map((move, i) => (
          <MoveCard key={i} move={move} />
        ))}
      </div>
    </div>
  );
}
