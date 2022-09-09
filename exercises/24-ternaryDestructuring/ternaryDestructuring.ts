/**
 * Your function takes an argument in the form of a touple and a number n which
 * is 1 or 2. Your task is to return the first item in the touple if n is 1
 * or the second if n is 2. You are not allowed to use if, the array[index]
 * notation or any array.prototype methods.
 *
 *
 * Example:
 *
 */

export const ternaryDestructuring = <T>(s: [T, T], n: number): T => {
  return s[n];
};
