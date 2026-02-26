document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()

    let signal = document.getElementById("signal").value
    let result = document.getElementById("result")


    switch (signal) {
        case "red":
            result.textContent = "you can stop";
            break;

        case "yellow":
            result.textContent = "you can wait";
            break;

        case "green":
            result.textContent = "you can go";
            break;

        default:
            console.log("Invalid Signal");
    }

})