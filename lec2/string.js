let display="i am  an web development students";
let count=0;
console.log(display.length);
for(let char of display ){
    // console.log(char);
    if(char=="m"||char=="n"){
        count++;
    }
    else{
        console.log(char)
    }
}
console.log(count)
console.log(display[31]);

for(let i=0;i<display.length;i++){
    console.log(display[i]);
}
for(let i=0;i<display.length;i++){
    if(display[i]==="n"){
        console.log(i);
    }
}


const disp="I am a student at JCBUST";
const index=0;
console.log(disp.charAt(index));
const ind=12;
const dest=disp.charAt(ind);
console.log(dest);
//charcodeat returns the ascii value of given value at the index number

const dest1=disp.charCodeAt(ind);
console.log(dest1);

console.log(`the ascii code of ${dest} is ${dest1}`);

const text="i love to code at gfg";

console.log(text.includes("love"));

if(text.includes("gfg")){
    console.log("hey i m going to get my  degree from GFG");
}
const vowels="aeiou";
// let false=true;
let flag=false;
for(let char of text){
    if(vowels.includes(char)){
        // console.log(`${char} is a vowel`)
        falg=true;
        break;
    }
    else{
        flag=false;
    }
}

if(flag==true){
    console.log("string has vowels");
}

// uppercase and lowercase

const message="I am kartik chauhan and i want to get success";
console.log(message.toLowerCase());
console.log(message);
console.log(message.toUpperCase());
console.log(message.toLocaleUpperCase());

const user1="jcbose university of science and technology";
const substring=user1.substring(0,11);
console.log(substring);
console.log(user1);
console.log(substring+"........");

//trim method

const text1="     .....hola i love  coding.....   ";

console.log(text1.length);

console.log(text.trim().substring(0,6));

const trim=text.trim();

console.log(trim.length);

if(trim.length<text1.length){
    console.log("hehehehehehhe");
}