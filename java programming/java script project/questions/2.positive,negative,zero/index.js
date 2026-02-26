document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let number = Number(document.getElementById("number").value);
    let result = document.getElementById("result");

    if (number > 0) {
        result.textContent = "This number is Positive "
    } else if (number < 0) {
        result.textContent = "This number is negative"
    } else {
        result.textContent = "This is Zero"
    }
});