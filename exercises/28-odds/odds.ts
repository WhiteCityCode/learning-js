/**
 * Return all of the elements of an array
 * at odd positions:
 *
 * [1, 373, 112, 1, 22, 14] => [1, 112, 22]
 */

export const odds = (arr: number[]): number[] => {
	const b = arr.filter((x, idx) => idx % 2 === 0)
	return b;
};

const diff = (a, b) => a - b;

const weird = (fun1, fun2, a, b) => fun1(a,b) - fun2(a, b);
const sumNested = (a, b) => (c) => a + b + c; 

const s = sumNested(1, 2); // (c) => 3 + c
const d = s(3) // 6

const in = {
  text: "dima = true",
  index: 0,
}

letter(in); /* { 
  text: "dima",
  index: 1,
}*/



