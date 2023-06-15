import containsDuplicate from "~/leetcode/contains-duplicate"

test("contains duplicate", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy()
  expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy()
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy()
})
