import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { spread } from "./spread.ts";

Deno.test("spread", () => {
  assertEquals(spread([1, 2, 3]), [1, 2, 3, 0]);
  assertEquals(spread([]), [0]);
});
