import type { PlaybookData } from '../data/playbookData';
import VerticalBanner from './VerticalBanner';
import GearSection from './GearSection';
import AdvancedMovesSection from './AdvancedMovesSection';

import backgroundImg from '../assets/background.png';

interface PlaybookSheetPage2Props {
  data: PlaybookData;
}

export default function PlaybookSheetPage2({ data }: PlaybookSheetPage2Props) {
  const page2 = data.page2;
  if (!page2) return null;

  return (
    <div
      className="playbook-sheet relative mx-auto flex shadow-lg"
      style={{
        width: '1000px',
        minHeight: '1400px',
        gap: '20px',
        padding: '20px',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f5f0e8',
      }}
    >
      {/* Left column: Gear (28%) */}
      <div
        style={{
          width: '28%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <GearSection gear={page2.gear} />
      </div>

      {/* Center column: Advanced Moves (62%) */}
      <div
        style={{
          width: '62%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AdvancedMovesSection groups={page2.advancedMoves} />
      </div>

      {/* Right column: Vertical Banner (10%) */}
      <div style={{ width: '10%' }}>
        <VerticalBanner meta={data.meta} />
      </div>
    </div>
  );
}
