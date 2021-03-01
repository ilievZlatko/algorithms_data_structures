/*
There's an algorithms tournament taking place in which teams of programmers
compete against each other to solve algorithmic problems as fast as possible.
Teams compete in a round robin, where each team faces off against all other
teams. Only two teams compete against each other at a time, and for each
competition, one team is designated the home team, while the other team is the
away team. In each competition there's always one winner and one loser; there
are no ties. A team receives 3 points if it wins and 0 points if it loses. The
winner of the tournament is the team that receives the most amount of points.


Given an array of pairs representing the teams that have competed against each
other and an array containing the results of each competition, write a
function that returns the winner of the tournament. The input arrays are named
"competitions" and "results", respectively. The "competitions" array has elements
in the form of [homeTeam, awayTeam], where each team is a string of at most 30
characters representing the name of the team. The "results" array contains
information about the winner of each corresponding competition in the "competitions"
array. Specifically, results[i] denotes the winner of competitions[i] where a 1 in
the results array means that the home team in the corresponding competition won and
a 0 means that the away team won.

Sample input:
competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
]
results = [0, 0, 1]

Sample output:
C# beats HTML, Python beats C#, and Python beats HTML.
HTML - 0 points
C# - 3 points
Python - 6 points
*/

// Solution:
// Time: O(n) => n represents number of competitions (competitions.length)
// Space: O(k) => k is the space we need for scores (keys in the scores object)
const HOME_TEAM_WON = 1

interface Team {
	[team: string]: number
}

export function tournamentWinner(competitions: string[][], results: number[]) {
	let currentBestTeam = ''
	const scores: Team = { [currentBestTeam]: 0 }

	for (let i = 0; i < competitions.length; i++) {
		const result = results[i]
		const [homeTeam, awayTeam] = competitions[i]
		const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam

		if (!(winningTeam in scores)) scores[winningTeam] = 0

		scores[winningTeam] += 3

		if (scores[winningTeam] > scores[currentBestTeam]) {
			currentBestTeam = winningTeam
		}
	}

	return currentBestTeam
}

const competitions = [
	['HTML', 'C#'],
	['C#', 'Python'],
	['Python', 'HTML'],
]

const results = [0, 0, 1]

console.log(tournamentWinner(competitions, results))
