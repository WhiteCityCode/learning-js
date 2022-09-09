import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { arrayDestructuring } from "./arrayDestructuring.ts";

Deno.test("arrayDestructuring", () => {
  assertEquals(arrayDestructuring([1, 2, 3]), 2);
  assertEquals(arrayDestructuring(["A", "s", "d"]), "s");
  assertEquals(arrayDestructuring([true, false, true]), false);
});
