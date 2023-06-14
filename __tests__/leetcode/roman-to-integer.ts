import romanToInt from "~/leetcode/roman-to-integer"

test("roman to integer", () => {
  expect(romanToInt("III")).toBe(3)
  expect(romanToInt("LVIII")).toBe(58)
  expect(romanToInt("MCMXCIV")).toBe(1994)
})
