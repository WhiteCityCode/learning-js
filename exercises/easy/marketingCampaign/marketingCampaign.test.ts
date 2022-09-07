import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { applyDiscount } from "./marketingCampaign.js";

Deno.test("applyDiscount", () => {
  assertEquals(applyDiscount([{ name: "Foo", price: 5 }]), [
    { name: "Foo", price: 5, discount: 0 },
  ]);

  assertEquals(applyDiscount([{ name: "Foo", price: 15 }]), [
    { name: "Foo", price: 15, discount: 15 },
  ]);

  assertEquals(applyDiscount([{ name: "Foo", price: 150 }]), [
    { name: "Foo", price: 150, discount: 10 },
  ]);

  assertEquals(
    applyDiscount([
      { name: "Foo", price: 150 },
      { name: "Bar", price: 50 },
      { name: "Baz", price: 5 },
    ]),
    [
      { name: "Foo", price: 150, discount: 10 },
      { name: "Bar", price: 50, discount: 15 },
      { name: "Baz", price: 5, discount: 0 },
    ],
  );
});
