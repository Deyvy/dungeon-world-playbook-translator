import type { StatData } from '../data/playbookData';

interface StatBlockProps {
  stat: StatData;
}

export default function StatBlock({ stat }: StatBlockProps) {
  return (
    <div style={{ position: 'relative', paddingBottom: '32px', width: '100%', fontFamily: 'var(--font-averia)' }}>
      {/* Visible rectangle — aspect-ratio keeps the stat block proportionally square */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* White top section with stat name — fixed height */}
        <div
          style={{
            height: '40px',
            background: 'white',
            border: '2px solid #1a1a1a',
            borderBottom: 'none',
            padding: '0 8px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '13px',
              fontWeight: 'bold',
              color: '#1a1a1a',
            }}
          >
            {stat.name}
          </span>
        </div>

        {/* Black bottom band — fixed height */}
        <div
          style={{
            height: '38px',
            background: '#1a1a1a',
            border: '2px solid #1a1a1a',
            borderTop: 'none',
            padding: '4px 8px 8px',
            display: 'flex',
            alignItems: 'flex-start',
            position: 'relative',
          }}
        >
          {/* Circle protrudes DOWN from the black band */}
          <div
            style={{
              width: '60px',
              height: '60px',
              background: 'white',
              border: '3px solid #1a1a1a',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: '10px',
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#1a1a1a',
              position: 'absolute',
              bottom: '-30px',
              left: '6px',
              zIndex: 2,
              boxSizing: 'border-box',
            }}
          >
            {stat.abbr}
          </div>

          {/* Debuff text + checkbox on the right */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginLeft: 'auto',
              marginTop: '1px',
              color: 'white',
              fontSize: '9px',
            }}
          >
            <span>{stat.debuff}</span>
            <div
              style={{
                width: '11px',
                height: '11px',
                background: 'white',
                border: '1px solid #aaa',
                borderRadius: '2px',
                flexShrink: 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
