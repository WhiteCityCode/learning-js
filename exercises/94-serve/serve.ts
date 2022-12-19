/**
 * This is a simple server that serves a list of cookies. The server is
 * implemented using the Oak framework for Deno.
 *
 * A web server is a program that listens for requests from clients, such as
 * web browsers, and returns responses. The server is a program that runs on a
 * computer and listens for requests on a specific port. When a request is
 * received, the server processes the request and returns a response.
 *
 * The Oak framework is a middleware framework for Deno's HTTP server. It
 * provides a robust set of features for building web applications and APIs.
 *
 * For example, the Oak framework provides a router that allows you to
 * register routes and handlers for those routes. The router also allows you to
 * specify HTTP methods, such as GET, POST, PUT, and DELETE. The router also
 * allows you to specify parameters in the route, such as /user/:id. The
 * parameters are then available in the context.params object.
 *
 * You can read more about how the web works here:
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works
 * https://developer.mozilla.org/en-US/docs/Learn/Common_questions
 *
 * You can read more about HTTP here:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP
 *
 * You can read more about web servers here:
 * https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server
 *
 * You can read more about the Oak router here:
 * https://deno.land/x/oak@v11.1.0#router
 *
 * You can read more about Oak here:
 * https://deno.land/x/oak@v11.1.0
 *
 */

import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { err404, cookies, cookie, search } from "./middlewares.ts";

const router = new Router();
router
  .get("/404", err404)
  .get("/cookies", cookies)
  .get("/cookie/:id", cookie)
  .get("/search/:term", search);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
