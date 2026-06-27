import { useCallback, useEffect, useState } from 'react';
import domtoimage from 'dom-to-image-more';
import { jsPDF } from 'jspdf';
import PlaybookSheet from './components/PlaybookSheet';
import PlaybookSheetPage2 from './components/PlaybookSheetPage2';
import SpellSheet from './components/SpellSheet';
import PlaybookSelector from './components/PlaybookSelector';
import { guerreroData } from './data/playbooks/guerreroData';
import { clerigoData } from './data/playbooks/clerigoData';
import { druidaData } from './data/playbooks/druidaData';
import { ladronData } from './data/playbooks/ladronData';
import { bardoData } from './data/playbooks/bardoData';
import { exploradorData } from './data/playbooks/exploradorData';
import type { PlaybookData } from './data/playbookData';
import landingBg from './assets/DW-background.png';

const playbooks: Record<string, PlaybookData> = {
  guerrero: guerreroData,
  clerigo: clerigoData,
  druida: druidaData,
  ladron: ladronData,
  bardo: bardoData,
  explorador: exploradorData,
};

export default function App() {
  const [selected, setSelected] = useState<string | null>(null);
  const [spellsView, setSpellsView] = useState(false);
  const data = selected ? playbooks[selected] : null;
  const hasSpells = !!(data && data.spells);

  // Selecting a playbook from the dropdown always lands on the regular sheet first.
  const selectPlaybook = useCallback((key: string) => {
    setSelected(key);
    setSpellsView(false);
  }, []);

  // Keep the browser tab title in sync with the selected playbook
  useEffect(() => {
    document.title = data ? `${data.meta.name} — Dungeon World Playbook` : 'Dungeon World Playbook';
  }, [data]);

  const downloadPDF = useCallback(async () => {
    if (!data) return;
    const sheets = document.querySelectorAll<HTMLElement>('.playbook-sheet');
    if (sheets.length === 0) return;

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < sheets.length; i++) {
      const sheet = sheets[i];

      // Page 1 of a regular playbook uses the aged parchment bg; everything else is white.
      const firstPageBgcolor = spellsView ? '#ffffff' : '#f5f0e8';
      const imgData = await domtoimage.toPng(sheet, {
        pixelRatio: 4,
        bgcolor: i === 0 ? firstPageBgcolor : '#ffffff',
        cacheBust: true,
      });

      if (i > 0) {
        pdf.addPage();
      }

      pdf.addImage(imgData, 'PNG', 0, 0, pageW, pageH);
    }

    const className = data.meta.name.replace(/^(El|La|Los|Las)\s+/, '');
    const suffix = spellsView ? ' (Conjuros)' : '';
    pdf.save(`${className}${suffix}.pdf`);
  }, [data, spellsView]);

  // Welcome screen — no playbook selected yet
  if (!data) {
    return (
      <div
        className="flex min-h-screen flex-col items-center justify-center gap-6"
        style={{
          backgroundImage: `url(${landingBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#f5f0e8',
        }}
      >
        <div
          style={{
            position: 'relative',
            top: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <h1 className="font-metamorphous text-3xl" style={{ color: '#211d1e' }}>
            Dungeon World Playbooks
          </h1>
          <PlaybookSelector playbooks={playbooks} selected="" onSelect={selectPlaybook} />
        </div>
      </div>
    );
  }

  const btnStyle: React.CSSProperties = {
  background: '#211d1e',
  color: '#e8e4dc',
  padding: '10px 28px',
  border: 'none',
  borderRadius: '2px',
  clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
};

  return (
    <div className="min-h-screen bg-[#e8e4dc] py-8">
      {/* Playbook selector + Download */}
      <div className="no-print mb-4 flex items-center justify-center gap-4">
        <button
          onClick={() => {
            if (spellsView) {
              setSpellsView(false);
            } else {
              setSelected(null);
              setSpellsView(false);
            }
          }}
          className="font-averia cursor-pointer text-xl font-bold"
          style={{
            background: '#211d1e',
            color: '#e8e4dc',
            padding: '10px 14px',
            border: 'none',
            borderRadius: '2px',
            clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
            lineHeight: 1,
          }}
          title={spellsView ? 'Volver a la ficha' : 'Volver al inicio'}
        >
          ←
        </button>
        <PlaybookSelector playbooks={playbooks} selected={selected!} onSelect={selectPlaybook} />

        {!spellsView && hasSpells && (
          <button
            onClick={() => setSpellsView(true)}
            className="font-averia cursor-pointer text-sm font-bold tracking-wider uppercase"
            style={btnStyle}
          >
            Ver conjuros
          </button>
        )}

        <button
          onClick={downloadPDF}
          className="font-averia cursor-pointer text-sm font-bold tracking-wider uppercase"
          style={btnStyle}
        >
          Descargar PDF
        </button>
      </div>

      {/* Pages stacked vertically */}
      <div className="no-print flex flex-col items-center" style={{ gap: '20px' }}>
        {spellsView && hasSpells ? (
          <SpellSheet data={data} />
        ) : (
          <>
            <PlaybookSheet data={data} />
            {data.page2 && <PlaybookSheetPage2 data={data} />}
          </>
        )}
      </div>
    </div>
  );
}
