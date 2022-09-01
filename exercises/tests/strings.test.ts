import { greetings } from "../strings/greetings.js";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { trim } from "../strings/trim.js";
import { countChar } from "../strings/countChar.js";
import { discriminator } from "../strings/discriminator.js";
import { palindrome } from "../strings/palindrome.js";
import { missingCharacter } from "../strings/missingCharacter.js";

Deno.test("countChar", () => {
  assertEquals(countChar("Baloons", 2), 2);
});

Deno.test("palindrome", () => {
  assertEquals(palindrome("anina"), true);
  assertEquals(palindrome("banana"), false);
});

Deno.test("missingLetter", () => {
  assertEquals(missingCharacter("abcdf"), "e");
  assertEquals(missingCharacter("hijlmno"), "k");
  assertEquals(missingCharacter("OQRS"), "P");
  assertEquals(missingCharacter("FGIJ"), "H");
  assertEquals(missingCharacter("123567"), "4");
});
