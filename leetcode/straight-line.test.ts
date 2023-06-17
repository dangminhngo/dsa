import checkStraightLine from "./straight-line"

test("check if it is a straight line", () => {
  expect(
    checkStraightLine([
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
    ])
  ).toBeTruthy()
  expect(
    checkStraightLine([
      [1, 1],
      [2, 2],
      [3, 4],
      [4, 5],
      [5, 6],
      [7, 7],
    ])
  ).toBeFalsy()
})
