import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { xsum } from "./xsum.js";

Deno.test("useState", () => {
  const matrix = [
    [1, 227, 20, 664, 7],
    [917, 27, 121, 4, 567],
    [51, 996, 8, 0, 16],
    [87, 18, 29, 60, 2],
    [18, 986, 87, 2, 0],
    [0, 7, 0, 4, 0],
  ];

  assertEquals(xsum(matrix, [2, 1]), 2008);
  assertEquals(xsum(matrix, [0, 0]), 28);
});
