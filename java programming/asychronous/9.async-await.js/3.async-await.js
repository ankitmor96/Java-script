const apiCall = ()=>{

    return new Promise ((resolve,reject)=>{

        let data = true ;

        setTimeout(()=>{
   
           if(data){
             resolve("data loaded");
           }else{
            reject("can not able data loaded");
           }
            
        },2000);
    });
}

async function fetchData (){

    try{
        console.log("loading....");

        const data = await apiCall();

        console.log("data", data);

        console.log("it will until above asynchronous complited");
    }catch(err){
       console.log(err);
    }
}

console.log("it will won't wait for anybody");
fetchData();