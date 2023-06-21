import quickSort from "./quick-sort"

test("quick sort", () => {
  const arr = [13, 47, 28, 32, 96, 10]
  quickSort(arr)
  expect(arr).toStrictEqual([10, 13, 28, 32, 47, 96])
})
