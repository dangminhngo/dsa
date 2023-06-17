import mergeSort from "./merge-sort"

test("merge sort", () => {
  const firstArr = [38, 27, 43, 10]
  mergeSort(firstArr, 0, firstArr.length - 1)
  expect(firstArr).toStrictEqual([10, 27, 38, 43])
})
