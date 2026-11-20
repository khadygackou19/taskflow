import { useState, type FormEvent } from 'react';
import type { NewTask, Priority } from '../api/types';
import { priorityLabels } from '../utils/labels';
import { todayISO } from '../utils/dates';

interface TaskFormProps {
  projectId: number;
  onAddTask: (task: NewTask) => void;
}

const priorities: Priority[] = ['LOW', 'MEDIUM', 'HIGH'];

function isPriority(value: string): value is Priority {
  return (priorities as string[]).includes(value);
}

export function TaskForm({ projectId, onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('MEDIUM');
  const [dueDate, setDueDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  
  const titleError =
    title.trim().length < 3 ? 'Le titre doit contenir au moins 3 caractères.' : null;
  const dueDateError =
    dueDate !== '' && dueDate < todayISO() ? "L'échéance ne peut pas être dans le passé." : null;
  const isValid = titleError === null && dueDateError === null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    if (!isValid) return;

    onAddTask({
      projectId,
      title: title.trim(),
      description: description.trim(),
      status: 'TODO',
      priority,
      assigneeId: null,
      dueDate: dueDate === '' ? null : dueDate,
      createdAt: new Date().toISOString(),
    });

    setTitle('');
    setDescription('');
    setPriority('MEDIUM');
    setDueDate('');
    setSubmitted(false);
  }

  const inputClass = 'w-full rounded-md border border-slate-300 px-2 py-1 text-sm';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-2"
    >
      <div className="md:col-span-2">
        <label htmlFor="title" className="block text-sm font-medium text-slate-700">
          Titre *
        </label>
        <input
          id="title"
          className={inputClass}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {submitted && titleError && <p className="mt-1 text-xs text-red-600">{titleError}</p>}
      </div>

      <div className="md:col-span-2">
        <label htmlFor="description" className="block text-sm font-medium text-slate-700">
          Description
        </label>
        <textarea
          id="description"
          rows={2}
          className={inputClass}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="priority" className="block text-sm font-medium text-slate-700">
          Priorité
        </label>
        <select
          id="priority"
          className={inputClass}
          value={priority}
          onChange={(e) => {
            if (isPriority(e.target.value)) setPriority(e.target.value);
          }}
        >
          {priorities.map((p) => (
            <option key={p} value={p}>
              {priorityLabels[p]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="dueDate" className="block text-sm font-medium text-slate-700">
          Échéance
        </label>
        <input
          id="dueDate"
          type="date"
          min={todayISO()}
          className={inputClass}
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        {submitted && dueDateError && <p className="mt-1 text-xs text-red-600">{dueDateError}</p>}
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="rounded-md bg-indigo-700 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-800"
        >
          Ajouter la tâche
        </button>
      </div>
    </form>
  );
}