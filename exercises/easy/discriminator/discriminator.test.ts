import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { discriminator } from "./discriminator.js";

Deno.test("discriminator", () => {
  assertEquals(discriminator("Jane Doe"), "Hello!");
  assertEquals(discriminator("Alice"), "Hello, Alice!");
  assertEquals(discriminator("Bob"), "Hello, Bob!");
});
