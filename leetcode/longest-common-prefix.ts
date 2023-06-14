function longestCommonPrefix(strs: string[]): string {
  let prefix = ""

  for (let i = 0; i < strs[0].length; ++i) {
    let isPrefix = true

    for (let j = 0; j < strs.length; ++j) {
      if (strs[0][i] !== strs[j][i]) {
        isPrefix = false
      }
    }

    if (isPrefix) {
      prefix += strs[0][i]
    } else {
      break
    }
  }

  return prefix
}

export default longestCommonPrefix
