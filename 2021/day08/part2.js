const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");

var lines = input.split("\r\n");
var sum = 0;

for(i in lines)
{
    var upLeft;
    var upRight;
    var center;
    var downRight;

    var outputNumbers = lines[i].split("|")[1].split(" ").filter(n => n.length > 0);
    var outputValue = "";

    var onePattern = lines[i].split("|")[0].split(" ").filter(n => n.length === 2).toString();
    var sevenPattern = lines[i].split("|")[0].split(" ").filter(n => n.length === 3).toString();
    var fourPattern = lines[i].split("|")[0].split(" ").filter(n => n.length === 4).toString();
    var threePattern;
    var fivePattern;

    fourPattern = fourPattern.replace(onePattern[0], "").replace(onePattern[1], "");

    var zeroNineSix = lines[i].split("|")[0].split(" ").filter(n => n.length === 6);
    
    zeroNineSix.forEach(number => {
        if(!number.includes(fourPattern[0]))
        {
            center = fourPattern[0];
        }
        else if(!number.includes(fourPattern[1]))
        {
            center = fourPattern[1];
        }
    });

    upLeft = fourPattern.replace(center, "");

    var threeFiveTwo = lines[i].split("|")[0].split(" ").filter(n => n.length === 5);

    threeFiveTwo.forEach(number => {
        if(number.includes(onePattern[0]) && number.includes(onePattern[1]))
        {
            threePattern = number;
        }
        else if(number.includes(upLeft) && number.includes(onePattern[0]))
        {
            fivePattern = number;
            upRight = onePattern[1];
            downRight = onePattern[0]
        }
        else if(number.includes(upLeft) && number.includes(onePattern[1]))
        {
            fivePattern = number;
            upRight = onePattern[0];
            downRight = onePattern[1];
        }
    });

    outputNumbers.forEach(number => {
        switch (number.length) {
            case 2:
                outputValue += '1';
                break;
            case 3:
                outputValue += '7';
                break;

            case 4:
                outputValue += '4';
                break;

            case 7:
                outputValue += '8';
                break;
            
            case 5:
                if(number.includes(upRight) && number.includes(downRight))
                {
                    outputValue += '3';
                }
                else if(number.includes(upRight) && !number.includes(downRight))
                {
                    outputValue += '2';
                }
                else
                {
                    outputValue += '5';
                }
                break;

            case 6:
                if(number.includes(upRight) && number.includes(center))
                {
                    outputValue += '9';
                }
                else if(!number.includes(center))
                {
                    outputValue += '0';
                }
                else
                {
                    outputValue += '6';
                }
                break;
        }
    });

    sum += Number(outputValue);
}

console.log(`Sum: ${sum}`);