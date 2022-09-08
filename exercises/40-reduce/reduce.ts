/**
 *
 * implement the javascript Array.protoype.reduce() function according to the
 * spec:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 *
 */

type Fn<P, T> = (acc: P, it: T, idx: number, arr: T[]) => P;
export const reduce = <T, P>(arr: T[], fn: Fn<P, T>, initialValue: P): P => {
  return initialValue;
};
