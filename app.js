let mainDiv = document.querySelector('.mainDiv')
let userInput = document.querySelector('#userInput')
let checkBtn = document.querySelector('#checkBtn')
let score = document.querySelector('#score')
let correct = document.querySelector('#correct')
score.textContent += "score:" 
let scoreNumber = 0


function check() {
    let newRandomNumber = Math.ceil(Math.random() * 20)
    console.log(newRandomNumber);
    if (userInput.value == newRandomNumber) {
        ++scoreNumber
        score.textContent = "score:" + scoreNumber 
        mainDiv.style.backgroundColor = "#54aa3d"
        correct.textContent = "congrats"
    } else if (userInput.value > newRandomNumber) {
        --scoreNumber
        score.textContent = "score:" + scoreNumber 
        alert("too high")
        correct.textContent = ""
    } else if (userInput.value < newRandomNumber) {
        --scoreNumber
        score.textContent = "score:" + scoreNumber 
        alert("too low")
        correct.textContent = ""
    }
    
    userInput.value = ''
}

function again() {
    let newRandomNumber = Math.ceil(Math.random() * 20)
    score.textContent = "score: 0 "
    userInput.value = ""
}