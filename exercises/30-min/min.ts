/**
 * Return the smallest element in the provided array.
 *
 * [1, 2, 10, 17, 4, 5] => 1
 * [0, 0, 0] => 0
 * [-1, -20, 20] => -20
 */

export const min = (arr: number[]): number => {
  return Math.min(...arr) ;
};
