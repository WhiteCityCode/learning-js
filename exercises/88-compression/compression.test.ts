import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { compress } from "./compression.ts";

Deno.test("compression", () => {
  assertEquals(compress([1, 2, 3]), [
    [0, 1],
    [0, 2],
    [0, 3],
  ]);
  assertEquals(compress([0, 0, 0, 0, 0]), [[5]]);
  assertEquals(compress([0, 0, 0, 128, 0]), [[3, 128], [1]]);
});
