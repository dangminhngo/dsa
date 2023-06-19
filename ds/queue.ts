type Node<T> = {
  value: T
  next?: Node<T>
}

export default class Queue<T> {
  constructor(
    public length: number = 0,
    private head?: Node<T>,
    private tail?: Node<T>
  ) {}

  /*
   * Add a value to the queue
   * */
  enqueue(value: T): void {
    const node = { value } as Node<T>
    this.length++

    if (!this.tail) {
      this.head = this.tail = node
      return
    }

    this.tail.next = node
    this.tail = node
  }

  /*
   * Remove the first value from the queue, and return it
   * */
  dequeue(): T | undefined {
    if (!this.head) return

    this.length = Math.max(0, this.length - 1)
    const head = this.head
    this.head = head.next
    return head.value
  }

  /*
   * Have a look the first value in the queue
   * */
  peek(): T | undefined {
    return this.head?.value
  }

  /*
   * Check if the queue is empty
   * */
  isEmpty(): boolean {
    return this.length === 0
  }

  /*
   * Convert to an array
   * */
  toArray(): T[] {
    const arr: T[] = []
    let curr = this.head
    while (curr) {
      arr.push(curr.value)
      curr = curr.next
    }
    return arr
  }
}
