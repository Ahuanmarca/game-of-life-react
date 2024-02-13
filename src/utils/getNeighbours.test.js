import getNeighbours from "./getNeighbours.js";
import { expect, test } from "vitest";

const zerosAndOnesFiveByFiveArray = [
  [0, 0, 0, 1, 0],
  [1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 1],
];

test("Get neighbours from non border cells on zerosAndOnesFiveByFiveArray", () => {
  expect(getNeighbours([1, 1], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 0, 0, 1, 1, 0, 0, 0]);
  expect(getNeighbours([1, 2], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 0, 1, 0, 1, 0, 0, 0]);
  expect(getNeighbours([1, 3], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 1, 0, 1, 0, 0, 0, 0]);
  expect(getNeighbours([2, 1], zerosAndOnesFiveByFiveArray)).toStrictEqual([1, 0, 1, 0, 0, 0, 0, 1]);
  expect(getNeighbours([2, 2], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 1, 1, 0, 0, 0, 1, 0]);
  expect(getNeighbours([2, 3], zerosAndOnesFiveByFiveArray)).toStrictEqual([1, 1, 0, 0, 0, 1, 0, 0]);
  expect(getNeighbours([3, 1], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 0, 0, 0, 1, 1, 1, 0]);
  expect(getNeighbours([3, 2], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 0, 0, 0, 0, 1, 0, 0]);
  expect(getNeighbours([3, 3], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 0, 0, 1, 0, 0, 0, 1]);
});

test("Get neighbours from corners on zerosAndOnesFiveByFiveArray", () => {
  expect(getNeighbours([0, 0], zerosAndOnesFiveByFiveArray)).toStrictEqual([1, 1, 1, 0, 0, 0, 1, 0]);
  expect(getNeighbours([0, 4], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 1, 1, 1, 0, 1, 0, 1]);
  expect(getNeighbours([4, 0], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 0, 0, 1, 1, 0, 0, 0]);
  expect(getNeighbours([4, 4], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 0, 0, 0, 1, 1, 0, 0]);
});

test("Get neighbours from top border on zerosAndOnesFiveByFiveArray", () => {
  expect(getNeighbours([0, 1], zerosAndOnesFiveByFiveArray)).toStrictEqual([1, 1, 0, 0, 0, 1, 0, 1]);
  expect(getNeighbours([0, 2], zerosAndOnesFiveByFiveArray)).toStrictEqual([1, 0, 0, 0, 1, 0, 1, 1]);
  expect(getNeighbours([0, 3], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 0, 1, 0, 0, 1, 1, 0]);
});

test("Get neighbours from bottom border on zerosAndOnesFiveByFiveArray", () => {
  expect(getNeighbours([4, 1], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 0, 1, 1, 0, 0, 0, 0]);
  expect(getNeighbours([4, 2], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 1, 0, 1, 0, 0, 0, 1]);
  expect(getNeighbours([4, 3], zerosAndOnesFiveByFiveArray)).toStrictEqual([1, 0, 0, 0, 1, 0, 1, 0]);
});

test("Get neighbours from left border on zerosAndOnesFiveByFiveArray", () => {
  expect(getNeighbours([1, 0], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0]);
  expect(getNeighbours([2, 0], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 1, 0, 0, 0, 0, 0, 0]);
  expect(getNeighbours([3, 0], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 0, 0, 0, 0, 1, 1, 1]);
});

test("Get neighbours from right border on zerosAndOnesFiveByFiveArray", () => {
  expect(getNeighbours([1, 4], zerosAndOnesFiveByFiveArray)).toStrictEqual([1, 0, 0, 1, 1, 0, 0, 0]);
  expect(getNeighbours([2, 4], zerosAndOnesFiveByFiveArray)).toStrictEqual([1, 0, 1, 0, 0, 0, 0, 0]);
  expect(getNeighbours([3, 4], zerosAndOnesFiveByFiveArray)).toStrictEqual([0, 0, 0, 0, 0, 0, 1, 1]);
});

const zerosAndOnesTwoByTwoArray = [
  [0, 1],
  [1, 0],
];

test("Test zerosAndOnesTwoByTwoArray", () => {
  expect(getNeighbours([0, 0], zerosAndOnesTwoByTwoArray)).toStrictEqual([0, 1, 0, 1, 1, 0, 1, 0]);
  expect(getNeighbours([0, 1], zerosAndOnesTwoByTwoArray)).toStrictEqual([1, 0, 1, 0, 0, 1, 0, 1]);
  expect(getNeighbours([1, 0], zerosAndOnesTwoByTwoArray)).toStrictEqual([1, 0, 1, 0, 0, 1, 0, 1]);
  expect(getNeighbours([1, 1], zerosAndOnesTwoByTwoArray)).toStrictEqual([0, 1, 0, 1, 1, 0, 1, 0]);
});

const booleansThreeByThreeArray = [
  [true, false, false],
  [false, true, true],
  [false, false, true],
];

test("Test booleansThreeByThreeArray", () => {
  expect(getNeighbours([0, 0], booleansThreeByThreeArray)).toStrictEqual([true, false, false, false, false, true, false, true]);
  expect(getNeighbours([0, 1], booleansThreeByThreeArray)).toStrictEqual([false, false, true, true, false, false, true, true]);
  expect(getNeighbours([0, 2], booleansThreeByThreeArray)).toStrictEqual([false, true, false, false, true, true, true, false]);
  expect(getNeighbours([1, 0], booleansThreeByThreeArray)).toStrictEqual([false, true, false, true, true, true, false, false]);
  expect(getNeighbours([1, 1], booleansThreeByThreeArray)).toStrictEqual([true, false, false, false, true, false, false, true]);
  expect(getNeighbours([1, 2], booleansThreeByThreeArray)).toStrictEqual([false, false, true, true, false, false, true, false]);
  expect(getNeighbours([2, 0], booleansThreeByThreeArray)).toStrictEqual([true, false, true, true, false, false, true, false]);
  expect(getNeighbours([2, 1], booleansThreeByThreeArray)).toStrictEqual([false, true, true, false, true, true, false, false]);
  expect(getNeighbours([2, 2], booleansThreeByThreeArray)).toStrictEqual([true, true, false, false, false, false, false, true]);
});
