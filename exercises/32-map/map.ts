/**
 * Your function receives two parameters, an array and another function.
 * You don't know much about the elements of the array, other than the fact
 * that the function can take any element of the array as a parameter and
 * returns some other value.
 *
 * Return an array that contains the values that result from calling the
 * provided function with each element of the original array.
 *
 * Example:
 *
 * ([1, 2, 3, 4], double) => [2, 4, 6, 8]
 *
 * Where double is defined as:
 *
 * const double = (n) => n*2;
 *
 * Note that you do not need to define an additional function - the above
 * `double` function is just an example.
 */

type Fn<T, U> = (v: T, idx: number) => U;

export const map = <T, U>(arr: T[], fn: Fn<T, U>): U[] => {
  return [];
};
