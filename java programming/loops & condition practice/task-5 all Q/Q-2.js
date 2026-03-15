document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault();

    let value = Number(document.getElementById("converter").value);
    if(isNaN(value)){
         document.getElementById("result").innerText="please enter valid number ";
         return ;
}

    let result = (value - 32 / 5) * 9;
     document.getElementById("result").innerText=value+"Fahrenheit="+result.toFixed(2)+"celsius";
 
});

document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault();

    let value = Number(document.getElementById("converter").value);
    if(isNaN(value)){
         document.getElementById("result").innerText="please enter valid number ";
         return ;
}

    let result = (value * 9  / 5) + 32;
     document.getElementById("result").innerText=value+"celcius="+result.toFixed(2)+"Fahrenheit";
 
});