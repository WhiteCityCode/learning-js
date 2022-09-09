import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { cypher } from "./cypher.ts";

Deno.test("cypher", () => {
  assertEquals(cypher(37, 2), 33);
  assertEquals(cypher(56, 0), 57);
  assertEquals(cypher(0, 0), 1);
  assertEquals(cypher(1, 0), 2);
  assertEquals(cypher(4095, 0), 4096);
  assertEquals(cypher(1, 12), 8191);
});
