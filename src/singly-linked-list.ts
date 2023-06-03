interface IListNode<T> {
  value: T
  next?: ListNode<T>
}

class ListNode<T> implements IListNode<T> {
  constructor(public value: T, public next?: ListNode<T>) {}
}

interface ISinglyLinkedList<T> {
  get length(): number
  log(): string
  removeAt(index: number): T | undefined
  remove(value: T): T | undefined
  get(index: number): T | undefined
  unshift(value: T): void
  push(value: T): void
  insertAt(value: T, index: number): void
}

export default class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
  constructor(private head?: ListNode<T>, private tail?: ListNode<T>) {}

  get length() {
    if (!this.head) return 0

    let temp: ListNode<T> | undefined = this.head
    let count = 0

    while (temp) {
      count++
      temp = temp.next
    }

    return count
  }

  log() {
    if (!this.head) return "This singly linked list is empty"
    let temp: ListNode<T> | undefined = this.head
    let str = ""

    while (temp) {
      str += `${temp.value}`
      temp = temp.next

      if (temp) {
        str += " -> "
      }
    }

    return str
  }

  removeAt(index: number) {
    if (!this.head) return

    if (index === 0) {
      const value = this.head.value
      this.head = this.head.next
      return value
    }

    let temp: ListNode<T> | undefined = this.head
    let count = 0
    let prev: ListNode<T> | undefined

    while (temp) {
      if (count === index) {
        break
      }
      prev = temp
      temp = temp.next
    }

    if (!temp) return

    if (prev) {
      prev.next = temp.next
      return temp.value
    }

    return
  }

  remove(value: T) {
    if (!this.head) return

    if (this.head.value === value) {
      this.head = this.head.next
      return value
    }

    let temp: ListNode<T> | undefined = this.head
    let prev: ListNode<T> | undefined

    while (temp) {
      if (temp.value === value) {
        break
      }
      prev = temp
      temp = temp.next
    }

    if (!temp) return

    if (prev) {
      prev.next = temp.next
      return value
    }

    return
  }

  get(index: number) {
    let temp: ListNode<T> | undefined = this.head
    let count = 0

    while (temp) {
      if (count === index) {
        return temp.value
      }
      count++
      temp = temp.next
    }

    return
  }

  unshift(value: T) {
    const node = new ListNode(value)

    if (!this.head) {
      this.head = this.tail = node
      return
    }

    node.next = this.head
    this.head = node
  }

  push(value: T) {
    const node = new ListNode(value)

    if (!this.tail) {
      this.head = this.tail = node
      return
    }

    this.tail.next = node
    this.tail = node
  }

  insertAt(value: T, index: number) {
    if (!this.head) return

    const node = new ListNode(value)

    if (index === 0) {
      node.next = this.head.next
      this.head = node
      return
    }

    let temp: ListNode<T> | undefined = this.head
    let count = 0

    while (temp) {
      if (count === index - 1) {
        node.next = temp.next
        temp.next = node
      }
      count++
      temp = temp.next
    }
  }
}
