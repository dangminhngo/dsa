import insertionSort from "~/dsa/insertion-sort"

test("buble sort", () => {
  const arr = [1, 4, 5, 2, 9, 7, 3, 6, 8]

  expect(insertionSort(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})
