const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var lines = input.split("\n").map(line => line.split(" "));

var score = 0;

// A | X - rock - 1 point
// B | Y - paper - 2 points
// C | Z - scissors - 3 points
// loss - 0 points | draw - 3 points | win - 6 points

for(i in lines)
{
    var counter;
    var equal;

    switch(lines[i][0])
    {
        case "A" : counter = "Y"; equal = "X"; break;
        case "B" : counter = "Z"; equal = "Y"; break;
        case "C" : counter = "X"; equal = "Z"; break;
    }

    if(lines[i][1] == counter)
    {
        score += 6; //win
    }
    else if(lines[i][1] == equal)
    {
        score += 3 //draw
    }

    switch(lines[i][1])
    {
        case "X" : score += 1; break;
        case "Y" : score += 2; break;
        case "Z" : score += 3; break;
    }
}

console.log(`\n${score}`);