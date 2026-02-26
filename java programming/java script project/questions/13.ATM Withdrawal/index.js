document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let balance = 50000;
    let amount = Number(document.getElementById("amount").value);
    let result = document.getElementById("result");

    if (amount <= 0) {
        result.textContent = "Enter your amount"; 
    }
    else if (amount > balance) {
        result.textContent = "Insufficient Balance";
    }
    else {
        balance = balance - amount;
        result.textContent = `your Withdrawal Successful. Remaining Balance = ₹${balance}`;
    }
});