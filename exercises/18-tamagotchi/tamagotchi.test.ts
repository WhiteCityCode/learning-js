import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { Pet } from "./pets.ts";
import { feed } from "./tamagotchi.ts";

Deno.test("tamagotchi", () => {
  const cat = new Pet("cat");
  assertEquals(cat.isFed(), false);
  cat.feed("potato");
  assertEquals(cat.isFed(), false);
  cat.feed("mice");
  assertEquals(cat.isFed(), true);

  const cat2 = new Pet("cat");
  assertEquals(cat2.isFed(), false);
  feed(cat2);
  assertEquals(cat2.isFed(), true);

  const chicken = new Pet("chicken");
  assertEquals(chicken.isFed(), false);
  feed(chicken);
  assertEquals(chicken.isFed(), true);

  const dog = new Pet("dog");
  assertEquals(dog.isFed(), false);
  feed(dog);
  assertEquals(dog.isFed(), true);

  const duck = new Pet("duck");
  assertEquals(duck.isFed(), false);
  feed(duck);
  assertEquals(duck.isFed(), true);

  const guinea_pig = new Pet("guinea_pig");
  assertEquals(guinea_pig.isFed(), false);
  feed(guinea_pig);
  assertEquals(guinea_pig.isFed(), true);
});
