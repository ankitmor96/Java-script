document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let price = Number(document.getElementById("Discount").value);
    let result = document.getElementById("result");

    if (price <= 0) {
        result.textContent = "Enter amount";
    } else {

        let discount = 0;

        if (price > 6000) {
            discount = 15;
        } else if (price > 2000) {
            discount = 10;
        } else {
            discount = 5;
        }

        let discountAmount = (price * discount) / 100;
        let finalPrice = price - discountAmount;

        result.textContent = `Discount ${discount}% | You Save ₹${discountAmount.toFixed(2)} | Final Price ₹${finalPrice.toFixed(2)}`;
    }
});