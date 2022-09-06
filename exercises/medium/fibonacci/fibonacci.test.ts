import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import fibonacci from "./fibonacci.js";

Deno.test("isPrime", () => {
  assertEquals(fibonacci(0), [], "Beware of 0");
  assertEquals(fibonacci(1), [0]);
  assertEquals(fibonacci(2), [0, 1]);
  assertEquals(fibonacci(3), [0, 1, 1]);
  assertEquals(fibonacci(4), [0, 1, 1, 2]);
  assertEquals(fibonacci(5), [0, 1, 1, 2, 3]);
  assertEquals(fibonacci(6), [0, 1, 1, 2, 3, 5]);
  assertEquals(fibonacci(7), [0, 1, 1, 2, 3, 5, 8]);
  assertEquals(fibonacci(8), [0, 1, 1, 2, 3, 5, 8, 13]);
  assertEquals(fibonacci(9), [0, 1, 1, 2, 3, 5, 8, 13, 21]);
});
