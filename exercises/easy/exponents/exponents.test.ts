import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import exponents from "./exponents.js";

Deno.test("powers of 2", () => {
  assertEquals(exponents(2, 2), 4);
  assertEquals(exponents(2, 3), 8);
  assertEquals(exponents(3, 2), 9);
  assertEquals(
    exponents(3, 0),
    1,
    "any number raised to the power of zero should be 1"
  );
});
