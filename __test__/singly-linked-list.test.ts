import SinglyLinkedList from "~/singly-linked-list"

test("singly linked list", () => {
  const list = new SinglyLinkedList()

  list.push(21)
  list.push(15)
  list.push(45)
  list.unshift(8)
  list.unshift(12)

  expect(list.length).toBe(5)
  expect(list.log()).toBe("12 -> 8 -> 21 -> 15 -> 45")
  expect(list.get(3)).toBe(15)

  list.insertAt(99, 3)
  expect(list.get(3)).toBe(99)

  list.insertAt(32, 0)
  expect(list.get(0)).toBe(32)

  const removedValue2 = list.removeAt(0)
  expect(removedValue2).toBe(32)

  console.log(list.log())
})
