function romanToInt(s: string): number {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  type Key = keyof typeof roman

  let num = 0

  for (let i = 0; i < s.length - 1; ++i) {
    if (roman[s[i] as Key] < roman[s[i + 1] as Key]) {
      num -= roman[s[i] as Key]
    } else {
      num += roman[s[i] as Key]
    }
  }

  return num + roman[s[s.length - 1] as Key]
}

export default romanToInt
