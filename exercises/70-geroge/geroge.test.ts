import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { geroge } from "./geroge.ts";

Deno.test("geroge", () => {
  assertEquals(geroge(), []);
});