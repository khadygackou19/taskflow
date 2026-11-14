import type { ReactNode } from 'react';

interface ColumnProps {
  title: string;
  count: number;
  children: ReactNode;
}

export function Column({ title, count, children }: ColumnProps) {
  return (
    <section className="flex flex-col gap-3 rounded-xl bg-slate-100 p-3">
      <header className="flex items-center justify-between">
        <h2 className="font-semibold text-slate-800">{title}</h2>
        <span className="rounded-full bg-slate-300 px-2 py-0.5 text-xs font-medium">
          {count}
        </span>
      </header>
      {count === 0 ? (
        <p className="py-6 text-center text-sm italic text-slate-500">Aucune tâche</p>
      ) : (
        children
      )}
    </section>
  );
}