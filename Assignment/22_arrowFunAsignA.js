console.log("========================step1========================");
let arrowFun1=()=>{
console.log("Good Morning, Today is Tuesday...!");
}
arrowFun1();

console.log("========================step2========================");

let arrowFun2=(value1,value2,value3=1)=>{
  let mul=value1*value2*value3;
  console.log(`multiplication of ${value1},${value2},${value3} = ${mul}`);
}
arrowFun2(5,5,2);
arrowFun2(10,4);

console.log("========================step3========================");


let arrowFun3=(value1,value2,value3,value4,value5)=>
{
    let add=value1+value2+value3+value4+value5;
    return add;
}
  let result1=arrowFun3(100,100,200,349,756);
  console.log(`Addition of all value is = ${result1}`);
 let result2= arrowFun3("I am"," Learning"," ES6"," Features"," In depth");
 console.log(`Addition is= ${result2}`);