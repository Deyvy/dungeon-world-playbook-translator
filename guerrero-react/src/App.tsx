import { useCallback } from 'react';
import { toCanvas } from 'html-to-image';
import { jsPDF } from 'jspdf';
import PlaybookSheet from './components/PlaybookSheet';
import { guerreroData } from './data/playbooks/guerreroData';

export default function App() {
  const downloadPDF = useCallback(async () => {
    const sheet = document.querySelector<HTMLElement>('.playbook-sheet');
    if (!sheet) return;

    const rect = sheet.getBoundingClientRect();

    const canvas = await toCanvas(sheet, {
      pixelRatio: 3,
      backgroundColor: '#f5f0e8',
      width: rect.width,
      height: rect.height,
      canvasWidth: Math.round(rect.width * 3),
      canvasHeight: Math.round(rect.height * 3),
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = (rect.height * pdfW) / rect.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
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

      <PlaybookSheet data={guerreroData} />
    </div>
  );
}
