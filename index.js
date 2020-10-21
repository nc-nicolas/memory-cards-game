function appendCardToParent(parent) {
    let myNewCard = document.createElement('div');
    myNewCard.className = "col-12 col-md-4 tricki-cell adjusted-card ";

    fetch('https://deckofcardsapi.com/api/deck/7wj5mi3u2nvx/draw/?count=1', {
        method: 'GET'
    })
        .then(serverResponse => {
            serverResponse.json()
                .then(cardData => {
                    console.log('Mis datos: ', cardData);

                    myNewCard.style = "background-image: url(" +
                        cardData.cards[0].image + ")";

                    parent.appendChild(myNewCard);
                })
                .catch(error => {

                });
        })
        .catch(error => {

        });
}


let myContainer = document.getElementById('cardsContainer')
for (let i = 1; i <= 9; i++) {
    appendCardToParent(myContainer);
}