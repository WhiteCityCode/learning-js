import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { missingCharacter } from "./missingCharacter.js";

Deno.test("missingLetter", () => {
  assertEquals(missingCharacter("adbfc"), "e");
  assertEquals(missingCharacter("hijlmno"), "k");
  assertEquals(missingCharacter("SQRO"), "P");
  assertEquals(missingCharacter("FGIJ"), "H");
  assertEquals(missingCharacter("573162"), "4");
});
