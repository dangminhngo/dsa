function lengthOfLastWord(s: string): number {
  let length = 0

  for (let i = 0; i < s.length; ++i) {
    if (
      s[s.length - 1 - i] === " " &&
      s[s.length - i] !== " " &&
      s[s.length - i] !== undefined
    ) {
      break
    }
    if (s[s.length - 1 - i] !== " ") {
      length++
    }
  }

  return length
}

export default lengthOfLastWord
