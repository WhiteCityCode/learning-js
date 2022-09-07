import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { zen } from "./zen.js";

Deno.test("zen", () => {
  assertEquals(zen([-0, -100]), []);
  assertEquals(zen([-10, 2, 3, -100]), [2, 3]);
  assertEquals(zen([-10, 2, true, false, 3, -100]), [2, true, false, 3]);
  assertEquals(zen([1, -10, 3, -100]), [1, 3]);
  assertEquals(zen([1, -10.2, 3, -100.8]), [1, -10.2, 3, -100.8]);
});
