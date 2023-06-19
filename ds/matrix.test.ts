import Matrix from "./matrix"

test("matrix", () => {
  const m = new Matrix([
    [0, 1, 2],
    [7, 8, 3],
    [6, 5, 4],
  ])

  expect(m.traverse()).toStrictEqual([0, 1, 2, 7, 8, 3, 6, 5, 4])
  expect(m.search(8)).toStrictEqual([1, 1])
  m.sort()
  expect(m.data).toStrictEqual([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ])
  m.transpose()
  expect(m.data).toStrictEqual([
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ])
})
