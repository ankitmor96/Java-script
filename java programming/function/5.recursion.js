// recursion is proccess of calling itself :-

function factorial (num){

console.log("num is",num);

    if(num<0){

    console.log("factorial is not define for negative number");

    }else if (num === 1){

    return 1;

    }else{

    return num*factorial(num-1);

    } 

}

let result = factorial(8);

console.log(result);

