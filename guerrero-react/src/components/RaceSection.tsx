import { guerreroData } from '../data/guerreroData';
import SectionHeader from './SectionHeader';

export default function RaceSection() {
  const { races } = guerreroData;

  return (
    <div className="mb-2">
      <SectionHeader title="Raza" />
      <div className="font-averia mt-1 space-y-1.5 text-xs">
        {races.map((race) => (
          <div key={race.name} className="flex items-start gap-2">
            <span className="checkbox-square mt-0.5" />
            <div>
              <span className="font-bold">{race.name}</span>
              <span className="ml-1 text-gray-700">{race.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
