import { americanHeat } from "./americanHeat.js";
import { assertAlmostEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";

Deno.test("americanHeat", () => {
  assertAlmostEquals(americanHeat(32), 0);
  assertAlmostEquals(americanHeat(100), 37.7777778);
  assertAlmostEquals(americanHeat(-32), -35.5555556);
  assertAlmostEquals(americanHeat(0), -17.7777778);
});
