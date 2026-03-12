// syntex error :-

// cosnt num =  12;

// console.log(num);



// reference error :-

// const number = 35;

// console.log(numbers);



// try and catch and finally :-

const age = 15;

try{

    if(age>18){

        console.log("you can vote ", age);

    throw new Error ("you can not vote");
    
    }

}catch(error){

    console.log(error.message);

}

finally{

    console.log("age check");

}