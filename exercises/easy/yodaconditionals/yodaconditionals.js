// deno-lint-ignore-file
/**
 * The following code has a bug - it believes all numbers are even.
 * Can you identify the error and fix it by changing just a single line?
 */

export const isEven = (n) => {
  let remainder = n % 2;
  if (remainder = 0) {
    return true;
  }

  return false;
};
