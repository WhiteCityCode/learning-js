import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { doubleArray } from "./doubleArray.js";

Deno.test("discriminator", () => {
  assertEquals(doubleArray([1, 2, 3]), [2, 4, 6]);
  assertEquals(doubleArray([1, 2, 3, 4, 5]), [2, 4, 6, 8, 10]);
  assertEquals(doubleArray([0, 0, 0]), [0, 0, 0]);
  assertEquals(doubleArray([]), []);
  assertEquals(doubleArray([-1, -2, -3]), [-2, -4, -6]);
});
