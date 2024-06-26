let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message ="";
let messageEl = document.getElementById( "message-el" );
let sumEl = document.getElementById( "sum-el" );
let cardsEl = document.getElementById( "cards-el" );

let player = {
    name : "Israel",
    chips : 135
}

let playerEl = document.getElementById( "player-el" );
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 11) + 1; 
    if (randomCard > 10) {
        randomCard = 10;
    } if (randomCard == 1) {
        randomCard = 11
    }
    return randomCard;
}

for(let i = 0; i  < cards.length; i++) {
    console.log("teste: " + cards[i])
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cartas: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Soma: " + sum;
    if(sum <= 20) {
        message = ("menos q 21, quer uma nova carta?")
    } else if (sum == 21) {
        message = ("vc ganhou")
        hasBlackJack = true;
    } else {
        message = ("vc perdeu")
        isAlive = false;
    } 
    messageEl.textContent = message
}

function newCard() {
    if(isAlive == true && hasBlackJack == false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }   
}
