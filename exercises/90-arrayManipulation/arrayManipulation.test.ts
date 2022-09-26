import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { arrayManipulation } from "./arrayManipulation.ts";

Deno.test("arrayManipulation", () => {
  assertEquals(
    arrayManipulation(10, [
      [1, 5, 3],
      [4, 8, 7],
      [6, 9, 1],
    ]),
    10
  );
  assertEquals(
    arrayManipulation(5, [
      [1, 2, 100],
      [2, 5, 100],
      [3, 4, 100],
    ]),
    200
  );
});
