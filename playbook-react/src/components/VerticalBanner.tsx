import dwIcon from '../assets/icons/dw-icon.png';

interface VerticalBannerProps {
  meta: { name: string; classIcon: string };
  /** Etiqueta vertical opcional (por defecto el nombre de la clase). */
  label?: string;
  /** Tamaño de fuente opcional para la etiqueta (px). Por defecto 54. */
  labelFontSize?: number;
}

export default function VerticalBanner({ meta, label, labelFontSize = 54 }: VerticalBannerProps) {
  const text = label ?? meta.name.toUpperCase();
  return (
    <div
      className="relative flex flex-col items-center overflow-hidden h-full"
      style={{
        width: '68px',
      }}
    >
      {/* DW icon at top — absolute, floats above the top bar */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
        style={{ paddingTop: '20px' }}
      >
        <img
          src={dwIcon}
          alt="Dungeon World"
          style={{ width: '52px', height: 'auto', opacity: 0.9 }}
        />
      </div>

      {/* Class icon at bottom — absolute, floats below the bottom bar */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
        style={{ paddingBottom: '20px' }}
      >
        <img
          src={meta.classIcon}
          alt="Class"
          style={{ width: '56px', height: 'auto', maxHeight: '140px', opacity: 0.9, objectFit: 'contain' }}
        />
      </div>

      {/* Full-height flex column — extends to bottom of page */}
      <div
        className="flex flex-col w-full h-full"
        style={{ padding: '0 6px' }}
      >
        {/* Top bar — ends where "Apariencia" section header ends (~150px from top) */}
        <div
          className="flex-shrink-0"
          style={{
            height: '150px',
            background: '#211d1e',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 8px), 50% 100%, 0% calc(100% - 8px))',
          }}
        />

        {/* Class name — centered between top and bottom bar */}
        <div
          className="flex items-center justify-center"
          style={{ background: 'transparent', padding: '16px 6px' }}
        >
          <span
            className="font-metamorphous whitespace-nowrap text-grunge-black"
            style={{
              writingMode: 'vertical-lr',
              transform: 'rotate(180deg)',
              fontSize: `${labelFontSize}px`,
              letterSpacing: '0.12em',
              fontWeight: 400,
            }}
          >
            {text}
          </span>
        </div>

        {/* Bottom bar — fills ALL remaining space to the bottom of the page */}
        <div
          className="flex-1"
          style={{
            background: '#211d1e',
            clipPath: 'polygon(0% 8px, 50% 0%, 100% 8px, 100% 100%, 0% 100%)',
          }}
        />
      </div>
    </div>
  );
}
