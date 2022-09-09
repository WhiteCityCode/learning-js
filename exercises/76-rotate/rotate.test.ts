import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { rotate } from "./rotate.ts";

Deno.test("rotate", () => {
  assertEquals(rotate([1, 2, 3, 4, 5, 6], 2), [3, 4, 5, 6, 1, 2]);
  assertEquals(rotate([], 10), []);
  assertEquals(rotate([2], 10), [2]);
  assertEquals(rotate([2, 10], 10), [2, 10]);
});
