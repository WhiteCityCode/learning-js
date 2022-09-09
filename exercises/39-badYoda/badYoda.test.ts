import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { badYoda } from "./badYoda.ts";

Deno.test("badYoda", () => {
  assertEquals(
    badYoda("May the force be with you"),
    "you with be force the May",
  );
});
