document.getElementById("form").addEventListener("submit" , function (e) {
    e.preventDefault();

    let start = parseInt(document.getElementById("start").value);
    let end = parseInt(document.getElementById("end").value);

    let result = "";

    for( let i = end; i >= start; i--) {

     if(i % 2 == 0){

      result += i + " " ;

     }

    }


    document.getElementById("result").innerHTML ="  Revers Even Numbers :"+ result;


})