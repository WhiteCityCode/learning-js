import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { split } from "./splitString.ts";

Deno.test("guess", () => {
  assertEquals(split(""), [], "Beware of empty strings");
  assertEquals(split("Hello?"), ["H", "e", "l", "l", "o", "?"]);
  assertEquals(split("Hell no!"), ["H", "e", "l", "l", " ", "n", "o", "!"]);
  assertEquals(split("To the moon! "), [
    "T",
    "o",
    " ",
    "t",
    "h",
    "e",
    " ",
    "m",
    "o",
    "o",
    "n",
    "!",
    " ",
  ]);
});
