import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import missingNumber from "./missingNumber.js";

Deno.test("missingLetter", () => {
  assertEquals(missingNumber([0, 1, 2, 4]), 3);
  assertEquals(missingNumber([0, 4, 2, 1]), 3);
  assertEquals(missingNumber([1, 2, 3]), 0);
});
