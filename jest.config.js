/** @type {import('jest').Config} */
module.exports = {
  clearMocks: true,
  rootDir: ".",
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
}
