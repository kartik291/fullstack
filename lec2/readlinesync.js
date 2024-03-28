/*
read data from user
*/

const readlinesync=require("readline-sync");

const username = readlinesync.question("may i know your name ?")
const userage=readlinesync.question("may i know your age?");
console.log(typeof userage);

console.log(username);

console.log("welcome "+username+" to my program");
// template literals
console.log(`welcome ${username} to my program`);
console.log(`thank you for letting us know your age,your age is ${userage}`);

const yearofbirth=2024+Number(userage);

console.log(`so ,you were born in the year ${yearofbirth}`);

