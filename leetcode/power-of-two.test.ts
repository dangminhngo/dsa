import isPowerOfTwo from "./power-of-two"

test("power of two", () => {
  expect(isPowerOfTwo(-21)).toBeFalsy()
  expect(isPowerOfTwo(0)).toBeFalsy()
  expect(isPowerOfTwo(1)).toBeTruthy()
  expect(isPowerOfTwo(16)).toBeTruthy()
  expect(isPowerOfTwo(3)).toBeFalsy()
})
