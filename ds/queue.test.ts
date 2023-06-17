import Queue from "./queue"

test("queue", () => {
  const queue = new Queue()
  queue.enqueue(1)
  queue.enqueue(3)
  queue.enqueue(4)
  queue.enqueue(2)

  expect(queue.length).toBe(4)

  const value1 = queue.dequeue()
  expect(value1).toBe(1)
  const value2 = queue.dequeue()
  expect(value2).toBe(3)
  expect(queue.length).toBe(2)
})
