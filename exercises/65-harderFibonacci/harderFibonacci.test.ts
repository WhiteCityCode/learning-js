import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { fibonacci } from "./harderFibonacci.ts";

Deno.test("isPrime", () => {
  assertEquals(fibonacci(1), 0);
  assertEquals(fibonacci(2), 1);
  assertEquals(fibonacci(3), 1);
  assertEquals(fibonacci(4), 2);
  assertEquals(fibonacci(5), 3);
  assertEquals(fibonacci(6), 5);
  assertEquals(fibonacci(7), 8);
  assertEquals(fibonacci(8), 13);
  assertEquals(fibonacci(9), 21);
});
