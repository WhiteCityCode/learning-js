/**
 *                            ▓▓
 *                            ▓▓
 *                              ▒▒
 *                              ▓▓░░░░
 *                            ░░░░░░░░░░
 *                            ░░░░░░░░░░░░
 *                            ░░░░░░░░░░░░
 *                            ░░░░░░░░░░░░
 *                            ░░░░░░░░░░░░░░░
 *                          ░░░░░░░░░░░░░░░░▒▒
 *                          ░░░░░░░░░░░░░░░░▒▒░░
 *                        ░░░░░░░░░░░░░░░░░░▒▒▒▒
 *                      ░░░░░░░░  ░░░░░░░░░░░░▒▒▒▒
 *                      ░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒
 *                    ░░░░      ░░░░░░░░░░░░░░▒▒▒▒▒▒
 *                    ░░░░    ░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒
 *                    ░░░░  ░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒
 *                    ░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒
 *                    ░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒
 *                    ░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒
 *                     ░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒
 *                      ░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒
 *                      ░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒
 *                       ░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░
 *                         ░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░░░
 *
 * New day, new operating system. The Watermelon company just launched their new
 * PearOS computers which are great (as usual) but they've radically changed
 * the way they handle graphics.
 *
 * Specifically, instead of specifying a rectangle as a pair of (x, y)
 * coordinates, the way we do in Limax, they want us to specify an (x, y)
 * coordinate and the width and height of the rectangle, as shown below:
 *
 * Limax:
 *
 *   A: (x: 10, y: 20)
 *   B: (x: 200, y: 120)
 *
 *   A---------------------+
 *   |                     |
 *   |                     |
 *   |                     |
 *   +---------------------B
 *
 * PearOS:
 *
 *   A: (x: 10, y: 20)
 *   width: 190
 *   height: 100
 *
 *   A--------width---------+
 *   |                      |
 *   |                      |  height
 *   |                      |
 *   +----------------------+
 *
 * Note that in Limax, the first coordinate is always the top-left corner, and
 * the second coordinate is always the bottom-right corner.
 *
 * In PearOS, the coordinate is always the top-left corner.
 *
 * Our company, AnyHat, wants to be able to port programs for one OS to the
 * other seamlessly, so in order to do that we need:
 *
 * 1. function to port Limax style rectangles to PearOS
 * 2. function to port PearOS style rectangles to Limax
 *
 * For both, you can assume that the rectangles are valid (no zero-size width
 * or height) and that the rectangles are drawn parallel to the X axis (so no
 * trigonometry is involved in converting the representations)
 */

type Coordinate = [number, number];
type LimaxRect = [Coordinate, Coordinate];
type PearOSRect = [Coordinate, number, number];

export const limaxToPear = (rectangle: LimaxRect): PearOSRect => {
  return [];
};

export const pearToLimax = (rectangle: PearOSRect): LimaxRect => {
  return [];
};
