const student = {
    name:"ankit",
    age:"20",
    std:"12",
}

//delete of object . notation

delete student.age;

console.log(student);

// hasOwn propertys :-

// aa property che ke nay te batave che 

console.log(student.hasOwnProperty("mark"));
console.log(student.hasOwnProperty("name"));

// object.keys :-

console.log(Object.keys(student));