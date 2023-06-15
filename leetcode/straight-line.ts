// @link https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/core-mathematics/geometry/equation-of-a-straight-line.html
function checkStraightLine(coordinates: number[][]): boolean {
  if (coordinates[1][0] === coordinates[0][0]) {
    for (const [x] of coordinates) {
      if (x !== coordinates[0][0]) return false
    }

    return true
  }

  const gradient =
    (coordinates[1][1] - coordinates[0][1]) /
    (coordinates[1][0] - coordinates[0][0])

  for (const [x, y] of coordinates) {
    if (y - coordinates[0][1] !== gradient * (x - coordinates[0][0])) {
      return false
    }
  }

  return true
}

export default checkStraightLine
