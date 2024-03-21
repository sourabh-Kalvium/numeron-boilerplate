// Iteration 5: Store the player score and display it on the game over screen
let clickCount = localStorage.getItem("clickCount") || null
let playAgain = document.getElementById("play-again-button")
playAgain.addEventListener("click",()=>{
    window.location.href = "./game.html"
})

let score = document.getElementById("score-board")
score.innerHTML= clickCount
localStorage.removeItem("clickCount")
