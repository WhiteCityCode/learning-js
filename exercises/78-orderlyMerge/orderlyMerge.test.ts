import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { orderlyMerge } from "./orderlyMerge.ts";

Deno.test("orderlyMerge", () => {
  assertEquals(orderlyMerge([1, 2, 4], [3, 5, 6]), [1, 2, 3, 4, 5, 6]);
});
