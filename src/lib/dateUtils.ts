/**
 * Timezone-aware Date Utilities for PrepPath
 * 
 * Guarantees date accuracy across timezones (defaulting to 'Asia/Kolkata')
 * and eliminates UTC conversion day-shift errors.
 */

export const DEFAULT_TIMEZONE = 'Asia/Kolkata';

/**
 * Returns a standardized YYYY-MM-DD date string computed in the target timezone.
 */
export function getLocalDateString(inputDate?: Date | string | null, timeZone: string = DEFAULT_TIMEZONE): string {
  if (!inputDate) {
    inputDate = new Date();
  }
  const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
  if (isNaN(date.getTime())) {
    return new Date().toISOString().split('T')[0];
  }

  try {
    // en-CA outputs ISO-8601 YYYY-MM-DD format
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: timeZone || DEFAULT_TIMEZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    return formatter.format(date);
  } catch {
    return date.toISOString().split('T')[0];
  }
}

/**
 * Calculates remaining preparation days between current date and exam date.
 * Rule: Inclusive calendar day calculation:
 * - If today is Nov 1 and exam is Nov 10, remaining days = 10 days (Nov 1 through Nov 10).
 * - If exam date equals today, remaining days = 1 day.
 * - If exam date is in the past, remaining days = 0.
 */
export function calculateRemainingPreparationDays(examDateStr: string, currentDateStr: string): number {
  if (!examDateStr || !currentDateStr) return 0;

  const current = new Date(`${currentDateStr}T00:00:00Z`);
  const exam = new Date(`${examDateStr}T00:00:00Z`);

  if (isNaN(current.getTime()) || isNaN(exam.getTime())) return 0;

  const diffMs = exam.getTime() - current.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return 0;
  return diffDays + 1; // Inclusive: includes current day and exam day
}

/**
 * Safely adds calendar days to an ISO YYYY-MM-DD string.
 */
export function addCalendarDays(dateStr: string, daysToAdd: number): string {
  const date = new Date(`${dateStr}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + daysToAdd);
  return date.toISOString().split('T')[0];
}

/**
 * Human-friendly date display string.
 */
export function formatDateDisplay(dateStr?: string, timeZone: string = DEFAULT_TIMEZONE): string {
  if (!dateStr) return '';
  const date = new Date(`${dateStr}T00:00:00Z`);
  if (isNaN(date.getTime())) return dateStr;

  try {
    return new Intl.DateTimeFormat('en-IN', {
      timeZone: timeZone || DEFAULT_TIMEZONE,
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  } catch {
    return dateStr;
  }
}
