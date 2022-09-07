import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import clock from "./clock.ts";

Deno.test("clock", () => {
  assertEquals(clock(), []);
});
