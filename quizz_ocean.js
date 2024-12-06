const questions = [
    {
        question:"Quel rôle jouent les courants océaniques dans l’équilibre de la planète ?",
        answers: [
           { text: "A) Ils régulent la température et transportent l'énergie thermique.", correct: true},
           { text: "B) Ils augmentent la salinité des océans.", correct: false},
        ]
    },
    {
        question:"Que se passe-t-il si les courants océaniques ralentissent ?",
        answers: [
           { text: "B) Les températures terrestres deviennent plus stables.", correct: false},
           { text: "A) Le climat global devient plus instable avec des événements extrêmes.", correct: true},
        ]
    },
    {
        question:"Quel processus dans l’océan est comparable à la fonction pulmonaire humaine ?",
        answers: [
           { text: "B) La formation des vagues.", correct: false},
           { text: "A) La photosynthèse et la dissolution du CO₂", correct: true},
        ]
    },
    {
        question:"Qu’arrive-t-il si les échanges gazeux océaniques sont perturbés ?",
        answers: [
           { text: "A) Les émissions de CO₂ augmentent dans l’atmosphère.", correct: true},
           { text: "B) L’océan produit plus d’oxygène", correct: false},
        ]
    },
 {
        question:"Pourquoi les écosystèmes océaniques sont-ils comparables au système nerveux humain ?",
        answers: [
           { text: "A) Ils interconnectent différentes parties de l’océan pour maintenir un équilibre global. ", correct: true},
           { text: "B) Ils contrôlent la température des océans.", correct: false},
        ]
    },
 {
        question:"Que se passe-t-il si un écosystème clé, comme un récif corallien, s'effondre ?",
        answers: [
           { text: "B) Les courants marins ralentissent.", correct: false},
           { text: "A) Toute la chaîne alimentaire marine est perturbée.", correct: true},
        ]
    },
 {
        question:"Pourquoi les écosystèmes océaniques sont-ils comparables au système nerveux humain ?",
        answers: [
           { text: "A) Ils interconnectent différentes parties de l’océan pour maintenir un équilibre global.", correct: true},
           { text: "B) Ils contrôlent la température des océans.", correct: false},
        ]
    },
 {
        question:"Que se passe-t-il si un écosystème clé, comme un récif corallien, s'effondre ?",
        answers: [
           { text: "A) Toute la chaîne alimentaire marine est perturbée. ", correct: false},
           { text: "A) Toute la chaîne alimentaire marine est perturbée.", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Tu as ${score} bonnes réponses sur ${questions.length}!`;
    nextButton.innerHTML = "Recommencer";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
