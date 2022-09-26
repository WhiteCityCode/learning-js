/**
 *
 * Starting with a 1 indexed array arr of zeroes of length n,
 * and a list of queries of the form [a,b,k], for each query
 * add k to all indices of arr in the inclusive range [a..b]
 * and return the maximum value present in the resulting array
 *
 *
 * Example:
 * n = 10, queries = [[1,5,3],[4,8,7],[6,9,1]] -> 10
 *
 * Explanation:
 * n = 10, so we have a 1 indexed array of length 10
 * index ->  1  2  3  4   5   6  7  8  9  10
 *
 *          [0, 0, 0, 0,  0,  0, 0, 0, 0, 0]          [1,5,3]
 *
 *          [3, 3, 3, 3,  3,  0, 0, 0, 0, 0]          [4,8,7]
 *
 *          [3, 3, 3, 10, 10, 7, 7, 7, 0, 0]          [6,9,1]
 *
 *          [3, 3, 3, 10, 10, 8, 8, 8, 1, 0]
 *
 * max = 10
 */

type Query = [number, number, number];

export const arrayManipulation = (n: number, queries: Query[]): number => {
  return n;
};
