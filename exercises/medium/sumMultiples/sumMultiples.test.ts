import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { sumMultiples } from "./sumMultiples.js";

Deno.test("sumMultiples", () => {
  assertEquals(sumMultiples([1, 2, 4, 7]), 0);
  assertEquals(sumMultiples([-3, -5]), 0);
  assertEquals(sumMultiples([3, 5, 15]), 23);
  assertEquals(sumMultiples([3, 1, 1, 1]), 3);
  assertEquals(sumMultiples([1, 1, 5, 1]), 5);
});
