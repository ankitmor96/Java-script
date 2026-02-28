let test = " ankit mor ";

// (1) split :- method---------------
// array ne string ma convert kare che 

console.log(" split value :-",test.split(" "));
console.log(" split value :-",test.split(""));
console.log(" split value :-",test.split("r"));

// (2) substring :- method -------------------------
// extract character 

console.log(" value :-",test);
console.log(" substring value :-",test.substring(2,5));

// (3) toupper case :- method -------------------------

console.log(" upper case value :-",test.toUpperCase());

// (4) tolower case :- method ---------------------------

console.log("lower case value :-",test.toLocaleLowerCase());

// (5) trim() :- method------------------------------
// return the string remove with space

let tests = "             hello"                     ;

console.log(" trim value :-",tests.trim().length);
console.log("full value :-",tests.length);
console.log("start value :-",tests.trimStart());
console.log("end value :-",tests.trimEnd());



