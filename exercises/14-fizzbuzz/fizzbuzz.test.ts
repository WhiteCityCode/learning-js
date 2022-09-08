import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { fizzbuzz } from "./fizzbuzz.ts";

Deno.test("fizzbuzz", () => {
  assertEquals(fizzbuzz(0), 0);
  assertEquals(fizzbuzz(1), 1);
  assertEquals(fizzbuzz(NaN), NaN);
  assertEquals(fizzbuzz(3), "fizz");
  assertEquals(fizzbuzz(6), "fizz");
  assertEquals(fizzbuzz(5), "buzz");
  assertEquals(fizzbuzz(10), "buzz");
  assertEquals(fizzbuzz(15), "fizzbuzz", "15 should be fizzbuzz");
});
