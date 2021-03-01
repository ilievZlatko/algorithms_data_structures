// Validate Subsequence
/*
Given two non-empty arrays of integers, write a function that determines whether the seond array is subsequence to the first one.
Example:
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
should return true
*/

// Solution one:
// Complexity:
// Time: O(n)
// Space: O(1)
export function isValidSubsequence(
	array: number[],
	sequence: number[],
): boolean {
	let arrIdx: number = 0
	let seqIdx: number = 0
	while (arrIdx < array.length && seqIdx < sequence.length) {
		if (array[arrIdx] === sequence[seqIdx]) {
			seqIdx += 1
		}
		arrIdx += 1
	}

	return seqIdx === sequence.length
}

// Solution two:
// Complexity:
// Time: O(n)
// Space: O(1)
export function isValidSubsequenceV2(array: number[], sequence: number[]) {
	let seqIdx: number = 0

	for (let value of array) {
		if (seqIdx === sequence.length) return true

		if (sequence[seqIdx] === value) {
			seqIdx += 1
		}
	}

	return seqIdx === sequence.length
}
