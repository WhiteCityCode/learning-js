import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { replace } from "./replace.js";

Deno.test("replace", () => {
  assertEquals(replace("I love fast cars"), "I love fast balloons");
  assertEquals(replace("I love fast snails"), "I love fast snails");
});
