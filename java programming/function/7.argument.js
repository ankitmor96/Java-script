// using for loop :-

function num (){

 let sum = 0;

    for (let i=0;i < arguments.length;i++){

        sum += arguments[i];

    }

    console.log(sum);

}

num(5,10,15,20,25,30,35,40);