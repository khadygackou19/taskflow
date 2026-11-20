import type { Task, TaskStatus } from '../api/type';
import { isOverdue } from '../utils/dates';
import { statusLabels } from '../utils/labels';
import { PriorityBadge } from './PriorityBadge';

interface TaskCardProps {
  task: Task;
  onStatusChange: (id: number, status: TaskStatus) => void;
  onDelete: (id: number) => void;
}

const statuses: TaskStatus[] = ['TODO', 'DOING', 'DONE'];

function isStatus(value: string): value is TaskStatus {
  return (statuses as string[]).includes(value);
}

export function TaskCard({ task, onStatusChange, onDelete }: TaskCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-slate-900">{task.title}</h3>
        <PriorityBadge priority={task.priority} />
      </div>
      <p className="mt-1 text-sm text-slate-600">{task.description}</p>
      <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
        <span>{task.dueDate ? `Échéance : ${task.dueDate}` : 'Pas d’échéance'}</span>
        {isOverdue(task) && (
          <span className="rounded-full bg-red-600 px-2 py-0.5 font-medium text-white">
            En retard
          </span>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <select
          aria-label={`Statut de ${task.title}`}
          className="rounded-md border border-slate-300 px-1 py-0.5 text-xs"
          value={task.status}
          onChange={(e) => {
            if (isStatus(e.target.value)) onStatusChange(task.id, e.target.value);
          }}
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {statusLabels[s]}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="text-xs font-medium text-red-600 hover:underline"
        >
          Supprimer
        </button>
      </div>
    </article>
  );
}