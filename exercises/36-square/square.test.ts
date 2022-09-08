import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { square } from "./square.ts";

Deno.test("square", () => {
  assertEquals(square(13), 16);
  assertEquals(square(1), 4);
  assertEquals(square(0), 1);
});
