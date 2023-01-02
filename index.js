// Selection Area-------------------------------------------------------------------------------------

const gameContainer = document.querySelector(".game-container")
const mainContainer = document.querySelector("#main_container")
const button1 = document.querySelector("#button-1")
const button2 = document.querySelector("#button-2")
const input = document.querySelector(".game_wrapper input")
const span1 =document.getElementById("span-1")
const span2 =document.getElementById("span-2")
const gameMainHeading = document.getElementById("game-main-heading")
const newGameButton = document.getElementById("restart")

// ------------------------------------------------------------------------------------------------------------------------ 

let guessesArray = []
let computerRandomGuess = Number(Math.floor(Math.random()*100) + 1)

const audio = new Audio("start.wav")

const inIt = () =>{
    const computerGuess = computerRandomGuess
    gameContainer.style.display = "none"
}
button1.addEventListener("click",()=>{
    maxGuess = 10
    audio.play()
    gameContainer.style.display = "block"
    mainContainer.style.display = "none"

        
})
button2.addEventListener("click",()=>{
    maxGuess = 5
    audio.play()

    gameContainer.style.display = "block"
    mainContainer.style.display = "none"

        
})

// main logic -----------------------------------------------------------------------------------------------------

input.addEventListener("change",(e)=>{

    const userGuess = Number(e.target.value)
    const gameOverSound = new Audio("game over.wav")
    const winningSound = new Audio("winning.wav")
    const betweenSound = new Audio("between.wav")
    if(guessesArray.length<maxGuess-1){
        if(userGuess>computerRandomGuess && userGuess<=100){
    audio.play()

        gameMainHeading.innerHTML = "Your Guess is High &#128559"
        guessesArray = [...guessesArray,userGuess]
        span2.innerHTML = guessesArray
        }else if(userGuess<computerRandomGuess && userGuess>0){
    audio.play()

        gameMainHeading.innerHTML = "Your Guess is Low &#128577"
        guessesArray = [...guessesArray,userGuess]
        span2.innerHTML = guessesArray
        }else if (userGuess === computerRandomGuess){
            winningSound.play()
        gameMainHeading.innerHTML = "It's Correct &#128516"
        newGameButton.style.display = "block"
        input.style.display = "none"
        guessesArray = [...guessesArray]
        span2.innerHTML = guessesArray
        }else if(userGuess>100 || userGuess ==0){
            betweenSound.play()
        gameMainHeading.innerHTML = "Please Guess between 1-100 &#128533"
        gameMainHeading.style.fontSize = "2.2rem"
        guessesArray = [...guessesArray]
        span2.innerHTML = guessesArray
    }}
    else{

        if(userGuess>computerRandomGuess && userGuess<=100){
            gameOverSound.play()
            gameMainHeading.innerHTML = `You Failed!! &#128542 correct number was ${computerRandomGuess}`
            guessesArray = [...guessesArray]
            span2.innerHTML = guessesArray
            newGameButton.style.display = "block"
            input.style.display = "none"
        }else if(userGuess<computerRandomGuess && userGuess>0){
            gameOverSound.play()
            gameMainHeading.innerHTML = `You Failed!! &#128542 correct number was ${computerRandomGuess}`
            guessesArray = [...guessesArray]
            span2.innerHTML = guessesArray
            newGameButton.style.display = "block"
            input.style.display = "none"
        }else if (userGuess === computerRandomGuess){
            winningSound.play()
            gameMainHeading.innerHTML = "It's Correct &#128516"
            newGameButton.style.display = "block"
            input.style.display = "none"
            guessesArray = [...guessesArray]
            span2.innerHTML = guessesArray
        }else if(userGuess>100 || userGuess ==0){
            betweenSound.play()
            gameMainHeading.innerHTML = "Please Guess between 1-100 &#128533"
            gameMainHeading.style.fontSize = "2.2rem"
            guessesArray = [...guessesArray]
            span2.innerHTML = guessesArray
        }
    }      
    e.target.value = ""
    span1.innerHTML = guessesArray.length
  
})

// Restart Logic ------------------------------------------------------------------------------------------------------------------------------------
newGameButton.addEventListener("click",(e)=>{
    window.location.reload()
    input.style.display = "inline"
    e.target.style.display = "none"
    gameMainHeading.innerHTML = "Your Guess"
    guessesArray = []
    span1.innerHTML = 0
   span2.innerHTML = "-"

})






