import isPalindrome from "~/leetcode/valid-palindrome"

test("valid palindrome", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBeTruthy()
  expect(isPalindrome("race a car")).toBeFalsy()
  expect(isPalindrome(" ")).toBeTruthy()
})
