/* Stacks */

// Implementing stack
class Stack {
	constructor() {
		this.count = 0
		this.storage = []
	}

	push(value) {
		this.storage[this.count] = value
		this.count++
	}

	pop() {
		if (this.count === 0) {
			return undefined
		}

		this.count--
		const result = this.storage[this.count]
		delete this.storage[this.count]
		return result
	}

	size() {
		return this.count
	}

	// returns the end of the stack
	peek() {
		return this.storage[this.count - 1]
	}
}

// Using our own stack
const stack = new Stack()

stack.push(1)
stack.push(2)

console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())

stack.push('someElement')

console.log(stack.size())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
