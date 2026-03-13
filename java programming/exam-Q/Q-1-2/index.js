document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let number = Number(document.getElementById("start").value);

    let result = document.getElementById("result");

    if (number > 0) {
        result.innerText = "This number is Positive";
    } else if (number < 0) {
        result.innerText = "This number is Negative";
    } else {
        result.innerText = "This number is Zero";
    }
});
