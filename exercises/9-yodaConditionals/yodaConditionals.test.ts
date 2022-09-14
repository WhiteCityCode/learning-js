import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { isEven } from "./yodaConditionals.ts";

Deno.test("yodaConditionals", () => {
  assertEquals(isEven(4), true);
  assertEquals(isEven(5), false);
});
