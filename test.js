const countingChars = str => {
	const charCount = {} //Step 0
	let maxCharCount = 0
	let maxChar = ''
	for (let i = 0; i < str.length; i++) {
		// Step 1.
		charCount[str[i]] = ++charCount[str[i]] || 1
	}

	for (let key in charCount) {
		//Step 2
		if (charCount[key] >= maxCharCount) {
			maxCharCount = charCount[key] //Step 3
			maxChar = key
		}
	}

	return maxChar //Step 4
}

console.log(countingChars('racecar'))

// Anagrams check
const anagrams = (str1, str2) => {
	if (str1.length !== str2.length) {
		//step 1
		return false
	}
	let sort1 = str1.split('').sort() // step 2
	let sort2 = str2.split('').sort()
	return sort1.join('') === sort2.join('')
}

// Palindrome check
const palindrome = str => {
	let trimmed = str.replace(/[^\w]/g, '')
	return trimmed === trimmed.split('').reverse().join('') // Steps 1-4
}

// Balanced Brackets
const balancedbrackets = str => {
	const stack = []
	let openers = ['{', '[', '(']
	let closers = ['}', ']', ')']

	const dict = {
		'{': '}',
		'[': ']',
		'(': ')',
	}

	for (let i = 0; i < str.length; i++) {
		let char = str[i]
		if (openers.includes(char)) {
			stack.push(char)
		} else if (closers.includes(char)) {
			//is our stack empty?

			if (!stack.length) {
				return false
			}
			//does our popped element not match the corresponding element?
			else if (dict[stack.pop()] !== char) {
				return false
			}
		}
	}

	return stack.length === 0
}
