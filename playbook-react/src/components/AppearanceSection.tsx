import type { PlaybookData } from '../data/playbookData';
import SectionHeader from './SectionHeader';

interface AppearanceSectionProps {
  appearance: PlaybookData['appearance'];
}

export default function AppearanceSection({ appearance }: AppearanceSectionProps) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <SectionHeader title="Apariencia" />
      <div className="font-averia mt-1" style={{ fontSize: '9px' }}>
        <p className="mb-1 italic" style={{ color: '#6c6e70' }} dangerouslySetInnerHTML={{ __html: appearance.prompt }} />
        {appearance.fields.map((field) => (
          <div key={field.label} className="mb-0.5 flex items-baseline">
            <span
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: '#1a1a1a',
                whiteSpace: 'nowrap',
              }}
            >
              {field.label}:
            </span>
            <span style={{ color: '#6c6e70', whiteSpace: 'nowrap', marginLeft: '4px' }}>
              {field.options}
            </span>
            <span className="fill-line" style={{ borderBottomColor: '#6c6e70', opacity: 0.6 }}>&nbsp;</span>
          </div>
        ))}
        {/* Extra write line for custom input */}
        <div style={{ borderTop: '1px solid #6c6e70', marginTop: '15px', marginBottom: '1px', marginLeft: '4px', marginRight: '4px', opacity: 0.6, height: '1em' }} />
      </div>
    </div>
  );
}
