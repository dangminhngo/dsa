import DoublyLinkedList from "./doubly-linked-list"

test("doubly linked list", () => {
  const list = new DoublyLinkedList()
  list.append(2)
  list.append(5)
  list.append(3)
  list.prepend(1)
  list.prepend(9)

  expect(list.length).toBe(5)
  expect(list.toString()).toBe("9 <-> 1 <-> 2 <-> 5 <-> 3")

  expect(list.get(3)).toBe(5)
  expect(list.get(0)).toBe(9)
  expect(list.get(4)).toBe(3)
  expect(list.get(5)).toBeUndefined()

  list.insertAt(13, 0)
  list.insertAt(10, 2)
  expect(list.length).toBe(7)
  expect(list.get(0)).toBe(13)
  expect(list.get(2)).toBe(10)

  list.removeAt(0)
  console.log(list.toString())
  expect(list.length).toBe(6)
  list.remove(5)
  expect(list.length).toBe(5)
  expect(list.toString()).toBe("9 <-> 10 <-> 1 <-> 2 <-> 3")
})
