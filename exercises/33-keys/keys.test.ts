import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { keys } from "./keys.ts";

Deno.test("keys", () => {
  assertEquals(keys({}), []);
  assertEquals(keys({ foo: 1, bar: true }), ["foo", "bar"]);
});
