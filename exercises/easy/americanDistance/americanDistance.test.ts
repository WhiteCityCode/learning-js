import { americanDistance } from "./americanDistance.js";
import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";

Deno.test("americanDistance", () => {
  assertEquals(americanDistance(1.6), 2.5749504);
  assertEquals(americanDistance(60), 96.56064);
  assertEquals(americanDistance(0), 0);
});
