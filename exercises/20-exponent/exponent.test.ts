import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { exponent } from "./exponents.ts";

Deno.test("exponent", () => {
  assertEquals(exponent(2, 2), 4);
  assertEquals(exponent(2, 3), 8);
  assertEquals(exponent(3, 2), 9);
  assertEquals(
    exponent(3, 0),
    1,
    "any number raised to the power of zero should be 1"
  );
});
