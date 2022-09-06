import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import numMilli from "./clock.js";

Deno.test("badYoda", () => {
  assertEquals(numMilli(0, 0, 0), 0);
  assertEquals(numMilli(0, 0, 1), 1000);
  assertEquals(numMilli(0, 1, 0), 60000);
  assertEquals(numMilli(1, 0, 0), 3600000);
  assertEquals(numMilli(0, 1, 1), 61000);
  assertEquals(numMilli(1, 0, 1), 3601000);
  assertEquals(numMilli(1, 1, 1), 3661000);
  assertEquals(numMilli(10, 0, 0), 36000000);
  assertEquals(numMilli(2, 0, 0), 7200000);
});
