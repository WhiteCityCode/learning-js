import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { isEven } from "./yodaconditionals.js";

Deno.test("yodaconditionals", () => {
  assertEquals(isEven(4), true);
  assertEquals(isEven(5), false);
});
