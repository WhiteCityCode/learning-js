import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { missingCharacter } from "./missingCharacter.js";

Deno.test("missingLetter", () => {
  assertEquals(missingCharacter("abcdf"), "e");
  assertEquals(missingCharacter("hijlmno"), "k");
  assertEquals(missingCharacter("OQRS"), "P");
  assertEquals(missingCharacter("FGIJ"), "H");
  assertEquals(missingCharacter("123567"), "4");
});
