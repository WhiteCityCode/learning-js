// Given a number n, your function should return the n'th fibonacci number;
// https://en.wikipedia.org/wiki/Fibonacci_number
// You are not allowed to use arrays.
// Example:
// 3 -> 1
// 9 -> 21

export const fibonacci = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};
