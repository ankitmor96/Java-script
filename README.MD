=> 1) Intro.Java :-

📘 JavaScript Introduction Project
📌 Project Description

This is a beginner-friendly JavaScript project that demonstrates:

Linking external JavaScript with HTML

Using DOM manipulation

Handling button click events

Running JavaScript using Node.js

When the button is clicked, the heading text changes dynamically using JavaScript.

🛠️ Technologies Used

HTML5

JavaScript (ES6)

Node.js (for console output)

📂 Project Structure
📁 JavaScript-Intro
│
├── index.html
├── intro.js
└── README.md

📄 index.html

Displays Hello World

Contains a Click Me button

Links external JavaScript file

Uses internal JavaScript for DOM manipulation

📄 intro.js

Declares variables

Performs addition

Prints result in the console

Sample Code Logic
var a = 20;
var b = 30;
console.log(a + b);

▶️ How to Run the Project
Method 1: Browser

Open index.html in any browser

Click the Click Me button

Text changes to Welcome to JavaScript

Method 2: Node.js

Open terminal

Navigate to project folder

Run:

node intro.js


Output:

50

✅ Output

Before Click: Hello World

After Click: Welcome to JavaScript

Console Output: 50 

=> 2) Variable :-

📘 JavaScript Variables – README
📌 Project Title

JavaScript Variables: var, let, const

📖 Description

This project explains the three ways to declare variables in JavaScript:

var

let

const

It demonstrates scope, re-declaration, updating, and output using simple examples executed with Node.js.

🛠️ Technologies Used

JavaScript (ES6)

Node.js

VS Code

📂 Project Structure
📁 JavaScript-Variables
│
├── var.js
├── let.js
├── const.js
└── README.md

🔹 1. var Keyword
Features

Function scope

Re-declaration allowed

Updating allowed

Example
var greet = "Hello, welcome to Java programming!";

function displayGreet() {
    var ankit = "Hello from inside the function!";
    console.log(ankit);
}

displayGreet();
console.log(greet);

var num1 = 50;
var num1 = 60;   // re-declaration allowed
var num2 = 70;

var sum = num1 + num2;
console.log(sum);

Output
Hello from inside the function!
Hello, welcome to Java programming!
130

🔹 2. let Keyword
Features

Block scope

Re-declaration ❌ not allowed

Updating ✅ allowed

Example
let name = "Ankit";

function displayId() {
    let id = 123;
    console.log(id);
}

console.log(name);
displayId();

let p = 15;
// let p = 12; ❌ error

p = 20; // updating allowed
console.log(p);

let q = 25;
let r = p - q;
console.log(r);

Output
Ankit
123
20
-5

🔹 3. const Keyword
Features

Block scope

Re-declaration ❌ not allowed

Updating ❌ not allowed

Value must be assigned at declaration

Example
const name = "Rahul";
console.log(name);

const a = 10;
// a = 15; ❌ error

const b = 20;
const c = a * b;
console.log(c);

Output
Rahul
200







