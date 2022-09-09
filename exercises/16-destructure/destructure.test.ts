import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { destructure } from "./destructure.ts";

Deno.test("destructure", () => {
  assertEquals(destructure([1, 2, 3]), [1, 2, 3, 0]);
  assertEquals(destructure([]), [0]);
});
