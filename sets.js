// Implementation

class Sett {
	constructor() {
		this.collection = []
	}

	has(element) {
		return this.collection.indexOf(element) !== -1
	}

	values() {
		return this.collection
	}

	add(element) {
		if (!this.has(element)) {
			this.collection.push(element)
			return true
		}

		return false
	}

	remove(element) {
		if (this.has(element)) {
			const index = this.collection.indexOf(element)
			this.collection.splice(index, 1)
			return true
		}

		return false
	}

	size() {
		return this.collection.length
	}

	union(otherSet) {
		const unionSet = new Sett()
		const firstSet = this.values()
		const secondSet = otherSet.values()

		firstSet.forEach(element => unionSet.add(element))
		secondSet.forEach(element => unionSet.add(element))

		return unionSet
	}

	intersection(otherSet) {
		const intersectionSet = new Sett()
		const firstSet = this.values()

		firstSet.forEach(element => {
			if (otherSet.has(element)) {
				intersectionSet.add(element)
			}
		})

		return intersectionSet
	}

	difference(otherSet) {
		const differenceSet = new Sett()
		const firstSet = this.values()

		firstSet.forEach(element => {
			if (!otherSet.has(element)) {
				differenceSet.add(element)
			}
		})

		return differenceSet
	}

	subset(otherSet) {
		const firstSet = this.values()
		return firstSet.every(value => otherSet.has(value))
	}
}

// Testing
const setA = new Sett()
const setB = new Sett()

setA.add('a')
setB.add('b')
setB.add('c')
setB.add('a')
setB.add('d')

console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())
