import { RouterContext } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import items from "./cookies.json" assert { type: "json" };

/**
 * This is a Map that contains all of the cookies from the cookies.json file.
 * The key is the id of the cookie and the value is the cookie object.
 * 
 * Use this Map to implement the endpoints.
 */
const CookieMap = items.reduce((acc, cookie) => {
  acc.set(cookie.id, cookie);
  return acc;
}, new Map<number, typeof items[0]>());

/**
 * In order to return a status code, you can use the
 * context.response.status property.
 *
 * You can read mode about HTTP status codes here:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
export const err404 = (context: RouterContext<"/404">) => {
  context.response.status = 404;
};

/**
 * This is an endpoint that returns a list of all of the cookies in the
 * cookies.json file.
 */
export const cookies = (context: RouterContext<"/cookies">) => {
  context.response.body = [];
};

/**
 * This is an endpoint that returns a single cookie from the cookies.json
 * file. The cookie is identified by the id parameter.
 */
export const cookie = (context: RouterContext<"/cookie/:id">) => {
  console.log(context.params.id);
  context.response.body = {};
};

/**
 * This is an endpoint that returns a list of cookies that contain the
 * search term in one of their properties. The search should be case insensitive
 * such that "yuletide" and "YULETIDE" should both return the same result.
 */
export const search = (context: RouterContext<"/search/:term">) => {
  console.log(context.params.id);
  context.response.body = [];
};
