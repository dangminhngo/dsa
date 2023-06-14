import twoCrystalBalls from "~/dsa/two-crystal-balls"

test("two crystal balls", () => {
  const NUMBER_OF_FLOORS = 10_000
  let index = Math.floor(Math.random() * NUMBER_OF_FLOORS)
  const data = Array.from({ length: NUMBER_OF_FLOORS }, (_, x) =>
    x < index ? false : true
  )

  expect(twoCrystalBalls(data)).toBe(index)
  expect(twoCrystalBalls(new Array(800).fill(false))).toBe(-1)
})
