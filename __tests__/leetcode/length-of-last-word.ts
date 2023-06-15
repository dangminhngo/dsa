import lengthOfLastWord from "~/leetcode/length-of-last-word"

test("length of last word", () => {
  expect(lengthOfLastWord("Hello World")).toBe(5)
  expect(lengthOfLastWord("JavaScript Programming")).toBe(11)
  expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4)
})
