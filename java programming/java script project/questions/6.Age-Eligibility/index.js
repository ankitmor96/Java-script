document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let age = Number(document.getElementById("age").value);
    let result = document.getElementById("result");

    if (age >= 50) {
        result.textContent = `You are  Senior Citizen`
    } else if (age >= 18) {
        result.textContent = `You are  Eligible For  Drive`
    } else {
        result.textContent = `You are  Not Eligible For  Drive`
    }
});