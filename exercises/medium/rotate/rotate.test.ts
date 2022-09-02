import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { rotate } from "./rotate.js";

Deno.test("rotate", () => {
  assertEquals(rotate([1, 2, 3, 4, 5, 6]), [3, 4, 5, 6, 1, 2]);
  assertEquals(rotate([]), []);
});
