import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { intercalate } from "./intercalate.ts";

Deno.test("intercalate", () => {
  assertEquals(intercalate(["a", "b", "c"], [1, 2, 3]), [
    "a",
    1,
    "b",
    2,
    "c",
    3,
  ]);
});
