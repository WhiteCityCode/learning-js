/**
 * This function takes a number between 1 and 4, inclusive, and returns a string
 * that represents the number in greek, such that for 1 it would return "alpha".
 *
 *
 * Example:
 *  1 - "alpha"
 *  2 - "beta"
 *  3 - "gamma"
 *  4 - "delta"
 *
 */

export const greek = (
  s: 1 | 2 | 3 | 4
): "alpha" | "beta" | "gamma" | "delta" => {
  switch (s){
	case 1:
	  return "alpha";
	break;
	case 2:
		return "beta";
		break;
	case 3:
		return "gamma";
		break;
  	case 4:
		return "delta";
  }
};
