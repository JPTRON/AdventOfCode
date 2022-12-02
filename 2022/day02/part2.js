const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var lines = input.split("\n").map(line => line.split(" "));

var score = 0;

// A rock - 1 point
// B paper - 2 points
// C scissors - 3 points
// X - loss - 0 points | Y - draw - 3 points | Z - win - 6 points

for(i in lines)
{
    var counterPoints;
    var equalPoints;
    var lossPoints;

    
    console.log(lines[i])

    switch(lines[i][0])
    {
        case "A" : counterPoints = 2; equalPoints = 1; lossPoints = 3; break;
        case "B" : counterPoints = 3; equalPoints = 2; lossPoints = 1; break;
        case "C" : counterPoints = 1; equalPoints = 3; lossPoints = 2; break;
    }

    if(lines[i][1] == "Z")
    {
        console.log("win - +6", counterPoints)
        score += 6 + counterPoints; //win + choice
    }
    else if(lines[i][1] == "Y")
    {
        console.log("draw - +3", equalPoints)
        score += 3 + equalPoints; //draw + choise
    }
    else
    {
        console.log("loss - +0", lossPoints)
        score += 0 + lossPoints; //loss + choice
    }
    
    console.log(score)
    
    console.log("__________-________")
}

console.log(`\n${score}`);