// questions by api
// https://opentdb.com/api.php?amount=10

// ========================================= //

// variable references
const quizQuestions = document.querySelector(".questions");
const quizOptions = document.querySelectorAll(".options");
const quizAnswer = document.querySelectorAll(".answer");
const quizBox = document.querySelector("#quizBox");
const ulBox = document.querySelector(".ul_box");
const btnDiv = document.querySelector(".btnDiv");

let score = 0;
let index = 0;
let answers = 0;

const questionsAnswer = [
  {
    qs: "What is Javascript?",
    ans: [
      "programming language",
      "programming term",
      "networking language",
      "BAAS",
    ],
    correct: "programming language",
  },
  {
    qs: "What does HTML stand for?",
    ans: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "High Tech Markup Language",
    ],
    correct: "Hyper Text Markup Language",
  },
  {
    qs: "Which of the following is a JavaScript framework/library?",
    ans: ["React", "Django", "Laravel", "Flask"],
    correct: "React",
  },
  {
    qs: "What is the purpose of Redux in React applications?",
    ans: [
      "To style components",
      "To manage global state",
      "To handle API requests",
      "To render UI elements",
    ],
    correct: "To manage global state",
  },
  {
    qs: "Which tag is used to link an external CSS file in HTML?",
    ans: [`script`, `css`, `style`, `link`],
    correct: `style`,
  },
];

window.addEventListener("DOMContentLoaded", function (event) {
  loadQuestionsAnswer(questionsAnswer);
});

function loadQuestionsAnswer(qusAns) {
  quizQuestions.innerHTML = qusAns[index].qs;
  // console.log(answers);

  let ansArray = qusAns[answers].ans;
  let listItems = ansArray.map((options, ids) => {
    return `<li>
                    <input type="radio" name="options" id="${ids}" class="options">
                    <label for="${ids}" class="answer">${options}</label>
                </li>`;
  });
  listItems = listItems.join("");
  ulBox.innerHTML = listItems;
}
const answerSubmit = (event) => {
  index++;
  answers++;
  let addQs = questionsAnswer[index].qs;
  quizQuestions.innerHTML = addQs;

  loadQuestionsAnswer(questionsAnswer);

  if (questionsAnswer.length === index + 1) {
    quizQuestions.classList.add("hidden");
    ulBox.classList.add("hidden");
    btnDiv.classList.add("hidden");
    quizBox.innerHTML = `
      <h1 class="questions center">The quiz is over</h1>
      <p class='scorePara'>Your score is -- out of --</p>
      <button id="reload">reload</button>
    `;
    document.querySelector("#reload").addEventListener("click", () => {
      window.location.reload();
    });
  }
};
