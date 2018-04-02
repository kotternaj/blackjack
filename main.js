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



// Showt the Deal button, hide others
var $hitButton = $('#hit'),
    $standButton = $('#stand'),
    $dealButton = $('#deal');

var showdeal = function(){
    $hitButton.hide();
    $standButton.hide();

    $dealButton.show();
}
