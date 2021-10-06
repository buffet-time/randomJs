import { data } from './assets/twitchLeak.js'
import { Streamer } from './typings.js'
import fs from 'fs'

streamerIncome()

function streamerIncome(): void {
	const userJson: Streamer[] = []
	const dataArray = data.split('\n')
	dataArray.forEach((line) => {
		const lineArray = line.split(' ')
		userJson.push({
			position: lineArray[0],
			name: lineArray[1],
			revenue: lineArray[3]
		})
	})
	fs.writeFile('./output/test.json', JSON.stringify(userJson), (err) => {
		if (err) {
			console.error(err)
			return
		}
		//file written successfully
	})
}
