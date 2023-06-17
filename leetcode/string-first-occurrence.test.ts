import strStr from "./string-first-occurrence"

test("find the index of the first occurrence in a string", () => {
  expect(strStr("sadbutsad", "sad")).toBe(0)
  expect(strStr("leetcode", "leeto")).toBe(-1)
})
