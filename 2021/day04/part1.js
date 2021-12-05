const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var numbers = input.split("\n").shift().split(/\r/)[0].split(",");
var boards = input.split(/\r/).join("").split("\n\n");
boards.shift();

const lineLength = 5;
var score;

for(i in numbers)
{    
    for(z in boards)
    {
        if(i == 0)
        {
            boards[z] = boards[z].replace(/\n/g, ' ').split(" ").filter(value => Object.keys(value).length !== 0);
            boards[z] = listToMatrix(boards[z], lineLength);
        }

        for(x = 0; x < lineLength; x++)
        {
            for(y = 0; y < lineLength; y++)
            {
                if(boards[z][x][y] == numbers[i])
                {
                    boards[z][x][y] = "x";
                    
                    for(l = 0; l < lineLength; l++)
                    {
                        var column = [];

                        for(c = 0; c < lineLength; c++)
                        {
                            column.push(boards[z][c][l]);
                        }

                        if(boards[z][x].every((value) => value === boards[z][x][0]) || column.every((value) => value === boards[z][0][y]))
                        {
                            calculateScore(boards[z], numbers[i]);
                            return;
                        }
                    }      
                }
            }
        }        
    }
}

function listToMatrix(list, matrixLineLength) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % matrixLineLength === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}

function calculateScore(board, lastNumber)
{
    var boardNumbers = board.join().split(",");
    var sum = 0;

    for(i in boardNumbers)
    {
        if(boardNumbers[i] !== "x")
        {
            sum += Number(boardNumbers[i]);
        }
    }

    score = sum * lastNumber;
    
    console.log(`\nScore: ${score}`);
}

