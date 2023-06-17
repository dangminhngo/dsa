import longestCommonPrefix from "./longest-common-prefix"

test("longest common prefix", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("")
})
