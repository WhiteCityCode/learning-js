import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import isPrime from "./isPrime.js";

Deno.test("isPrime", () => {
  assertEquals(isPrime(1), true);
  assertEquals(isPrime(2), true);
  assertEquals(isPrime(5), true);
  assertEquals(isPrime(7), true);
  assertEquals(isPrime(11), true);
  assertEquals(isPrime(6), false);
  assertEquals(isPrime(8), false);
  assertEquals(isPrime(10), false);
});
