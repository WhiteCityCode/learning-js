/**
 *
 * Your function takes a number n as an argument and returns "even" if it's
 * even or "odd" if it's not.
 * The task is to write the function without using the javascript if keyword
 *
 * Note: check out the ternary operator
 *
 * Example: 2 -> true
 *          3 -> false
 *
 */

export const ternary = (n: number): "even" | "odd" => {
  return n % 2 === 0 ? "even" : "odd";
};
