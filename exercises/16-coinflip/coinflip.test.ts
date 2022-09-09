import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { coinflip } from "./coinflip.ts";

Deno.test("coinflip", () => {
  const tosses = new Set();
  let sanityCounter = 0;
  while (tosses.size < 2 && sanityCounter < 10000) {
    tosses.add(coinflip());
    sanityCounter++;
  }

  assertEquals(
    sanityCounter < 10000,
    true,
    "Stopped after 10k coin tosses, what's going on?"
  );
  
  assertEquals(tosses.has("heads"), true);
  assertEquals(tosses.has("tails"), true);
});
