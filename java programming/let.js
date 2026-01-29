let name = "Ankit";

function displayId() {

    let id =123;

    console.log(id); // block scope

}

console.log(name);

displayId();

let p=15;

// let p=12;  error: redeclaration not allowed

p=20;  // updating allowed
console.log(p);

let q=25;
let r=p-q;
console.log(r);