/**
 * Given a number array `arr`, return
 * the sum of it's members:
 *
 * [1, 4, 5] => 10
 * [0, 0, 1] => 1
 */

export const sum = (arr: number[]): number => {
	let sum = 0;
	arr.map(x => sum += x);
	return sum;
};
