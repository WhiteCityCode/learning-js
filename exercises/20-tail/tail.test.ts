import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { tail } from "./tail.ts";

Deno.test("tail", () => {
  assertEquals(tail([1, 2, 3, 4]), [2, 3, 4]);
  assertEquals(tail([]), []);
  assertEquals(tail([1]), []);
});
