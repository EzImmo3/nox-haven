import type { RevisionTask, Subject } from './types';

const CRLF = '\r\n';

/** Escape text values according to RFC 5545 TEXT rules. */
export function calendarEscape(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\r\n|\r|\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;');
}

/** Fold content lines at 75 UTF-8 octets, never splitting a code point. */
export function foldCalendarLine(line: string): string {
  const chunks: string[] = [];
  let current = '';
  let octets = 0;
  for (const character of line) {
    const size = new TextEncoder().encode(character).length;
    if (octets + size > 75 && current) {
      chunks.push(current);
      current = ` ${character}`;
      octets = 1 + size;
    } else {
      current += character;
      octets += size;
    }
  }
  if (current || !chunks.length) chunks.push(current);
  return chunks.join(CRLF);
}

export function addCalendarDay(dateKey: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateKey);
  if (!match) throw new Error('Date de séance invalide.');
  const [, yearText, monthText, dayText] = match;
  const year = Number(yearText), month = Number(monthText), day = Number(dayText);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
    throw new Error('Date de séance invalide.');
  }
  date.setUTCDate(date.getUTCDate() + 1);
  return `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, '0')}${String(date.getUTCDate()).padStart(2, '0')}`;
}

export function buildCalendarFile(tasks: RevisionTask[], subjects: Subject[], now = new Date()): string {
  const stamp = now.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const lines = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//StudyFlow//Planning//FR',
    'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
  ];
  for (const task of tasks) {
    if (!task.id.trim() || !task.title.trim() || !Number.isFinite(task.durationMinutes) || task.durationMinutes <= 0) continue;
    let endDate: string;
    try { endDate = addCalendarDay(task.dueDate); } catch { continue; }
    const subject = subjects.find(item => item.id === task.subjectId)?.name ?? 'Matière inconnue';
    const description = `${subject} · ${task.chapter || 'Sans chapitre'} · ${task.durationMinutes} min · ${task.completed ? 'Terminée' : 'À faire'}`;
    const safeId = task.id.replace(/[^a-zA-Z0-9._-]/g, '-').slice(0, 120) || 'session';
    lines.push(
      'BEGIN:VEVENT',
      `UID:${safeId}@studyflow.local`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${task.dueDate.replace(/-/g, '')}`,
      `DTEND;VALUE=DATE:${endDate}`,
      `SUMMARY:${calendarEscape(task.title)}`,
      `DESCRIPTION:${calendarEscape(description)}`,
      'STATUS:CONFIRMED',
      `X-STUDYFLOW-COMPLETED:${task.completed ? 'TRUE' : 'FALSE'}`,
      'END:VEVENT',
    );
  }
  lines.push('END:VCALENDAR', '');
  return lines.map(foldCalendarLine).join(CRLF);
}
