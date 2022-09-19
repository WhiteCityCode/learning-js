/**
 * Given a square matrix m, calculate the absolute difference between the sum
 * of it's diagonals.
 * For the matrix [[1, 2, 3], [4, 5, 6], [9, 8, 9]], represented below:
 *
 * 1 2 3
 * 4 5 6
 * 9 8 9
 *
 * The left to right diagonal sum is a = 1 + 5 + 9 = 15
 * because this diagonal is:
 *
 * 1 - -
 * - 5 -
 * - - 9
 *
 * The right to left diagonal sum is b = 3 + 5 + 9 = 17
 * because this diagonal is:
 *
 * - - 3
 * - 5 -
 * 9 - -
 *
 * The absolute difference of a - b is |15 - 17| = | -2 | = 2;
 *
 * Example:
 * [[11, 2, 4], [4,5,6], [10, 8, -12]] -> 15
 */

export const diagonalSum = (m: number[][]): number => {
  return m[42][42];
};
