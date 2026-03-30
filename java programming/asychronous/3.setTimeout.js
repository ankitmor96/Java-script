// setTimeOut () method is execute block of code after the specific time , the method execution the code only once.

// commonly used java script in setTimeOut :-

//setTimeout(function ,  milliseconds);

// setTimeout means set time for executed code in callback function

function play (){

    setTimeout (function play(){

       console.log("play cricket");

    },2000);

    console.log("i am playing");

}

play();