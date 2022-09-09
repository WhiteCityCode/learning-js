import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { ternary } from "./ternary.ts";

Deno.test("ternary", () => {
  assertEquals(ternary(1), "odd");
  assertEquals(ternary(3), "odd");
  assertEquals(ternary(5), "odd");
  assertEquals(ternary(2), "even");
  assertEquals(ternary(4), "even");
  assertEquals(ternary(6), "even");
});
