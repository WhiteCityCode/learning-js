import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { odds } from "./odds.js";

Deno.test("odds", () => {
  assertEquals(odds([1, 2, 4, 7]), [1, 4]);
});
