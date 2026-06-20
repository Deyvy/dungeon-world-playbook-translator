import type { MoveData } from '../data/guerreroData';

interface MoveCardProps {
  move: MoveData;
}

export default function MoveCard({ move }: MoveCardProps) {
  return (
    <div className="mb-2 border border-gray-300 bg-white/30 p-2">
      {/* Title row with X mark */}
      <div className="mb-1 flex items-center gap-2">
        {move.hasXMark && (
          <span
            className="font-averia inline-flex items-center justify-center text-sm font-bold"
            style={{
              width: '16px',
              height: '16px',
              border: '1.5px solid #333',
              background: 'white',
            }}
          >
            ✕
          </span>
        )}
        <span className="font-averia text-sm font-bold">{move.title}</span>
      </div>

      {/* Description */}
      <p className="font-averia mb-1 text-xs leading-relaxed">{move.description}</p>

      {/* Subtext */}
      {move.subtext && (
        <div className="font-averia mb-1 text-xs leading-relaxed whitespace-pre-line">
          {move.subtext}
        </div>
      )}

      {/* Choice groups */}
      {move.choiceGroups?.map((group, gi) => (
        <div key={gi} className="mb-1">
          {group.heading && <p className="font-averia mb-0.5 text-xs italic">{group.heading}</p>}
          {group.columns && group.columns > 1 ? (
            <div
              className="grid gap-x-4 gap-y-0.5"
              style={{ gridTemplateColumns: `repeat(${group.columns}, 1fr)` }}
            >
              {group.items.map((item, ii) => (
                <div key={ii} className="flex items-start gap-1.5">
                  <span className="checkbox-square mt-0.5" />
                  <span className="font-averia text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-0.5">
              {group.items.map((item, ii) => (
                <div key={ii} className="flex items-start gap-1.5">
                  <span className="checkbox-square mt-0.5" />
                  <span className="font-averia text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
