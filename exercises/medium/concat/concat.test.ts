import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { concat } from "./concat.js";

Deno.test("concat", () => {
  assertEquals(concat(["a", "b", "c"], [1, 2, 3]), ["a", "b", "c", 1, 2, 3]);
});
