import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { palindrome } from "./palindrome.js";

Deno.test("palindrome", () => {
  assertEquals(palindrome("anina"), true);
  assertEquals(palindrome("banana"), false);
});
