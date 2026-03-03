// (1) join---------------------- method :=

let fruit = [
    "banana",
    "mango",
    "apple",
    "cherry",
    "paineapple"
];

console.log("before fruits",fruit);

console.log("after fruits",fruit.join());

// (2) flat----------- method :=

let number = [[1,2,3],
             [4,5,6]];

console.log(number.flat(1));

let num = [[1,2,3],
           [3,[4,5]],
           [6,[7,[8]]]];

console.log(num.flat(Infinity));

// (3) some-------- method :=

let numbers = [10,20,30,40,50,60];

console.log(numbers.some(numbers => numbers > 70));


// (4)slice------------- method :=

let fruits = [
    "apple",
    "banana",
    "cherry",
    "mango",
    "guava",
    "strawberry",
    "pineapple",
];

console.log("before fruits:",fruits);

fruits.slice(3,5);

console.log("after fruits:",fruits);

//  includes------------- method :=

let arr = [1,2,3,4,5,6,7,8,9];

console.log(arr.includes(10));

// indexof------------ method :=

let array = [10,20,30,40,50];

console.log(array.indexOf(40));

// length----------- method :=

let arrays = [10,20,30,40,50];

console.log(arrays.length);


// reverse------------ method :=

let n = [1,2,3,4,5];

console.log(n.reverse());

// values---------------method :=


let numvalue = num.values();

for(let values of numvalue){
    console.log("values:",values);
}

// find()------------------- method :=

 const variable = [1,2,3,4,5,6,7,8,9];

 const results = variable.find( num => num > 8 );

 console.log("This is find of num:",results);


// const numberss = [5, 12, 8, 130, 44];

// const result = numberss.find(num => num > 10);

// console.log(result);


// findIndex()----------------------- method :=

let f = [11,12,13,14,15,16,17,18];

let result = f.findIndex(num=>num>13);

console.log("This is findIndex of num:",result);

// const d = [ 404,407,402,400,401];

// const w = d.findIndex(num => num > 400);

// console.log("This is find of index num :",w);

// every------------------------ method :=

let s = [12,13,14,15];

let q = s.every(num => num > 0);

console.log("This is every num:",q);

// let g = [{
//     name:"anit", age:"20",
//     name:"rahul", age:"23",
//     name:"kalpesh", age:"22",
// }];
// let c = g.every(x=>x.age===20);

// console.log("This is every method :",c);




