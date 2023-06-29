/**
 * Implement the JavaScript Array.prototype.filter() method, according
 * to the spec:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

type Fn<T, U = unknown> = (v: T, idx: number) => U;
export const filter = <T>(arr: T[], fn: Fn<T>): T[] => {
//	let arr_cp = Array.from(arr);
	let arr_cpy = []
	for(let i = 0; i < arr.length; ++i){
		if(fn(arr[i], i) ){
			arr_cpy.push(arr[i]);
		}
	}
return arr_cpy;
};
