/**
 *  Given an array of objects, a string and a list of attributes, return an
 *  array of objects that contain the string in one of their properties.
 *
 *  The objects are plain JavaScript objects, not instances of a class, of type
 *  Record<string, unknown>.
 *
 *  Example:
 *  search([{name: 'John', age: 20}, {name: 'Jane', age: 21}], 'Jane', ['name']) // => [{name: 'Jane', age: 21}]
 */

export const search = (
  objects: Record<string, unknown>[],
  term: string,
  attributes: string[]
): object[] => {
  return [];
};
