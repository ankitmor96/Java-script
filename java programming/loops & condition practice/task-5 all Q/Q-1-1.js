document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let start = parseInt(document.getElementById("start").value);
    let end = parseInt(document.getElementById("end").value);

    let evencount =0;
    let oddcount=0;


    for(let i=start; i<=end; i++){

        if(i % 2 === 0){
            evencount++;
        }else{
            oddcount++;
        }
    }

    document.getElementById("result").innerHTML = "even count:"+ evencount +"<br> odd count:" + oddcount
});