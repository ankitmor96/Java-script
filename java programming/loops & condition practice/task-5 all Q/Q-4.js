document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault();

    let start =  Number(document.getElementById("start").value);
    let end = Number(document.getElementById("end").value);

    let result = "";

     for(let i = end; i >= start; i--){

        if(i % 2 === 0){
          
     result  += i +" ";

        }
     }
  document.getElementById("result").innerHTML = "revers even number: <br>" + result;
})