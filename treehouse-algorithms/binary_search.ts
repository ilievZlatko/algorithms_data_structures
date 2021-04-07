/**
 * Returns the index position of the target if found, else returns None
 * @param list - array of numbers
 * @param target - number
 * @returns number
 */
function binary_search(list: number[], target: number): number {
	let first: number = 0
	let last: number = list.length - 1

	while (first <= last) {
		let midPoint: number = Math.floor((first + last) / 2)

		if (list[midPoint] === target) {
			return midPoint
		} else if (list[midPoint] < target) {
			first = midPoint + 1
		} else {
			last = midPoint - 1
		}
	}

	return -1
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
