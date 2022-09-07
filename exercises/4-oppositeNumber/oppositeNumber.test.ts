import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { oppositeNumber } from "./oppositeNumber.ts";

Deno.test("oppositeNumber", () => {
  assertEquals(oppositeNumber(1), -1);
  assertEquals(oppositeNumber(-11), 11);
  assertEquals(oppositeNumber(1.29), -1.29);
  assertEquals(oppositeNumber(-2.3), 2.3);
  assertEquals(oppositeNumber(0), 0, "Beware of 0");
});
