import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { find } from "./find.ts";

// TODO: More comprehensive testing
Deno.test("find", () => {
  assertEquals(find(2, [1, 2, 4, 7]), 1);
});
