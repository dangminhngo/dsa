import isValid from "./valid-parentheses"

test("valid parentheses", () => {
  expect(isValid("()")).toBeTruthy()
  expect(isValid("()[]{}")).toBeTruthy()
  expect(isValid("(]")).toBeFalsy()
  expect(isValid("[{()}]")).toBeTruthy()
})
