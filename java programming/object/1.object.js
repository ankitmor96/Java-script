// object is a data structure to store related data collection,
//  data key-value pairs ,
//  where each key is unique identifier for the associated value ,
//  object are dynamic , which means can be add, modifide,delete at runtime.

// create object using litetral synta :-

const person = {
name:"ankit",
age:20,
height:5.4,
}

console.log(person);

// typr of :-

console.log("type of person:- ",typeof person);

// createing using with constractor :-

const student = new Object();

console.log(typeof student);

((student.name="bob"),(student.age="22"),(student.height="5.6"));   // change the value

console.log(student);