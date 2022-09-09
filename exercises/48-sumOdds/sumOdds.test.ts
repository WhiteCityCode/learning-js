import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { sumOdds } from "./sumOdds.ts";

Deno.test("sumOdds", () => {
  assertEquals(sumOdds([1, 2, 3]), 4);
  assertEquals(sumOdds([]), 0);
  assertEquals(sumOdds([99]), 99);
  assertEquals(sumOdds([98]), 0);
  assertEquals(sumOdds([1, 2, 1]), 2);
  assertEquals(sumOdds([0, 0, 0]), 0);
  assertEquals(sumOdds([-1, 2, 3]), 2);
  assertEquals(sumOdds([-1, 2, -3]), -4);
});
