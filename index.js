function setPopEffectOnCards() {
    let myItems = document.getElementsByClassName('centered-container tricki-cell');
    for (let i = 0; i < myItems.length; i++) {
        let myCard = myItems[i];

        myCard.addEventListener('mouseover', () => {
            myCard.classList.add("onhover-card");
        });

        myCard.addEventListener('mouseout', () => {
            myCard.classList.remove("onhover-card");
        });
    }
}

setPopEffectOnCards();