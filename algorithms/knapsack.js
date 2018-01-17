const knapsack = (items, number) => {
  let matrix = Array.from({length: items.length + 1})
                    .map(_=>Array.from({length: number + 1}).fill(0))
  for (let i = 1; i <= items.length; i++) {
    for (let j = 1; j <= number; j++) {
      let item = items[i - 1];
      matrix[i][j] = j-item.weight >= 0
        ? Math.max(matrix[i-1][j], matrix[i-1][j-item.weight] + item.value)
        : matrix[i-1][j]
    }
  }

  return matrix[items.length][number]
}

let weights = [2,2,6,5,4]
let values = [6,3,5,4,6]
let items = weights.map((w, i) => ({weight: w, value: values[i]}))

for (let i = 1; i <= 10; i++) {
  console.log(`max weight: ${i}, max value: ${knapsack(items, i)}`)
}