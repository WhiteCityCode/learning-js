import { americanDistance } from "./americanDistance.js";
import { assertAlmostEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";

Deno.test("americanDistance", () => {
  assertAlmostEquals(americanDistance(1.6), 2.5749504);
  assertAlmostEquals(americanDistance(60), 96.56064);
  assertAlmostEquals(americanDistance(0), 0);
});
