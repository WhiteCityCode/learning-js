/**
 * Given an array of integers, figure out what is the largest sum of a pair of
 * consecutive integers in the array.
 *
 * For example:
 *
 * [4, 1, 64, 52, 2, 12, 0] => 116 (the sum of neighbours 64 and 52)
 *
 * The tehnique that needs to be used here is called a sliding window. That's
 * because instead of advancing one item at a time, we "slide" over a sequence
 * of items with each iteration of a loop.
 *
 * In our case, specifically:
 *
 * Iteration 1:
 * [4, 1, 64, 52, 2, 12, 0]
 * >----<  We check [4, 1], sum 5
 *
 * Iteration 2:
 * [4, 1, 64, 52, 2, 12, 0]
 *     >----<  We check [1, 64], sum 65
 *
 * Iteration 3:
 * [4, 1, 64, 52, 2, 12, 0]
 *        >----<  We check [64, 52], sum 116
 *
 * [...]
 */

export const slidingSum = (arr: number[]): number => {
  return NaN;
};
