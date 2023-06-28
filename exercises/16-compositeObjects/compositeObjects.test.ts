import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { compositeObjects } from "./compositeObjects.ts";

Deno.test("compositeObjects", () => {
  assertEquals(
    compositeObjects({ firstName: "George", lastName: "Doe", age: 18 }),
    { firstName: "George", lastName: "Doe", fullName: "George Doe", age: 18 }
  );
  assertEquals(
    compositeObjects({ firstName: "John", lastName: "von Neumann", age: 119 }),
    { firstName: "John", lastName: "von Neumann", fullName: "John von Neumann", age: 119 }
  );
});
