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
]




let randomCards = [];

for (let i = 0; i < cardList.length; i++) 
    {
        randomCards.push(cardList[i]); 
        randomCards.push(cardList[i]);
    }

randomCards.sort(function() 
{
    return Math.random() ;
});

class cardGame
{
  constructor(imageSource, imageElement) 
  {
    this.imageSource = imageSource;  
    this.imageElement = imageElement;    
    this.isFlipped = false;
    this.isMatched = false;

    
    imageElement.addEventListener("click", () => 
    {
      this.flipCard();
    });
  }


  flipCard()
  {
    if (this.isMatched) return
    if (this.isFlipped) return; 
    if (stopClicks) return;     

    this.isFlipped = true;
    this.imageElement.src = this.imageSource; 

    handleCardFlip();
  }

  
  hideCard() 
  {
    this.isFlipped = false;
    this.imageElement.src = "logo_header.gif"; 
  }

  
  matchCard() 
  {
    this.isMatched = true;
  }
}

let incorrectAttempts = 0;
let firstPick = null;
let secondPick = null;
let stopClicks = false;
const maxAttempts = 16;
let score = 0;
let matchedCount = 0;
let totalPairs = 8;
//Got this idea from W3Schools.com
const scoreBoard = document.createElement("p");
scoreBoard.textContent = "SCORE: " + score;
scoreBoard.style.fontSize = "35px";
document.body.appendChild(scoreBoard);
//End of W3Schools code
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

        matchedCount++
        
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
//reward button for if they win
let reward = document.createElement("button");
reward.innerHTML = "Congrats, you win!! Click here for your prize!";
reward.style.display = "none"; 
reward.style.fontSize = "20px";
reward.style.marginTop = "20px";

  // show win button if all pairs matched
    if (matchedCount === totalPairs)
{
    reward.style.display = "block";
    
    firstPick = null;
    secondPick = null;
    stopClicks = false;
}

// Add button to the page
document.body.appendChild(reward);

// Button redirect when clicked
//found the href method to redirect to a different page from W3schools
//https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
reward.onclick = function () {
    reward.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"; 
};
