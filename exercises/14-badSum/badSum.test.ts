import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { badSum } from "./badSum.ts";

Deno.test("badSum", () => {
  assertEquals(badSum([0, 0]), 0);
  assertEquals(badSum([-10, 10]), 0);
  assertEquals(badSum([-10, 10, 10]), 0);
  assertEquals(badSum([-10, 0, 10]), 0);
  assertEquals(badSum([10, 0, 10]), 20);
  assertEquals(badSum([10, 10, 10]), 20);
  assertEquals(badSum([]), 0);
  assertEquals(badSum([10]), 0);
});
