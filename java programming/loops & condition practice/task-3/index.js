document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();



    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    let num5 = parseInt(document.getElementById("num5").value);


    let largest = num1;

    if(num2 > largest) largest = num2;
    if(num3 > largest) largest = num3;
    if(num4 > largest) largest = num4;
    if(num5 > largest) largest = num5;

    document.getElementById("result").innerHTML = "Largest Number :" + largest;
});

