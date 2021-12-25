const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var lines = input.split("\r\n");

var heightmap = new Array(lines.length).fill(new Array(lines[0].length).fill(0));
var riskLevelsSum = 0;

for(i = 0; i < lines.length; i++) 
{
    var locations = lines[i].split("").map(n => Number(n));
    heightmap[i] = locations;
}

for(y = 0; y < lines.length; y++)
{
    for(x = 0; x < lines[y].length; x++)
    {
        var adjacents = getAdjacents(y, x);

        if(lines[y][x] < Math.min(...adjacents))
        {
            riskLevelsSum += Number(lines[y][x]) + 1;
        }
    }
}

function getAdjacents(y, x)
{
    var adj = [];

    if(lines[y-1] != undefined)
    {
        adj.push(Number(lines[y-1][x]))
    }

    if(lines[y+1] != undefined)
    {
        adj.push(Number(lines[y+1][x]))
    }

    if(lines[y][x+1] != undefined)
    {
        adj.push(Number(lines[y][x+1]))
    }

    if(lines[y][x-1] != undefined)
    {
        adj.push(Number(lines[y][x-1]))
    }

    return adj;
}

console.log(`Sum of the risk levels: ${riskLevelsSum}`);