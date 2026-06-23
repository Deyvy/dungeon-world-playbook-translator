import type { MoveData } from '../data/playbookData';

interface MoveCardProps {
  move: MoveData;
}

export default function MoveCard({ move }: MoveCardProps) {
  const hasSplit = move.splitColumnAt != null && move.choiceGroups && move.choiceGroups.length > 0;

  /** Renders a single choice group with its heading and item checkboxes */
  const renderGroup = (group: MoveData['choiceGroups'][number]) => (
    <div className="mb-1">
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
  );
  return (
    <div className="mb-1" style={{ marginTop: '3px' }}>
      {/* Title row: checkbox always shown, ✕ only when hasXMark. Hidden when split layout handles it in the left column. */}
      {!hasSplit && (
        <div className="flex items-center gap-1.5">
          <div
            style={{
              width: '18px',
              height: '18px',
              border: '1.5px solid #aaa',
              borderRadius: '3px',
              background: 'white',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              lineHeight: 1,
              color: '#555',
              fontWeight: 'bold',
            }}
          >
            {move.hasXMark && '✕'}
          </div>
          <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#1a1a1a' }}>
            {move.title}
          </span>
        </div>
      )}

      {/* Relationship label (between title and description) */}
      {move.relationships && (
        <span
          style={{
            fontSize: '9px',
            fontStyle: 'italic',
            color: '#666',
            display: 'block',
            margin: `2px 0 0 ${move.hasXMark ? '24px' : '0px'}`,
          }}
        >
          {move.relationships}
        </span>
      )}

      {/* Description below — hidden when split layout handles it in the left column */}
      {!hasSplit && move.description && (
        <p
          style={{ fontSize: '10px', color: '#6c6e70', margin: `4px 0 0 ${move.hasXMark ? '24px' : '0px'}`, fontFamily: "'AveriaLibre', sans-serif" }}
          className="leading-relaxed"
          dangerouslySetInnerHTML={{ __html: move.description }}
        />
      )}

      {/* Detail bullets */}
      {move.detailBullets && move.detailBullets.length > 0 && (
        <ul
          style={{
            fontSize: '9px',
            color: '#6c6e70',
            paddingLeft: '20px',
            margin: `5px 0 5px ${move.hasXMark ? '24px' : '0px'}`,
            listStyleType: 'disc',
          }}
        >
          {move.detailBullets.map((bullet, i) => (
            <li key={i} style={{ marginBottom: '2px' }}>
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {/* Subtext — underscores replaced with writable lines. Hidden when split layout handles it in the left column. */}
      {!hasSplit && move.subtext && (
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
      {hasSplit ? (
        <div style={{ margin: `6px 0 0 ${move.hasXMark ? '24px' : '0px'}` }}>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <div
                  style={{
                    width: '18px',
                    height: '18px',
                    border: '1.5px solid #aaa',
                    borderRadius: '3px',
                    background: 'white',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    lineHeight: 1,
                    color: '#555',
                    fontWeight: 'bold',
                  }}
                >
                  {move.hasXMark && '✕'}
                </div>
                <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#1a1a1a' }}>
                  {move.title}
                </span>
              </div>
              {move.description && (
                <p
                  style={{ fontSize: '10px', color: '#6c6e70', fontFamily: "'AveriaLibre', sans-serif" }}
                  className="leading-relaxed mb-1"
                  dangerouslySetInnerHTML={{ __html: move.description }}
                />
              )}
              {move.subtext && (
                <div style={{ fontSize: '10px', color: '#6c6e70' }} className="leading-relaxed mb-1">
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
              {move.choiceGroups!.slice(0, move.splitColumnAt!).map((group, i) => (
                <div key={i}>{renderGroup(group)}</div>
              ))}
            </div>
            <div>
              {move.choiceGroups!.slice(move.splitColumnAt!).map((group, i) => (
                <div key={i}>{renderGroup(group)}</div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        move.choiceGroups?.map((group, gi) => (
          <div key={gi} style={{ margin: `6px 0 0 ${move.hasXMark ? '24px' : '0px'}` }}>
            {renderGroup(group)}
          </div>
        ))
      )}
    </div>
  );
}