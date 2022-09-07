import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { kangaroo } from "./kangaroo.ts";

Deno.test("kangaroo", () => {
  assertEquals(kangaroo([0]), false);
  assertEquals(kangaroo([1, 1, 1, 1]), true);
  assertEquals(
    kangaroo([4, 1, 21, 2, 2, 4, 1, 4, 1, 1, 12312312, 123, 1, 12312]),
    false
  );
  assertEquals(kangaroo([1, 3, 1, 1, 2]), true);
});
