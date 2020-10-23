const BACK_CARD_IMAGE = 'https://opengameart.org/sites/default/files/card%20back%20red.png';

let activeCard = null;
let pairsFound = 0;

function printActiveCardValue(){
    console.log('Active card: ', activeCard);
}

function appendCardToParent(parent, cardData) {
    let myNewCard = document.createElement('div');
    myNewCard.className = "col-12 col-md-3 game-card";
    myNewCard.style = "background-image: url(" + BACK_CARD_IMAGE + ")";
    myNewCard.cardValue = cardData.value;
    myNewCard.cardImage = cardData.image;
    myNewCard.showCard = false;

    myNewCard.addEventListener('click', () => {
        if(myNewCard.showCard === true){
            myNewCard.style = "background-image: url(" + BACK_CARD_IMAGE + ")";
            myNewCard.showCard = false;
        }
        else{
            myNewCard.style = "background-image: url(" + myNewCard.cardImage + ")";
            myNewCard.showCard = true;
        }

        if(!activeCard){
            activeCard = myNewCard.cardValue;
            pairsFound++;

            if (pairsFound === 6) {
                console.log('Gané :)');
            }
        }
        else{
            if(activeCard === myNewCard.cardValue){
                activeCard = null;
            }
            else{
                setTimeout(() => {
                    swipCardsBackByValue(myNewCard.cardValue);
                    swipCardsBackByValue(activeCard);
                    activeCard = null;
                }, 1000);
            }
        }

    });

    parent.appendChild(myNewCard);
}

function swipCardsBackByValue(value) {
    console.log('Swipping back all cards with: ', value);
    let myCards = document.getElementsByClassName('col-12 col-md-3 game-card');

    for (let i = 0; i < myCards.length; i++) {
        let myCard = myCards[i];

        if (myCard.cardValue === value) {
            myCard.style = "background-image: url(" + BACK_CARD_IMAGE + ")";
            myCard.showCard = false;
        }
    }

}

function createCards(deckId) {
    fetch('https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=6', {
        method: 'GET'
    })
        .then(serverResponse => {
            serverResponse.json()
                .then(apiResult => {

                    let cardsArray = [];

                    apiResult.cards.forEach((item, i) => {
                        cardsArray.push({
                            image: item.image,
                            value: item.code
                        });

                        cardsArray.push({
                            image: item.image,
                            value: item.code
                        });
                    });

                    cardsArray = cardsArray.sort(() => .5 - Math.random());

                    let cardsContainer = document.getElementById('cardsContainer')
                    cardsArray.forEach(card => {
                        appendCardToParent(cardsContainer, card);
                    });

                })
                .catch(error => {

                });
        })
        .catch(error => {

        });
}

function buildGame() {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', {
        method: 'GET'
    })
        .then(serverResponse => {
            serverResponse.json()
                .then(deckData => {
                    createCards(deckData.deck_id)
                })
                .catch(error => {

                });
        })
        .catch(error => {

        });
}

buildGame();