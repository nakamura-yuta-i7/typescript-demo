// var deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         return function() {
//             var pickedCard = Math.floor(Math.random() * 52);
//             var pickedSuit = Math.floor(pickedCard / 13);
// 			
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
// 
// var cardPicker = deck.createCardPicker();
// var pickedCard = cardPicker();
// 
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // Notice: the line below is now a lambda, allowing us to capture 'this' earlier
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
//# sourceMappingURL=lambdas_and_using_this.js.map