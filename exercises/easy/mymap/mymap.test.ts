import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { mymap } from "./mymap.js";

Deno.test("mymap", () => {
  assertEquals(
    mymap([1, 2, 3, 4], (n: number) => `${n}`),
    ["1", "2", "3", "4"],
  );
  assertEquals(
    mymap([1, 2, 3, 4], (n: number) => n * 2),
    [2, 4, 6, 8],
  );
  assertEquals(
    mymap([], (n: number) => n),
    [],
  );
  assertEquals(
    mymap([1, 2, 3, 4], (n: number) => n),
    [1, 2, 3, 4],
  );
  assertEquals(
    mymap([1, 2, 3, 4], (n: number) => [n]),
    [[1], [2], [3], [4]],
  );
  assertEquals(
    mymap(
      [{ foo: 1 }, { bar: 2 }, { baz: 3 }],
      (n: Record<string, number>) => Object.entries(n),
    ),
    [
      ["foo", 1],
      ["bar", 2],
      ["baz", 3],
    ],
  );
});
