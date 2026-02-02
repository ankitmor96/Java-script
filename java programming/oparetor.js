 // ___________________________arithmetic operator:-___________________________________

 let a=20;
 let b=10;

 console.log("This is addition value :",a+b);
 console.log("This is subscription value :",a-b);
 console.log("This is multiplication value :",a*b);
 console.log("This is division value :",a/b);
 console.log("This is exponentiation value :",a**b);
 console.log("This is modular value :",a%b);

 //example:-

//  var c=40;
//  var d=50;

//  console.log("This is addition value :",a+b);
//  console.log("This is subscription value :",a-b);
//  console.log("This is multiplication value :",a*b);
//  console.log("This is division value :",a/b);
//  console.log("This is exponentiation value :",a**b);
//  console.log("This is modular value :",a%b);

// ___________________________assignment operator:-__________________________________________

let n=23;

console.log("This is equal value:",n=23);
console.log("This is equal value:",n+=1);
console.log("This is equal value:",n-=1);
console.log("This is equal value:",n*=2);
console.log("This is equal value:",n/=2);
console.log("This is equal value:",n%=1);

//example:-

// const value=50;

// console.log("This is equal value:",n=23);
// console.log("This is equal value:",n+=1);
// console.log("This is equal value:",n-=1);
// console.log("This is equal value:",n*=2);
// console.log("This is equal value:",n/=2);
// console.log("This is equal value:",n%=1);

//__________________________comparison operator:-_______________________________________________

var num=25;
var number=25;

console.log("This is equal value :",num==number);
console.log("This is equal type of data  value :",num===number); // but number="25" to answer is false ----------
console.log("This is not equal value :",num!=number);
console.log("This is not equal type of data value :",num!==number);
console.log("This is lass than value :",num<number);
console.log("This is grater than value :",num>number);  
console.log("This is less or equal value :",num<=number); // but num=24 to answer is false ---------- 
console.log("This is grater or equal value :",num>=number); // but num=26 to answer is false ---------- 

//example:-

// var num=80;
// var number=28;

// console.log("This is equal value :",num==number);
// console.log("This is equal type of data  value :",num===number); // but number="80" to answer is false ----------
// console.log("This is not equal value :",num!=number);
// console.log("This is not equal type of data value :",num!==number);
// console.log("This is lass than value :",num<number);
// console.log("This is grater than value :",num>number);  
// console.log("This is less or equal value :",num<=number); // but num=79 to answer is false ---------- 
// console.log("This is grater or equal value :",num>=number); // but num=81 to answer is false ---------- 

//____________________________logical operator:-___________________________________________

let x=2;
let y=2;

let result = true;

console.log("This is and operator value:",x<=2&&y<=2); // if and else condition is true to get AND operator------------
console.log("This is OR operator value:",x<2||y<=2); // if and condition is false else condition is true to get OR operator------------
console.log("This is NOT operator value:",!result) // if and condition is false else condition is false to get NOT operator------------

//example:-

// var g=7;
// var f=8;

//var e=false;

// console.log("This is and operator value:",x<5&&y<5); // if and else condition is true to get AND operator------------
// console.log("This is OR operator value:",x<=5||y<5); // if and condition is false else condition is true to get OR operator------------
// console.log("This is NOT operator value:",!false); // if and condition is false else condition is false to NOT OR operator------------

//___________________________Increment and Decrement operator:-________________________________

let l=25;

console.log("This is Pre increment value:",++l);
console.log("This is Post increment value:",l++);

console.log("This is Pre decrement value:",--l);
console.log("This is Pre decrement value:",l--);


//_________________________Ternary operator:-__________________________________

const  age=20; 

let results = (age>=18) ? "adult"   :     "minor"; 

console.log("Results is:",results);

//example:-

// var  age=20; 

// var results = (age>=21) ? "you will be married"   :     "you will not be married"; 

// console.log("Results is:",results);

//________________________Precedency operator:-_________________________________

var i=2;
var v=5;
var u=7;
var t=9;
 
console.log("This is precedency of numbers and calculation value:",(i * v + u - t) );

// example:-

// let r=3;
// let o=5;
// let w=5;

// console.log("This is precedency of numbers and calculation value:",(r*o/w));












