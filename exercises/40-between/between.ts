// Your function gets as input an array of length a and 2 positive integers, m and n.
// Your task is to return an array that contains all the elements from index
// m (inclusive) till index n(exclusive);
// You are not allowed to use the javascript .slice() method
// Note: 0 <= m <= n <= a
// Example:
// between([1,2,3], 0, 1) -> [1]
// between([1,2,3], 0, 2) -> [1, 2]

export const between = <T>(arr: T[], m: number, n: number): T[] => {
let sol	= [];
for ( let i = m; i < n; ++i){
	sol.push(arr[i]);
	}
return sol;
};
