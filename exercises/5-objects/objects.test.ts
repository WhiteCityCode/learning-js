import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { objects } from "./objects.ts";

Deno.test("objects", () => {
  assertEquals(objects("John", "Doe", 35), {
    firstName: "John",
    lastName: "Doe",
    age: 35,
  });
  assertEquals(objects("Jane", "Doe", 30), {
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
  });
});
