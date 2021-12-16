const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");

var lines = input.split("\r\n");
var instances = 0;

for(i in lines)
{
    var outputNumbers = lines[i].split("|")[1].split(" ").filter(n => n.length > 0);

    outputNumbers.forEach(number => {
        if(number.length === 2 || number.length === 3 || number.length === 4 || number.length === 7)
        {
            instances++;
        }
    });
}

console.log(`Instances: ${instances}`);