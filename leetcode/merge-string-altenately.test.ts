import mergeAlternately from "./merge-string-alternately"

test("merge string alternately", () => {
  expect(mergeAlternately("abc", "pqr")).toBe("apbqcr")
  expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs")
  expect(mergeAlternately("abcd", "pq")).toBe("apbqcd")
})
