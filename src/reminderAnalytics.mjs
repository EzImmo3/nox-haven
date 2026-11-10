const DAY_MS = 86400000;

function dayDiff(from, to) {
  const a = new Date(`${from}T12:00:00`).getTime();
  const b = new Date(`${to}T12:00:00`).getTime();
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
  return Math.round((b - a) / DAY_MS);
}

/**
 * Build concise, honest reminders from persisted study data only.
 * No reminder is created from an inferred weakness or fabricated activity.
 */
export function buildSmartReminders(data, today) {
  if (!data || typeof today !== 'string') return [];
  const reminders = [];
  const activeIds = new Set((data.subjects ?? []).filter(s => s.active !== false).map(s => s.id));
  const tasks = (data.tasks ?? []).filter(t => activeIds.has(t.subjectId) && !t.completed && /^\d{4}-\d{2}-\d{2}$/.test(t.dueDate));
  const overdueTasks = tasks.filter(t => t.dueDate < today);
  const todayTasks = tasks.filter(t => t.dueDate === today);
  if (overdueTasks.length) reminders.push({
    id: 'overdue-tasks', priority: 1, title: `${overdueTasks.length} tâche(s) en retard`,
    detail: overdueTasks.slice(0, 2).map(t => t.title).join(' · '),
    action: 'Ouvrir le planning', tab: 'planning'
  });
  if (todayTasks.length) reminders.push({
    id: 'today-tasks', priority: 2, title: `${todayTasks.length} tâche(s) prévue(s) aujourd’hui`,
    detail: todayTasks.slice(0, 2).map(t => t.title).join(' · '),
    action: 'Voir le planning', tab: 'planning'
  });

  const dueCards = (data.flashcards ?? []).filter(c => activeIds.has(c.subjectId) && typeof c.dueAt === 'string' && c.dueAt.slice(0, 10) <= today);
  if (dueCards.length) reminders.push({
    id: 'due-cards', priority: 3, title: `${dueCards.length} carte(s) à réviser`,
    detail: 'Les rappels de mémorisation sont arrivés à échéance.',
    action: 'Lancer les révisions', tab: 'revisions'
  });

  const openErrors = (data.errors ?? []).filter(e => activeIds.has(e.subjectId) && e.status !== 'mastered');
  if (openErrors.length) reminders.push({
    id: 'open-errors', priority: 4, title: `${openErrors.length} erreur(s) à retravailler`,
    detail: 'Reprends les erreurs enregistrées pour consolider ta méthode.',
    action: 'Voir les erreurs', tab: 'errors'
  });

  const upcoming = (data.orientation ?? []).filter(o => o.deadline && /^\d{4}-\d{2}-\d{2}$/.test(o.deadline))
    .map(o => ({...o, days: dayDiff(today, o.deadline)}))
    .filter(o => o.days !== null && o.days >= 0 && o.days <= 7 && !['acceptee', 'refusee'].includes(o.status))
    .sort((a,b) => a.days - b.days);
  if (upcoming.length) reminders.push({
    id: 'orientation-deadline', priority: 2,
    title: upcoming[0].days === 0 ? 'Échéance d’orientation aujourd’hui' : `Échéance d’orientation dans ${upcoming[0].days} jour(s)`,
    detail: `${upcoming[0].formation}${upcoming.length > 1 ? ` · ${upcoming.length - 1} autre(s) échéance(s) cette semaine` : ''}`,
    action: 'Voir mon orientation', tab: 'orientation'
  });
  return reminders.sort((a,b) => a.priority - b.priority).slice(0, 5);
}
