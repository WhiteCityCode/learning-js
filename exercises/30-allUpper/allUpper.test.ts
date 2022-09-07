import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { isAllCaps } from "./allUpper.ts";

Deno.test("allUpper", () => {
  assertEquals(isAllCaps("asd"), false);
  assertEquals(isAllCaps("Asd"), false);
  assertEquals(isAllCaps("ASD"), true);
  assertEquals(isAllCaps(""), false);
});
