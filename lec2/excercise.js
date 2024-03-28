const first="watermango";
const second="banana";
const third="watermelon";

const len1=first.length;
const len2=second.length;
const len3=third.length;

if(len1>len2){
    if(len1>=len3) console.log(`The longest word is ${first}`); 
    else console.log(`The longest word is ${third}`);    
}else{
   if (len2 > len3) {console.log (`The longest word is ${second}`)}
   else console.log (`The longest word  word is ${third}`); 

}

if(len1<len2 && len1<len3){
    console.log( `The smaleest  word is ${first}`);
     
}else if(len2<len1 &&len2<len3){
    console.log(`the smallest word is ${second}`)
}
else if(len3<len1 &&len3<len2){
    console.log(`the smallest word is ${third}`)

}

const total=89;

if(total<40){
    console.log("you need to work hard");
}

else{
    console.log("you cleared the exam");
}
// ternary operators used alot in the react

(total<40)?console.log("you need to work hard"):console.log("you cleared the exam grtttttt");
const result=total<40?"you need to work hard": "you cleared the exam";
console.log(result);

const result1=total<40?"you need to work hard":total<60?"B grade":total<80?"A grade":total<90?"A+ grade":total<=100?"O grade":"genuis";
console.log(result1);