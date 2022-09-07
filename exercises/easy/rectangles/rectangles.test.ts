import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { limaxToPear, pearToLimax } from "./rectangles.ts";

Deno.test("limaxToPear", () => {
  assertEquals(
    limaxToPear([
      [0, 0],
      [10, 10],
    ]),
    [[0, 0], 10, 10],
  );
  assertEquals(
    limaxToPear([
      [0, 20],
      [120, 100],
    ]),
    [[0, 10], 120, 80],
  );
  assertEquals(
    limaxToPear([
      [10, 20],
      [120, 100],
    ]),
    [[0, 10], 120, 80],
  );
});

Deno.test("pearToLimax", () => {
  assertEquals(pearToLimax([[0, 0], 10, 10]), [
    [0, 0],
    [10, 10],
  ]);
  assertEquals(pearToLimax([[0, 10], 120, 80]), [
    [0, 20],
    [120, 100],
  ]);
  assertEquals(pearToLimax([[0, 10], 120, 80]), [
    [10, 20],
    [120, 100],
  ]);
});
