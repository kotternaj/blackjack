// constructor

var Card = function(suit, number){
    this.getNumber = function(){
        return number;
    };

    this.getSuit = function(){
        var suitName = '';
        switch (suit){
            case 1: 
              suitName = "Hearts";
              break;
            case 2: 
              suitName = "Clubs"
              break;
            case 3: 
              suitName = "Spades";
              break;
            case 4: 
              suitName = "Diamonds"
              break;
        }
        return suitName;
    };

    this.getSymbol = function (){
        var suitName = '';
        switch (suit){
            case 1: 
              suitname = "&hearts;";
              break;
            case 1: 
              suitname = "&clubs;";
              break;  
            case 1: 
              suitname = "&spades;";
              break;
            case 1: 
              suitname = "&diamonds;";
              break;         
        }
        return suitName;
    };

    this.getValue = function(){
        var value = number;
        if (number >= 10){
            value = 10;
        }
        if (number === 1) {
            value= 11;
        }
        return value;
    };

    this.getName = function (){
        var cardName = '';
        switch(number){
            case 1: 
              cardname = 'A';
              break;
            case 13: 
              cardname = 'K';
              break;
            case 12: 
              cardname = 'Q';
              break;
            case 11:
              cardname = 'J';
              break;
            default:
              cardName = number;
              break;
        }
        return cardName+this.getSymbol();
    }
}

// constructor

var Deck = function(){
    var cards = [];
    var newCards = function(){
        var i, 
            suit, 
            number;
        for (i = 0; i < 52; i++){
            suit = i% 4 + 1; 
            number = i% 13 + 1;
            cards.push(new Card(suit, number));
        }
    };

    newCards();

    this.shuffle = function(){
        for(var j, x, i = cards.length; i; j = 
            parseInt(Math.random() * i), x = cards[--1],
            cards[i] = cards[j], cards[j] = x);
        return this.getCards();
    };
    this.getCards = function (){
        return cards;
    };
    this.deal = function(){
        if (!cards.length){
            console.log("Ran out of cards, new deck");
            newCards();
            this.shuffle();
        }
        return cards.pop();
    };
};

// constructor
var Hand = function(deck){
    var cards = [];

    //deal two cards
    cards.push(deck.deal(), deck.deal());
   //returns {Array} the array of Cards representing the hand
    this.getHand = function(){
        return cards;
    };
    // returns {Number} The score of the hand
    this.score = function(){
        var i, 
        score = 0,
        cardVal = 0,
        aces = 0;
        
        for (i = 0; i < cards.length; i++){
            cardVal = cards[i].getValue();
            if (cardVal == 11) {
                aces += 1;
            }
            score += cardVal;
        }
        //check to see if Aces should be counted as 1 or 11
        while (score > 21 && aces > 0){
            score -= 10;
            aces -=1
        }
        return score;
    };
    //adds Card from Deck into hand
    this.hitMe = function(){
        if (cards.length < 5){
            cards.push(desk.deal());
        }
    };

};

//Play BlackJack
(function (){
    //set up game's deck
    var deck = new Deck();

    var wins = 0
    var losses = 0;

    //score tally
    var declareWinner = function(userHand, dealerHand){
        var outcome = '',
            dealerScore = dealerHand.score(),
            userScore = userHand.score();
        
            if (userScore > 21 || dealerScore === 21){
                outcome = "You lose!"
                losses++;            
            }else if (userScore <= 21 && userHand.getHand().length >= 5){
                outcome = "You win! 5-card Charlie!";
                wins ++;
            }else if (dealerScore > 21 || userScore === 21 || userScore > dealerHand.score()){
                outcome = "You win!";
                wins++;
               }
    }
})

// Show the Deal button, hide others
var $hitButton = $('#hit'),
    $standButton = $('#stand'),
    $dealButton = $('#deal');

var showdeal = function(){
    $hitButton.hide();
    $standButton.hide();

    $dealButton.show();
}
