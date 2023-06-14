function isPalindrome(x: number): boolean {
  if (x < 0) return false

  if (x <= 9) return true

  const str = x.toString()
  for (let i = 0; i < str.length; ++i) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }

  return true
}

export default isPalindrome
