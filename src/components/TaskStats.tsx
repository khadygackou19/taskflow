import type { Task } from '../api/type';
import { isOverdue } from '../utils/dates';

interface TaskStatsProps {
  tasks: Task[];
}

export function TaskStats({ tasks }: TaskStatsProps) {
  const total = tasks.length;
  const done = tasks.filter((t) => t.status === 'DONE').length;
  const overdue = tasks.filter(isOverdue).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  const items = [
    { label: 'Total', value: String(total) },
    { label: 'Terminées', value: String(done) },
    { label: 'Avancement', value: `${percent} %` },
    { label: 'En retard', value: String(overdue) },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {items.map(({ label, value }) => (
        <div key={label} className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
          <p className="text-2xl font-bold text-slate-900">{value}</p>
          <p className="text-xs text-slate-500">{label}</p>
        </div>
      ))}
    </div>
  );
}