let student = "ankit";

var student2=student;

console.log("This is student 2 value:",student2);

var student2="Rahul";   // This concept  is Deep copy :- pass by value 

console.log("This is student 2 value:",student2);
console.log("This is student  value:",student);





let student_marks = { marks: 80};

let student_marks2 = student_marks; // shallow copy (same reference)

console.log("marks:", student_marks2); 

student_marks2.marks = 84;

console.log("marks2:", student_marks2.marks); // 84
console.log("marks:", student_marks.marks);   // 84

