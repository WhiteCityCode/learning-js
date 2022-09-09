import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { useState } from "./useState.ts";

Deno.test("useState", () => {
  const [getCount, setCount] = useState(0);
  const [getCount2, setCount2] = useState(0);
  assertEquals(getCount(), 0);
  assertEquals(getCount2(), 0);

  setCount(10);
  setCount2(20);

  assertEquals(getCount(), 10);
  assertEquals(getCount2(), 20);
});
