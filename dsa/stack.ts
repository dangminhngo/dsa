type Node<T> = {
  value: T
  prev?: Node<T>
}

export default class Stack<T> {
  constructor(public length: number = 0, private head?: Node<T>) {}

  push(item: T): void {
    const node: Node<T> = { value: item }
    this.length++

    if (!this.head) {
      this.head = node
      return
    }

    node.prev = this.head
    this.head = node
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1)

    if (this.length === 0) {
      const head = this.head
      this.head = undefined
      return head?.value
    }

    const head = this.head as Node<T>
    this.head = head.prev
    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }

  isEmpty(): boolean {
    return !!this.head
  }

  toString(): string {
    let temp = this.head
    let str = ""

    while (temp) {
      str += temp.value
      temp = temp.prev
      str += " "
    }
    return str
  }
}
