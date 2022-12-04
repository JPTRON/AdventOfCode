const { kMaxLength } = require("buffer");
const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var elves = input.split("\n")
                .reduce((elves, rucksack, i) => 
                {
                    var chunkIndex = Math.floor(i / 3)

                    if(!elves[chunkIndex])
                    {
                        elves[chunkIndex] = []
                    }

                    elves[chunkIndex].push(rucksack);

                    return elves;
                }, []); //forms groups of 3 elves

var rucksacks = elves.map(rucksack => rucksack.map(rucksack => rucksack.split(""))) //splits rucksacks by letter
var badges = rucksacks.map(rucksack => rucksack[0].filter(letter => rucksack[1].includes(letter) && rucksack[2].includes(letter))) //gets equal letters from each rucksack
var lettersCode = badges.map(letter => letter.toString().charCodeAt(0) >= 97 ? letter = letter.toString().charCodeAt(0) - 96 : letter = letter.toString().charCodeAt(0) - 38) //value from each letter

var sum = lettersCode.reduce((sum, value) => sum + value); //sums all the values

console.log(`\n${sum}`);