var fullDeck = [];

// Function to create each suit, iterate over 13 cards then pushes to the fullDeck array
var suitDeck = function (cardSuit) {
	for (x = 1; x < 14; x++) {
		var eachCard = [];
		eachCard["suit"] = cardSuit;
		eachCard["value"] = x;
		if (eachCard.value === 1) {
			eachCard.value = "A";
		} else if (eachCard.value === 11) {
			eachCard.value = "J";
		} else if (eachCard.value === 12) {
			eachCard.value = "Q";
		} else if (eachCard.value === 13) {
			eachCard.value = "K";
		}
		fullDeck.push(eachCard);
	}
};

//Selects a random card from 0 to 51 in the fullDeck array, then splices that card from the fullDeck array
var randomCard = function () {
	var drawCard = Math.floor(Math.random() * (fullDeck.length));
	var returnedCard = fullDeck[drawCard];
	fullDeck.splice(drawCard , 1);
	return returnedCard;

};

//Resets the fullDeck array to 52 cards when the funciton is called
var shuffleCards = function () {
suitDeck("H");
suitDeck("D");
suitDeck("S");
suitDeck("C");
};


//Deals cards for the computer and player
var deal = function () {
	var player1 = randomCard();
	var player2 = randomCard();
	var computer1 = randomCard();
	var computer2 = randomCard();
	alert("Your first card is " + player1.suit + player1.value +", your second card is " + player2.suit + player2.value + ". The computer's first card is " + computer1.suit + computer1.value + ", the computer's second card is face down.");
	player1val = valueConverter(player1.value);
	player2val = valueConverter(player2.value);
	computer1val = valueConverter(computer1.value);
	computer2val = valueConverter(computer2.value);
	var playerTotal = player1val + player2val
	var computerTotal = computer1val + computer2val
	var hitOrStay = prompt("Your total is " + playerTotal + ". The computer is showing a " + computer1.suit + computer1.value + ". Type hit or stay.");
	
};

//Tells if the player total beats the computers total
var winCheck = function (playerTotal, computerTotal) {
	if (playerTotal) {
		
	}
};

//Converts Facecards and aces into numeric values 
var valueConverter = function (card) {
	var cardValue = card;
	if (cardValue === "K" || cardValue === "Q" || cardValue === "J") {
		cardValue = 10;
	} else if (cardValue === "A") {
		cardValue = 11;
	}
	return cardValue;
};



// Function for hitting to receive a new card
var hit = function () {
	hitCard = randomCard();
	return hitCard;
};




shuffleCards();
deal();


