 // 1) Intro.java :-


---

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


// 2) Variable (var) :-


---

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







