// You are given a function that takes 2 positive integer arguments, m and n.
// It should return the first value to the power of th second value (m^n).
// Note: please do not use ** operator or Math.power() function
// Example:
// exponent(2,2) -> 4 (2^2)
// exponent(2,3) -> 8 (2^3)
// exponent(3,2) -> 9 (3^2)

export const exponent = (m: number, n: number): number => {
let sol = 1;
for(let i = 0; i < n; i++){
	sol *= m;
}
return sol;
};
