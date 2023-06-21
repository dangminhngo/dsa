export default function quickSort(arr: number[]): void {
  return qs(arr, 0, arr.length - 1)
}

function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return
  }

  const pivotIndex = partition(arr, lo, hi)

  qs(arr, lo, pivotIndex - 1)
  qs(arr, pivotIndex + 1, hi)
}

/*
 * Take the last element as pivot, place the pivot element at its correct position
 * places all smaller elements to left, all greater elements to right
 * */
function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi]

  let index = lo - 1

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      index++
      swap(arr, index, i)
    }
  }
  index++
  swap(arr, index, hi)
  return index
}

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
