// Constant / Linear time => O(n)
// Logaritmic runtime => O(logn)

/**
 * Returns the index position of the target if found, else returns None
 * @param list - Array of numbers
 * @param target - The given number to search
 * @returns number - the found target number or -1 if not found
 */
function linear_search(list: number[], target: number): number {
	for (let i of list) {
		if (i === target) {
			return i
		}
	}

	return -1
}

console.log(linear_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
