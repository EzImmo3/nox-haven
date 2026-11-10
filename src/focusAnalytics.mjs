const validKey = value => { if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false; const date = new Date(`${value}T12:00:00`); return !Number.isNaN(date.getTime()) && `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}` === value; };

export function summarizeFocusSessions(sessions, todayKey) {
  if (!Array.isArray(sessions) || !validKey(todayKey)) throw new Error('Données de concentration invalides.');
  const end = new Date(`${todayKey}T12:00:00`);
  const start = new Date(end);
  start.setDate(start.getDate() - 6);
  const pad = n => String(n).padStart(2, '0');
  const startKey = `${start.getFullYear()}-${pad(start.getMonth() + 1)}-${pad(start.getDate())}`;
  const focus = sessions.filter(session => session && session.mode === 'focus');
  const week = focus.filter(session => validKey(session.date) && session.date >= startKey && session.date <= todayKey);
  const energyPairs = week.filter(session => Number.isInteger(session.energyBefore) && session.energyBefore >= 1 && session.energyBefore <= 5 && Number.isInteger(session.energyAfter) && session.energyAfter >= 1 && session.energyAfter <= 5);
  return {
    totalSessions: focus.length,
    weekSessions: week,
    weekMinutes: week.reduce((sum, session) => sum + (Number.isInteger(session.durationMinutes) && session.durationMinutes > 0 ? session.durationMinutes : 0), 0),
    energyPairs: energyPairs.length,
    energyDelta: energyPairs.length ? energyPairs.reduce((sum, session) => sum + session.energyAfter - session.energyBefore, 0) / energyPairs.length : null,
    startDate: startKey,
    endDate: todayKey,
  };
}

export function getRecommendedFocusDuration(energy) {
  if (!Number.isInteger(energy) || energy < 1 || energy > 5) return 15;
  if (energy <= 2) return 10;
  if (energy === 3) return 20;
  return 25;
}

export function getFocusEnergyLabel(value) {
  return Number.isInteger(value) && value >= 1 && value <= 5
    ? ['Très basse', 'Basse', 'Moyenne', 'Bonne', 'Très bonne'][value - 1]
    : 'Non renseignée';
}
