/**
 * Returns a stable permutation of answer indexes for a question.
 * The correct answer index is never changed: callers map displayed options
 * back to their original indexes before checking the answer.
 * @param {number} length
 * @param {string} seed
 * @returns {number[]}
 */
export function getStableOptionOrder(length, seed) {
  if (!Number.isInteger(length) || length < 0 || length > 20) return [];
  const values = Array.from({ length }, (_, index) => index);
  let state = 2_166_136_261;
  for (const char of String(seed)) {
    state ^= char.charCodeAt(0);
    state = Math.imul(state, 16_777_619) >>> 0;
  }
  // Seeded Fisher–Yates: stable for a given question, varied between questions.
  for (let i = values.length - 1; i > 0; i--) {
    state = (Math.imul(state ^ (state >>> 15), 1_664_525) + 1_013_904_223) >>> 0;
    const j = state % (i + 1);
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}
