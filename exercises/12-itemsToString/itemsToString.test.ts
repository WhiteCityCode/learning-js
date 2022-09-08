import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { itemsToString } from "./itemsToString.ts";

Deno.test("itemsToString", () => {
  assertEquals(itemsToString([1, 2, 3]), ["1", "2", "3"]);
});
