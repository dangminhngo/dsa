function mergeAlternately(word1: string, word2: string): string {
  const merge: string[] = []
  for (let i = 0; i < word1.length || i < word2.length; ++i) {
    merge.push(word1[i], word2[i])
  }

  return merge.join("")
}

export default mergeAlternately
