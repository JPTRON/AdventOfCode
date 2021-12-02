const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var commands = input.split("\n");

var horizontalPosition = 0;
var depth = 0;
var aim = 0;

for(i in commands)
{
    var command = commands[i].split(" ");
    
    switch (command[0]) {
        case 'forward':
            horizontalPosition += Number(command[1]);
            depth += (aim * Number(command[1]));
            break;
        case 'up':
            aim -= Number(command[1]);
            break;
        case 'down':
            aim += Number(command[1]);
            break;
    }
}

console.log(`\nResult: ${horizontalPosition * depth}`);