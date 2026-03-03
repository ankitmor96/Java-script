// (1)  map-----------------------------method :-


let arr = [20,22,24,28];

let result = arr.map( a => a * 2);

console.log("This is map method :",result);



const fruits = ["apple","banana","mango"];

let r = fruits.map(fruit => fruit.toUpperCase());

console.log("This is map method :",r);


// (2) filter------------------- method :-

let num = [1,2,3,4,5,6,7,8,9,];

let res = num.filter(num=>num>8);

console.log("This is filter method :",res);


let g =[
    {name:"anit", age:"20"},
     {name:"rahul", age:"23"},
     {name:"kalpesh", age:"22"},
 ];

 let c = g.filter(x => x.age >= 22);

 console.log("This is filter method :",c);


 // (3) reduce---------------------------method :-

 let number = [1,2,3,4,5,6];

 let values = number.reduce((total,num) => {
    return total + num ;
 }, 0);

 console.log("This is reduce method:",values);


 const due = [
    {id:"1", name:"ankit"},
    {id:"2", name:"rahul"},
    {id:"3", name:"ketan"},
 ];

 const value = due.reduce((acc,cur)=>{
    return cur.id; 
 },0);

 console.log("This is reduce method:",value);


