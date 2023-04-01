const fs = require("fs");

var input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
var crates = input.split("\n\n")[0].split("\n");
var procedures = input.split("\n\n")[1].split("\n");

var piles = [];

crates.pop();
crates.map(line => line.match(/.{1,4}/g) //splits every 4 chars
        .map((crate, index) => 
        {
            if(crate.toString().trim() != "")
            {
                (piles[index] = piles[index] || []).push(crate.trim()); //if pile doesnt exist, creates it and pushes the crate
            }
        }));

procedures.forEach(procedure =>
{
    procedure = procedure.split(" ");
    var splicedCrates = [];
    var pile = piles[procedure[3]-1]; //pile from where we're removing from
    splicedCrates = pile.splice(0, procedure[1]).reverse(); //removed crates
    piles[procedure[5]-1] = splicedCrates.concat(piles[procedure[5]-1]); //moves removed crates to the desired pile
})

console.log(`\n${piles.map(pile => pile[0][1]).join("")}`);