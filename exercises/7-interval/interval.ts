/**
 * A function that checks if a value N belongs to a closed interval [a, b]
 * such that:
 *
 * { N ∈ ℝ | a <= x <= b }
 *
 * Example:
 *
 * N = 16
 * [a, b] = [10, 20]
 *
 * Should return true, because 10 <= 16 <= 20.
 */

type Interval = [number, number];

export const closedInterval = (s: number, [a, b]: Interval): boolean => {
  return false;
};

/**
 * A function that checks if a value N belongs to a half-open interval [a, b)
 * such that:
 *
 * { N ∈ ℝ | a <= x < b }
 *
 * Example:
 *
 * N = 20
 * [a, b] = [10, 20]
 *
 * Should return false, because 10 <= 20 < 20 is a false statement.
 */

export const halfOpenInterval = (s: number, [a, b]: Interval): boolean => {
  return false;
};
