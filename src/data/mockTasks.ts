import type { Task } from '../api/type';

export const mockTasks: Task[] = [
  { id: 1, projectId: 1, title: 'Maquetter la page de connexion', description: 'Formulaire email + mot de passe.', status: 'TODO', priority: 'HIGH', assigneeId: 1, dueDate: '2026-10-20', createdAt: '2026-10-01T09:00:00Z' },
  { id: 2, projectId: 1, title: 'Définir les types partagés', description: 'Task, Project, User, Comment.', status: 'TODO', priority: 'MEDIUM', assigneeId: 2, dueDate: '2026-12-15', createdAt: '2026-10-02T10:30:00Z' },
  { id: 3, projectId: 1, title: 'Rédiger le README', description: 'Installation, scripts, captures.', status: 'TODO', priority: 'LOW', assigneeId: null, dueDate: null, createdAt: '2026-10-03T08:15:00Z' },
  { id: 4, projectId: 1, title: 'Créer le composant Board', description: 'Trois colonnes avec compteurs.', status: 'DOING', priority: 'HIGH', assigneeId: 1, dueDate: '2026-11-05', createdAt: '2026-10-04T14:00:00Z' },
  { id: 5, projectId: 1, title: 'Configurer Tailwind v4', description: 'Plugin Vite et import CSS.', status: 'DOING', priority: 'MEDIUM', assigneeId: 3, dueDate: '2026-12-01', createdAt: '2026-10-05T11:20:00Z' },
  { id: 6, projectId: 1, title: 'Styliser les cartes', description: 'Badges de priorité et d’échéance.', status: 'DOING', priority: 'LOW', assigneeId: 2, dueDate: '2026-12-20', createdAt: '2026-10-06T16:45:00Z' },
  { id: 7, projectId: 1, title: 'Initialiser le dépôt Git', description: 'Premier commit poussé.', status: 'DONE', priority: 'MEDIUM', assigneeId: 1, dueDate: '2026-10-10', createdAt: '2026-10-07T09:10:00Z' },
  { id: 8, projectId: 1, title: 'Créer le projet Vite', description: 'Template react-ts.', status: 'DONE', priority: 'HIGH', assigneeId: 1, dueDate: '2026-10-01', createdAt: '2026-10-08T13:00:00Z' },
];