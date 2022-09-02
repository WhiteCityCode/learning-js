import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { countChar } from "./countChar.js";

Deno.test("countChar", () => {
  assertEquals(countChar("Baloons", 2), 2);
});
