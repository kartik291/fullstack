console.log(50>30);
console.log(50<30);


console.log(30>=30);
console.log(50==40);

// string

console.log("apple">"banana");
console.log("glow">"glowing");
console.log("glwoing">"glow");
console.log("21">13);

console.log("01"==1); // false because it is comparing the value of 
// strict equal
console.log("01"===1);
console.log(null == undefined) // true
console.log(null===undefined);

console.log(null<1);
// null works with number it becomes 0  in comparison
console.log(null==0);


const readlinesync=require('readline-sync');
 const userage=readlinesync.question("how old are you?");

 if(userage>=16){
    console.log("you can vote");
 }
 else{
    console.log("not eligible to vote");
 }

 const number=Number(readlinesync.question("enter a number"));
 if(number%3==0){
    console.log("fizz");

 }

 else if(number%5==0){
    console.log("buzz");
 }
else{
    console.log("not fizz neither buzzz");
}

// here if the if statement is true  then only this part will be executed it wont check the else if part

// nested if statement

const readline1=require("readline-sync");

const n1=Number(readline1.question("Enter first number: "));


const remainder=n1%2;

if(remainder===0){
   console.log("even number "+n1);
   if(n1%4===0){
      console.log("divisible by 4 too")
   }
   else{
      console.log("not divisible by 4");
   }

}
else {
   console.log("odd number")
   if(n1%5===0){
      console.log("number divivsible by 5");
   }
   else{
      console.log("not divisible by 5");
   }
}

