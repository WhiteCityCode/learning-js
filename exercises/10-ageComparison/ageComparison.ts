/**
 * Your function receives 2 objects of the type `Person`, as described below.
 * Your function should return the person which is older. If they have the same
 * age, you should return the second person.
 *
 *
 * Example:
 *  p1 = {firstName: 'George', lastName: 'Doe', age: 18}
 *  p2 = {firstName: 'John', lastName: 'Doe', age: 20}
 *  => {firstName: 'George', lastName: 'Doe', age: 18}
 */

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

export const ageComparison = (p1: Person, p2: Person): Person => {
  return p1.age > p2.age ? p1 : p2;
};
