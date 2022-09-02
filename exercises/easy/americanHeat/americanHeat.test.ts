import { americanHeat } from "./americanHeat.js";
import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";

Deno.test("americanHeat", () => {
  assertEquals(americanHeat(32), 0);
  assertEquals(americanHeat(100), 37.7777778);
  assertEquals(americanHeat(-32), -35.5555556);
  assertEquals(americanHeat(0), -17.7777778);
});
