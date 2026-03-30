// asychronouns is a return promise and execute the first another function and last this condition in parallel ececution 

// using setTimeOut async :-

console.log("start programm");

setTimeout(()=>{

    console.log("This is asynchronuos")  // this condition is parallel execution in JavaScript

},3000);

console.log("end programm");

// example :-

setTimeout(() =>{
    
    console.log("hii i am ankit");

},2000);
