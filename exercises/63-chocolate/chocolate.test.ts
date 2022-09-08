import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { chocolateEater } from "./chocolate.ts";

Deno.test("chocolateEater", () => {
  assertEquals(chocolateEater(10, 5), 2);
  assertEquals(chocolateEater(10, 3), 10);
  assertEquals(chocolateEater(10, 1), 10);
  assertEquals(chocolateEater(10, 10), 1);
  assertEquals(chocolateEater(10, 11), 10);
  assertEquals(chocolateEater(10, 15), 2);
});
