import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import diamonds from "./diamonds.js";

Deno.test("diamonds", () => {
  assertEquals(diamonds(3), " *\n***\n *\n");
  assertEquals(diamonds(5), "  *\n ***\n*****\n ***\n  *\n");
  assertEquals(diamonds(2), "");
  assertEquals(diamonds(0), "");
  assertEquals(diamonds(-1), "");
});
