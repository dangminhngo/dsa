function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length + 1 - needle.length; ++i) {
    let isSubstr = true
    for (let j = 0; j < needle.length; ++j) {
      if (haystack[i + j] !== needle[j]) {
        isSubstr = false
        break
      }
    }

    if (isSubstr) {
      return i
    }
  }

  return -1
}

export default strStr
