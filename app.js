// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.

let play = document.querySelector(".play")
play.addEventListener("click" ,()=>{
    console.log("yes")
    window.location.href = "./game.html"
})
