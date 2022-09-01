import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { greetings } from "./greetings.js";

Deno.test("greetings", () => {
  assertEquals(greetings("Jane Doe"), "Hello, Jane Doe!");
  assertEquals(greetings(""), "Hello, !");
});
