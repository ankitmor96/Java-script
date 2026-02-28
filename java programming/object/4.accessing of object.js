const student = {
   name :"ankit",
   age:"20",
   std:"12",
}

console.log(student);

// accessing the value of student details object using . notation

console.log(student.name);

// accessing the value of student details object using [] 

console.log(student["age"]);

// using destructing 

const {name, lastname} = student;

console.log(name);
