import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { filter } from "./filter.js";

Deno.test("filter", () => {
  assertEquals(
    filter([undefined, 1, false, 2, 10], (v: unknown) => !!v),
    [1, 2, 10],
  );
  assertEquals(
    filter([1, 2, 3, 4], (v: number) => v % 2),
    [1, 3],
  );
});
