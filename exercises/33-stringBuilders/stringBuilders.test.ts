import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { stringBuilders } from "./stringBuilders.ts";

Deno.test("stringBuilders", () => {
  assertEquals(stringBuilders(-1), "", "Beware the negatives");
  assertEquals(stringBuilders(0), "", "Beware the 0");
  assertEquals(stringBuilders(1), "#");
  assertEquals(stringBuilders(2), " #\r\n##");
  assertEquals(stringBuilders(3), "  #\r\n ##\r\n###");
  assertEquals(stringBuilders(4), "   #\r\n  ##\r\n ###\r\n####");
});
