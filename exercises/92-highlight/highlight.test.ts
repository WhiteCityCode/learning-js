import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { highlight } from "./highlight.ts";

Deno.test("highlight", () => {
  assertEquals(highlight("This is a test", "test"), "This is a <mark>test</mark>");
  assertEquals(highlight("This is a test", "is"), "This <mark>is</mark> a test");
  assertEquals(highlight("This is a test", "This"), "<mark>This</mark> is a test");
});