import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { getDigits } from "./getDigits.ts";

Deno.test("get digits", () => {
  assertEquals(getDigits(1), [1]);
  assertEquals(getDigits(12), [1, 2]);
  assertEquals(getDigits(999), [9, 9, 9]);
  assertEquals(getDigits(-876), [8, 7, 6]);
  assertEquals(getDigits(625182910317), [6, 2, 5, 1, 8, 2, 9, 1, 0, 3, 1, 7]);
});
