import { guerreroData } from '../data/guerreroData';
import SectionHeader from './SectionHeader';
import MoveCard from './MoveCard';
import type { MoveData } from '../data/guerreroData';

export default function MovesSection() {
  const { moves } = guerreroData;

  // Arma Distintiva is split into two parts: part 1 (description + basic choices + distance),
  // part 2 ("Elige dos mejoras:" onwards)
  const armaDistintiva = moves[0];
  const armaPart1: MoveData = {
    title: armaDistintiva.title,
    hasXMark: true,
    description: armaDistintiva.description,
    subtext: armaDistintiva.subtext,
    choiceGroups: armaDistintiva.choiceGroups?.slice(0, 2),
  };
  const armaPart2: MoveData = {
    title: `${armaDistintiva.title} (cont.)`,
    hasXMark: false,
    choiceGroups: armaDistintiva.choiceGroups?.slice(2),
  };

  // Remaining moves: Doblar Barras and Blindado
  const remainingMoves = moves.slice(1);

  return (
    <div className="mb-2">
      <SectionHeader title="Movimientos Iniciales" />

      {/* Arma Distintiva — full width, two columns side by side */}
      <div className="mt-1 grid grid-cols-2 gap-x-2">
        <MoveCard move={armaPart1} />
        <MoveCard move={armaPart2} />
      </div>

      {/* Remaining moves — two per row */}
      <div className="grid grid-cols-2 gap-x-2">
        {remainingMoves.map((move, i) => (
          <MoveCard key={i} move={move} />
        ))}
      </div>
    </div>
  );
}