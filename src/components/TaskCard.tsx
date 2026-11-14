import type { Task } from '../api/type';
import { isOverdue } from '../utils/dates';
import { PriorityBadge } from './PriorityBadge';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
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
    </article>
  );
}