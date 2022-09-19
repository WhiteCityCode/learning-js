import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { vowelCount } from "./vowelCount.ts";

Deno.test("vowelCount", () => {
  assertEquals(vowelCount("apple"), 2);
  assertEquals(vowelCount("aaa"), 3);
  assertEquals(vowelCount("bbb"), 0);
  assertEquals(vowelCount("banana"), 3);
  assertEquals(vowelCount("yes"), 1);
});
