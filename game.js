let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let graterthan = document.getElementById("greater-than");
let lessthan = document.getElementById("lesser-than");
let equalto = document.getElementById("equal-to");
let clickCount = 0;
let interval;

function randomnumber() {
    return Math.floor(Math.random() * 100) + 1; // Generate number between 1 and 100
}

window.onload = () => {
    number1.innerText = randomnumber();
    number2.innerHTML = randomnumber();
    counter(5);
}

graterthan.onclick = checkGtr;
lessthan.onclick = checkLsr;
equalto.onclick = checkEql;

function checkGtr() {
    if (parseInt(number1.innerText) > parseInt(number2.innerText)) {
        number1.innerText = randomnumber();
        number2.innerHTML = randomnumber();
        counter(5);
        clickCount++;
        localStorage.setItem("clickCount", clickCount);
    } else {
        gameOver();
    }
}

function checkLsr() {
    if (parseInt(number1.innerText) < parseInt(number2.innerText)) {
        number1.innerText = randomnumber();
        number2.innerHTML = randomnumber();
        counter(5);
        clickCount++;
        localStorage.setItem("clickCount", clickCount);
    } else {
        gameOver();
    }
}

function checkEql() {
    if (parseInt(number1.innerText) === parseInt(number2.innerText)) {
        number1.innerText = randomnumber();
        number2.innerHTML = randomnumber();
        counter(5);
        clickCount++;
        localStorage.setItem("clickCount", clickCount);
    } else {
        gameOver();
    }
}

function counter(start) {
    clearInterval(interval);
    interval = setInterval(() => {
        let timer = document.getElementById("timer");
        timer.innerText = start;
        start = start - 1;
        if (start < 0) {
            clearInterval(interval);
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    clearInterval(interval);
    setTimeout(() => {
        window.location.href = "./gameover.html";
    },1000);
}
