import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { div10 } from "./div10.js";

Deno.test("div10", () => {
  assertEquals(div10(10), true);
  assertEquals(div10(100), true);
  assertEquals(div10(42), false);
});
