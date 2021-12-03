const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var lines = input.split("\n");

const lineLength = lines[0].length;
var gamma = "";
var epsilon = "";
var powerConsumption;

for(x = 0; x < lineLength - 1; x++)
{
    var zerosCounter = 0;

    for(i in lines)
    {
        if(lines[i][x] == 0)
        {
            zerosCounter++;
        }
    }

    if(zerosCounter > lines.length / 2)
    {
        gamma += 0;
        epsilon += 1;
    }
    else
    {
        gamma += 1;
        epsilon += 0;
    }
}

gamma = parseInt(gamma, 2);
epsilon = parseInt(epsilon, 2);

powerConsumption = gamma * epsilon;

console.log(`\nPower Consumption: ${powerConsumption}`);