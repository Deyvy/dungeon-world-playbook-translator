import { guerreroData } from '../data/guerreroData';
import SectionHeader from './SectionHeader';

export default function AppearanceSection() {
  const { appearance } = guerreroData;

  return (
    <div className="mb-2">
      <SectionHeader title="Apariencia" />
      <div className="font-averia mt-1 text-xs">
        <p className="mb-1 text-gray-700 italic">{appearance.prompt}</p>
        {appearance.fields.map((field) => (
          <div key={field.label} className="mb-0.5 flex items-baseline gap-1">
            <span className="font-bold uppercase">{field.label}:</span>
            <span className="text-gray-600">{field.options}</span>
            <span className="fill-line" style={{ borderBottom: '1px solid #333' }}>
              &nbsp;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
