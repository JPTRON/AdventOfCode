const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");

var positions = input.split(",").map(n => Number(n));
var fuelPerPosition = new Array(Math.max(...positions) + 1).fill(0);
var cheapest;

for(i in positions)
{
    var fuel = 0;
    
    for(j = 0; j < fuelPerPosition.length; j++)
    {
        fuel = Math.abs(positions[i] - j);

        for(x = 0; x < Math.abs(positions[i] - j); x++)
        {
            fuel += x;
        }

        fuelPerPosition[j] += fuel;
    }
}

cheapest = Math.min(...fuelPerPosition);

console.log(`Cheapest: ${cheapest}`);