/*
 * Worst case: The search value is in not the array
 * */
export default function linearSearch(haystack: number[], needle: number) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true
  }

  return false
}
