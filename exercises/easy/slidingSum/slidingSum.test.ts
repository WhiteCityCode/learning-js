import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { slidingSum } from "./slidingSum.ts";

Deno.test("slidingSum", () => {
  assertEquals(slidingSum([0, 0]), 0);
  assertEquals(slidingSum([0, 0, 99, 1, 2]), 100);
  assertEquals(slidingSum([0, 2, 99, 1, 2]), 101);
});
