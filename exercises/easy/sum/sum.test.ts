import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { sum } from "./sum.js";

Deno.test("sum", () => {
  assertEquals(sum([1, 4, 5]), 10);
  assertEquals(sum([0, 0, 1]), 1);
  assertEquals(sum([-1, 0, 1]), 0);
  assertEquals(sum([]), 0);
  assertEquals(sum([0, 0, 0]), 0);
});
