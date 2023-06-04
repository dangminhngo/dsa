import Stack from "~/stack"

test("stack", () => {
  const stack = new Stack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)

  expect(stack.length).toBe(4)

  const value1 = stack.pop()
  expect(value1).toBe(4)
  const value2 = stack.pop()
  expect(value2).toBe(3)

  expect(stack.length).toBe(2)

  const peek = stack.peek()
  expect(peek).toBe(2)
})
