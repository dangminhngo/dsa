// @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/1735550/python-javascript-easy-solution-with-very-clear-explanation/
// O(n)
function maxProfit(prices: number[]): number {
  let max = 0,
    left = 0,
    right = 1

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left]
      max = Math.max(max, profit)
    } else {
      left = right
    }
    right++
  }

  return max
}

/*
 * This solution comes with O(n^2)
function maxProfit(prices: number[]): number {
  let profit = 0

  for (let i = 0; i < prices.length - 1; ++i) {
    for (let j = i + 1; j < prices.length; ++j) {
      profit = prices[j] - prices[i] > profit ? prices[j] - prices[i] : profit
    }
  }

  return profit
}
*/

export default maxProfit
