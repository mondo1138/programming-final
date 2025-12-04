"use strict";

let cardList =
[
"Image1",
"Image2",
"Image3",
"Image4",
"Image5",
"Image6",
"Image7",
"Image8"
];

let cards = [];
let randomCards = [];
let incorrectAttempts = 0;
let firstPick = null;
let secondPick = null;
let stopClicks = false;
const maxAttempts = 16;
let score = 0;
let matchedCount = 0;
let totalPairs = 8;

// shuffle 

for (let i = 0; i < cardList.length; i++) {
    randomCards.push(cardList[i]);
    randomCards.push(cardList[i]);
}

randomCards.sort(() => Math.random() - 0.5);

// class

class cardGame {
    constructor(imageSource, imageElement) {
        this.imageSource = imageSource;
        this.imageElement = imageElement;
        this.isFlipped = false;
        this.isMatched = false;

        this.imageElement.src = "logo_header.gif";

        imageElement.addEventListener("click", () => {
            this.flipCard();
        });
    }

    flipCard() {
        if (this.isMatched) return;
        if (this.isFlipped) return;
        if (stopClicks) return;

        this.isFlipped = true;
        this.imageElement.src = this.imageSource;

        handleCardFlip();
    }

    hideCard() {
        this.isFlipped = false;
        this.imageElement.src = "logo_header.gif";
    }

    matchCard() {
        this.isMatched = true;
    }
}

//scoreboard

const scoreBoard = document.createElement("p");
scoreBoard.textContent = "SCORE: " + score;
scoreBoard.style.fontSize = "35px";
document.body.appendChild(scoreBoard);

//create cards & bind to html

for (let i = 1; i <= 16; i++) {
    let img = document.getElementById("imgCellNum" + i);

    let source = randomCards[i - 1] + ".jpg";

    let card = new cardGame(source, img);
    cards.push(card);
}

// card flip logic

function handleCardFlip() {

    // Find first pick
    if (!firstPick) {
        firstPick = cards.find(c => c.isFlipped && !c.isMatched);
        return;
    }

    // Find second pick
    secondPick = cards.find(c => c.isFlipped && !c.isMatched && c !== firstPick);

    if (!secondPick) return;

    stopClicks = true;

    // MATCH
    if (firstPick.imageSource === secondPick.imageSource) {
        
        firstPick.matchCard();
        secondPick.matchCard();

        setTimeout(() => {
            firstPick.imageElement.style.visibility = "hidden";
            secondPick.imageElement.style.visibility = "hidden";

            matchedCount++;
            score += 1;
            scoreBoard.textContent = "SCORE: " + score;

            if (matchedCount === totalPairs) {
                reward.style.display = "block";
            }

            resetPicks();
        }, 700);
    }

    // NO MATCH
    else {
        incorrectAttempts++;

        setTimeout(() => {
            firstPick.hideCard();
            secondPick.hideCard();

            if (incorrectAttempts >= maxAttempts) {
                alert("Game Over‼ Too many incorrect attempts!");
                location.reload();
            }

            resetPicks();
        }, 1000);
    }
}

function resetPicks() {
    firstPick = null;
    secondPick = null;
    stopClicks = false;
}

//Reward :)

let reward = document.createElement("button");
reward.innerHTML = "Congrats, you win!! Click here for your prize!";
reward.style.display = "none";
reward.style.fontSize = "20px";
reward.style.marginTop = "20px";
document.body.appendChild(reward);

// Le redirect
reward.onclick = function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
};
