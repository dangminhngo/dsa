function removeDuplicates(nums: number[]): [number, number[]] {
  let dups = 0
  let resultNums = []

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i + 1] !== nums[i]) {
      resultNums.push(nums[i])
      dups++
    }
  }

  return [dups, resultNums]
}

export default removeDuplicates
