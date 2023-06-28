/**
 * This function takes a positive number that represents a mile distance and
 * returns the same distance expressed in kilometers
 *
 * Example:
 * 1.6 => 2.5749504
 * 60 => 96.56064
 */

export const americanDistance = (miles: number): number => {
  return miles/0.6214;
};
