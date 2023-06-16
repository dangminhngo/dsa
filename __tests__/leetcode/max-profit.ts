import maxProfit from "~/leetcode/max-profit"

test("best time to buy and sell stock", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
})
