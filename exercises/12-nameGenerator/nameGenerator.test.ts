import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { nameGenerator } from "./nameGenerator.ts";

Deno.test("nameGenerator", () => {
  assertEquals(
    nameGenerator({ firstName: "Marco", lastName: "Polo", age: 710 }),
    "Marco Polo"
  );
  assertEquals(
    nameGenerator({
      firstName: "Alexander",
      lastName: "the Great",
      age: 1710,
    }),
    "Alexander the Great"
  );
});
