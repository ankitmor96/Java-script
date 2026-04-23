let user = [];
let editIndex = -1;

function addUser(){

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
if(editIndex === -1){
    user.push({name,age}); //  create array of object
}else{
    user[editIndex] =  {name,age};
    editIndex = -1;
}

     document.getElementById("name").value="";
     document.getElementById("age").value="";
 
displayUser();
}

function displayUser(){
    let container = document.getElementById("cardcontainer");
    container.innerHTML = "";

    user.forEach((user,index)=>{ // read array
      container.innerHTML += `
      <div class="card">
      <h3>${user.name}</h3>
      <h3>age:${user.age}</h3>
      <button onclick="editUser(${index})">Edit</button>
      <button onclick="deleteUser(${index})">Delete</button>
      </div>
      `
    });
}

function editUser(index){
     document.getElementById("name").value = user[index].name;
     document.getElementById("age").value = user[index].age;
     editIndex = index;
     
}

function deleteUser(index){
    user.splice(index, 1);
    displayUser();
}






