document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let name = document.getElementById("name").ariaValueMax;
    
    let email = document.getElementById("email").ariaValueMax;
    
    let password = document.getElementById("password").ariaValueMax;

    let city = document.getElementById("city").ariaValueMax;

    if(name === ""){
        alert ("please enter name");
        return;
    }
     if(email === ""){
        alert  ("please enter email");
        return;
    }
     if(password === ""){
        alert  ("please enter password");
        return;
    }
     if(city === ""){
        alert("please enter city");
        return;
     }

     alert ("your form is submited");
})