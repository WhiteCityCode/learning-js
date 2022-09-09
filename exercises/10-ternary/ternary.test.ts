import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { ternary } from "./ternary.ts";

Deno.test("ternary", () => {
  assertEquals(ternary(1), false);
  assertEquals(ternary(3), false);
  assertEquals(ternary(5), false);
  assertEquals(ternary(2), true);
  assertEquals(ternary(4), true);
  assertEquals(ternary(6), true);
});
