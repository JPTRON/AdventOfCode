const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var sections = input.split("\n")
               .map(elves => elves.split(",")) //splits into elves
               .map(section => section.map(section => section.split("-").map(number => Number(number)))) //splits elves into sections and converts to number
               .filter(section => (section[0][0] <= section[1][0] && section[0][1] >= section[1][1]) || (section[1][0] <= section[0][0] && section[1][1] >= section[0][1])) //filters by overlapping sections

console.log(sections.length);