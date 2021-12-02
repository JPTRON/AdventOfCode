const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var depths = input.split("\n");

var largerMeasurements = 0;

for(i in depths)
{
    if(i != 0 && Number(depths[i]) > Number(depths[i-1]))
    {
        largerMeasurements++;
    }
}

console.log(`\nLarger Measurements: ${largerMeasurements}`);