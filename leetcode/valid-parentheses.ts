// Implement with stack (use javascript array as stack)
function isValid(s: string): boolean {
  if (s.length % 2 == 1 || s.length === 0) {
    return false
  }

  const stack = []

  for (const curr of s) {
    if ("([{".includes(curr)) {
      stack.push(curr)
    } else {
      if (stack.length === 0) {
        return false
      }

      if (stack[stack.length - 1] === "(" && curr === ")") {
        stack.pop()
      } else if (stack[stack.length - 1] === "[" && curr === "]") {
        stack.pop()
      } else if (stack[stack.length - 1] === "{" && curr === "}") {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}

export default isValid
