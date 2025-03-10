// questions by api
// https://opentdb.com/api.php?amount=10

// ========================================= //

// variable references
const quizQuestions = document.querySelector(".questions")
const quizOptions = document.querySelectorAll(".options")
const quizAnswer = document.querySelectorAll(".answer")
const quizBox = document.querySelector("#quizBox")
const ulBox = document.querySelector(".ul_box")
// const submitBtn = document.getElementById("btn")

let score = 0;
let index = 0;
let content = 0;

const questionsAnswer = [
    {
        qs:"What is Javascript?",
        ans:[
           "programming language",
            "programming term",
            "networking language",
            "BAAS"
        ],
        correct:"programming language"
    },
    {
        qs:"What does HTML stand for?",
        ans:[
            "Hyperlinks and Text Markup Language",
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "High Tech Markup Language"
        ],
        correct:"Hyper Text Markup Language"
    },
    {
        qs:"Which of the following is a JavaScript framework/library?",
        ans:[
            "React",
            "Django",
            "Laravel",
            "Flask"
        ],
        correct:"React"
    },
    {
        qs:"What is the purpose of Redux in React applications?",
        ans:[
            "To style components",
            "To manage global state",
            "To handle API requests",
            "To render UI elements"
        ],
        correct:"To manage global state"
    },
    {
        qs:"Which tag is used to link an external CSS file in HTML?",
        ans:[
            "<script>","<css>","<style>","<link>"],
        correct:"<style>"
    },
]


window.addEventListener("DOMContentLoaded",function (event) {
    loadQuestionsAnswer(questionsAnswer)
})

function loadQuestionsAnswer(qusAns) {
    quizQuestions.innerHTML = qusAns[index].qs
    
    let listItems = document.createElement("li")
    // let Length = qusAns[0].ans.length
    console.log(qusAns[0].ans);
    
    listItems.innerHTML = `
                    <input type="radio" name="options" id="option_1" class="options">
                    <label for="option_1" class="answer">options</label>
                    `


    // listItems.innerHTML = qusAns.map((options,ids)=>{
    //     console.log(options.ans[ids]);
        
    // })
    ulBox.appendChild(listItems)
    // ulBox
    // console.log(ulBox);
     
}

const answerSubmit = () =>{
    index++
    // quizQuestions.innerHTML = questionsAnswer[index].qs
    console.log(questionsAnswer[index].qs);
    console.log(index);
    
    // quizQuestions.innerHTML = questionsAnswer[index].ans.map((ans)=>console.log(ans))
}

