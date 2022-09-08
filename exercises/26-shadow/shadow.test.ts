import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { shadow } from "./shadow.js";

Deno.test("shadow", () => {
  assertEquals(shadow([]), 0);
  assertEquals(shadow([1, 2, 3]), 6);
});
