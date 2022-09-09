import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { map } from "./map.ts";

Deno.test("map", () => {
  assertEquals(
    map([1, 2, 3, 4], (n: number) => `${n}`),
    ["1", "2", "3", "4"],
  );
  assertEquals(
    map([1, 2, 3, 4], (n: number) => n * 2),
    [2, 4, 6, 8],
  );
  assertEquals(
    map([], (n: number) => n),
    [],
  );
  assertEquals(
    map([1, 2, 3, 4], (n: number) => n),
    [1, 2, 3, 4],
  );
  assertEquals(
    map([1, 2, 3, 4], (n: number) => [n]),
    [[1], [2], [3], [4]],
  );

  const arr: Record<string, number>[] = [{ foo: 1 }, { bar: 2 }, { baz: 3 }];
  assertEquals(
    map(arr, (n: Record<string, number>) => Object.entries(n)),
    [[["foo", 1]], [["bar", 2]], [["baz", 3]]],
  );
});
