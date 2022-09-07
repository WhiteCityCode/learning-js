import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import powersOf2 from "./powersOf2.js";

Deno.test("powers of 2", () => {
  assertEquals(powersOf2(0), [], "Beware of 0");
  assertEquals(powersOf2(1), [2]);
  assertEquals(powersOf2(2), [2, 4]);
  assertEquals(
    powersOf2(12),
    [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096],
  );
});
