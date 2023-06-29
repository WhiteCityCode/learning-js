// Given a Number, return an array containing the it's binary representation.
// the numbers received will always be greater than 0;
//Example:
// 4 -> [1,0,0]

export const toBinary = (n: number): number[] => {
//  return parseInt(n.toString(10), 2).toString(2).split('').map(x => parseInt(x, 10));
let sol = [];
if (n === 0) {
	sol.push(0);
}
while(n > 0){
	if (n % 2 === 1){
		sol.push(1);
		n = (n - 1) / 2;
	}else{
		sol.push(0);
		n = n / 2;
	}
}
return sol.reverse();
};
