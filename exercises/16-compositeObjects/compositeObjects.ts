/**
 * Your function receives an object of the type `Person` as described below.
 * It should return an object with the same shape as person, with the added
 * extra field `fullName`, which is of the shape `firstName lastName`;
 * You can not modify the Person object.
 *
 *
 * Example:
 *
 */

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

export const compositeObjects = (p: Person): Person & {fullName: string} => {
  return void;
};
