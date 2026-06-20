import { guerreroData } from '../data/guerreroData';
import SectionHeader from './SectionHeader';

export default function BondsSection() {
  const { bonds } = guerreroData;

  return (
    <div className="mb-2">
      <SectionHeader title="Vínculos" />
      <div className="font-averia mt-1 text-xs">
        <p className="mb-1 text-gray-600 italic">
          Rellena al menos uno de los espacios en blanco con el nombre de uno de tus compañeros:
        </p>
        <div className="space-y-2">
          {bonds.map((bond, i) => (
            <p key={i} className="leading-relaxed">
              {bond}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
