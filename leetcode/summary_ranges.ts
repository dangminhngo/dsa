function summaryRanges(nums: number[]): string[] {
  let res = []
  let start = nums[0],
    end = nums[0]

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] - nums[i - 1] === 1) continue

    end = nums[i - 1]

    if (start === end) {
      res.push(start + "")
    } else {
      res.push(`${start}->${end}`)
    }

    start = nums[i]
  }

  end = nums[nums.length - 1]
  if (start === end) {
    res.push(start + "")
  } else {
    res.push(`${start}->${end}`)
  }

  return res
}

export default summaryRanges
