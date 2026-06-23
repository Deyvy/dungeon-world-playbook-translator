import type { GearData } from '../data/playbookData';
import SectionHeader from './SectionHeader';
import coinIcon from '../assets/icons/coin-icon.png';
import bagIcon from '../assets/icons/bag-icon.png';

interface GearSectionProps {
  gear: GearData;
}

export default function GearSection({ gear }: GearSectionProps) {
  return (
    <div className="flex flex-col h-full">
      {/* MONEDAS header — coin icon protruding left (like damage die) */}
      <div style={{ position: 'relative', marginBottom: '14px' }}>
        <div className="section-header" style={{ paddingLeft: '56px' }}>
          <span>MONEDAS</span>
        </div>
        <img
          src={coinIcon}
          alt="coin"
          style={{
            position: 'absolute',
            top: '-9px',
            left: '5px',
            height: '2.5em',
            objectFit: 'contain',
            zIndex: 2,
          }}
        />
      </div>

      {/* EQUIPO header — bag icon protruding right (like HP heart) */}
      <div style={{ position: 'relative' }}>
        <div className="section-header" style={{ paddingRight: '110px' }}>
          <span>EQUIPO</span>
        </div>
        <img
          src={bagIcon}
          alt="bag"
          style={{
            position: 'absolute',
            top: '-9px',
            right: '35px',
            height: '2.5em',
            objectFit: 'contain',
            zIndex: 2,
          }}
        />
      </div>

      {/* Carga info row — gap accommodates protruding bag icon */}
      <div
        className="flex items-center"
        style={{
          fontSize: '10px',
          color: '#6c6e70',
          padding: '4px 0 4px 30px',
          marginBottom: '12px',
        }}
      >
        <span style={{ whiteSpace: 'nowrap', flex: 1 }}>Carga Máxima (12+FUE)</span>
        <div style={{ width: '38px', flexShrink: 0 }} />
        <span style={{ whiteSpace: 'nowrap', marginRight: '4px' }}>Actual</span>
      </div>

      {/* Fixed items */}
      <div style={{ paddingLeft: '5px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      {gear.fixedItems.map((item, i) => (
        <p
          key={i}
          style={{ fontSize: '10px', color: '#6c6e70', margin: '0 0 4px' }}
          className="leading-relaxed"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}

      {/* Defense group */}
      <span
        style={{ fontSize: '10px', color: '#6c6e70', marginTop: '4px', marginBottom: '2px' }}
        className="italic"
      >
        {gear.defenseGroup.prompt}
      </span>
      {gear.defenseGroup.items.map((item, i) => (
        <div key={i} className="flex items-start gap-2" style={{ marginBottom: '6px' }}>
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
            style={{ fontSize: '10px', color: '#6c6e70', lineHeight: '1.4' }}
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </div>
      ))}

      {/* Pick-two group */}
      <span
        style={{ fontSize: '10px', color: '#6c6e70', marginTop: '6px', marginBottom: '2px' }}
        className="italic"
      >
        {gear.pickTwoGroup.prompt}
      </span>
      {gear.pickTwoGroup.items.map((item, i) => (
        <div key={i} className="flex items-start gap-2" style={{ marginBottom: '6px' }}>
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
            style={{ fontSize: '10px', color: '#6c6e70', lineHeight: '1.4' }}
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </div>
      ))}

      {/* Blank fill-in lines */}
      <div
        style={{
          marginTop: '4px',
          marginBottom: '4px',
          flexGrow: 1,
          background: `repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 21px,
            #999 21px,
            #999 22px
          )`,
        }}
      />
      </div>

      {/* CONSUMIBLES */}
      <SectionHeader title="CONSUMIBLES" />
      <div
        style={{
          fontSize: '1.2em',
          letterSpacing: '3px',
          textAlign: 'center',
          marginTop: '4px',
          overflow: 'hidden',
        }}
      >
        {gear.consumableRows.map((row, i) => {
          const size = row.iconSize ?? '1.4em';
          const gapMul = row.groupGap ?? 1;
          const spacerW = `calc(${size} * ${gapMul})`;
          const items: React.ReactNode[] = [];
          row.groups.forEach((groupSize, gi) => {
            if (gi > 0) {
              items.push(
                <img
                  key={`sp-${gi}`}
                  src={row.icon}
                  alt=""
                  style={{ width: spacerW, height: size, objectFit: 'contain', visibility: 'hidden' }}
                />,
              );
            }
            for (let j = 0; j < groupSize; j++) {
              items.push(
                <img
                  key={`${gi}-${j}`}
                  src={row.icon}
                  alt=""
                  style={{ width: size, height: size, objectFit: 'contain' }}
                />,
              );
            }
          });
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: row.gap ?? 0,
                marginBottom: '8px',
              }}
            >
              {items}
            </div>
          );
        })}
      </div>
    </div>
  );
}
