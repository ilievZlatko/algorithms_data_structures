// Write a function that takes in a non-empty array of integers that are sorted
// in ascending order and returns a new array of the same length with the squares
// of the original integers also sorted in ascending order.

// Complexity:
// Time: O(n logn)
// Space: O(n)
export function sortedSquaredArray(array: number[]) {
	// Write your code here.
	return array.map((item: number) => item * item).sort((a, b) => a - b)
}

// O(n) time | O(n) Space - where n is the length of the input array
export function sortedSquaredArrayOptimal(array: number[]) {
	// Write your code here.
	const sortedSquares = new Array(array.length).fill(0)
	let smallerValueIdx = 0
	let largerValueIdx = array.length - 1

	for (let i = array.length - 1; i >= 0; i--) {
		const smallerValue = array[smallerValueIdx]
		const largerValue = array[largerValueIdx]

		if (Math.abs(smallerValue) > Math.abs(largerValue)) {
			sortedSquares[i] = smallerValue * smallerValue
			smallerValueIdx++
		} else {
			sortedSquares[i] = largerValue * largerValue
			largerValueIdx--
		}
	}

	return sortedSquares
}
