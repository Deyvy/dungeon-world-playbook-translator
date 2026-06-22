import SectionHeader from './SectionHeader';

interface BondsSectionProps {
  bonds: string[];
}

export default function BondsSection({ bonds }: BondsSectionProps) {
  // Replaces underscores in bond text with writable lines
  const renderBond = (bond: string, key: number) => {
    const parts = bond.split(/(_+)/);
    return (
      <p key={key} className="leading-relaxed">
        {parts.map((part, i) =>
          part.startsWith('_') ? (
            <span
              key={i}
              style={{
                display: 'inline-block',
                minWidth: '70px',
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
      </p>
    );
  };

  return (
    <div className="mb-2">
      <SectionHeader title="Vínculos" />
      <div className="font-averia mt-1" style={{ fontSize: '10px', color: '#6c6e70' }}>
        <p className="mb-1 italic">
          Rellena al menos uno de los espacios en blanco con el nombre de uno de tus compañeros:
        </p>
        <div className="space-y-2">
          {bonds.map((bond, i) => renderBond(bond, i))}
        </div>
        {/* Write lines for custom bonds */}
        <div className="mt-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                borderBottom: '1px solid #6c6e70',
                opacity: 0.6,
                height: '1em',
                marginBottom: '7px',
                marginRight: '10px',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
