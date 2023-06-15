import removeDuplicates from "~/leetcode/remove-duplicates-from-sorted-array"

test("remove duplicates", () => {
  const firstNums = [1, 1, 2]
  const [firstDups, firstResultNums] = removeDuplicates(firstNums)
  expect(firstResultNums).toStrictEqual([1, 2])
  expect(firstDups).toBe(2)

  const secondNums = [0, 0, 1, 1, 2, 2, 3, 3, 4]
  const [secondDups, secondResultNums] = removeDuplicates(secondNums)
  expect(secondResultNums).toStrictEqual([0, 1, 2, 3, 4])
  expect(secondDups).toBe(5)
})
