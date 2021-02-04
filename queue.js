/* Queues */

// Implementing queue
class Queue {
	constructor() {
		this.collection = []
	}

	print() {
		console.log(this.collection)
	}

	enqueue(element) {
		return this.collection.push(element)
	}

	dequeue() {
		return this.collection.shift()
	}

	front() {
		return this.collection[0]
	}

	size() {
		return this.collection.length
	}

	isEmpty() {
		return this.collection.length === 0
	}
}

// Implementing pirority queue
class PriorityQueue extends Queue {
	constructor() {
		super()
	}

	enqueue(element) {
		if (this.isEmpty()) {
			this.collection.push(element)
		} else {
			let added = false
			for (let i = 0; i < this.collection.length; i++) {
				if (element[1] < this.collection[i][1]) {
					this.collection.splice(i, 0, element)
					added = true
					break
				}
			}

			if (!added) {
				this.collection.push(element)
			}
		}
	}

	dequeue() {
		const value = this.collection.shift()
		return value[0]
	}
}

const q = new Queue()

q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.print()
q.dequeue()
console.log(q.front())
q.print()

const pq = new PriorityQueue()

pq.enqueue(['Tim Cook', 2])
pq.enqueue(['Bill Gates', 3])
pq.enqueue(['Elon Musk', 1])
pq.print()
console.log(pq.dequeue())
console.log(pq.front())
pq.print()
