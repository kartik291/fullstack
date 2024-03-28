const obj={} //obj literal
console.log(typeof obj);

const obj1={
    name:"kartik",
    age:99,
    job:"mentor",
    1:"number one",
    course:["html","css","react","node"],
    "is Admin":"true"
};

console.log(obj1);
console.log(obj1.name);
console.log(obj1["course"]);
console.log(obj1["is Admin"]);

const ob={
    name:"kartik chauhan",
    greet:function(){
        console.log("hello kartik welcome to gfg");
    },
     bye(){
    console.log("tata byee byeeee")

  }

}
console.log(ob);
ob.greet();
ob.bye();
const readline=require("readline-sync");
const key=readline.question("what do u want to know about the mentor- ");
const course=readline.question("what course you want to learn(html/css/redux)- ")


const chp={
    name:"kartik",
    age:99,
    [course]:"courses not available",

}
chp.city="mumbai"; //adding property in objects
chp.state="mh";
console.log(chp[key]);
console.log(chp[course]);

