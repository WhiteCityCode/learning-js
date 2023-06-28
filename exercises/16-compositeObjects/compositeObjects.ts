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

type ExtendedPerson = Person & {
  fullName: string;
}

export const compositeObjects = (p: Person): Person & {fullName: string} => {
  	const p2 = {
	firstName : p.firsName,
	fullName : `${p.firstName} ${p.lastName}`,
	lasName: p.lastName,
	age : p.age
	}
//	return {...p, fullName_: fullName };
	return p2;
};
