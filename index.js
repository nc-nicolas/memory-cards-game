//import myEffectsUtils from './scripts/effects';

function appendCardToParent(parent, number) {
    let myNewCard = document.createElement('div');
    myNewCard.className = "centered-container tricki-cell";
    myNewCard.innerHTML = number;

    parent.appendChild(myNewCard);
}

function appendCardsRowToContainer(container) {
    let myNewCardsRow = document.createElement('div');
    myNewCardsRow.className = "centered-container tricki-row";

    container.appendChild(myNewCardsRow);
    return myNewCardsRow;
}


let myCounter = 1;
let myCardsContainer = document.getElementById('mainCardsContainer');
for (let i = 1; i <= 3; i++) {
    let myNewRow = appendCardsRowToContainer(mainCardsContainer);

    for (let k = 1; k <= 3; k++) {
        appendCardToParent(myNewRow, myCounter);
        myCounter++;
    }

}


//myEffectsUtils.setCardsPopEffect();