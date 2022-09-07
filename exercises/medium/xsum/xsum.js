/**
 * You're building a casual mobile game called "Stamps".
 *
 * In the game, you're presented with a tiled board of numbers, like so:
 *
 * [
 *   [  1, 227,  20, 664,   7],
 *   [917,  27, 121,   4, 567],
 *   [ 51, 996,   8,   0,  16],
 *   [ 87,  18,  29,  60,   2],
 *   [ 18, 986,  87,   2,   0],
 *   [  0,   7,   0,   4,   0],
 * ]
 *
 * The goal is to cross out a portion of the board; the sum of the elements
 * that you clear represent your score.
 *
 * The way you can cross out a portion of the board is by marking an "X". In the
 * example below, see the striked values which represent an "X" mark.
 *
 * [
 *   [  1, 2̶2̶7̶,  20, 6̶6̶4̶,   7],
 *   [917,  27, 1̶2̶1̶,   4, 567],
 *   [ 51, 9̶9̶6̶,   8,   0̶,  16],
 *   [ 87,  18,  29,  60,   2],
 *   [ 18, 986,  87,   2,   0],
 *   [  0,   7,   0,   4,   0],
 * ]
 *
 * (sum: 227 + 664 + 121 + 996 + 0 = 2008)
 *
 * So given the center of the "X" in terms of (X, Y) indices, return the sum of
 * the elements that are part of the "X" taking into account that:
 *
 * 1. The "X" stamp might "leak" outside of the play area. Ie: if the center is
 * (0, 0), then the only coordinates still in the matrix are the center itself
 * and one "arm" like seen below
 *
 * [
 *   [  1̶, 227,  20, 664,   7],
 *   [917,  2̶7̶, 121,   4, 567],
 *   [ 51, 996,   8,   0,  16],
 *   ...
 * ]
 *
 * (sum: 1 + 27 = 28)
 *
 * 2. The given coordinates are always within the play area (so a position of
 * (-1, 0) would never be given, or coordinates where the coordinate is beyond
 * the far edges of the matrix)
 *
 * 3. The "board" parameter is the matrix
 * 4. "coords" is a tuple of [number, number] where the first value represents
 * the row, and the second value represents the column. These values are
 * 0-indexed, meaning a coordinate of [0, 0] would coincide with matrix[0][0].
 */

export const xsum = (board, coords) => {
  return NaN;
};
