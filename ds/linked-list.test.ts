import { SinglyLinkedList, DoublyLinkedList } from "./linked-list"

test("singly linked list", () => {
  const list = new SinglyLinkedList()

  list.prepend(1)
  list.prepend(2)
  // 2 -> 1
  expect(list.length).toBe(2)

  list.append(4)
  list.append(5)
  // 2 -> 1 -> 4 -> 5
  expect(list.length).toBe(4)

  list.insertAt(0, 6)
  // 6 -> 2 -> 1 -> 4 -> 5
  list.insertAt(5, 7)
  // 6 -> 2 -> 1 -> 4 -> 5 -> 7
  list.insertAt(2, 8)
  // 6 -> 2 -> 8 -> 1 -> 4 -> 5 -> 7
  expect(list.length).toBe(7)
  expect(list.toArray()).toStrictEqual([6, 2, 8, 1, 4, 5, 7])

  expect(list.removeAt(0)).toBe(6)
  expect(list.length).toBe(6)
  expect(list.removeAt(5)).toBe(7)
  expect(list.length).toBe(5)
  expect(list.removeAt(1)).toBe(8)
  expect(list.length).toBe(4)

  expect(list.toArray()).toStrictEqual([2, 1, 4, 5])

  expect(list.remove(4)).toBeTruthy()
  expect(list.length).toBe(3)
  expect(list.remove(5)).toBeTruthy()
  expect(list.length).toBe(2)
  expect(list.remove(2)).toBeTruthy()
  expect(list.length).toBe(1)
  expect(list.remove(100)).toBeFalsy()
  expect(list.toArray()).toStrictEqual([1])
})

test("doubly linked list", () => {
  const list = new DoublyLinkedList()

  list.prepend(1)
  list.prepend(2)
  // 2 -> 1
  expect(list.length).toBe(2)

  list.append(4)
  list.append(5)
  // 2 -> 1 -> 4 -> 5
  expect(list.length).toBe(4)

  list.insertAt(0, 6)
  // 6 -> 2 -> 1 -> 4 -> 5
  list.insertAt(5, 7)
  // 6 -> 2 -> 1 -> 4 -> 5 -> 7
  list.insertAt(2, 8)
  // 6 -> 2 -> 8 -> 1 -> 4 -> 5 -> 7
  expect(list.length).toBe(7)
  expect(list.toArray()).toStrictEqual([6, 2, 8, 1, 4, 5, 7])

  expect(list.removeAt(0)).toBe(6)
  expect(list.length).toBe(6)
  expect(list.removeAt(5)).toBe(7)
  expect(list.length).toBe(5)
  expect(list.removeAt(1)).toBe(8)
  expect(list.length).toBe(4)

  expect(list.toArray()).toStrictEqual([2, 1, 4, 5])

  expect(list.remove(4)).toBeTruthy()
  expect(list.length).toBe(3)
  expect(list.remove(5)).toBeTruthy()
  expect(list.length).toBe(2)
  expect(list.remove(2)).toBeTruthy()
  expect(list.length).toBe(1)
  expect(list.remove(100)).toBeFalsy()
  expect(list.toArray()).toStrictEqual([1])
})
