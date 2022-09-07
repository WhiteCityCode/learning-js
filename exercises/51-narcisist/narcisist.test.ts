import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { isNarcisist } from "./narcisist.ts";

Deno.test("narcissist number", () => {
  assertEquals(isNarcisist(153), true);
  assertEquals(isNarcisist(154), false);
  assertEquals(isNarcisist(1652), false);
  assertEquals(isNarcisist(9474), true);
  assertEquals(isNarcisist(370), true);
});
