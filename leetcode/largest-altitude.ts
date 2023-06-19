function largestAltitude(gain: number[]): number {
  const heights = [0]
  let max = heights[0]
  for (let i = 0; i < gain.length; ++i) {
    heights[i + 1] = heights[i] + gain[i]
    if (heights[i + 1] > max) {
      max = heights[i + 1]
    }
  }

  return max
}

export default largestAltitude
