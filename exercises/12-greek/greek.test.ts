import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { greek } from "./greek.ts";

Deno.test("greek", () => {
  assertEquals(greek(1), "alpha");
  assertEquals(greek(2), "beta");
  assertEquals(greek(3), "gamma");
  assertEquals(greek(4), "delta");
});
