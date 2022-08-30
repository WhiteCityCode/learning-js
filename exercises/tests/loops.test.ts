import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { leap } from "../loops/leap.js";
import { primes } from "../loops/primes.js";

Deno.test("primes", () => {
  assertEquals(primes(10), [2, 3, 5, 7]);
  assertEquals(primes(30), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  assertEquals(primes(100).length, 25);
});

Deno.test("leap", () => {
  assertEquals(leap(2), [2024, 2028]);
});
