import { greetings } from "../strings/greetings.js";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { trim } from "../strings/trim.js";
import { countChar } from "../strings/countChar.js";
import { discriminator } from "../strings/discriminator.js";
import { palindrome } from "../strings/palindrome.js";
import { missingCharacter } from "../strings/missingCharacter.js";

Deno.test("greetings", () => {
  assertEquals(greetings("Jane Doe"), "Hello, Jane Doe!");
  assertEquals(greetings(""), "Hello, !");
});

Deno.test("trim", () => {
  assertEquals(trim(" foo"), "foo");
  assertEquals(trim("  foo"), "foo");
  assertEquals(trim(" foo "), "foo");
  assertEquals(trim(" foo  "), "foo");
  assertEquals(trim("  foo "), "foo");
  assertEquals(trim("foo "), "foo");
  assertEquals(trim("foo  "), "foo");
});

Deno.test("replace", () => {
  assertEquals(trim("I love fast cars"), "I love fast balloons");
  assertEquals(trim("I love fast snails"), "I love fast snails");
});

Deno.test("countChar", () => {
  assertEquals(countChar("Baloons", 2), 2);
});

Deno.test("discriminator", () => {
  assertEquals(discriminator("Jane Doe"), "Hello!");
  assertEquals(discriminator("Alice"), "Hello, Alice!");
  assertEquals(discriminator("Bob"), "Hello, Bob!");
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
