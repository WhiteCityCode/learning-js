/**
 * Your function takes a number as a parameter and returns "fizz" if it is
 * divisible by 3, "buzz" if it is divisible 5, "fizzbuzz" if it is divisible
 * by both 3 and 5, or the number otherwise. Your task is to write this
 * function in one line without using the if keyword.
 *
 *
 * Example:
 * 3 -> "fizz"
 * 5 -> "buzz"
 * 15 -> "fizzbuzz"
 * 1 -> 1
 */

export const harderFizzbuzz = (s: number): string | number => {
  return (s % 3 === 0 && s % 5 === 0) ? "fizzbuzz" 
  		: (s % 3 === 0 ) ? "fizz"
		: (s % 5 === 0) ? "buzz" : s;
}
