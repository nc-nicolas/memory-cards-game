function appendCardToParent(parent, cardData) {
    let myNewCard = document.createElement('div');
    myNewCard.className = "col-12 col-md-3 game-card";
    myNewCard.style = "background-image: url(" + cardData.image + ")";
    myNewCard.cardValue = cardData.value;

    myNewCard.addEventListener('click',()=>{
        console.log('Pressed card with value: ',cardData.value);    
    });

    parent.appendChild(myNewCard);
}

function createCards(deckId) {
    fetch('https://deckofcardsapi.com/api/deck/'+deckId+'/draw/?count=6', {
        method: 'GET'
    })
        .then(serverResponse => {
            serverResponse.json()
                .then(apiResult => {
                    
                    let cardsArray =[];
                    
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

                    cardsArray = cardsArray.sort( () => .5 - Math.random() );

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

function buildGame(){
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