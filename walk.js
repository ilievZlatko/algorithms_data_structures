function isValidWalk(walk) {
	//insert brilliant code here
	if (walk.length > 10) return false

	const directions = {}

	for (let i = 0; i < walk.length; i++) {
		if (!directions[walk[i]]) {
			directions[walk[i]] = 1
		} else {
			directions[walk[i]] += 1
		}

		if (i !== 0) {
			if (i - 1 === i) return false
		}
	}

	const directsToArr = Object.keys(directions).map(key => directions[key])
	const sum = directsToArr.reduce((a, b) => a + b, 0)
	console.log(sum % directsToArr.length)
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
