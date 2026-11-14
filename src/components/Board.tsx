import type { Task, TaskStatus } from '../api/types';
import { Column } from './Column';
import { TaskCard } from './TaskCard';

interface BoardProps {
  tasks: Task[];
}

const columns: { status: TaskStatus; title: string }[] = [
  { status: 'TODO', title: 'À faire' },
  { status: 'DOING', title: 'En cours' },
  { status: 'DONE', title: 'Terminé' },
];

export function Board({ tasks }: BoardProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {columns.map(({ status, title }) => {
        const columnTasks = tasks.filter((t) => t.status === status);
        return (
          <Column key={status} title={title} count={columnTasks.length}>
            {columnTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </Column>
        );
      })}
    </div>
  );
}