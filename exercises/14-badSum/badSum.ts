/**
 * This function takes an array and returns the sum of it's first and last
 * element, but for some reason it seems to always return NaN. It should return
 * 0 if there are less than two elements in the array.
 */

export const badSum = (s: number[]): number => {
  if (s.length < 2) {
    return 0;
  }
  
  return s[0] + s[s.length];
}  
