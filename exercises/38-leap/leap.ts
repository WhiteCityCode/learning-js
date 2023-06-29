/**
 * Return a list of the next `n` leap years.
 *
 * Example:
 * n = 2 -> [2024, 2028]
 */

export const leap = (n: number): number[] => {
 let sol = [];
 for(let i = 0; i < n; ++i){
	sol.push(2024 + i*4);
	 }
  return sol;
};
