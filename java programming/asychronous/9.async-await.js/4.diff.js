const loadData = new Promise ((resolve,reject)=>{

    setTimeout(()=>{

        resolve("data loaded");
      
    },2000);
});

loadData.then((data)=>{
    console.log("loading....");

    console.log("data", data);
}).catch((err)=>{
    console.log(err);
});
