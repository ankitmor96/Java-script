let test = "hello anki";

// (1) match() :- method ---------------------
// search a string for the value ,regular expression and returns the match

console.log("This is match string value :-",test.match(""));
console.log("This is match string value :-",test.match("ankit"));

// (2) repet() :- method -------------------------------
// returns the new steing for your choice

console.log("This is repet value :-",test.repeat("5"));

// (3) replace() :- method---------------------------
// search a string for a pattern and return new string 

console.log("This is replace value :-",test.replace("i","I"));

// (4) search :- method -------------------------------
// search index number of your choice

console.log("search value", test.search("a"));

// (5) slice :- method --------------------------------
// extract part of the string and return new string 

console.log("slice value :-",test.slice("3,6"));

