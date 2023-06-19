export default class Matrix {
  public rows = 0
  public cols = 0

  constructor(private m: number[][]) {
    this.rows = m.length
    this.cols = m[0].length
  }

  /*
   * Return the matrix
   * */
  get data(): number[][] {
    return this.m
  }

  /*
   * Convert to an array
   * */
  traverse(): number[] {
    const arr: number[] = []
    for (let i = 0; i < this.rows; ++i) {
      for (let j = 0; j < this.cols; ++j) {
        arr.push(this.m[i][j])
      }
    }

    return arr
  }

  /*
   * Sort the matrix
   * */
  sort(): void {
    const arr = this.traverse().sort()
    let k = 0
    for (let i = 0; i < this.rows; ++i) {
      for (let j = 0; j < this.cols; ++j) {
        this.m[i][j] = arr[k++]
      }
    }
  }

  /*
   * Search element, return indexes
   * */
  search(value: number): [number, number] {
    for (let i = 0; i < this.rows; ++i) {
      for (let j = 0; j < this.cols; ++j) {
        if (this.m[i][j] === value) {
          return [i, j]
        }
      }
    }

    return [-1, -1]
  }

  /*
   * Transpose
   * */
  transpose(): void {
    const arr = this.traverse()

    let k = 0
    for (let i = 0; i < this.rows; ++i) {
      for (let j = 0; j < this.cols; ++j) {
        this.m[j][i] = arr[k++]
      }
    }
  }
}
