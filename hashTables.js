/* Hash Tables */

// Implementation
const hash = (string, max) => {
	let hash = 0

	for (let i = 0; i < string.length; i++) {
		hash += string.charCodeAt(i)
	}

	return hash % max
}

class HashTable {
	constructor(storageLimit = 4) {
		this.storage = []
		this.storageLimit = storageLimit
	}

	print() {
		console.log(this.storage)
	}

	add(key, value) {
		const index = hash(key, this.storageLimit)
		if (!this.storage[index]) {
			this.storage[index] = [[key, value]]
		} else {
			let inserted = false
			for (let i = 0; i < this.storage[index].length; i++) {
				if (this.storage[index][i][0] === key) {
					this.storage[index][i][1] = value
					inserted = true
				}
			}

			if (!inserted) {
				this.storage[index].push([key, value])
			}
		}
	}

	remove(key) {
		const index = hash(key, this.storageLimit)

		if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
			delete this.storage[index]
		} else {
			for (let i = 0; i < this.storage[index].length; i++) {
				if (this.storage[index][i][0] === key) {
					delete this.storage[index][i]
				}
			}
		}
	}

	lookup(key) {
		const index = hash(key, this.storageLimit)

		if (!this.storage[index]) {
			return undefined
		} else {
			for (let i = 0; i < this.storage[index].length; i++) {
				if (this.storage[index][i][0] === key) {
					return this.storage[index][i][1]
				}
			}
		}
	}
}

// Testing
console.log(hash('item', 10))

const ht = new HashTable(14)
ht.add('Zlatko', 'person')
ht.add('Bingo', 'dog')
ht.add('Rex', 'dinosour')
ht.add('Kovalski', 'penguin')
console.log(ht.lookup('Kovalski'))
ht.print()
