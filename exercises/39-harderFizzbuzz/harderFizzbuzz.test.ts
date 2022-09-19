import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { harderFizzbuzz } from "./harderFizzbuzz.ts";

Deno.test("harderFizzbuzz", () => {
  assertEquals(harderFizzbuzz(0), "fizzbuzz");
  assertEquals(harderFizzbuzz(15), "fizzbuzz");
  assertEquals(harderFizzbuzz(30), "fizzbuzz");
  assertEquals(harderFizzbuzz(45), "fizzbuzz");
  assertEquals(harderFizzbuzz(3), "fizz");
  assertEquals(harderFizzbuzz(6), "fizz");
  assertEquals(harderFizzbuzz(9), "fizz");
  assertEquals(harderFizzbuzz(5), "buzz");
  assertEquals(harderFizzbuzz(5), "buzz");
  assertEquals(harderFizzbuzz(5), "buzz");
  assertEquals(harderFizzbuzz(1), 1);
  assertEquals(harderFizzbuzz(2), 2);
  assertEquals(harderFizzbuzz(4), 4);
});
