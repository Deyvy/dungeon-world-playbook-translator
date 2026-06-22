import type { MoveData } from '../data/playbookData';

interface MoveCardProps {
  move: MoveData;
}

export default function MoveCard({ move }: MoveCardProps) {
  return (
    <div className="mb-2" style={{ marginTop: '6px' }}>
      {/* Title row: checkbox + title (only if hasXMark) */}
      {move.hasXMark && (
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
            {move.title}
          </span>
        </div>
      )}

      {/* Description below */}
      <p style={{ fontSize: '10px', color: '#6c6e70', margin: `4px 0 0 ${move.hasXMark ? '24px' : '0px'}` }} className="leading-relaxed">
        {move.description}
      </p>

      {/* Subtext — underscores replaced with writable lines */}
      {move.subtext && (
        <div
          style={{ fontSize: '10px', color: '#6c6e70', margin: `4px 0 0 ${move.hasXMark ? '24px' : '0px'}` }}
          className="leading-relaxed mb-1"
        >
          {move.subtext.split(/(_+)/).map((part, i) =>
            part.startsWith('_') ? (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  minWidth: '100px',
                  borderBottom: '1px solid #6c6e70',
                  opacity: 0.6,
                  margin: '0 2px',
                  height: '1em',
                }}
              />
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </div>
      )}

      {/* Choice groups */}
      {move.choiceGroups?.map((group, gi) => (
        <div key={gi} style={{ margin: `6px 0 0 ${move.hasXMark ? '24px' : '0px'}` }} className="mb-1">
          {group.heading && (
            <p style={{ fontSize: '10px', color: '#6c6e70' }} className="italic mb-1">
              {group.heading}
            </p>
          )}
          <div style={{ marginLeft: '12px' }}>
          {group.columns && group.columns > 1 ? (
            <div
              className="grid gap-x-4 gap-y-0.5"
              style={{ gridTemplateColumns: `repeat(${group.columns}, 1fr)` }}
            >
              {group.items.map((item, ii) => (
                <div key={ii} className="flex items-start gap-1.5">
                  <div
                    style={{
                      width: '14px',
                      height: '14px',
                      border: '1.5px solid #aaa',
                      borderRadius: '3px',
                      background: 'white',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '10px', color: '#6c6e70' }} className="leading-relaxed">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-0.5">
              {group.items.map((item, ii) => (
                <div key={ii} className="flex items-start gap-1.5">
                  <div
                    style={{
                      width: '14px',
                      height: '14px',
                      border: '1.5px solid #aaa',
                      borderRadius: '3px',
                      background: 'white',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '10px', color: '#6c6e70' }} className="leading-relaxed">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
          </div>
        </div>
      ))}
    </div>
  );
}