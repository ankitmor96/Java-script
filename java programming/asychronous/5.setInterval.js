// setInterval() repeats bolck of code at every timeline in set your programm 

const stop = setInterval(()=>{

    console.log("hello");

},1000);


// example:-


setInterval(()=>{

let time = new Date().toLocaleTimeString();

    console.log(time);

},1000);


// example:-


function currentTime(){

let time = new Date().toLocaleTimeString();

console.log(time);

}

setInterval(currentTime,1000);


// examplee:-

const currentTime = ()=>{

    let time = new Date().toLocaleDateString();

    console.log(time);

}

setInterval(currentTime,1000)