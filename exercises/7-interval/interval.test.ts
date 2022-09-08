import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { closedInterval, halfOpenInterval } from "./interval.ts";

Deno.test("closedInterval", () => {
  assertEquals(closedInterval(20, [10, 20]), true);
  assertEquals(closedInterval(0, [10, 20]), false);
  assertEquals(closedInterval(10, [10, 20]), true);
  assertEquals(closedInterval(15, [10, 20]), true);
  assertEquals(closedInterval(0, [0, 2]), true);
  assertEquals(closedInterval(-1, [10, 20]), false);
  assertEquals(closedInterval(0, [0, 0]), true);
});

Deno.test("halfOpenInterval", () => {
  assertEquals(halfOpenInterval(20, [10, 20]), false);
  assertEquals(halfOpenInterval(0, [10, 20]), false);
  assertEquals(halfOpenInterval(10, [10, 20]), true);
  assertEquals(halfOpenInterval(15, [10, 20]), true);
  assertEquals(halfOpenInterval(0, [0, 2]), true);
  assertEquals(halfOpenInterval(-1, [10, 20]), false);
  assertEquals(halfOpenInterval(0, [0, 0]), false);
});
