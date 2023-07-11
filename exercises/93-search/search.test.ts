import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { search } from "./search.ts";

Deno.test("search", () => {
  assertEquals(search([{name: 'John', age: 20}, {name: 'Jane', age: 21}], 'Jane', ['name']),
			   [{name: 'Jane', age: 21}]);
});
