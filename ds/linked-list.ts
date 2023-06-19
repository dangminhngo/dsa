class ListNode<T> {
  constructor(
    public value: T,
    public next?: ListNode<T>,
    public prev?: ListNode<T>
  ) {}
}

export class SinglyLinkedList<T> {
  constructor(
    public length: number = 0,
    private head?: ListNode<T>,
    private tail?: ListNode<T>
  ) {}

  /*
   * Add a node to the beginning
   * */
  prepend(value: T): void {
    const node = new ListNode(value)
    this.length++

    if (!this.head) {
      this.head = this.tail = node
      return
    }

    node.next = this.head
    this.head = node
  }

  /*
   * Add a value to the end
   * */
  append(value: T): void {
    const node = new ListNode(value)
    this.length++

    if (!this.tail) {
      this.head = this.tail = node
      return
    }

    this.tail.next = node
    this.tail = node
  }

  /*
   * Insert a node at the specified index
   * */
  insertAt(index: number, value: T): void {
    if (index < 0 || index > this.length) throw new Error("Oops")

    if (index === 0) {
      this.prepend(value)
      return
    }

    if (index === this.length) {
      this.append(value)
      return
    }

    this.length++
    let curr = this.head,
      prev: ListNode<T> | undefined = undefined
    for (let i = 0; curr && i < index; ++i) {
      prev = curr
      curr = curr.next
    }
    const node = new ListNode(value)
    node.next = curr
    if (prev) {
      prev.next = node
    }
  }

  /*
   * Get the value at the specified index
   * */
  get(index: number): T | undefined {
    const curr = this.getNode(index)
    return curr?.value
  }

  /*
   * Set the node value at the specified index
   * */
  set(index: number, value: T): void {
    const curr = this.getNode(index)
    if (curr) {
      curr.value = value
    }
  }

  /*
   *  Remove a node at the specified index
   * */
  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this.length) {
      throw new Error("Oops")
    }

    this.length = Math.max(0, this.length - 1)

    if (index === 0) {
      const head = this.head as ListNode<T>
      this.head = head.next
      return head.value
    }

    let curr: ListNode<T> | undefined = this.head,
      prev: ListNode<T> | undefined = undefined

    for (let i = 0; curr && i < index; ++i) {
      prev = curr
      curr = curr.next
    }

    if (curr === this.tail) {
      const tail = this.tail as ListNode<T>
      if (prev) {
        prev.next = undefined
      }
      this.tail = prev
      return tail.value
    }

    if (prev) {
      prev.next = curr?.next
      return curr?.value
    }
  }

  /*
   *  Remove the first occurrence of node value
   * */
  remove(value: T): boolean {
    if (!this.head) return false

    if (this.head.value === value) {
      this.length = Math.max(0, this.length - 1)
      this.head = this.head.next
      return true
    }

    let curr: ListNode<T> | undefined = this.head,
      prev: ListNode<T> | undefined = undefined
    for (let i = 0; curr && i < this.length; ++i) {
      if (curr.value === value) {
        this.length = Math.max(0, this.length - 1)
        if (prev) {
          prev.next = curr.next
        }
        if (i === this.length) {
          this.tail = prev
        }
        return true
      }
      prev = curr
      curr = curr.next
    }

    return false
  }

  /*
   *  Get the node at the specified index
   * */
  private getNode(index: number): ListNode<T> | undefined {
    if (index > this.length) {
      throw new Error("Oops")
    }

    if (index === 0) return this.head
    if (index === this.length - 1) return this.tail

    let curr = this.head
    for (let i = 0; curr && i < index; ++i) {
      curr = curr.next
    }

    return curr
  }

  /*
   * Return an array containing all values in the list
   * */
  toArray() {
    const arr: T[] = []
    for (let curr = this.head; curr; curr = curr.next) {
      arr.push(curr.value)
    }

    return arr
  }
}

export class DoublyLinkedList<T> {
  constructor(
    public length: number = 0,
    private head?: ListNode<T>,
    private tail?: ListNode<T>
  ) {}

  /*
   * Add a node to the beginning
   * */
  prepend(value: T): void {
    const node = new ListNode(value)
    this.length++

    if (!this.head) {
      this.head = this.tail = node
      return
    }

    node.next = this.head
    this.head.prev = node
    this.head = node
  }

  /*
   * Add a value to the end
   * */
  append(value: T): void {
    const node = new ListNode(value)
    this.length++

    if (!this.tail) {
      this.head = this.tail = node
      return
    }

    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }

  /*
   * Insert a node at the specified index
   * */
  insertAt(index: number, value: T): void {
    if (index < 0 || index > this.length) throw new Error("Oops")

    if (index === 0) {
      this.prepend(value)
      return
    }

    if (index === this.length) {
      this.append(value)
      return
    }

    this.length++
    const curr = this.getNode(index) as ListNode<T>
    const node = new ListNode(value)

    node.next = curr
    node.prev = curr.prev
    if (curr.prev) {
      curr.prev.next = node
    }
    curr.prev = node
  }

  /*
   * Get the value at the specified index
   * */
  get(index: number): T | undefined {
    const node = this.getNode(index)
    return node?.value
  }

  /*
   * Set the node value at the specified index
   * */
  set(index: number, value: T): void {
    const curr = this.getNode(index)
    if (curr) {
      curr.value = value
    }
  }

  /*
   * Remove a node at the specified index
   * */
  removeAt(index: number): T | undefined {
    const curr = this.getNode(index)
    if (!curr) return

    this.length = Math.max(0, this.length - 1)
    if (curr === this.head) {
      const head = this.head as ListNode<T>
      this.head = head.next
      return head.value
    }

    if (curr === this.tail) {
      const tail = this.tail as ListNode<T>
      if (curr.prev) {
        curr.prev.next = undefined
      }
      this.tail = tail.prev
      return tail.value
    }

    if (curr.prev) {
      curr.prev.next = curr.next
    }

    if (curr.next) {
      curr.next.prev = curr.prev
    }

    return curr.value
  }

  /*
   * Remove the first occurrence of node value
   * */
  remove(value: T): boolean {
    if (!this.head) return false

    if (this.head.value === value) {
      this.length = Math.max(0, this.length - 1)
      const head = this.head as ListNode<T>
      if (head.next) {
        head.next.prev = undefined
      }
      this.head = head.next
      return true
    }

    let curr: ListNode<T> | undefined = this.head
    for (let i = 0; curr && i < this.length; ++i) {
      if (curr.value === value) {
        this.length = Math.max(0, this.length - 1)

        if (curr.prev) {
          curr.prev.next = curr.next
        }

        if (curr.next) {
          curr.next.prev = curr.prev
        }

        if (curr === this.tail) {
          this.tail = curr.prev
        }

        return true
      }
      curr = curr.next
    }

    return false
  }

  /*
   *  Get the node at the specified index
   * */
  private getNode(index: number): ListNode<T> | undefined {
    if (index < 0 || index > this.length) {
      throw new Error("Oops")
    }

    if (index === 0) return this.head
    if (index === this.length - 1) return this.tail

    let curr = this.head
    for (let i = 0; curr && i < index; ++i) {
      curr = curr.next
    }

    return curr
  }

  /*
   * Return an array containing all values in the list
   * */
  toArray() {
    const arr: T[] = []
    for (let curr = this.head; curr; curr = curr.next) {
      arr.push(curr.value)
    }

    return arr
  }
}
