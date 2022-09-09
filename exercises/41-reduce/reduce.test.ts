import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { reduce } from "./reduce.ts";

Deno.test("reduce", () => {
  assertEquals(
    reduce([1, 2, 3], (a, i) => a + i, 0),
    6
  );
  assertEquals(
    reduce(["a", "b", "c"], (a, i) => a + i, ""),
    "abc"
  );
  assertEquals(
    reduce([true, true, false], (a, i) => a && i, true),
    false
  );
  assertEquals(
    reduce([], (a, i) => a + i, 0),
    0
  );
  assertEquals(
    reduce(["a", "a", "a"], (a, i) => a + i.charCodeAt(0), 0),
    291
  );
  assertEquals(
    reduce([1, 2, 3], (a: string[], i) => [...a, i.toString()], []),
    ["1", "2", "3"]
  );
  assertEquals(
    reduce([1, 2, 3, 4], (a: number[], i) => (i % 2 === 0 ? [...a, i] : a), []),
    [2, 4]
  );
  assertEquals(
    reduce(
      [1, 2, 3],
      (a: number[], i, idx) => (idx % 2 === 0 ? [...a, i] : a),
      []
    ),
    [1, 3]
  );
  assertEquals(
    reduce([1, 2, 3], (_a: number[], _i, _idx, orig) => orig, []),
    [1, 2, 3]
  );
});
