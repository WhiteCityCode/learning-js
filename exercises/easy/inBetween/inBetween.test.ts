import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import between from "./inBetween.js";

Deno.test("guess", () => {
  assertEquals(between([1, 2, 3], 0, 1), [1]);
  assertEquals(between([1, 2, 3], 0, 2), [1, 2]);
  assertEquals(between([1, 2, 3], 0, 0), [], "beware the 0");
  assertEquals(between([1, 2, 3], 2, 2), []);
});
