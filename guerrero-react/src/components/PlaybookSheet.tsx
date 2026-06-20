import VerticalBanner from './VerticalBanner';
import HeaderRow from './HeaderRow';
import AppearanceSection from './AppearanceSection';
import ArmorHPDamage from './ArmorHPDamage';
import AlignmentSection from './AlignmentSection';
import StatsGrid from './StatsGrid';
import BondsSection from './BondsSection';
import MovesSection from './MovesSection';
import RaceSection from './RaceSection';
import scissorsSvg from '../assets/icons/scissors.svg';

export default function PlaybookSheet() {
  return (
    <div
      className="playbook-sheet relative mx-auto flex bg-white shadow-lg"
      style={{
        width: '794px' /* ~210mm at 96dpi */,
        minHeight: '1123px' /* ~297mm at 96dpi (A4) */,
      }}
    >
      {/* Left sidebar */}
      <VerticalBanner />

      {/* Main content area */}
      <div className="flex flex-1 flex-col p-3">
        {/* Header row: NOMBRE / NIVEL / PX + race names */}
        <HeaderRow />

        {/* Middle section: Apariencia + Armadura/HP/Daño + Alineamiento */}
        <div className="mb-2 grid grid-cols-3 gap-2">
          <div className="col-span-1">
            <AppearanceSection />
          </div>
          <div className="col-span-1">
            <ArmorHPDamage />
          </div>
          <div className="col-span-1">
            <AlignmentSection />
          </div>
        </div>

        {/* Stats grid */}
        <StatsGrid />

        {/* Two-column layout: Moves (left) + Vínculos + Raza (right) */}
        <div className="grid flex-1 grid-cols-3 gap-2">
          {/* Left: Moves (2 cols) */}
          <div className="col-span-2">
            <MovesSection />
          </div>

          {/* Right: Vínculos + Raza (1 col) */}
          <div className="col-span-1">
            <BondsSection />
            <RaceSection />
          </div>
        </div>

        {/* Scissors icon at bottom left */}
        <div className="absolute bottom-3 left-12">
          <img
            src={scissorsSvg}
            alt="cut"
            style={{ width: '32px', height: '32px', opacity: 0.6 }}
          />
        </div>
      </div>
    </div>
  );
}
