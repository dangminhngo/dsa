import Queue from "./queue"

test("queue", () => {
  const s = new Queue()

  expect(s.length).toBe(0)

  s.enqueue(1)
  s.enqueue(2)
  s.enqueue(3)
  expect(s.length).toBe(3)
  expect(s.toArray()).toStrictEqual([1, 2, 3])

  expect(s.peek()).toBe(1)

  expect(s.isEmpty()).toBeFalsy()

  expect(s.dequeue()).toBe(1)
  expect(s.length).toBe(2)
  expect(s.dequeue()).toBe(2)
  expect(s.length).toBe(1)
  expect(s.dequeue()).toBe(3)
  expect(s.length).toBe(0)

  expect(s.isEmpty()).toBeTruthy()
})
