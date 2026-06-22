import PlaybookSheet from './components/PlaybookSheet';
import { guerreroData } from './data/playbooks/guerreroData';

export default function App() {
  return (
    <div className="min-h-screen bg-[#e8e4dc] py-8">
      <PlaybookSheet data={guerreroData} />
    </div>
  );
}
