// Write a function that takes a non-empty array of distinct integers and an integer representing a target sum.
// If any two numbers in the input array sum up to the target sum, the function should return them in an array, in order.
// If no two numbers sum up to the target sum, the function should return empty array.

// Example
// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10
// result: [-1, 11]

// solution #1 with complexity:
// Time O(n^2)
// Space O(1)
export function twoNumberSum(array: number[], targetSum: number) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === targetSum) {
				return [array[i], array[j]]
			}
		}
	}

	return []
}

// Solution #2 with improved complexity:
// Time O(n)
// Space O(n)
export function twoNumberSumV2(array: number[], targetSum: number) {
	const hashTable: any = {}

	for (let num in array) {
		if (hashTable[targetSum - array[num]]) {
			return [targetSum - array[num], array[num]]
		} else {
			hashTable[array[num]] = true
		}
	}

	return []
}

// Solution #3 with Complexity:
// Time: O(nlog(n))
// Space: O(1)
export function twoNumberSumV3(array: number[], targetSum: number) {
	const sortedArray = array.sort((a, b) => a - b)
	let left = 0
	let right = sortedArray.length - 1

	while (left < right) {
		const currentSum = sortedArray[left] + sortedArray[right]

		if (currentSum === targetSum) {
			return [sortedArray[left], sortedArray[right]]
		} else if (currentSum < targetSum) {
			left += 1
		} else if (currentSum > targetSum) {
			right -= 1
		}
	}

	return []
}
