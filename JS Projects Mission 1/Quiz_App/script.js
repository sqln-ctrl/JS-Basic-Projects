const questions = [
    {
        que: "1. What does HTML stand for?",
        options: [
            "A) Hyper Text Markup Language",
            "B) High Text Machine Language",
            "C) Hyperlinks and Text Mark Language",
            "D) Home Tool Markup Language"
        ],
        correctOpt: "A"
    },
    {
        que: "2. Which language is mainly used for styling web pages?",
        options: ["A) HTML", "B) JavaScript", "C) CSS", "D) PHP"],
        correctOpt: "C"
    },
    {
        que: "3. Which of the following is NOT a programming language?",
        options: ["A) Python", "B) Java", "C) HTML", "D) C++"],
        correctOpt: "C"
    },
    {
        que: "4. Which symbol is used for single-line comments in JavaScript?",
        options: ["A) <!-- -->", "B) /* */", "C) //", "D) #"],
        correctOpt: "C"
    },
    {
        que: "5. Which company developed JavaScript?",
        options: ["A) Microsoft", "B) Netscape", "C) Google", "D) Apple"],
        correctOpt: "B"
    }
];

let i = 0;
let score = 0;
let userSubmit = "";
let quizEnded = false;

// DOM
const question = document.getElementById("question");
const StartBtn = document.getElementById("StartBtn");
const optA = document.getElementById("A");
const optB = document.getElementById("B");
const optC = document.getElementById("C");
const optD = document.getElementById("D");
const nextQueBtn = document.getElementById("nextQue");
const TotalScore = document.getElementById("TotalScore");

// Start Quiz
StartBtn.addEventListener("click", () => {
    i = 0;
    score = 0;
    quizEnded = false;
    loadQuestion();
});

// Load Question
function loadQuestion() {
    userSubmit = "";

    // Reset option colors
    optA.style.backgroundColor = "";
    optB.style.backgroundColor = "";
    optC.style.backgroundColor = "";
    optD.style.backgroundColor = "";

    question.innerText = questions[i].que;
    optA.innerText = questions[i].options[0];
    optB.innerText = questions[i].options[1];
    optC.innerText = questions[i].options[2];
    optD.innerText = questions[i].options[3];
}

// Option clicks
optA.onclick = () => userSubmit = "A";
optB.onclick = () => userSubmit = "B";
optC.onclick = () => userSubmit = "C";
optD.onclick = () => userSubmit = "D";

// Next button
nextQueBtn.addEventListener("click", () => {

    if (quizEnded) return;

    if (userSubmit === "") {
        alert("Please select an option!");
        return;
    }

    // Color feedback
    if (userSubmit === questions[i].correctOpt) {
        score++;
        highlightOption(userSubmit, "green");
    } else {
        highlightOption(userSubmit, "red");
        highlightOption(questions[i].correctOpt, "green"); // show correct option
    }

    // Next question after short delay
    setTimeout(() => {
        if (i < questions.length - 1) {
            i++;
            loadQuestion();
        } else {
            endQuiz();
        }
    }, 800); // 0.8 sec delay to show color feedback
});

function highlightOption(optId, color) {
    switch(optId) {
        case "A": optA.style.backgroundColor = color; break;
        case "B": optB.style.backgroundColor = color; break;
        case "C": optC.style.backgroundColor = color; break;
        case "D": optD.style.backgroundColor = color; break;
    }
}

// End Quiz
function endQuiz() {
    quizEnded = true;

    question.innerText = "Quiz Finished 🎉";
    TotalScore.innerText = `Final Score: ${score} / ${questions.length}`;

    // Hide options & next button
    optA.style.display = "none";
    optB.style.display = "none";
    optC.style.display = "none";
    optD.style.display = "none";
    nextQueBtn.style.display = "none";
}
