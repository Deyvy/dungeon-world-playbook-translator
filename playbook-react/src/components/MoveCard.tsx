import type { MoveData, MoveChoiceGroup, MoveChoice } from '../data/playbookData';
import { renderParagraphs } from './richTextUtils';

interface MoveCardProps {
  move: MoveData;
}

export default function MoveCard({ move }: MoveCardProps) {
  const hasSplit = move.splitColumnAt != null && move.choiceGroups && move.choiceGroups.length > 0;

  const isInstruction =
    !move.title &&
    !move.description &&
    !move.choiceGroups?.length &&
    !move.subtext &&
    !move.detailBullets?.length &&
    !move.postText &&
    !!move.relationships;

  if (isInstruction) {
    return (
      <div className="mb-1">
        <span
          style={{
            fontSize: '9px',
            fontStyle: 'italic',
            color: '#666',
            display: 'block',
          }}
          dangerouslySetInnerHTML={{ __html: move.relationships! }}
        />
      </div>
    );
  }

  /** Renders a single choice group with its heading and item checkboxes */
  const renderGroup = (group: MoveChoiceGroup) => (
    <div className="mb-1">
      {group.heading && (
        <p
          style={{ fontSize: '10px', color: '#6c6e70' }}
          className="mb-1 italic"
          dangerouslySetInnerHTML={{ __html: group.heading }}
        />
      )}
      <div style={{ marginLeft: '12px' }}>
        {group.columns && group.columns > 1 ? (
          <div
            className="grid gap-x-4 gap-y-0.5"
            style={{ gridTemplateColumns: `repeat(${group.columns}, 1fr)` }}
          >
            {group.items.map((item: MoveChoice, ii: number) => (
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
                <span
                  style={{ fontSize: '10px', color: '#6c6e70' }}
                  className="leading-none"
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-0.5">
            {group.items.map((item: MoveChoice, ii: number) => (
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
                <span
                  style={{ fontSize: '10px', color: '#6c6e70' }}
                  className="leading-none"
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
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
        <div className="flex items-start gap-1.5">
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
            margin: `0 0 0 24px`,
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: move.relationships }} />
        </span>
      )}

      {/* Description below — hidden when split layout handles it in the left column */}
      {!hasSplit && move.description && (
        <div
          style={{
            fontSize: '10px',
            color: '#6c6e70',
            margin: `4px 0 0 24px`,
            fontFamily: "'AveriaLibre', sans-serif",
          }}
        >
          {renderParagraphs(move.description)}
        </div>
      )}

      {/* Detail bullets */}
      {move.detailBullets && move.detailBullets.length > 0 && (
        <ul
          style={{
            fontSize: '9px',
            color: '#6c6e70',
            paddingLeft: '20px',
            margin: `5px 0 5px 24px`,
            listStyleType: 'disc',
          }}
        >
          {move.detailBullets.map((bullet, i) => (
            <li key={i} style={{ marginBottom: '2px' }}>
              <span dangerouslySetInnerHTML={{ __html: bullet }} />
            </li>
          ))}
        </ul>
      )}

      {/* Subtext — underscores replaced with writable lines. Hidden when split layout handles it in the left column. */}
      {!hasSplit && move.subtext && (
        <div
          style={{
            fontSize: '10px',
            color: '#6c6e70',
            margin: `4px 0 0 24px`,
          }}
          className="mb-1"
        >
          {renderParagraphs(move.subtext)}
        </div>
      )}

      {/* Choice groups */}
      {hasSplit ? (
        <div style={{ margin: `6px 0 0 24px` }}>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <div className="mb-1 flex items-start gap-1.5">
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
                <div
                  style={{
                    fontSize: '10px',
                    color: '#6c6e70',
                    fontFamily: "'AveriaLibre', sans-serif",
                  }}
                  className="mb-1"
                >
                  {renderParagraphs(move.description)}
                </div>
              )}
              {move.subtext && (
                <div
                  style={{ fontSize: '10px', color: '#6c6e70' }}
                  className="mb-1"
                >
                  {renderParagraphs(move.subtext)}
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
              {/* Post-choice text — inside right column when split layout */}
              {move.postText && (
                <div
                  style={{
                    fontSize: '10px',
                    color: '#6c6e70',
                    margin: `6px 0 0`,
                  }}
                  className="mb-1"
                >
                  {renderParagraphs(move.postText)}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          {move.choiceGroups?.map((group, gi) => (
            <div key={gi} style={{ margin: `6px 0 0 24px` }}>
              {renderGroup(group)}
            </div>
          ))}
          {/* Post-choice text — rendered after all choice groups */}
          {move.postText && (
            <div
              style={{
                fontSize: '10px',
                color: '#6c6e70',
                margin: `4px 0 0 24px`,
              }}
              className="mb-1"
            >
              {renderParagraphs(move.postText)}
            </div>
          )}
        </>
      )}
    </div>
  );
}
