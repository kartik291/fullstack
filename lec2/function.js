function greet(name,city){ //name is a parameter
    console.log(`${name} from ${city},welcome to this onboardgoing process`)
}

// calling the function

greet("prakash","mumbai"); //parakash is an argument
greet("kartik","sirsa");


function calculate(min,max){
    if(max>min){
        console.log(`${max} is greater`)
    }
    else{
        console.log(`${min} is smaller`)
    }
}

calculate(12,15);


// anonymous function
let anonymousFunction=function greetmessage(){
    console.log("hello from gfg");
}
console.log(typeof anonymousFunction);
anonymousFunction();
// greetmessage();


function calculatesum(x,y){
    return x+y;
}
console.log(calculatesum(3,4));

const result=calculatesum(6,7);
console.log(result);
const output=calculatesum(99,101);
console.log(output);


// arrow function
const calucalteaddition=(x,y)=>
     x+y;

console.log(calucalteaddition(12,23));

const calucalteaddition1=(x,y)=>{
    if(x>y){
        return x;
    }
    else{
        return y;
    }
}
console.log(calucalteaddition1(89,98));
const sum=(x,y)=> x>y? x+y:x-y; //ternary operator
console.log(sum(59,18));

function calc(x,y){
let temp=0;
for(let i=x;i<=y;i++){
    temp=temp+i;
}
return temp;
}
const result1=calc(1,20);

console.log(result1)

