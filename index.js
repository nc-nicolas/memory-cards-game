function appendCardToParent(parent) {
    let myNewCard = document.createElement('div');
    myNewCard.className = "centered-container tricki-cell adjusted-card";

    fetch('https://deckofcardsapi.com/api/deck/lmc3oztwn7ii/draw/?count=1', {
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

function appendCardsRowToContainer(container) {
    let myNewCardsRow = document.createElement('div');
    myNewCardsRow.className = "centered-container tricki-row";

    container.appendChild(myNewCardsRow);
    return myNewCardsRow;
}


let myCardsContainer = document.getElementById('mainCardsContainer');
for (let i = 1; i <= 3; i++) {
    let myNewRow = appendCardsRowToContainer(mainCardsContainer);

    for (let k = 1; k <= 3; k++) {
        appendCardToParent(myNewRow);
    }

}


//myEffectsUtils.setCardsPopEffect();