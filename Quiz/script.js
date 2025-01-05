// script.js
const quizData = [
    {
      question: "What is mental health?",
      options: [
        "The absence of mental illness",
        "A state of well-being where individuals cope with stress, work productively, and contribute to their community",
        "Being happy all the time",
        "Avoiding challenges in life",
      ],
      answer: 1,
      explanation: "Mental health is about overall well-being, not just the absence of mental illness.",
    },
    {
      question: "Which activity can improve mental health?",
      options: [
        "Regular physical exercise",
        "Ignoring emotions",
        "Overworking yourself",
        "Avoiding social interactions",
      ],
      answer: 0,
      explanation: "Exercise helps reduce stress, anxiety, and depression.",
    },
    // Add more questions as needed
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const quizContainer = document.getElementById("quiz");
  const nextButton = document.getElementById("next-btn");
  const restartButton = document.getElementById("restart-btn");
  
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
      <h2>${currentQuestion.question}</h2>
      <ul class="options">
        ${currentQuestion.options
          .map(
            (option, index) =>
              `<li><button onclick="selectAnswer(${index})">${option}</button></li>`
          )
          .join("")}
      </ul>
      <p id="explanation" class="hidden"></p>
    `;
  }
  
  function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const explanationElement = document.getElementById("explanation");
  
    if (selectedIndex === currentQuestion.answer) {
      score++;
      explanationElement.textContent = "Correct! " + currentQuestion.explanation;
    } else {
      explanationElement.textContent = "Incorrect. " + currentQuestion.explanation;
    }
  
    explanationElement.classList.remove("hidden");
    document.querySelectorAll(".options button").forEach((button, index) => {
      button.disabled = true;
      button.style.backgroundColor =
        index === currentQuestion.answer ? "green" : "red";
    });
  
    nextButton.classList.remove("hidden");
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
      nextButton.classList.add("hidden");
    } else {
      showResults();
    }
  }
  
  function showResults() {
    quizContainer.innerHTML = `
      <h2>Your Score: ${score} / ${quizData.length}</h2>
      <p>Thank you for taking the Mental Health Awareness Quiz!</p>
    `;
    nextButton.classList.add("hidden");
    restartButton.classList.remove("hidden");
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    restartButton.classList.add("hidden");
    showQuestion();
  }
  
  nextButton.addEventListener("click", nextQuestion);
  restartButton.addEventListener("click", restartQuiz);
  
  // Start the quiz
  showQuestion();
  