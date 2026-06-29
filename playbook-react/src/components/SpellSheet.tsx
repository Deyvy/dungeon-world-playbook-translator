import type { Spell, SpellSection } from '../data/spellsData';
import type { PlaybookData } from '../data/playbookData';
import VerticalBanner from './VerticalBanner';
import { renderParagraphs } from './richTextUtils';

interface SpellSheetProps {
  data: PlaybookData;
}

/** Render de texto para SpellSheet con el mismo renderer compartido de MoveCard,
 *  conservando la apariencia previa (leading-snug, fontSize y padding-left 20px). */
function renderRichText(text: string) {
  return renderParagraphs(text, {
    fontSize: '10px',
    leading: 'leading-tight',
    gapClass: 'mb-0',
    marginLeft: 0,
  });
}

function SpellItem({ spell, markX = false }: { spell: Spell; markX?: boolean }) {
  return (
    <div className="mb-1" style={{ marginTop: '3px' }}>
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
          {markX && '✕'}
        </div>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
            {spell.title}
          </span>
          {spell.levelLabel && /mantenido/i.test(spell.levelLabel) && (
            <div
              style={{ fontSize: '10px', fontStyle: 'italic', color: '#555', marginTop: 0, lineHeight: 1 }}
            >
              Mantenido
            </div>
          )}
        </div>
      </div>

      {/* Cuerpo de la descripción, alineado bajo el título (mismo indent que la checkbox+gap) */}
      <div style={{ margin: '4px 0 0 24px', color: '#6c6e70' }}>
        {spell.description && renderRichText(spell.description)}
        {spell.detailBullets && spell.detailBullets.length > 0 && (
          <ul
            style={{
              fontSize: '10px',
              color: '#6c6e70',
              paddingLeft: '20px',
              margin: '5px 0 5px',
              listStyleType: 'disc',
              lineHeight: 1.25,
            }}
          >
            {spell.detailBullets.map((bullet, i) => (
              <li key={i} style={{ marginBottom: '2px' }}>
                <span dangerouslySetInnerHTML={{ __html: bullet }} />
              </li>
            ))}
          </ul>
        )}
        {spell.postText && (
          <div style={{ margin: '4px 0 0' }}>
            {renderRichText(spell.postText)}
          </div>
        )}
      </div>
    </div>
  );
}

function SpellSectionBlock({ section }: { section: SpellSection }) {
  return (
    <div>
      {/* La cabecera va envuelta en position:relative cuando hay círculo para
          poder sacarlo fuera del clip-path del .section-header. */}
      {section.headerRight === 'casterLevel' ? (
        <div style={{ position: 'relative' }}>
          <div
            className="section-header"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '52px' }}
          >
            <span>{section.header}</span>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                lineHeight: 1.6,
              }}
            >
              Nivel de Conjurador Divino
            </span>
          </div>
          {/* Círculo estilo StatBlock pero más pequeño; dentro de la barra
              negra, con un pequeño margen a la derecha, fondo blanco y borde
              negro. */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: '50%',
              right: '7px',
              transform: 'translateY(-50%)',
              width: '35px',
              height: '35px',
              background: 'white',
              border: '2px solid #1a1a1a',
              borderRadius: '50%',
              zIndex: 5,
              boxSizing: 'border-box',
            }}
          />
        </div>
      ) : (
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{section.header}</span>
        </div>
      )}

      {section.subtext && (
        <div
          style={{ fontSize: '10px', color: '#6c6e70', margin: '2px 0 4px', fontStyle: 'italic' }}
        >
          {renderRichText(section.subtext)}
        </div>
      )}

      <div
        className="grid gap-x-3"
        style={{ gridTemplateColumns: `repeat(${section.columns.length}, 1fr)`, marginTop: '2px' }}
      >
        {section.columns.map((col, ci) => (
          <div key={ci} className="flex flex-col" style={{ gap: '2px' }}>
            {col.map((spell, si) => (
              <SpellItem key={si} spell={spell} markX={section.markX} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SpellSheet({ data }: SpellSheetProps) {
  const spells = data.spells;
  if (!spells) return null;

  // El banner de conjuros usa exactamente el mismo formato que el banner
  // de la ficha (mismo font-size, tipografía y espaciado).
  const label = spells.bannerLabel.toUpperCase();

  const pageStyle: React.CSSProperties = {
    width: '794px',
    minWidth: '794px',
    height: '1123px',
    overflow: 'hidden',
    flexShrink: 0,
    backgroundColor: '#ffffff',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
  };

  const contentStyle: React.CSSProperties = {
    padding: '16px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  };

  const page1ContentStyle: React.CSSProperties = {
    padding: '10px 1px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
  };

  return (
    <>
      {/* Página 1 — barra a la izquierda */}
      <div className="playbook-sheet relative grid mx-auto" style={{ ...pageStyle, gridTemplateColumns: '68px 1fr' }}>
        <VerticalBanner
          meta={data.meta}
          label={label}
        />
        <div style={page1ContentStyle}>
          {spells.page1.map((section, i) => (
            <SpellSectionBlock key={i} section={section} />
          ))}
        </div>
      </div>

      {/* Página 2 — barra a la derecha */}
      <div className="playbook-sheet relative grid mx-auto" style={{ ...pageStyle, gridTemplateColumns: '1fr 68px' }}>
        <div style={contentStyle}>
          {spells.page2.map((section, i) => (
            <SpellSectionBlock key={i} section={section} />
          ))}
        </div>
        <VerticalBanner
          meta={data.meta}
          label={label}
        />
      </div>
    </>
  );
}