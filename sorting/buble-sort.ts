import { swap } from "~/utils"

export default function bubleSort(arr: number[]) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }

  return arr
}
