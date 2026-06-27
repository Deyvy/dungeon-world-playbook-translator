import type { PlaybookData } from '../data/playbookData';
import VerticalBanner from './VerticalBanner';
import HeaderSection from './HeaderSection';
import AppearanceSection from './AppearanceSection';
import ArmorHPDamage from './ArmorHPDamage';
import AlignmentSection from './AlignmentSection';
import StatsGrid from './StatsGrid';
import BondsSection from './BondsSection';
import MovesSection from './MovesSection';
import MoveCard from './MoveCard';
import RaceSection from './RaceSection';

import backgroundImg from '../assets/background.png';

interface PlaybookSheetProps {
  data: PlaybookData;
}

export default function PlaybookSheet({ data }: PlaybookSheetProps) {
  return (
    <div
      className="playbook-sheet relative grid mx-auto"
      style={{
        gridTemplateColumns: '68px 1fr',
        width: '794px',
        minWidth: '794px',
        minHeight: '1123px',
        overflow: 'hidden',
        flexShrink: 0,
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'top left',
        backgroundColor: '#f5f0e8',
        boxShadow: '0 0 15px rgba(0,0,0,0.2)',
      }}
    >
      {/* Left sidebar — grid row spans full height automatically */}
      <VerticalBanner meta={data.meta} />

      {/* Main content area */}
      <div className="flex flex-col p-3">
        {/* Header section: NOMBRE / NIVEL / PX + race names */}
        <HeaderSection raceNames={data.raceNames} />

        {/* Two-column layout:
            Left (2/3): Apariencia | Armadura on top row, Stats + Moves below
            Right (1/3): Alineamiento → Vínculos → Raza stacked continuously */}
        <div className="grid grid-cols-3 gap-x-2">
          {/* Left column: top row (Apariencia + Armadura) then Stats + Moves below */}
          <div className="col-span-2 flex flex-col gap-y-3">
            <div className="grid grid-cols-2 gap-x-2">
              <AppearanceSection appearance={data.appearance} />
              <ArmorHPDamage hpBase={data.hpBase} damageDie={data.damageDie} />
            </div>
            <StatsGrid
              stats={data.stats}
              statValuesHint={data.statValuesHint}
              statModifiers={data.statModifiers}
            />
            <MovesSection moves={data.moves} />
          </div>

          {/* Right column: Alineamiento + Vínculos + Raza */}
          <div className="col-span-1 flex flex-col">
            <AlignmentSection alignment={data.alignment} />
            <BondsSection bonds={data.bonds} />
            <RaceSection races={data.races} hideExtra={data.hideRaceExtra} />
            {data.extraMove && <MoveCard move={data.extraMove} />}
          </div>
        </div>
      </div>
    </div>
  );
}
