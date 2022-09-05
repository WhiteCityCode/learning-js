// deno-lint-ignore-file

/**
 * A function that takes a list of numbers and returns ... 0? It should return
 * their sum, but it seems to always return 0, no matter what! 
 */
export const shadow = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const sum = sum + arr[i];
    }

    return sum;
}