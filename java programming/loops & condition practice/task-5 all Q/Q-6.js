document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault();

    let num =Number(document.getElementById("number").value);
    let result = document.getElementById("result");

    if(num <= 1){
        result.innerHTML = "not a prime number"
        return;
    }

    let prime = true;

    for(let i=2;i<num;i++){
      
     if(num % i === 0){

        prime = false;

        break;

     }
    }

    if(prime){
        result.innerHTML="This is prime number";
    }else{
        
        result.innerHTML="This is not a prime number";
    }

});