import { useCallback, useState } from 'react';
import domtoimage from 'dom-to-image-more';
import { jsPDF } from 'jspdf';
import PlaybookSheet from './components/PlaybookSheet';
import PlaybookSheetPage2 from './components/PlaybookSheetPage2';
import PlaybookSelector from './components/PlaybookSelector';
import { guerreroData } from './data/playbooks/guerreroData';
import { clerigoData } from './data/playbooks/clerigoData';
import type { PlaybookData } from './data/playbookData';

const playbooks: Record<string, PlaybookData> = {
  guerrero: guerreroData,
  clerigo: clerigoData,
};

export default function App() {
  const [selected, setSelected] = useState('guerrero');
  const data = playbooks[selected];

  const downloadPDF = useCallback(async () => {
    const sheets = document.querySelectorAll<HTMLElement>('.playbook-sheet');
    if (sheets.length === 0) return;

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < sheets.length; i++) {
      const sheet = sheets[i];

      const imgData = await domtoimage.toPng(sheet, {
        pixelRatio: 4,
        bgcolor: '#f5f0e8',
        cacheBust: true,
      });

      if (i > 0) {
        pdf.addPage();
      }

      pdf.addImage(imgData, 'PNG', 0, 0, pageW, pageH);
    }

    pdf.save(`${data.meta.name.toLowerCase().replace(/\s+/g, '-')}.pdf`);
  }, [data]);

  return (
    <div className="min-h-screen bg-[#e8e4dc] py-8">
      {/* Playbook selector + Download */}
      <div className="no-print flex justify-center items-center gap-4 mb-4">
        <PlaybookSelector
          playbooks={playbooks}
          selected={selected}
          onSelect={setSelected}
        />
        <button
          onClick={downloadPDF}
          className="font-averia font-bold text-sm uppercase tracking-wider cursor-pointer"
          style={{
            background: '#211d1e',
            color: '#e8e4dc',
            padding: '10px 28px',
            border: 'none',
            borderRadius: '2px',
            clipPath:
              'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
          }}
        >
          Descargar PDF
        </button>
      </div>

      {/* Pages stacked vertically */}
      <div
        className="flex flex-col items-center no-print"
        style={{ gap: '20px' }}
      >
        <PlaybookSheet data={data} />
        {data.page2 && <PlaybookSheetPage2 data={data} />}
      </div>
    </div>
  );
}
