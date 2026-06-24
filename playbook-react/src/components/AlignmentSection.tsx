import type { PlaybookData } from '../data/playbookData';
import SectionHeader from './SectionHeader';

interface AlignmentSectionProps {
  alignment: PlaybookData['alignment'];
}

export default function AlignmentSection({ alignment }: AlignmentSectionProps) {
  return (
    <div className="mb-2">
      <SectionHeader title="Alineamiento" />
      <div className="font-averia mt-1">
        {alignment.map((option) => (
          <div key={option.label} className="mb-1.5">
            {/* Title row: checkbox + title */}
            <div className="flex items-center gap-1.5">
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  border: '1.5px solid #aaa',
                  borderRadius: '3px',
                  background: 'white',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#1a1a1a' }}>
                {option.label}
              </span>
            </div>
            {/* Description below */}
            <p style={{ fontSize: '10px', color: '#6c6e70', margin: '0 0 0 24px' }} dangerouslySetInnerHTML={{ __html: option.description }} />
          </div>
        ))}
        {/* Extra option: checkbox + write lines for custom alignment */}
        <div className="mb-1.5">
          <div className="flex items-center gap-1.5">
            <div
              style={{
                width: '18px',
                height: '18px',
                border: '1.5px solid #aaa',
                borderRadius: '3px',
                background: 'white',
                flexShrink: 0,
              }}
            />
            <div
              style={{
                flex: 1,
                borderBottom: '1px solid #6c6e70',
                opacity: 0.6,
                height: '15px',
                marginRight: '10px',
              }}
            />
          </div>
          <div style={{ marginLeft: '24px', marginTop: '4px' }}>
            <div
              style={{
                borderBottom: '1px solid #6c6e70',
                opacity: 0.6,
                height: '15px',
                width: 'calc(100% - 10px)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
