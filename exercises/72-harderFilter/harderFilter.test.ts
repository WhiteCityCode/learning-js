import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { harderFilter } from "./harderFilter.ts";

Deno.test("filter", () => {
  assertEquals(
    harderFilter([undefined, 1, false, 2, 10], (v: unknown) => !!v),
    [1, 2, 10]
  );
  assertEquals(
    harderFilter([1, 2, 3, 4], (v: number) => v % 2),
    [1, 3]
  );
});
