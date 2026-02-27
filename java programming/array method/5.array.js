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

