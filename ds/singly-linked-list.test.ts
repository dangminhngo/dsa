import SinglyLinkedList from "./singly-linked-list"

test("singly linked list", () => {
  const list = new SinglyLinkedList()

  expect(list.length).toBe(0)
  list.addFirst(1)
  list.addFirst(3)
  list.addFirst(6)
  expect(list.toArray()).toStrictEqual([6, 3, 1])
  expect(list.length).toBe(3)

  list.addLast(7)
  list.addLast(9)
  list.addLast(13)
  expect(list.toArray()).toStrictEqual([6, 3, 1, 7, 9, 13])
  expect(list.length).toBe(6)

  expect(list.contains(6)).toBeTruthy()
  expect(list.contains(10)).toBeFalsy()

  expect(list.getFirst()).toBe(6)
  expect(list.getLast()).toBe(13)

  expect(list.indexOf(6)).toBe(0)
  expect(list.indexOf(7)).toBe(3)
  expect(list.indexOf(13)).toBe(5)

  expect(list.removeAt(0)).toBe(6)
  expect(list.length).toBe(5)
  expect(list.remove(7))
  expect(list.length).toBe(4)

  expect(list.toArray()).toStrictEqual([3, 1, 9, 13])
  list.set(1, 8)
  expect(list.get(1)).toBe(8)
})
