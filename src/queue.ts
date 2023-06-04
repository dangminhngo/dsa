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

  enqueue(item: T): void {
    const node: Node<T> = { value: item }
    this.length++

    if (!this.tail) {
      this.head = this.tail = node
      return
    }

    this.tail.next = node
    this.tail = node
  }

  dequeue(): T | undefined {
    if (!this.head) return
    this.length = Math.max(0, this.length - 1)

    const head = this.head
    this.head = this.head.next

    if (this.length === 0) {
      this.tail = undefined
    }

    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }

  toString(): string {
    let temp = this.head
    let str = ""

    while (temp) {
      str += temp.value
      temp = temp.next
      str += " "
    }
    return str
  }
}
