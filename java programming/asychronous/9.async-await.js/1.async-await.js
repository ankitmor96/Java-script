//returned by promise and await use to large time of execute this function

const movieBooking = new Promise((resolve,reject)=>{
    let setAvailable =true;

    let tickit = 1;

    setTimeout(()=>{
        if(setAvailable){
            resolve(tickit);
            console.log("tickit Available");
        }else{
            reject("tickit is not Available");
            console.log("tickit is not available");
        }
    },2000);
});

async function tickitStatus (){
    const result = movieBooking;

    console.log("result",result);
    console.log("it will show result after checking");
}

tickitStatus();