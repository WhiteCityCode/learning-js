import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { easierShift } from "./easierShift.ts";

Deno.test("shift", () => {
  assertEquals(easierShift([2, 3, 4], 1), [1, 2, 3, 4]);
  assertEquals(easierShift(["b", "c"], "a"), ["a", "b", "c"]);
  assertEquals(easierShift([true, true], false), [false, true, true]);
  assertEquals(easierShift([], 1), [1], "Beware of empty arrays");
});
