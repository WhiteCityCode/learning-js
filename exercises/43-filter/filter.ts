/**
 * Implement the JavaScript Array.prototype.filter() method, according
 * to the spec:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

type Fn<T, U = unknown> = (v: T, idx: number) => U;
export const filter = <T>(arr: T[], fn: Fn<T>): T[] => {
  return arr;
};
