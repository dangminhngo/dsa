import binarySearch from "~/dsa/binary-search"

test("binary search array", () => {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420]
  expect(binarySearch(foo, 69)).toBeTruthy()
  expect(binarySearch(foo, 1336)).toBeFalsy()
  expect(binarySearch(foo, 69420)).toBeTruthy()
  expect(binarySearch(foo, 69421)).toBeFalsy()
  expect(binarySearch(foo, 1)).toBeTruthy()
  expect(binarySearch(foo, 0)).toBeFalsy()
})
