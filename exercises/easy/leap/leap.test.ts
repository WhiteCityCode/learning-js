import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { leap } from "./leap.js";

Deno.test("leap", () => {
  assertEquals(leap(2), [2024, 2028]);
  assertEquals(leap(3), [2024, 2028, 2032]);
  assertEquals(leap(4), [2024, 2028, 2032, 2036]);
  assertEquals(leap(5), [2024, 2028, 2032, 2036, 2040]);
});
