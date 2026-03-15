document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

 let number =Number(document.getElementById("number").value);
 let result = document.getElementById("result");

 for(let i = 1; i <= 10; i++){
    result.innerHTML += `<br> ${number} * ${i} = ${number*i}<br>`;
 }
    
});