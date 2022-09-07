import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { secondsToString } from "./secondsToString.ts";

Deno.test("secondsToString", () => {
  assertEquals(secondsToString(90061), "1 1 1 1");
  assertEquals(secondsToString(93784), "1 2 3 4");
});
