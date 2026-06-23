import { useCallback } from 'react';
import domtoimage from 'dom-to-image-more';
import { jsPDF } from 'jspdf';
import PlaybookSheet from './components/PlaybookSheet';
import PlaybookSheetPage2 from './components/PlaybookSheetPage2';
import { guerreroData } from './data/playbooks/guerreroData';

export default function App() {
  const downloadPDF = useCallback(async () => {
    const sheets = document.querySelectorAll<HTMLElement>('.playbook-sheet');
    if (sheets.length === 0) return;

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfW = pdf.internal.pageSize.getWidth();

    for (let i = 0; i < sheets.length; i++) {
      const sheet = sheets[i];
      const rect = sheet.getBoundingClientRect();

      const imgData = await domtoimage.toPng(sheet, {
        width: rect.width,
        height: rect.height,
        pixelRatio: 4,
        bgcolor: '#f5f0e8',
        cacheBust: true,
      });

      if (i > 0) {
        pdf.addPage();
      }

      const pdfH = (rect.height * pdfW) / rect.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
    }

    pdf.save(`${guerreroData.meta.name.toLowerCase().replace(/\s+/g, '-')}-ficha.pdf`);
  }, []);

  return (
    <div className="min-h-screen bg-[#e8e4dc] py-8">
      {/* Download button */}
      <div className="no-print flex justify-center mb-4">
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

      {/* Pages side by side */}
      <div
        className="flex justify-center items-start no-print"
        style={{ gap: '20px' }}
      >
        <PlaybookSheet data={guerreroData} />
        <PlaybookSheetPage2 data={guerreroData} />
      </div>
    </div>
  );
}
