const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var depths = input.split("\n");

const counterMaxSize = 3;
var largerSums = 0;
var lineCounter = 0;
var lastSum;

for(i in depths)
{
    lineCounter++;

    if(lineCounter == counterMaxSize)
    {
        var sum = 0;

        for(x = counterMaxSize - 1; x >= 0; x--)
        {
            sum += Number(depths[i - x]);
        }
        
        if(lastSum != undefined && sum > lastSum)
        { 
            largerSums++;
        }

        lineCounter = counterMaxSize - 1;
        lastSum = sum;
    }
}

console.log(`\nLarger Sums: ${largerSums}`);