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
      className="playbook-sheet relative grid mx-auto"
      style={{
        gridTemplateColumns: '1fr 68px',
        width: '794px',
        minWidth: '794px',
        minHeight: '1123px',
        overflow: 'hidden',
        flexShrink: 0,
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f5f0e8',
        boxShadow: '0 0 15px rgba(0,0,0,0.2)',
      }}
    >
      {/* Main content area — gear left, moves right */}
      <div className="flex flex-col p-3" style={{ paddingTop: '16px' }}>
        <div className="flex gap-x-2" style={{ flex: 1 }}>
          {/* Left: Gear/Equipment (~30%) */}
          <div style={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
            <GearSection gear={page2.gear} />
          </div>

          {/* Right: Advanced Moves (~70%) */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <AdvancedMovesSection groups={page2.advancedMoves} />
          </div>
        </div>
      </div>

      {/* Right sidebar — full height banner */}
      <VerticalBanner meta={data.meta} />
    </div>
  );
}
