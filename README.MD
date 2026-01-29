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

Perfect 👍
Here’s a **GitHub-ready `README.md`** written **exactly for your JavaScript `var.js` file**, covering **functions, scope, `var` redeclaration, and console output**.

You can **copy–paste this directly** into `README.md` 👇

---

```md
# 📘 JavaScript Variables & Function Scope Demo

This project demonstrates **core JavaScript fundamentals** including:
- Function declaration
- Function scope
- Global scope
- `var` keyword behavior
- Variable redeclaration
- Console output using Node.js

It is a beginner-friendly example for understanding how JavaScript executes code step by step.

---

## 📂 Project Structure

```

📁 java programming
├── var.js
└── README.md

````

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
````

* Accessible anywhere in the file

---

### 2️⃣ Function with Local Scope

```javascript
function displayGreet() {
    var ankit = "Hello from inside the function!";
    console.log(ankit);
}
```

* `ankit` is **function-scoped**
* Cannot be accessed outside the function

---

### 3️⃣ Function Call

```javascript
displayGreet();
```

* Executes the function and prints the local message

---

### 4️⃣ Accessing Global Variable

```javascript
console.log(greet);
```

* Prints the global variable value

---

### 5️⃣ `var` Redeclaration Example

```javascript
var num1 = 50;
var num1 = 60; // redeclaration allowed
```

* `var` allows redeclaration and updates the value

---

### 6️⃣ Addition Operation

```javascript
var num2 = 70;
var sum = num1 + num2;

console.log(sum);
```

---

## ▶️ How to Run the Program

### Using Node.js

1. Open terminal or command prompt
2. Navigate to the project folder
3. Run the file:

```bash
node var.js
```

---

## 🖥️ Output

```
Hello from inside the function!
Hello, welcome to Java programming!
130
```

---

## 🧠 Concepts Covered

* JavaScript functions
* Function scope
* Global scope
* `var` keyword behavior
* Variable redeclaration
* Console logging
* Node.js execution

---

**Ankit Mor**
JavaScript Basics Practice

---

## ⭐ Support

If this project helped you understand JavaScript better, give it a ⭐ on GitHub!

Happy Learning 🚀

```

---

If you want next:
- 🔁 `let` vs `var` vs `const` README  
- ❌ Common **JavaScript mistakes**  
- 🎯 **Interview questions** from this code  
- 📦 Convert this into a **full JS basics repo**

Just say the word 😄
::contentReference[oaicite:0]{index=0}
```


