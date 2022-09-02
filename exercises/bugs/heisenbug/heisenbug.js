/**
 * Someone tried to implement fizzBuzz. Seems to run fine on the first try, 
 * but for some reason a second attempt always messes up the output. 
 * 
 * What is going here?
 */

const ret = [];
export const fizzBuzz = (n) => {
    for (let i = 0; i < n; i++) {
        if (i % 15 === 0) {
            ret.push("FizzBuzz");
        } else if (i % 5 === 0) {
            ret.push("Buzz");
        } else if (i % 3 === 0) {
            ret.push("Fizz");
        } else {
            ret.push(i);
        }
    }

    return ret;
}