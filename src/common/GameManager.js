
function makeDeck(cards) {

    var j = 0;
    var p = 0;
    for (let i = 1; i <= 13; i++) {

        switch (i) {
            case 13:
                p = 4;
                break;
            case 12:
                p = 3;
                break;
            case 11:
                p = 2;
                break;
            case 10:
                p = 1;
                break;
            default:
                p = 0;
                break;
        }
        cards[j++] = { point: p, rank: i, suit: "s", value: 1 };
        cards[j++] = { point: p, rank: i, suit: "h", value: 2 };
        cards[j++] = { point: p, rank: i, suit: "d", value: 3 };
        cards[j++] = { point: p, rank: i, suit: "c", value: 4 };

    }
}
function shuffle() {
    var cards = [];
    function get_random_int(max) {
        return Math.floor(Math.random() * max);
    }
    makeDeck(cards);
    var len = cards.length;
    for (var i = 0; i < len; ++i) {
        var j = i + get_random_int(len - i);
        var tmp = cards[i];
        cards[i] = cards[j];
        cards[j] = tmp;
    }
    return cards;
}
function settleSeat(seat) {

    const points = seat['cards'].map((c) => c['data']['point']).reduce(function (previous, current) {
        return previous + current;
    }, 0);
    
    const spoints = seat['cards'].map((c)=>c['data']).filter((c) => c['suit'] === 's').map((c) => c['point']).reduce(function (previous, current) {
        return previous + current;
    }, 0);
    const hpoints = seat['cards'].map((c)=>c['data']).filter((c) => c['suit'] === 'h').map((c) => c['point']).reduce(function (previous, current) {
        return previous + current;
    }, 0);
    const dpoints = seat['cards'].map((c)=>c['data']).filter((c) => c['suit'] === 'd').map((c) => c['point']).reduce(function (previous, current) {
        return previous + current;
    }, 0);
    const cpoints = seat['cards'].map((c)=>c['data']).filter((c) => c['suit'] === 'c').map((c) => c['point']).reduce(function (previous, current) {
        return previous + current;
    }, 0);
    seat['points'] = points;
    seat['subPoints'] = [spoints, hpoints, dpoints, cpoints];

}

export { makeDeck, shuffle, settleSeat }