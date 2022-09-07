import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { abbreviate } from "./abbreviate.ts";

Deno.test("abbreviate", () => {
  assertEquals(abbreviate("John Doe"), "J. D.");
  assertEquals(abbreviate("Marry Patrick Davis"), "M. D.");
  assertEquals(abbreviate("George R. R. Martin"), "G. M.");
});
