import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { fizzBuzz } from "./heisenbug.ts";

Deno.test("fizzBuzz", () => {
  assertEquals(fizzBuzz(10), [
    "FizzBuzz",
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
  ]);
  assertEquals(fizzBuzz(10), [
    "FizzBuzz",
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
  ]);
});
