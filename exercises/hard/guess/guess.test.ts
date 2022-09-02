import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { guess } from "./guess.js";

Deno.test("guess", () => {
  assertEquals(guess(4, [1, 2, 4, 7]), 3);
  assertEquals(guess(4, [4]), 1);
  assertEquals(guess(4, [1, 2, 3]), -1);
  assertEquals(guess(0, [1, 0, 0]), 2);
  assertEquals(guess(0, [0, 0, 0]), 1);
});
