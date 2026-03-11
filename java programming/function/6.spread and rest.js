// spread  operator :-

const number = [1,2,3,4];

console.log(...number);

const number2 = [...number,5,6,7,8];

console.log(number2);

// rest operator :-

function playing (...game){

    console.log("i have a playing game :-",...game);


    console.log("i liked the most :",game[0]);


}

playing("cricket,footbull");