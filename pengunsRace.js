/*
The situation...

The fastest penguins in the world have just swum for the ultimate prize in professional penguin swimming.
The cameras that were capturing the race stopped recording half way through.
The athletes, and the fans are in disarray waiting for the results.
The challenge...

Given the last recorded frame of the race, and an array of penguin athletes, work out the gold, silver and bronze medal positions.

The rules...

Assume all penguins swim at the same speed.
Waves (~) take twice as long to swim through as smooth water (-).
Penguins (p or P) are racing from left to right.
There can be any number of lanes, and the race can be any length.
All Lanes in a single race will be the same length.
Penguin names are in the same order as the lanes.
Return a string in this format: "GOLD: <name-1>, SILVER: <name-2>, BRONZE: <name-3>"
There will always be an equal amount of penguins and lanes.
There will always be a top three (no draws).
Examples...

Snapshot:
|----p---~---------|
|----p---~~--------|
|----p---~~~-------|

Penguins:
["Derek", "Francis", "Bob"]

Expected Output:
"GOLD: Derek, SILVER: Francis, BRONZE: Bob"
*/

const snapshot = `|----p---~---------|
    |----p---~~--------|
    |----p---~~~-------|`

const penguins = ['Derek', 'Francis', 'Bob']
// expected = "GOLD: Derek, SILVER: Francis, BRONZE: Bob";

function calculateWinners(snapshot, penguins) {
	// TODO: solve kata
	const lanes = snapshot
		.replace(/(\t|\r|\n|\s)/gm, '')
		.split(/\|(.*?)\|/)
		.filter(i => i !== '')
	let results = []

	for (let i = 0; i < lanes.length; i++) {
		let currentPosition = lanes[i].indexOf('p')
		if (currentPosition === -1) {
			currentPosition = lanes[i].indexOf('P')
		}

		const distanceLeft = lanes[i]
			.split('')
			.splice(currentPosition + 1, lanes[i].length - 1)

		const slowDownSections = distanceLeft.filter(i => i === '~')

		results.push({
			name: penguins[i],
			time: distanceLeft.length + slowDownSections.length,
		})
	}

	results = results.sort((a, b) => a.time - b.time)

	return `GOLD: ${results[0].name}, SILVER: ${results[1].name}, BRONZE: ${results[2].name}`
}

console.log(calculateWinners(snapshot, penguins))
