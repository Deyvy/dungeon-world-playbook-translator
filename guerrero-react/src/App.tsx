import PlaybookSheet from './components/PlaybookSheet';
import { guerreroData } from './data/playbooks/guerreroData';

export default function App() {
  return (
    <div className="min-h-screen bg-[#e8e4dc] py-8">
      {/* Print / Download button — hidden when printing */}
      <div className="no-print flex justify-center mb-4">
        <button
          onClick={() => window.print()}
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
