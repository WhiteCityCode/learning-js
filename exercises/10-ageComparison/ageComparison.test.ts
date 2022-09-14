import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { ageComparison } from "./ageComparison.ts";

Deno.test("ageComparison", () => {
  assertEquals(
    ageComparison(
      { firstName: "George", lastName: "Doe", age: 18 },
      { firstName: "John", lastName: "Doe", age: 20 }
    ),
    { firstName: "John", lastName: "Doe", age: 20 }
  );
  assertEquals(
    ageComparison(
      { firstName: "George", lastName: "Doe", age: 20 },
      { firstName: "John", lastName: "Doe", age: 18 }
    ),
    { firstName: "George", lastName: "Doe", age: 20 }
  );
  assertEquals(
    ageComparison(
      { firstName: "George", lastName: "Doe", age: 20 },
      { firstName: "John", lastName: "Doe", age: 20 }
    ),
    { firstName: "John", lastName: "Doe", age: 20 },
    "If both have the same age, you should return the 2nd person"
  );
});
