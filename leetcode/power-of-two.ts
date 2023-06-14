function isPowerOfTwo(n: number): boolean {
  if (n <= 0) {
    return false
  }
  return Math.log2(n) % 1 == 0
}

export default isPowerOfTwo
