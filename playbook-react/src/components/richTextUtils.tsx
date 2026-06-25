import { Fragment } from 'react';
import type { CSSProperties } from 'react';

export interface RenderParagraphsOpts {
  /** Tamaño de fuente aplicado a cada <p>. Si se omite, no se inlinea font-size. */
  fontSize?: string;
  /** Tamaño de línea: 'leading-none' (por defecto), 'leading-tight' o 'leading-snug'. */
  leading?: 'leading-none' | 'leading-tight' | 'leading-snug';
  /** Clase aplicada a cada <p> salvo al último. Por defecto 'mb-1'. */
  gapClass?: string;
  /** Padding-left opcional de cada <p>. */
  marginLeft?: number | string;
}

/** Renderiza texto con soporte para:
 *  - Párrafos separados por `\n\n`
 *  - Saltos de línea dentro de un párrafo con `\n`
 *  - Grupos de guiones bajos (`___…`) convertidos a líneas de relleno
 *  - HTML básico inyectado mediante dangerouslySetInnerHTML en el resto
 *
 *  Compartido por MoveCard y SpellItem para garantizar un renderer único y
 *  consistente entre movimientos y conjuros, manteniendo las diferencias
 *  intencionadas (tamaño de fuente, checkbox, levelLabel, etc.) en cada
 *  componente.
 */
export function renderParagraphs(text: string, opts: RenderParagraphsOpts = {}) {
  const {
    fontSize,
    leading = 'leading-none',
    gapClass = 'mb-1',
    marginLeft,
  } = opts;

  return text
    .split('\n\n')
    .filter(Boolean)
    .map((para, pi, arr) => {
      const gap = arr.length > 1 && pi < arr.length - 1;
      const paragraphStyle: CSSProperties = {
        fontSize,
        marginLeft: marginLeft,
      };
      return (
        <p key={pi} className={gap ? `${leading} ${gapClass}` : leading} style={paragraphStyle}>
          {para.split('\n').map((line, li) => (
            <Fragment key={li}>
              {li > 0 && <br />}
              {line.split(/(_+)/).map((part, i) =>
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
                  <span key={i} dangerouslySetInnerHTML={{ __html: part }} />
                ),
              )}
            </Fragment>
          ))}
        </p>
      );
    });
}