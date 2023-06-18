class ListNode<T> {
  constructor(public value: T, public next?: ListNode<T>) {}
}

export default class SinglyLinkedList<T> {
  constructor(
    private size: number = 0,
    private head?: ListNode<T>,
    private tail?: ListNode<T>
  ) {}

  get length(): number {
    return this.size
  }

  /*
   *  Insert a node with the value to the beginning of the list
   * */
  addFirst(value: T): void {
    this.size++
    const node = new ListNode(value)

    if (!this.head) {
      this.head = this.tail = node
      return
    }

    node.next = this.head
    this.head = node
  }

  /*
   * Insert a node with the value to the end of the list
   * */
  addLast(value: T): void {
    this.size++
    const node = new ListNode(value)

    if (!this.tail) {
      this.head = this.tail = node
      return
    }

    this.tail.next = node
    this.tail = node
  }

  /*
   * Return the node value at the specified index. If not, return undefined
   * */
  get(index: number): T | undefined {
    if (index < 0 || index >= this.size) return undefined

    for (let curr = this.head, count = 0; curr; curr = curr.next, count++) {
      if (count === index) {
        return curr.value
      }
    }

    return undefined
  }

  /*
   * Get the first node value in the list (head)
   * */
  getFirst(): T | undefined {
    return this.head?.value
  }

  /*
   * Get the last node value in the list (tail)
   * */
  getLast(): T | undefined {
    return this.tail?.value
  }

  /*
   * Return true if the node value is present in the list
   * */
  contains(value: T): boolean {
    for (let curr = this.head; curr; curr = curr.next) {
      if (curr.value === value) return true
    }
    return false
  }

  /*
   * Find the index of the specified value in the list. If not, return -1
   * */
  indexOf(value: T): number {
    for (let curr = this.head, count = 0; curr; curr = curr.next, count++) {
      if (curr.value === value) return count
    }

    return -1
  }

  /*
   * Remove a node at the specified index, return boolean
   * */
  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this.size) {
      return
    }

    if (index === 0) {
      this.size = Math.max(0, this.size - 1)
      const head = this.head
      this.head = this.head?.next
      return head?.value
    }

    for (
      let curr = this.head,
        prev: ListNode<T> | undefined = undefined,
        count = 0;
      curr;
      prev = curr, curr = curr.next, count++
    ) {
      if (count === index && prev) {
        this.size = Math.max(0, this.size - 1)
        if (index === this.size - 1) {
          this.tail = prev
        }
        prev.next = curr.next
        return curr.value
      }
    }

    return
  }

  /*
   * Remove the first occurence of the node value, return boolean
   * */
  remove(value: T): boolean {
    if (this.head?.value === 0) {
      this.size = Math.max(0, this.size - 1)
      this.head = this.head?.next
      return true
    }

    for (
      let curr: ListNode<T> | undefined = this.head,
        prev: ListNode<T> | undefined = undefined;
      curr;
      prev = curr, curr = curr.next
    ) {
      if (curr.value === value && prev) {
        this.size = Math.max(0, this.size - 1)

        if (this.tail?.value === value) {
          this.tail = prev
        }

        prev.next = curr.next
        return true
      }
    }

    return false
  }

  /*
   * Return an array containing all elements in the list
   * */
  toArray(): T[] {
    const arr: T[] = []
    for (let curr = this.head; curr; curr = curr.next) {
      arr.push(curr.value)
    }

    return arr
  }

  /*
   * Set an element at the specified index
   * */
  set(index: number, value: T): T | undefined {
    if (index < 0 || index >= this.size) return

    for (let curr = this.head, count = 0; curr; curr = curr.next, count++) {
      if (count === index) {
        curr.value = value
        return value
      }
    }
  }

  /*
   *  Reverse the list
   * */
  reverse(): void {
    let curr = this.head,
      prev: ListNode<T> | undefined = undefined,
      next: ListNode<T> | undefined = undefined

    while (curr) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }

    this.head = prev
  }
}
