"use strict";
let cards = [];
function shuffleCards(cards)
{
for (let i = 0; i < cards.length; i++)
    {
        let randomCards = Math.floor(Math.random() * cards.length);
    }
}


//start game function
function startGame()
{
    incorrectAttempts = 0;
    firstPick = null;
    secondPick = null;
    maxAttempts = 16;
    playing = false;
    
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
    if (!secondPick) return;
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

