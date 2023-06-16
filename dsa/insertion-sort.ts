import { swap } from "~/utils"

export default function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; ++i) {
    for (let j = i - 1; j >= 0; --j) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j + 1, j)
      }
    }
  }

  return arr
}
