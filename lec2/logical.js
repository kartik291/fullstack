// 4 logical operators
/*
nullish coalescting

*/

const phy=90;
const chem=83;
const maths=95;
const bio=96;

if(phy>85 && chem>85 && maths>85){
    console.log("hurrray you ARE ELIGIBLE FOR ENGINEERING")
}
else{
    console.log("sorry not qualified");
}

const isEligible=false;
if(!isEligible) {
    console.log(isEligible);
    console.log("you are eligible");
}
else{
    console.log("you are not eligible");

}

const first="kartik"
const second=" ";

// console.log(second);
console.log(first||second);
console.log(Boolean(" "))
// boolean of 0 is false similar for undefined

const username=first||second||null

console.log(`name- ${username}`);

let a=12;
let b;

console.log(a+(b||12));

const username1=first && second;
console.log(username1);

