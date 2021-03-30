// Find the minimal change you CANNOT create by summing the amounts you have
// for example [1, 2, 5] - the minimum amount is 4
// 5, 7, 1, 1, 2, 3, 22] - minimum amount is 20

const mockInput = [5, 7, 1, 1, 2, 3, 22]
const mockInput2 = [1, 2, 5]

function nonConstructibleChange(coins: number[]): number {
	coins.sort((a, b) => a - b)

	let currentChangeCreated = 0
	for (const coin of coins) {
		if (coin > currentChangeCreated + 1) return currentChangeCreated + 1
		currentChangeCreated += coin
	}

	return currentChangeCreated + 1
}

console.log(nonConstructibleChange(mockInput))
