type Node<T> = {
  value: T
  prev?: Node<T>
}

export default class Stack<T> {
  constructor(public length: number = 0, private tail?: Node<T>) {}

  /*
   * Push a value to stack
   * */
  push(value: T): void {
    this.length++
    const node = { value } as Node<T>
    if (!this.tail) {
      this.tail = node
      return
    }

    node.prev = this.tail
    this.tail = node
  }

  /*
   * Remove the last value from stack, and return it
   * */
  pop(): T | undefined {
    if (!this.tail) return

    this.length = Math.max(0, this.length - 1)
    const tail = this.tail
    this.tail = this.tail.prev
    if (this.length === 0) {
      this.tail = undefined
    }
    return tail.value
  }

  /*
   * Return the last value without removing it
   * */
  peek(): T | undefined {
    return this.tail?.value
  }

  /*
   * Check if the stack is empty
   * */
  isEmpty(): boolean {
    return this.length === 0
  }

  /*
   * Convert to an array
   * */
  toArray(): T[] {
    const arr: T[] = []

    let curr = this.tail
    while (curr) {
      arr.unshift(curr.value)
      curr = curr.prev
    }

    return arr
  }
}
