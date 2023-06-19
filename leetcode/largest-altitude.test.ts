import largestAltitude from "./largest-altitude"

test("find the highest altitude", () => {
  expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1)
  expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0)
  expect(
    largestAltitude([
      44, 32, -9, 52, 23, -50, 50, 33, -84, 47, -14, 84, 36, -62, 37, 81, -36,
      -85, -39, 67, -63, 64, -47, 95, 91, -40, 65, 67, 92, -28, 97, 100, 81,
    ])
  ).toBe(781)
})
