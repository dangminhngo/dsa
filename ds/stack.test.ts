import Stack from "./stack"

test("stack", () => {
  const s = new Stack()

  expect(s.length).toBe(0)

  s.push(1)
  s.push(2)
  s.push(3)
  expect(s.length).toBe(3)
  expect(s.toArray()).toStrictEqual([1, 2, 3])

  expect(s.peek()).toBe(3)

  expect(s.isEmpty()).toBeFalsy()

  expect(s.pop()).toBe(3)
  expect(s.length).toBe(2)
  expect(s.pop()).toBe(2)
  expect(s.length).toBe(1)
  expect(s.pop()).toBe(1)
  expect(s.length).toBe(0)

  expect(s.isEmpty()).toBeTruthy()
})
