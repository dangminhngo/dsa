/*
 * Worst case: The search value is in not the array
 * */
export default function binarySearch(haystack: number[], needle: number) {
  let lo = 0
  let hi = haystack.length - 1

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2)
    const value = haystack[mid]

    if (value === needle) {
      return true
    } else if (value > needle) {
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }

  return false
}
