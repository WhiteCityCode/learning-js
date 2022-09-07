/**
 * Imagine you're a digital kangaroo.
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 *
 * Each element in the array represents your jump length at that position.
 * Determine if you will land on the last index.
 *
 * Example:
 * [0, 6, 8, 2, 0] => false
 * [1, 4, 6, 9, 12] => false
 * [1, 1, 1, 1, 1] => true
 * [1, 3, 1, 5, 1, 10] => true
 *
 * Explanation:
 * In the array above, you start on the first position:
 *
 * [🦘(1), 4, 6, 9, 12]
 * Which means your next jump is at a distance of 1:
 * [1, 🦘(4), 6, 9, 12]
 * And the next one after that is at a distance of 4:
 * [1, 4, 6, 9, 12] 🦘
 * You landed outside the bounds of the array, so the answer is false.
 */

export const kangaroo = (arr) => {
  return false;
};
