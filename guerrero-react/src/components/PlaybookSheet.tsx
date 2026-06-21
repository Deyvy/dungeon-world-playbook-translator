import VerticalBanner from './VerticalBanner';
import HeaderSection from './HeaderSection';
import AppearanceSection from './AppearanceSection';
import ArmorHPDamage from './ArmorHPDamage';
import AlignmentSection from './AlignmentSection';
import StatsGrid from './StatsGrid';
import BondsSection from './BondsSection';
import MovesSection from './MovesSection';
import RaceSection from './RaceSection';

import backgroundImg from '../assets/background.png';

export default function PlaybookSheet() {
  return (
    <div
      className="playbook-sheet relative mx-auto grid shadow-lg"
      style={{
        gridTemplateColumns: '68px 1fr',
        width: '794px' /* ~210mm at 96dpi */,
        minHeight: '1123px' /* ~297mm at 96dpi (A4) */,
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f5f0e8',
      }}
    >
      {/* Left sidebar — grid row spans full height automatically */}
      <VerticalBanner />

      {/* Main content area */}
      <div className="flex flex-col p-3">
        {/* Header section: NOMBRE / NIVEL / PX + race names */}
        <HeaderSection />

        {/* Two-column layout:
            Left (2/3): Apariencia | Armadura on top row, Stats + Moves below
            Right (1/3): Alineamiento → Vínculos → Raza stacked continuously */}
        <div className="grid grid-cols-3 gap-x-2">
          {/* Left column: top row (Apariencia + Armadura) then Stats + Moves below */}
          <div className="col-span-2 flex flex-col gap-y-3">
            <div className="grid grid-cols-2 gap-x-2">
              <AppearanceSection />
              <ArmorHPDamage />
            </div>
            <StatsGrid />
            <MovesSection />
          </div>

          {/* Right column: Alineamiento + Vínculos + Raza */}
          <div className="col-span-1 flex flex-col">
            <AlignmentSection />
            <BondsSection />
            <RaceSection />
          </div>
        </div>
      </div>
    </div>
  );
}
