import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { reverse } from "./reverse.js";

Deno.test("reverse", () => {
  assertEquals(reverse([1, 2, 4, 7]), [7, 4, 2, 1]);
  assertEquals(reverse(["a", "b", "c"]), ["c", "b", "a"]);
  assertEquals(reverse([true, false]), [false, true]);
  assertEquals(reverse([]), []);
});
