let mainDiv = document.querySelector('.mainDiv')
let userInput = document.querySelector('#userInput')
let checkBtn = document.querySelector('#checkBtn')
let btnSpan = document.querySelector('#btnSpan')
let correct = document.querySelector('#correct')
let hint = document.querySelector('#hint')
let Highscore = document.querySelector('#Highscore')
let score = document.querySelector('#score')

Highscore.textContent = 0

let scoreNumber = 20
let HighscoreNumber = 0
let newRandomNumber = Math.ceil(Math.random() * 20)
console.log(newRandomNumber);



function again() {
    newRandomNumber = Math.ceil(Math.random() * 20)
    console.log(newRandomNumber);
    mainDiv.style.backgroundColor = "#1f1f1f"
    mainDiv.style.transform = "rotate(-360deg)"
    mainDiv.style.transition = "0.5s"
    mainDiv.style.color = "white"
    mainDiv.style.border = "3px solid whitesmoke"
    btnSpan.style.color = "white"
    checkBtn.style.color = "white"
    correct.textContent = ""
    hint.textContent = "Start guessing....."
    userInput.value = ""
    score.textContent = '' 
    scoreNumber = 20 
}

function check() {
    if (userInput.value == newRandomNumber) {
        mainDiv.style.backgroundColor = "whitesmoke"
        mainDiv.style.transform = "rotate(360deg)"
        mainDiv.style.transition = "0.5s"
        mainDiv.style.color = "black"
        btnSpan.style.color = "black"
        checkBtn.style.color = "black"
        mainDiv.style.border = "none"
        correct.textContent = "congrats"
        hint.textContent = "Correct"
        if (HighscoreNumber < scoreNumber) {
            HighscoreNumber = scoreNumber
            Highscore.textContent = HighscoreNumber
        } else {
            return false
        }
    } else if (userInput.value > newRandomNumber) {
        --scoreNumber
        hint.textContent = "too high"
    } else if (userInput.value < newRandomNumber) {
        --scoreNumber
        hint.textContent = "too low"
    }

    

    score.textContent = scoreNumber 
}