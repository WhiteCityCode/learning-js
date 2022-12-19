import {
  assertEquals,
} from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { testing, RouterContext } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { cookie, cookies, err404, search } from "./middlewares.ts";
import items from "./cookies.json" assert { type: "json" };

Deno.test({
  name: "/404",
  fn() {
    const ctx = testing.createMockContext({
      path: "/404",
    });
    err404(ctx as RouterContext<"/404">);
    assertEquals(ctx.response.status, 404);
  },
});

Deno.test({
  name: "/cookies",
  fn() {
    const ctx = testing.createMockContext({
      path: "/cookies",
    });
    cookies(ctx as RouterContext<"/cookies">);

    const { body } = ctx.response;
    assertEquals(Array.isArray(body), true);
    // assertEquals(Array.isArray(body) && body.length, 31);
  },
});

Deno.test({
  name: "/cookie",
  fn() {
    const ctx = testing.createMockContext({
      path: "/cookie/15",
      params: { id: "15" },
    });
    cookie(ctx as any);

    const { body } = ctx.response;
    assertEquals(body, items[14]);
  },
});

Deno.test({
  name: "/search/yuletide",
  fn() {
    const ctx = testing.createMockContext({
      path: "/search/yuletide",
      params: { term: "yuletide" },
    });
    search(ctx as any);

    const { body } = ctx.response;
    assertEquals(body, [items[28]]);
  },
});

