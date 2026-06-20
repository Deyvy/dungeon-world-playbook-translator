import shieldSvg from '../assets/icons/shield.svg';
import heartSvg from '../assets/icons/heart.svg';
import d10Svg from '../assets/icons/d10.svg';

export default function ArmorHPDamage() {
  return (
    <div className="mb-2">
      {/* ARMADURA */}
      <div className="mb-1">
        <div className="section-header flex items-center gap-2">
          <span>Armadura</span>
          <img
            src={shieldSvg}
            alt="shield"
            className="inline-block"
            style={{ width: '14px', height: '14px' }}
          />
        </div>
      </div>

      {/* PUNTOS DE GOLPE */}
      <div className="mb-1">
        <div className="section-header flex items-center gap-2">
          <span>Puntos de Golpe</span>
          <img
            src={heartSvg}
            alt="heart"
            className="inline-block"
            style={{ width: '14px', height: '14px' }}
          />
        </div>
        <div className="font-averia mt-0.5 flex justify-between px-1 text-xs">
          <span className="text-gray-600 italic">Máximos (10+Constitución)</span>
          <span className="text-gray-600 italic">Actuales</span>
        </div>
      </div>

      {/* DAÑO */}
      <div>
        <div className="section-header flex items-center gap-2">
          <span>Daño</span>
          <img
            src={d10Svg}
            alt="d10"
            className="inline-block"
            style={{ width: '18px', height: '18px' }}
          />
        </div>
      </div>
    </div>
  );
}
