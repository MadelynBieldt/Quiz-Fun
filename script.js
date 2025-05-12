// Global variables
let selectedVibe = '';
let selectedCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let history = {
    history: [],
    music: [],
    math: [],
    science: [],
    general: []
};

// Questions for each category
const questions = {
    history: [
        {
            question: "Who was the first president of the United States?",
            options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
            answer: "George Washington"
        },
        // More questions...
    ],
    music: [
        {
            question: "Who is known as the 'King of Pop'?",
            options: ["Michael Jackson", "Elvis Presley", "Prince", "Madonna"],
            answer: "Michael Jackson"
        },
        // More questions...
    ],
    math: [
        {
            question: "What is 5 + 5?",
            options: ["10", "20", "25", "15"],
            answer: "10"
        },
        // More questions...
    ],
    science: [
        {
            question: "What planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Earth", "Jupiter"],
            answer: "Mars"
        },
        // More questions...
    ],
    general: [
        {
            question: "What is the capital of France?",
            options: ["Paris", "Rome", "Berlin", "Madrid"],
            answer: "Paris"
        },
        // More questions...
    ]
};

// Start the game
function chooseVibe(vibe) {
    selectedVibe = vibe;
    document.body.className = vibe; // Change body class for vibe
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('category-screen').classList.remove('hidden');
}

// Start quiz based on selected category
function startQuiz() {
    selectedCategory = document.getElementById('category').value;
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    document.getElementById('category-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
}

// Load the current question
function loadQuestion() {
    const questionObj = questions[selectedCategory][currentQuestionIndex];
    document.getElementById('question-bubble').textContent = questionObj.question;

    // Display answer options
    const answersHTML = questionObj.options.map((option, index) => {
        return `
            <input type="radio" name="answer" value="${option}" id="answer${index}">
            <label for="answer${index}">${option}</label><br>
        `;
    }).join('');
    document.getElementById('answers').innerHTML = answersHTML;
}

// Handle answer submission
function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer && selectedAnswer.value === questions[selectedCategory][currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions[selectedCategory].length) {
        loadQuestion();
    } else {
        showFinalScreen();
    }
}

// Show final score
function showFinalScreen() {
    document.getElementById('final-score').textContent = score;
    history[selectedCategory].push(score);
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('final-screen').classList.remove('hidden');
}

// Restart the game
function restartGame() {
    document.getElementById('final-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
}
