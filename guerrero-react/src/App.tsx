import { useCallback } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import PlaybookSheet from './components/PlaybookSheet';
import { guerreroData } from './data/playbooks/guerreroData';

export default function App() {
  const downloadPDF = useCallback(async () => {
    const sheet = document.querySelector<HTMLElement>('.playbook-sheet');
    if (!sheet) return;

    const canvas = await html2canvas(sheet, {
      scale: 3,
      useCORS: true,
      backgroundColor: '#f5f0e8',
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = (canvas.height * pdfW) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
    pdf.save(`${guerreroData.meta.name.toLowerCase().replace(/\s+/g, '-')}-ficha.pdf`);
  }, []);

  return (
    <div className="min-h-screen bg-[#e8e4dc] py-8">
      {/* Download button — hidden when printing (kept for the print-a11y case) */}
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
