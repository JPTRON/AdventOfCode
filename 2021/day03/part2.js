const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var lines = input.split("\n");

const lineLength = lines[0].length;
var oxygenGeneratorRating;
var cO2ScrubberRating;
var lifeSupportRating;

function filterLines(pretended)
{
    var newLines = lines;
    var column = 0;

    while(newLines.length > 1)
    {
        var zerosCounter = 0;

        for(i in newLines)
        {
            if(newLines[i][column] == 0)
            {
                zerosCounter++;
            }
        }

        if(pretended === "most")
        {
            if(zerosCounter > newLines.length / 2)
            {
                newLines = newLines.filter((filteredLines) => filteredLines[column] == '0');
            }
            else
            {
                newLines = newLines.filter((filteredLines) => filteredLines[column] == '1');
            } 
        }
        else
        {
            if(zerosCounter < newLines.length / 2 || zerosCounter == newLines.length / 2)
            {
                newLines = newLines.filter((filteredLines) => filteredLines[column] == '0');
            }
            else
            {
                newLines = newLines.filter((filteredLines) => filteredLines[column] == '1');
            } 
        }   
        column++;
    }    

    return newLines;
}

oxygenGeneratorRating = parseInt(filterLines("most"), 2);
cO2ScrubberRating = parseInt(filterLines("fewer"), 2);

lifeSupportRating = oxygenGeneratorRating * cO2ScrubberRating;

console.log(`\nLife Support Rating: ${lifeSupportRating}`);