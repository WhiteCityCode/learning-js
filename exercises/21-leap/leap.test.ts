import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { leap } from "./leap.ts";

Deno.test("leap", () => {
  assertEquals(leap(0), []);
  assertEquals(leap(1), [2024]);
  assertEquals(leap(2), [2024, 2028]);
  assertEquals(leap(3), [2024, 2028, 2032]);
  assertEquals(leap(4), [2024, 2028, 2032, 2036]);
  assertEquals(leap(5), [2024, 2028, 2032, 2036, 2040]);
  assertEquals(leap(6), [2024, 2028, 2032, 2036, 2040, 2044]);
  assertEquals(leap(7), [2024, 2028, 2032, 2036, 2040, 2044, 2048]);
  assertEquals(leap(8), [2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052]);
  assertEquals(leap(9), [2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056]);
});
