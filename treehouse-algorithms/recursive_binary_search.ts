function recursiveBinarySearch(list: number[], target: number): boolean {
	if (list.length === 0) return false

	let midpoint = Math.floor(list.length / 2)
	if (list[midpoint] === target) {
		return true
	} else {
		if (list[midpoint] < target) {
			return recursiveBinarySearch(list.slice(midpoint + 1), target)
		} else if (list[midpoint] > target) {
			return recursiveBinarySearch(list.slice(0, midpoint), target)
		} else {
			return false
		}
	}
}

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
