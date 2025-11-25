"use strict";
let cards = [];
function shuffleCards(cards)
{
for (let i = 0; i < cards.length; i++)
    {
        let randomCards = Math.floor(Math.random() * cards.length);
    }
}

let incorrectAttempts = 0;
let firstPick = null;
let secondPick = null;
let stopClicks = false;
const maxAttempts = 16;
let score = 0;
const scoreBoard = document.createElement("p");
scoreBoard.textContent = "Score Board: " + score;
document.body.appendChild(scoreBoard);
//start game function
function startOfGame()
{
    cardsShuffled = [];
    for (let i = 0; i <= cardsList.length; i++)
    {
        cardsShuffled.push(cardList[i]);
        cardsShuffled.push(cardList[i]);
    }
if (firstPick.imageSource === secondPick.imageSource)
    {
        score++
    }
    //still need to add more here
}

//handle card flip function
function handleCardFlip()
{
    //handle the first pick
    if (!firstPick)
    {
        for (let i = 0; i < cards.length; i++)
        {
            if (cards[i].isFlipped && !cards[i].isMatched)
            {
                firstPick = cards[i];
                break;
            }
        }
        break;
    }
    //handle the second pick
    for (let j = 0; j < cards.length; j++)
    {
        if(cards[j].isFlipped && cards[j].isMatched && cards[j] !== firstPick)
        {
            secondPick = cards[j];
            break;
        }
    }
    stopClicks = true;

    //check for a match
    if (firstPick.imageSource === secondPick.imageSource)
    {
        firstPick.matchCard();
        secondPick.matchCard();

        firstPick.imageElement.style.visibility = "hidden";
        secondPick.imageElement.style.visibility = "hidden";

        firstPick = null;
        secondPick = null;
        stopClicks = false;
    }
    else
    {
        incorrectAttempts++;

        function setTimeout()
        {
            firstPick.hideCard();
            secondPick.hideCard();

            firstPick = null;
            secondPick = null;
            stopClicks = false;

            if (incorrectAttempts >= maxAttempts)
            {
                alert("Game Over!! Too many attempts!");
            }
        }
    }
}








