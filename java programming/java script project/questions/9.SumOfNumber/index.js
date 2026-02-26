document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let firstNum = document.getElementById("firstNumber").value;
    let secondNum = document.getElementById("secondNumber").value;

    let result = document.getElementById("result");

    let sum = 0;

    let number = firstNum + secondNum;

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }

    result.textContent = `Sum Of Digits = ${sum}`;
});