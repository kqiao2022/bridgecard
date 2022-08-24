import cardsResult from "./MockData";
function make_deck (cards) {
    
    var j = 0;
    var p=0;
    for (let i = 1; i < 14; i++) {
     
      switch (i) {
          case 13:
             p=4;             
             break;
          case 10:
             p = 1;
             break;
          case 11:
             p = 2;
             break;
          case 12:
             p = 3;
             break;      
          default:
             p=0;
             break;
      }
      cards[j++] = {point:p,rank:i,suit:"s",value:1};
      cards[j++] = {point:p,rank:i,suit:"h",value:2};
      cards[j++] = {point:p,rank:i,suit:"d",value:3};
      cards[j++] = {point:p,rank:i,suit:"c",value:4};

    }
}
function shuffle(){
    var cards=[];
    function get_random_int (max) {
      return Math.floor(Math.random() * max);
    }
    make_deck(cards);
    var len = cards.length;
    for (var i = 0; i < len; ++i) {
      var j = i + get_random_int(len - i);
      var tmp = cards[i];
      cards[i] = cards[j];
      cards[j] = tmp;
    }
    return cards;
}

export {make_deck,shuffle}