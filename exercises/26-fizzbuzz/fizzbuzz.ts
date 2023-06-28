// You are given a function that takes an argument n, which is a positive
// integer. Your function should return "fizz" if n is divisible by 3,
// "buzz" if it is divisible by 5, or "fizzbuzz" if it is divisible by both
// 3 and 5. Otherwise just return the number;

export const fizzbuzz = (n: number): number | string => {
	if (n % 5 === 0 && n % 3 === 0){
		return "fizzbuzz";
	}
	if (n % 3 === 0){
		return "fizz";
	}
	if (n % 5 === 0){
		return "buzz";
	}
	return n;
};
