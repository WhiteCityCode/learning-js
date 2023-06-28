/**
 * Your function receives an object of type Person, described underneath.
 * The task is to to return a string of the form "firstName lastName" without
 * using the object.property notation.
 *
 * Note: check out destructuring
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

export const objectDestructuring = (s: Person): string => {
	const {firstName, lastName, } = s;
	return `${firstName} ${lastName}`;
};
