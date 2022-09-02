import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { isNacissist } from "./narcisistNumber.js";

Deno.test("narcissist number", () => {
  assertEquals(isNacissist(153), true);
  assertEquals(isNacissist(154), false);
  assertEquals(isNacissist(1652), false);
  assertEquals(isNacissist(9474), true);
  assertEquals(isNacissist(370), true);
});
