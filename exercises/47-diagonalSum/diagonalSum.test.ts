import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { diagonalSum } from "./diagonalSum.ts";

Deno.test("diagonalSum", () => {
  assertEquals(
    diagonalSum([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ]),
    15
  );
  assertEquals(
    diagonalSum([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]),
    0
  );
  assertEquals(
    diagonalSum([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]),
    0
  );
  assertEquals(
    diagonalSum([
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ]),
    0
  );
});
