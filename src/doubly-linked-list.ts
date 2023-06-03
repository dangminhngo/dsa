class ListNode<T> {
  constructor(
    public value: T,
    public next?: ListNode<T>,
    public prev?: ListNode<T>
  ) {}
}

export default class DoublyLinkedList<T> {
  constructor(public head?: ListNode<T>, public tail?: ListNode<T>) {}

  get length(): number {
    let temp = this.head
    let count = 0

    while (temp) {
      count++
      temp = temp.next
    }

    return count
  }

  append(value: T) {
    const node = new ListNode(value)

    if (!this.tail) {
      this.head = this.tail = node
      return
    }

    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }

  prepend(value: T) {
    const node = new ListNode(value)

    if (!this.head) {
      this.head = this.tail = node
      return
    }

    node.next = this.head
    this.head.prev = node
    this.head = node
  }

  toString() {
    let temp = this.head
    let str = ""

    while (temp) {
      str += temp.value
      temp = temp.next
      if (temp) {
        str += " <-> "
      }
    }

    return str
  }

  get(index: number) {
    let temp = this.head
    let count = 0

    while (temp) {
      if (count === index) {
        return temp.value
      }
      count++
      temp = temp.next
    }
  }

  insertAt(value: T, index: number) {
    const node = new ListNode(value)

    if (index === 0) {
      node.next = this.head
      this.head = node
    }

    let temp = this.head
    let prev: ListNode<T> | undefined
    let count = 0

    while (temp) {
      if (count === index) {
        break
      }
      count++
      prev = temp
      temp = temp.next
    }

    if (!temp) return

    if (prev) {
      node.prev = prev
      node.next = temp
      prev.next = node
      temp.prev = node
    }
  }

  removeAt(index: number) {
    if (!this.head) return

    if (index === 0) {
      this.head = this.head.next
      if (this.head) {
        this.head.prev = undefined
      }
    }

    let temp = this.head
    let prev: ListNode<T> | undefined
    let count = 0

    while (temp) {
      if (count === index) {
        break
      }
      count++
      prev = temp
      temp = temp.next
    }

    if (!temp) return

    if (prev) {
      prev.next = temp.next
      temp.prev = prev
    }
  }

  remove(value: T) {
    let temp = this.head
    let prev: ListNode<T> | undefined

    while (temp) {
      if (value === temp.value) {
        break
      }
      prev = temp
      temp = temp.next
    }

    if (!temp) return

    if (prev) {
      prev.next = temp.next
      temp.prev = prev
    }
  }
}
