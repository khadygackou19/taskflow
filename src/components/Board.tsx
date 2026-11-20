import { useState } from 'react';
import type { NewTask, Task, TaskStatus } from '../api/types';
import { statusLabels } from '../utils/labels';
import { Column } from './Column';
import { TaskCard } from './TaskCard';
import { TaskForm } from './TaskForm';
import { TaskStats } from './TaskStats';

interface BoardProps {
  initialTasks: Task[];
  projectId: number;
}

const statuses: TaskStatus[] = ['TODO', 'DOING', 'DONE'];

export function Board({ initialTasks, projectId }: BoardProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [query, setQuery] = useState('');

  
  const normalizedQuery = query.trim().toLowerCase();
  const visibleTasks = tasks.filter((t) => t.title.toLowerCase().includes(normalizedQuery));

  function handleAddTask(newTask: NewTask) {
    setTasks((prev) => {
      const nextId = prev.reduce((max, t) => Math.max(max, t.id), 0) + 1;
      return [{ ...newTask, id: nextId }, ...prev];
    });
  }

  function handleStatusChange(id: number, status: TaskStatus) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  }

  function handleDeleteTask(id: number) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    if (!window.confirm(`Supprimer la tâche « ${task.title} » ?`)) return;
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="flex flex-col gap-6">
      <TaskStats tasks={tasks} />
      <TaskForm projectId={projectId} onAddTask={handleAddTask} />

      <div>
        <label htmlFor="search" className="sr-only">
          Rechercher une tâche
        </label>
        <input
          id="search"
          type="search"
          placeholder="Rechercher par titre…"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {statuses.map((status) => {
          const columnTasks = visibleTasks.filter((t) => t.status === status);
          return (
            <Column key={status} title={statusLabels[status]} count={columnTasks.length}>
              {columnTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onStatusChange={handleStatusChange}
                  onDelete={handleDeleteTask}
                />
              ))}
            </Column>
          );
        })}
      </div>
    </div>
  );
}