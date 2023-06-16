import { swap } from "~/utils"

export default function selectionSort(arr: number[]) {
  let minIndex: number

  for (let i = 0; i < arr.length - 1; ++i) {
    minIndex = i
    for (let j = i + 1; j < arr.length; ++j) {
      console.log(arr)
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }

      swap(arr, minIndex, i)
    }
  }
}

selectionSort([64, 25, 12, 22, 11])
