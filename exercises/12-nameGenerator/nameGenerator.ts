/**
 * Your function receives an object of type Person, described underneath.
 * The task is to to return a string of the form "firstName lastName"
 *
 * Example:
 * s = {firstName: 'Marco', lastName: 'Polo', age: 710} -> "Marco Polo"
 *
 */

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

export const nameGenerator = (s: Person): string => {
  return s.toString();
};
