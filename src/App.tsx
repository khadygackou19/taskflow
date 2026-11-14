import { Header } from './components/Header';
import { Board } from './components/Board';
import { mockTasks } from './data/mockTasks';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl p-6">
        <Board tasks={mockTasks} />
      </main>
    </div>
  );
}