import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { trim } from "./trim.ts";

Deno.test("trim", () => {
  assertEquals(trim(" foo"), "foo");
  assertEquals(trim("  foo"), "foo");
  assertEquals(trim(" foo "), "foo");
  assertEquals(trim(" foo  "), "foo");
  assertEquals(trim("  foo "), "foo");
  assertEquals(trim("foo "), "foo");
  assertEquals(trim("foo  "), "foo");
});
