import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import houglass from "./houglass.ts";

Deno.test("houglass", () => {
  assertEquals(houglass(), []);
});
