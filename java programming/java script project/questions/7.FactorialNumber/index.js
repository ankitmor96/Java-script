document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()

    let number = document.getElementById("number").value;
    let result = document.getElementById("result");

    let Factorial = 1;

    if (number < 0) {
        result.textContent = `${number} This number is Negative `
    } else {
        for (let i = 1; i <= number; i++) {
            Factorial = Factorial * i;
        }

        result.textContent = `your Factorial number is ${Factorial}`;
    }

});