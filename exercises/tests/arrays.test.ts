import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { concat } from "../arrays/concat.js";
import { find } from "../arrays/find.js";
import { guess } from "../arrays/guess.js";
import { intercalate } from "../arrays/intercalate.js";
import { max } from "../arrays/max.js";
import { odds } from "../arrays/odds.js";
import { reverse } from "../arrays/reverse.js";
import { sum } from "../arrays/sum.js";

Deno.test("sumMultiples", () => {
  assertEquals(sum([1, 2, 4, 7]), 0);
  assertEquals(sum([-3, -5]), 0);
  assertEquals(sum([3, 5, 15]), 23);
  assertEquals(sum([3, 1, 1, 1]), 3);
  assertEquals(sum([1, 1, 5, 1]), 5);
});

Deno.test("guess", () => {
  assertEquals(guess(4, [1, 2, 4, 7]), 3);
  assertEquals(guess(4, [4]), 1);
  assertEquals(guess(4, [1, 2, 3]), -1);
  assertEquals(guess(0, [1, 0, 0]), 2);
  assertEquals(guess(0, [0, 0, 0]), 1);
});

Deno.test("reverse", () => {
  assertEquals(reverse([1, 2, 4, 7]), [7, 4, 2, 1]);
});

Deno.test("find", () => {
  assertEquals(find(2, [1, 2, 4, 7]), true);
});

Deno.test("concat", () => {
  assertEquals(concat(["a", "b", "c"], [1, 2, 3]), ["a", "b", "c", 1, 2, 3]);
});

Deno.test("intercalate", () => {
  assertEquals(intercalate(["a", "b", "c"], [1, 2, 3]), [
    "a",
    1,
    "b",
    2,
    "c",
    3,
  ]);
});

Deno.test("orderlyMerge", () => {
  assertEquals(intercalate([1, 2, 4], [3, 5, 6]), [1, 2, 3, 4, 5, 6]);
});

Deno.test("rotate", () => {
  assertEquals(intercalate([1, 2, 3, 4, 5, 6]), [3, 4, 5, 6, 1, 2]);
});
