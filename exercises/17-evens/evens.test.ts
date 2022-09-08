import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { evens } from "./evens.ts";

Deno.test("evens", () => {
  assertEquals(evens([1, 2, 3, 4, 5, 6, 7, 8]), [2, 4, 6, 8]);
  assertEquals(evens([0, 1, 2, 3, 4]), [0, 2, 4]);
  assertEquals(evens([0, 0, 0, 0]), [0, 0, 0, 0]);
  assertEquals(evens([]), []);
  assertEquals(evens([-2, -3, -4, -5, -6]), [-2, -4, -6]);
  assertEquals(evens([1231290510295712]), [1231290510295712]);
  assertEquals(evens([1, -1231290510295712, 3]), [-1231290510295712]);
});
