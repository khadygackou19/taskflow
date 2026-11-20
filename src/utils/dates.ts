import type { Task } from '../api/type';

export function isOverdue(task: Task): boolean {
  if (task.dueDate === null || task.status === 'DONE') return false;
  return new Date(`${task.dueDate}T23:59:59`) < new Date();
}

// Date du jour en local, au format "YYYY-MM-DD"
export function todayISO(): string {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${now.getFullYear()}-${month}-${day}`;
}