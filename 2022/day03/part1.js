const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var rucksacks = input.split("\n")
                .map(rucksack => [rucksack.slice(0, rucksack.length / 2), rucksack.slice(rucksack.length / 2)]); //splits by departments

var departments = rucksacks.map(rucksack => rucksack.map(department => department.split(""))) //splits departments by letter
var equalLetters = departments.map(departments => departments[0].filter(letter => departments[1].includes(letter))) //gets equal letters from each rucksack
var lettersCode = equalLetters.map(letter => letter.toString().charCodeAt(0) >= 97 ? letter = letter.toString().charCodeAt(0) - 96 : letter = letter.toString().charCodeAt(0) - 38) //value from each letter

var sum = lettersCode.reduce((sum, value) => sum + value); //sums all the values

console.log(`\n${sum}`);