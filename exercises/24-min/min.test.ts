import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { min } from "./min.ts";

Deno.test("min", () => {
  assertEquals(min([1, 2, 4, 7]), 1);
  assertEquals(min([-100, -2, 3, 7]), -100);
  assertEquals(min([0, 0, 0, 0]), 0);
  assertEquals(min([-1, -2, -4, -7]), -7);
});
