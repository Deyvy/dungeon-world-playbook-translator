interface HeaderSectionProps {
  raceNames?: { race: string; names: string[] }[];
}

export default function HeaderSection({ raceNames }: HeaderSectionProps) {
  return (
    <div className="mb-3">
      {/* Main header row with required level note aligned to PX box */}
      <div className="relative">
        {/* Required level note - aligned with PX box right edge, small margin above */}
        <div className="absolute right-0" style={{ top: '-4px' }}>
          <span className="font-averia text-[10px] text-gray-500 italic">
            Necesarios: Nivel+7
          </span>
        </div>

        {/* NOMBRE box | gap | NIVEL + circle | gap | PX box */}
        <div className="flex items-center gap-4 pt-4">
          {/* NOMBRE box - white background, label only */}
          <div
            className="flex items-baseline rounded-sm px-3 py-1"
            style={{ backgroundColor: '#ffffff', flex: '0 1 65%' }}
          >
            <span className="font-averia text-base font-bold tracking-wide uppercase text-grunge-black whitespace-nowrap">
              Nombre
            </span>
          </div>

          {/* NIVEL label + circle - larger circle, no border */}
          <div className="flex items-center gap-2">
            <span className="font-averia text-base font-bold tracking-wide uppercase text-grunge-black whitespace-nowrap">
              Nivel
            </span>
            <div
              className="rounded-full bg-white"
              style={{ width: '36px', height: '36px' }}
            ></div>
          </div>

          {/* PX box - white background, label only */}
          <div
            className="flex items-baseline rounded-sm px-3 py-1"
            style={{ backgroundColor: '#ffffff', flex: '0 0 18%' }}
          >
            <span className="font-averia text-base font-bold tracking-wide uppercase text-grunge-black whitespace-nowrap">
              PX
            </span>
          </div>
        </div>
      </div>

      {/* Race name lists below the header — only render when playbook provides them */}
      {raceNames && raceNames.length > 0 && (
        <div className="mt-2 font-averia grid grid-cols-2 gap-x-4 gap-y-1 leading-tight" style={{ color: '#6c6e70', fontSize: '9px' }}>
          {raceNames.map((race) => (
            <div key={race.race}>
              <span className="font-bold uppercase">{race.race}:</span>{' '}
              <span className="italic">{race.names.join(', ')}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
