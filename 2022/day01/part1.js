const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var elfs = input.split("\n\n");

var mostCalories = elfs.map(elf => elf.split("\n")) //splits the array into multiple arrays containing each food calories
                   .map(elf => elf.reduce((calories, value) => Number(calories) + Number(value))) //sums every food calories and returns an array with the total calories of each elf

console.log(`\n${Math.max(...mostCalories)}`);