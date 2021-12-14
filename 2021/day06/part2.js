const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var fishes = input.split(",").map(n => Number(n));
var lifeCicle = new Array(9).fill(0); //Creates an array for the 9 possible days until borning

const days = 256;
var totalFishNumber = 0;

fishes.forEach(fish => lifeCicle[fish]++); //Adds the day one fishes into the array

for(i = 0; i < days; i++)
{
	var nextBorning = lifeCicle.shift(); //Removes the next ones borning (0 days remaining)
	lifeCicle.push(nextBorning); //Puts them on the end because the new ones start with 8 days remaining
	lifeCicle[6] += nextBorning; //Increments the same quantity at day 6 because the fishes that gave birth reset to 6 days remaining
}

lifeCicle.forEach(fish => totalFishNumber += fish);

console.log(`\nLanternfishes: ${totalFishNumber}`);