import getNextGeneration from "./getNextGeneration.js";
import { expect, test } from "vitest";

/**
 * Neighbours < 2 || Neighbours > 3 => Live cell dies
 * Neighbourd === 3 => Dead cell becomes alive
 * Source: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 */

const booleansThreeByThreeNeverChangingArray = [
  [true, false, false],
  [false, true, true],
  [false, false, true],
];

test("Test booleansThreeByThreeNeverChangingArray", () => {
  expect(
    getNextGeneration(booleansThreeByThreeNeverChangingArray)
  ).toStrictEqual([
    [true, false, false],
    [false, true, true],
    [false, false, true],
  ]);
});

const booleansFiveByFiveArray = [
  [false, false, false, true, false],
  [true, false, true, true, false],
  [false, false, false, false, false],
  [false, false, true, false, false],
  [true, true, false, false, true],
];

test("Test booleansFiveByFiveArray", () => {
  expect(getNextGeneration(booleansFiveByFiveArray)).toStrictEqual([
    [false, false, false, true, false],
    [false, false, true, true, true],
    [false, true, true, true, false],
    [true, true, false, false, false],
    [true, true, true, true, true],
  ]);
});
