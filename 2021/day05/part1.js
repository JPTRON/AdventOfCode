const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8")
            .split("\n")
            .map((line) =>
                line.split(" -> ").map((coord) => coord.split(",").map((n) => Number(n)))
            )
            .filter(([[x1, y1], [x2, y2]]) => x1 === x2 || y1 === y2);


var xcoor = [];
var ycoor = [];
var linesOverlap = 0;

for(lineSegment in input)
{
    for(coordinate in input[lineSegment])
    {
        xcoor.push(input[lineSegment][coordinate][0]);
        ycoor.push(input[lineSegment][coordinate][1]);
    }
}

var xmax = xcoor.reduce((a,b) => Math.max(a, b));
var ymax = ycoor.reduce((a,b) => Math.max(a, b));

var diagram = new Array();

for(i = 0; i <= xmax; i++)
{
    diagram[i] = new Array();

    for(j = 0; j <= ymax; j++)
    {
        diagram[i][j] = ".";
    }
}

for(lineSegment in input)
{
    var x1 = input[lineSegment][0][0];
    var x2 = input[lineSegment][1][0];
    var y1 = input[lineSegment][0][1];
    var y2 = input[lineSegment][1][1];

    if(x1 === x2)
    {
        var start = y1 < y2 ? y1 : y2;
        var lineLength = Math.abs(y1 - y2) + 1;

        for(i = 0; i < lineLength; i++)
        {
            diagram[x1][start + i] = diagram[x1][start + i] === "." ? 1 : diagram[x1][start + i] + 1;
        }
    }
    else
    {
        var start = x1 < x2 ? x1 : x2;
        var lineLength = Math.abs(x1 - x2) + 1;

        for(i = 0; i < lineLength; i++)
        {
            diagram[start + i][y1] = diagram[start + i][y1] === "." ? 1 : diagram[start + i][y1] + 1;
        }
    }
}

var points = diagram.join(",").split(",");

for(i in points)
{
    if(points[i] >= 2) linesOverlap++;
}

console.log(`\nLines Overlap: ${linesOverlap}`);