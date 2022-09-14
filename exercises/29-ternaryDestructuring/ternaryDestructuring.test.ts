import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { ternaryDestructuring } from "./ternaryDestructuring.ts";

Deno.test("ternaryDestructuring", () => {
  assertEquals(ternaryDestructuring([1, 2], 1), 1);
  assertEquals(ternaryDestructuring([1, 2], 2), 2);
  assertEquals(ternaryDestructuring(["A", "B"], 1), "A");
  assertEquals(ternaryDestructuring(["A", "B"], 2), "B");
});
