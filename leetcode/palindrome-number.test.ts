import isPalindrome from "./palindrome-number"

test("palindrome number", () => {
  expect(isPalindrome(-121)).toBeFalsy()
  expect(isPalindrome(0)).toBeTruthy()
  expect(isPalindrome(7)).toBeTruthy()
  expect(isPalindrome(121)).toBeTruthy()
  expect(isPalindrome(1221)).toBeTruthy()
  expect(isPalindrome(1231)).toBeFalsy()
})
