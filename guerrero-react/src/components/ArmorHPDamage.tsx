import armorIcon from '../assets/icons/armor-icon.png';
import lifeIcon from '../assets/icons/life-icon.png';
import { DIE_ICONS } from '../data/dieIcons';
import type { DamageDie } from '../data/dieIcons';

interface ArmorHPDamageProps {
  hpBase: number;
  damageDie: DamageDie;
}

export default function ArmorHPDamage({ hpBase, damageDie }: ArmorHPDamageProps) {
  const dieIcon = DIE_ICONS[damageDie];

  // Shared icon style for armor and life — centered on header, right side
  const iconStyle = {
    position: 'absolute' as const,
    top: '-9px',
    right: '45px',
    height: '45px',
    objectFit: 'contain' as const,
    zIndex: 2,
  };

  return (
    <div>
      {/* ARMADURA */}
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <div className="section-header" style={{ paddingRight: '130px' }}>
          <span>Armadura</span>
        </div>
        <img src={armorIcon} alt="armor" style={iconStyle} />
      </div>

      {/* PUNTOS DE GOLPE */}
      <div style={{ position: 'relative', marginBottom: '16px' }}>
        <div className="section-header" style={{ paddingRight: '130px', whiteSpace: 'nowrap' }}>
          <span>Puntos de Golpe</span>
        </div>
        <img src={lifeIcon} alt="life" style={{ ...iconStyle, right: '40px' }} />
        {/* Content: Máximos takes left, Actuales right, 120px gap for heart protrusion */}
        <div
          className="font-averia flex items-center"
          style={{ marginTop: '4px', padding: '0 8px', fontSize: '9px' }}
        >
          <span className="italic" style={{ color: '#6c6e70', paddingLeft: '10px', whiteSpace: 'nowrap', flex: 1 }}>
            Máximos ({hpBase}+Constitución)
          </span>
          {/* Gap where the heart icon bottom protrudes */}
          <div style={{ width: '60px', flexShrink: 0 }} />
          <span className="italic" style={{ color: '#6c6e70', whiteSpace: 'nowrap' }}>Actuales</span>
        </div>
      </div>

      {/* DAÑO */}
      <div style={{ position: 'relative' }}>
        <div className="section-header" style={{ whiteSpace: 'nowrap' }}>
          <div className="flex items-center gap-1">
            <span style={{ color: 'white', marginRight: '35px' }}>Daño</span>
            <div
              style={{
                width: '40px',
                height: '20px',
                borderRadius: '3px',
                background: 'white',
                flexShrink: 0,
              }}
            />
            <span style={{ color: 'white' }}>+</span>
            {/* Spacer for the icon — reserves horizontal space */}
            <div style={{ width: '45px', flexShrink: 0 }} />
            {/* Push remaining content to the right edge */}
            <span style={{ color: 'white', marginLeft: 'auto' }}>+</span>
            <div
              style={{
                width: '24px',
                height: '20px',
                borderRadius: '3px',
                background: 'white',
                flexShrink: 0,
              }}
            />
          </div>
        </div>
        {/* Icon on parent div — avoids clip-path clipping, protrudes like other icons */}
        <img
          src={dieIcon}
          alt={damageDie}
          style={{
            position: 'absolute',
            top: '-9px',
            left: '138px',
            height: '40px',
            objectFit: 'contain',
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
}
