let fruits = ["apple","banana","mango"];

fruits.push("orang"); // create element
console.log("new fruits creat : ",fruits);

fruits.forEach(function(item){ // read all element
      console.log("fruits read :",item)
});

fruits[1]="mango";  // uodate element
console.log("update index[1] fruits :",fruits);

fruits.pop(); // delete element
console.log("delete last fruits :",fruits);