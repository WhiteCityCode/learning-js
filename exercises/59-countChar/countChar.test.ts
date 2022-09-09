import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { countChar } from "./countChar.ts";

Deno.test("countChar", () => {
  assertEquals(countChar("Balloons", "o"), 2);
});
