/**
 * This function takes an object and returns an array containing its keys.
 * 
 * Example: 
 * { "foo": 1, "bar": false } => ["foo", "bar"]
 * {} => []
 *  
 */

export const keys = (s: Record<string, unknown>): string[] => {
  return Object.keys(s);
}  
