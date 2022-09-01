import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { max } from "./max.js";

Deno.test("max", () => {
  assertEquals(max([1, 2, 4, 7]), 7);
  assertEquals(max([-100, -2, 3, 7]), 7);
  assertEquals(max([0, 0, 0, 0]), 0);
  assertEquals(max([-1, -2, -4, -7]), -1);
});
