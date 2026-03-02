document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();



    let start = parseInt(document.getElementById("start").value);
    let end = parseInt(document.getElementById("end").value);


    let result = "";

    for (let i = start; i <= end; i++) {

        if (i <= 1)

            continue;

        let prime = true;

        for (let j = 2; j < i; j++) {

            if (i % j === 0) {

                prime = false;

                break;

            }

        }

        if (prime) {

             result += i + ", ";

        }
    }
    document.getElementById("result").innerHTML = result;
});

