document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let number = Number(document.getElementById("number").value);
    let result = document.getElementById("result");

    if(number>0){
        result.textContent="this is positive number";
    }else if(number<0){
        result.textContent="this number is negative ";
    }else{
        result.textContent="this number is zero";
    }

    
});