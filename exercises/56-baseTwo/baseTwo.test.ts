import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { toBinary } from "./baseTwo.ts";

Deno.test("binary", () => {
  assertEquals(toBinary(4), [1, 0, 0]);
  assertEquals(toBinary(281), [1, 0, 0, 0, 1, 1, 0, 0, 1]);
  assertEquals(toBinary(1024), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  assertEquals(toBinary(511), [1, 1, 1, 1, 1, 1, 1, 1, 1]);
  assertEquals(toBinary(0), [0]);
});
