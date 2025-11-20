
"use strict";

let cardList 
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



//randomize cards
let cards = [];
let randomCards = []
function shuffleCards(cardList)
{
for (let i = 0; i < cardList.length; i++)
    {
        randomCards = Math.floor(Math.random() * cardList.length);
    }
}


//start game function
function startOfGame()
{
    incorrectAttempts = 0;
    firstPick;
    secondPick;
    playing = false;

    cards = [];
    for (let i = 0; i <= 16; i++)
    {
        cards.push()
    }

}