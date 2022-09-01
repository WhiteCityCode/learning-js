import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { toBinary } from "../numbers/baseTwo.js";
import { getDigits } from "../numbers/getDigits.js";
import { isNacissist } from "../numbers/narcisistNumber.js";

Deno.test("binary", () => {
  assertEquals(toBinary(4), [1, 0, 0]);
  assertEquals(toBinary(281), [1, 0, 0, 0, 1, 1, 0, 0, 1]);
  assertEquals(toBinary(1024), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  assertEquals(toBinary(511), [1, 1, 1, 1, 1, 1, 1, 1, 1]);
  assertEquals(toBinary(0), [0]);
});

Deno.test("get digits", () => {
  assertEquals(getDigits(1), [1]);
  assertEquals(getDigits(12), [1, 2]);
  assertEquals(getDigits(999), [9, 9, 9]);
  assertEquals(getDigits(-876), [8, 7, 6]);
  assertEquals(getDigits(625182910317), [6, 2, 5, 1, 8, 2, 9, 1, 0, 3, 1, 7]);
});

Deno.test("narcissist number", () => {
  assertEquals(isNacissist(153), true);
  assertEquals(isNacissist(154), false);
  assertEquals(isNacissist(1652), false);
  assertEquals(isNacissist(9474), true);
  assertEquals(isNacissist(370), true);
});
