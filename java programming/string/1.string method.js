let names = "hello ankit";

// (1) charAt :- method ----------------
// charchter no index check kare che 

console.log("This is charAt :",names.charAt(3));

// (2) concat :- method ----------------
// two array ne marge kare che

console.log("This is concat :-",names.concat("how are you"));

// (3) indexof :- methoded ---------------
// index number check kare che 

console.log("This is indexof :-", names.indexOf("n"));

// (4) endswith :- method --------------
// last ma kyo charechter che te check kare che 

console.log("This is end with :-",names.endsWith("n"));
console.log("This is end with:-",names.endsWith("t"));

// (5) includes :- method ---------------------
// array ma charechter include che ke te check kare che 

console.log("This is include method :-",names.includes("a"));
console.log("This is include method :-",names.includes("y"));

// if not fund :- 
// jo idexof ma array ma include na hoy to answer -1 aavse 

console.log(names.indexOf("bob"));

// (6) lastindexof :- method---------------
// last index number aape che 

console.log("This is last index:-",names.lastIndexOf("t"));

// (7) length :- method ---------------------
// array ni length aape che

console.log("This is length:-",names.length);
