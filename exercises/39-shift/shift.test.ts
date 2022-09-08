import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { shift } from "./shift.ts";

Deno.test("shift", () => {
  assertEquals(shift([2, 3, 4], 1), [1, 2, 3, 4]);
  assertEquals(shift(["b", "c"], "a"), ["a", "b", "c"]);
  assertEquals(shift([true, true], false), [false, true, true]);
  assertEquals(shift([], 1), [1], "Beware of empty arrays");
});
