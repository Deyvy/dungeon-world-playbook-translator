import type { GearData } from '../data/playbookData';
import SectionHeader from './SectionHeader';

interface GearSectionProps {
  gear: GearData;
}

export default function GearSection({ gear }: GearSectionProps) {
  return (
    <div className="flex flex-col h-full">
      {/* MONEDAS header */}
      <SectionHeader title="🪙 MONEDAS" />

      {/* EQUIPO header */}
      <SectionHeader title="EQUIPO" />

      {/* Carga info row */}
      <div
        className="flex justify-between items-center"
        style={{
          fontSize: '10px',
          color: '#1a1a1a',
          borderBottom: '1px solid #999',
          padding: '4px 0',
          marginBottom: '8px',
        }}
      >
        <span>Carga Máxima (12+FUE)</span>
        <span>Actual</span>
      </div>

      {/* Fixed items */}
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
        style={{ fontSize: '10px', color: '#6c6e70', marginTop: '8px', marginBottom: '4px' }}
        className="italic"
      >
        {gear.defenseGroup.prompt}
      </span>
      {gear.defenseGroup.items.map((item, i) => (
        <div key={i} className="flex items-start gap-2" style={{ marginBottom: '6px' }}>
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
          <span
            style={{ fontSize: '10px', color: '#6c6e70', lineHeight: '1.4' }}
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </div>
      ))}

      {/* Pick-two group */}
      <span
        style={{ fontSize: '10px', color: '#6c6e70', marginTop: '10px', marginBottom: '4px' }}
        className="italic"
      >
        {gear.pickTwoGroup.prompt}
      </span>
      {gear.pickTwoGroup.items.map((item, i) => (
        <div key={i} className="flex items-start gap-2" style={{ marginBottom: '6px' }}>
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
          <span
            style={{ fontSize: '10px', color: '#6c6e70', lineHeight: '1.4' }}
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </div>
      ))}

      {/* Blank fill-in lines (flex-grow to fill space) */}
      <div className="flex flex-col" style={{ marginTop: '20px', flexGrow: 1 }}>
        {Array.from({ length: gear.blankLineCount }).map((_, i) => (
          <div
            key={i}
            style={{
              borderBottom: '1px solid #999',
              height: '22px',
            }}
          />
        ))}
      </div>

      {/* CONSUMIBLES */}
      <SectionHeader title="CONSUMIBLES" />
      <div
        style={{
          fontSize: '1.5em',
          letterSpacing: '5px',
          textAlign: 'center',
          marginTop: '8px',
        }}
      >
        {gear.consumableRows.map((row, i) => (
          <div key={i}>
            {row.emoji.repeat(row.count)}
          </div>
        ))}
      </div>
    </div>
  );
}
