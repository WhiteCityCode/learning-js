import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { factorial } from "./factorial.ts";

Deno.test("factorial", () => {
  assertEquals(factorial(0), 1);
  assertEquals(factorial(1), 1);
  assertEquals(factorial(2), 2);
  assertEquals(factorial(3), 6);
  assertEquals(factorial(4), 24);
});
