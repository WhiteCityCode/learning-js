/**
 * You decide to remove all of the negativity from your life, including
 * negative integers from arrays passed to your functions.
 *
 * Example:
 *
 * [-1, 2, 5, 0] => [2, 5, 0]
 * [-100, true, false, -20.6] => [true, false, -20.6]
 */

export const zen = (arr: unknown[]): unknown[] => {
/*
console.log(arr);
let sol:unknown[] = [];
for (let x =0; x < arr.length; ++x){
	if(typeof arr[x]  === "number" ) {
		if(arr[x] < 0)
		continue;
		}
	sol.push(x);
	}
*/
	let sol = arr.filter(x => typeof x === "number" && x !== -0  && x >= 0);
return sol;
};
