import { guerreroData } from '../data/guerreroData';
import SectionHeader from './SectionHeader';

export default function AlignmentSection() {
  const { alignment } = guerreroData;

  return (
    <div className="mb-2">
      <SectionHeader title="Alineamiento" />
      <div className="font-averia mt-1 space-y-1.5 text-xs">
        {alignment.map((option) => (
          <div key={option.label} className="flex items-start gap-2">
            <span className="checkbox-square mt-0.5" />
            <div>
              <span className="font-bold">{option.label}</span>
              <span className="ml-1 text-gray-700">{option.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
