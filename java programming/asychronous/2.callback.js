// callback is function passed as an argument to another function 

// using callback we can do asychronous task in js 

// a callback function it run after another function has finished 

//when you pass an argument don't use parenthisis

function Total(result){

    console.log(result)

}

function Calculate(a,b,cd){

    const Total =a+b;

    cd(Total);

}

Calculate(20,30,Total);   // argument as an another function

// example :-

function sum (result) {

    console.log(result);

}

function calculator(a,b,Subs){

   const sum =a*b;

   Subs(sum);

}

calculator(5,6,sum);