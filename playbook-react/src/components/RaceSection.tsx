import type { RaceData } from '../data/playbookData';
import SectionHeader from './SectionHeader';

interface RaceSectionProps {
  races: RaceData[];
  hideExtra?: boolean;
}

export default function RaceSection({ races, hideExtra }: RaceSectionProps) {
  return (
    <div className="mb-2">
      <SectionHeader title="Raza" />
      <div className="font-averia mt-1">
        {races.map((race) => (
          <div key={race.name} className="mb-1.5">
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
                {race.name}
              </span>
            </div>
            {/* Description below */}
            <p style={{ fontSize: '10px', color: '#6c6e70', margin: '0 0 0 24px' }} dangerouslySetInnerHTML={{ __html: race.description }} />
            {/* Footer: optional label + write-in lines */}
            {race.footerLabel && (
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 'bold',
                  color: '#6c6e70',
                  display: 'block',
                  margin: '6px 0 2px 24px',
                }}
              >
                {race.footerLabel}
              </span>
            )}
            {race.footerLines != null && race.footerLines > 0 && (
              <div style={{ marginLeft: '24px', marginTop: '2px' }}>
                {Array.from({ length: race.footerLines }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      borderBottom: '1px solid #6c6e70',
                      opacity: 0.6,
                      height: '1em',
                      marginBottom: '4px',
                      marginRight: '10px',
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
        {/* Extra option: checkbox + write lines for custom race */}
        {!hideExtra && (
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
        )}
      </div>
    </div>
  );
}
