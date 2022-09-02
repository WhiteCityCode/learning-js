import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { tictactoe } from "./tictactoe.js";

Deno.test("TicTacToe", () => {
  assertEquals(
    tictactoe([
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ]),
    true
  );
  assertEquals(
    tictactoe([
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ]),
    true
  );
  assertEquals(
    tictactoe([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]),
    true
  );
  assertEquals(
    tictactoe([
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ]),
    false
  );
  assertEquals(
    tictactoe([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]),
    false
  );
});
