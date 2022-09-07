// You are given n, representing a number of chocolates which you arrange in a circle,
// and s, a skip number. You eat he first chocolate, leave the empty wrapper,
// then skip s chocolates and eat another one, leave the wrapper and so on,
// starting from the beggining if you run out of chocolates to skip (remember,
// they are arranged in a circle).
// Calculate how many chocolates you eat before landing on an empty wrapper.
// n and s are always positive integers greater than 0.
// Example:
// chocolateEater(10, 5) -> 2
// chocolateEater(10, 3) -> 10
// chocolateEater(10, 1) -> 10

export const chocolateEater = (n: number, s: number): number => {
  return n * s;
};
