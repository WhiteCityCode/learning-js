// Given a number n, return an array that contains all the powers of 2 up
// to n.
// Example:
// n = 2 -> [2, 4]
// n = 3 -> [2, 4, 8]

export const powersOf2 = (n: number): number[] => {
  let sol = [];
  for(let i = 1; i <= n; ++i){
	sol.push(2**i)
	  }
  return sol;
};
