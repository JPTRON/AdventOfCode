const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var fishes = input.split(",").map(n => Number(n));

const days = 80;
var totalFishNumber = 0;

for(i = 0; i < days; i++)
{
	var j = 0;

    fishes.forEach(fish => {

        if(fish === 0)
        {
            fishes[j] = 6;
            fishes.push(8);
        }
        else
        {
            fishes[j]--;
        }

		j++;
	});
}

totalFishNumber = fishes.length;
console.log(`\nLanternfishes: ${totalFishNumber}`);