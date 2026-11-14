import type { Task } from '../api/types';

export function isOverdue(task: Task): boolean {
  if (task.dueDate === null || task.status === 'DONE') return false;
  // fin de journée de l'échéance : une tâche due aujourd'hui n'est pas encore en retard
  return new Date(`${task.dueDate}T23:59:59`) < new Date();
}