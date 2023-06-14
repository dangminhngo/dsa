import SinglyLinkedList from "~/dsa/singly-linked-list"

test("singly linked list", () => {
  const list = new SinglyLinkedList()

  list.append(21)
  list.append(15)
  list.append(45)
  list.prepend(8)
  list.prepend(12)

  expect(list.length).toBe(5)
  expect(list.toString()).toBe("12 -> 8 -> 21 -> 15 -> 45")
  expect(list.get(3)).toBe(15)

  list.insertAt(99, 3)
  expect(list.get(3)).toBe(99)

  list.insertAt(32, 0)
  expect(list.get(0)).toBe(32)

  const removedValue2 = list.removeAt(0)
  expect(removedValue2).toBe(32)
})
