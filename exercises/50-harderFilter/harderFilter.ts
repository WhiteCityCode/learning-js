/**
 * Your task is to implement the javascript filter function, just like in the
 * previous exercise. This time, you are not allowed to use for, the if
 * keyword or the array.push() function.
 *
 *
 * Example:
 *
 */

type Fn<T, U = unknown> = (v: T, idx: number) => U;
export const harderFilter = <T>(arr: T[], fn: Fn<T>): T[] => {
  return arr;
};
