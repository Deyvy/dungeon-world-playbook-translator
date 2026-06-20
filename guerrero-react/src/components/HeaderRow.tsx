import { guerreroData } from '../data/guerreroData';

export default function HeaderRow() {
  const { header } = guerreroData;

  return (
    <div className="mb-1">
      {/* Top row: NOMBRE | NIVEL | PX */}
      <div className="mb-2 flex items-end gap-4">
        <div className="flex flex-1 items-baseline gap-2">
          <span className="font-averia text-sm font-bold tracking-wide uppercase">Nombre</span>
          <span className="fill-line" style={{ borderBottom: '1px solid #333' }}>
            &nbsp;
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-averia text-sm font-bold tracking-wide uppercase">Nivel</span>
          <span className="fill-line" style={{ borderBottom: '1px solid #333', minWidth: '30px' }}>
            &nbsp;
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-averia text-sm font-bold tracking-wide uppercase">PX</span>
          <span className="fill-line" style={{ borderBottom: '1px solid #333', minWidth: '30px' }}>
            &nbsp;
          </span>
        </div>
      </div>

      {/* Required level note */}
      <div className="mb-1 text-right">
        <span className="font-averia text-xs text-gray-600 italic">{header.requiredLevel}</span>
      </div>

      {/* Race name lists */}
      <div className="font-averia grid grid-cols-2 gap-x-4 gap-y-0.5 text-xs leading-tight">
        {header.raceNames.map((race) => (
          <div key={race.race}>
            <span className="font-bold uppercase">{race.race}:</span>{' '}
            <span className="italic">{race.names.join(', ')}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
