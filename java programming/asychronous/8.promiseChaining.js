// to overcome callback hell , you can use promise a cleaner and more manageble way to handle asynchronous operations by chaining .then() and  handling error with use .catch().

// the promise object represent eventual completion or field  of an asynchronous operation and resulting.

// promise as an object that links productingcode and consuming code

// in java script a promise is good way to handle asynchronous operation .

// if the find out of asynchronous operation is sucessfully or field .

//a promise may have one of three states:-

//pendimg:-
//fulfiled:-
//reject:-

// to create the promise object , use promise() constructor. 

// syntax:-

//  let promise = new promise((resolve,reject)=>{

//    do something 

//  });

 // the promise() constructor takes a function as an argument .

 // the function alsow two function resolve() , and reject().

 // if the promise return sucessfully to called resolve() function. and if promise return error to called reject() function.


 // example :-

//  const shoping = new Promise ((resolve,reject)=>{

//     let cart =["clothes","shoes"];

//     cart = [];

//     setTimeout(()=>{

//       if(cart.length === 0){
//         reject(" payment is not found");
//       }else{
//         resolve("please product to check out");
//       }

//     },2000)
//  });

//  shoping.then((message)=>{

//     console.log(message);

//  });

//  shoping.catch((error)=>{

//     console.log(error);

//  });




// promise chaining :-

// promise chaining in which we are chaining asynchronous operation each after other.

// it guaranteed that asynchronous program will execute only after ,before the asynchronous operatin completed.

// producing code:

const FoodOder = new Promise((resolve,reject)=>{
  let order = ["samosa","pizza"]

  setTimeout(()=>{

    if(order.length > 0){
      resolve("order");
      console.log("order placed");
    }else{
      reject("please add some food dish to proceed order");
    }
  },2000)
});

// consuming code:
 
 FoodOder.then((order)=>{
  return new Promise((resolve)=>{

    setTimeout(()=>{
      resolve("order");
      console.log("order received");

    },2000)
  });
 })

 .then((order)=>{
  return new Promise((resolve,reject)=>{
      const material = true;

      setTimeout(()=>{

        if(material){
          resolve(order);
          console.log("ordered prepared")
        }else{
          reject("order rejected");
          console.log("order rejected");
        }
      },2000)
  });
 })

 .then((order)=>{
  return new Promise((resolve)=>{

    setTimeout(()=>{
      if(order);
      console.log("order prepared sucessfully");
    },2000)
  });
 })

 .then ((order)=>{
  setTimeout(()=>{
    console.log("order delivered",order);
  },3000)
 })

 .catch ((err)=>{
   console.log(err);
 })

 .finally (()=>{
   console.log("do you want to explor more");
 })