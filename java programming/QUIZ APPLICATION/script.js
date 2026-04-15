const quizData = [
  {
    id: 1,
    question: "What is JavaScript?",
    options: [
      "Programming Language",
      "Database",
      "Operating System",
      "Browser"
    ],
    answer: "Programming Language"
  },
  {
    id: 2,
    question: "Which company developed JavaScript?",
    options: [
      "Microsoft",
      "Netscape",
      "Google",
      "Apple"
    ],
    answer: "Netscape"
  },
  {
    id: 3,
    question: "Which keyword is used to declare a variable?",
    options: [
      "var",
      "int",
      "string",
      "float"
    ],
    answer: "var"
  },
  {
    id: 4,
    question: "Which method is used to print in console?",
    options: [
      "print()",
      "console.log()",
      "echo()",
      "write()"
    ],
    answer: "console.log()"
  },
  {
    id: 5,
    question: "Which symbol is used for comments in JavaScript?",
    options: [
      "//",
      "##",
      "<!-- -->",
      "**"
    ],
    answer: "//"
  },
  {
    id: 6,
    question: "Which HTML tag is used for JavaScript?",
    options: [
      "<js>",
      "<javascript>",
      "<script>",
      "<code>"
    ],
    answer: "<script>"
  },
  {
    id: 7,
    question: "Which method converts JSON to object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toObject()"
    ],
    answer: "JSON.parse()"
  },
  {
    id: 8,
    question: "Which operator is used for strict equality?",
    options: [
      "==",
      "===",
      "!=",
      "="
    ],
    answer: "==="
  },
  {
    id: 9,
    question: "Which loop is used for arrays?",
    options: [
      "for",
      "while",
      "forEach",
      "do-while"
    ],
    answer: "forEach"
  },
  {
    id: 10,
    question: "Which framework is used for frontend?",
    options: [
      "React",
      "Node.js",
      "MongoDB",
      "Express"
    ],
    answer: "React"
  }
];

console.log(quizData);

const questionEl = document.getElementById("que");
const questionNumber = document.getElementById("questionNumber");
const time = document.getElementById("timer");
const result = document.getElementById("result");
const optionbtn = [
    document.getElementById("opt1"),
    document.getElementById("opt2"),
    document.getElementById("opt3"),
    document.getElementById("opt4")
];

const nextBtn = document.getElementById("nextBtn");


let currentIndex = 0;
let score = 0;
let selectedAnswer = "";
let userAnswer = [];
let timer ;
let timeLeft = 30;


function loadQuestion (){

    let currntQuestion = quizData[currentIndex];

     
  questionNumber.innerText = `${currentIndex+1}/${quizData.length}`;
  

    questionEl.innerText = currntQuestion.question;

    optionbtn.forEach((btn,index)=>{
      
        btn.innerText = currntQuestion.options[index];
 
    });

    selectedAnswer = "";
    
}

optionbtn.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    selectedAnswer = btn.innerText;
  });
});


nextBtn.addEventListener("click", () => {

  let currectAnswer = quizData[currentIndex].answer;

  if(selectedAnswer === currectAnswer){
    score++;
  }
    currentIndex++; 

    if (currentIndex < quizData.length) {
      selectedAnswer ="";
        loadQuestion();
    } else {
        result.innerText=`Result😒 :${score}/${quizData.length}
        
        <h3 class="text-center">Review Summary</h3>
        
        <ul class="list-gruop">

        

        </ul>`;
    }
});


loadQuestion();

