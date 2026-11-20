import type { Priority, TaskStatus } from '../api/type';

export const statusLabels: Record<TaskStatus, string> = {
  TODO: 'À faire',
  DOING: 'En cours',
  DONE: 'Terminé',
};

export const priorityLabels: Record<Priority, string> = {
  LOW: 'Basse',
  MEDIUM: 'Moyenne',
  HIGH: 'Haute',
};