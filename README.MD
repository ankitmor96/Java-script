 // 1) Intro.java :-

## 📝 Project Description

- The webpage initially displays **Hello World**
- A **Click Me** button is provided
- When the button is clicked:
  - JavaScript changes the heading text to **Welcome to JavaScript**
- An external JavaScript file performs a simple addition and logs the result in the browser console

---

## 📄 index.html

### Features:
- Basic HTML5 structure
- External JavaScript file linked using `<script src="intro.js">`
- Internal JavaScript used for event handling
- DOM manipulation using `getElementById()`

### Key Functionality:
```javascript
document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("title").innerText = "Welcome to JavaScript";
});
📄 intro.js
This file demonstrates:

Variable declaration

Addition of numbers

Console output

var a = 20;
var b = 30;
var c = a + b;

console.log(a + b);
Console Output:
50
▶️ How to Run the Project
Clone or download the repository

Open the project folder

Open index.html in any web browser

Click the Click Me button

Open Developer Tools → Console to see JavaScript output

🎯 Output Preview
Initial Page:

Hello World
[Click Me]
After Button Click:

Welcome to JavaScript
[Click Me]


// 2) Variable (var) :-

## 📝 Description

The program:
- Declares a global variable
- Defines a function with a local variable
- Demonstrates function scope vs global scope
- Shows how `var` allows redeclaration
- Performs addition of two numbers
- Prints output in the console

---

## 📄 var.js – Code Explanation

### 1️⃣ Global Variable
```javascript
var greet = "Hello, welcome to Java programming!";
Accessible anywhere in the file

2️⃣ Function with Local Scope
function displayGreet() {
    var ankit = "Hello from inside the function!";
    console.log(ankit);
}
ankit is function-scoped

Cannot be accessed outside the function

3️⃣ Function Call
displayGreet();
Executes the function and prints the local message

4️⃣ Accessing Global Variable
console.log(greet);
Prints the global variable value

5️⃣ var Redeclaration Example
var num1 = 50;
var num1 = 60; // redeclaration allowed
var allows redeclaration and updates the value

6️⃣ Addition Operation
var num2 = 70;
var sum = num1 + num2;

console.log(sum);
▶️ How to Run the Program
Using Node.js
Open terminal or command prompt

Navigate to the project folder

Run the file:

node var.js
🖥️ Output
Hello from inside the function!
Hello, welcome to Java programming!
130






