import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { objectDestructuring } from "./objectDestructuring.ts";

Deno.test("objectDestructuring", () => {
  assertEquals(
    objectDestructuring({ firstName: "Marco", lastName: "Polo", age: 710 }),
    "Marco Polo"
  );
  assertEquals(
    objectDestructuring({
      firstName: "Alexander",
      lastName: "the Great",
      age: 1710,
    }),
    "Alexander the Great"
  );
});
