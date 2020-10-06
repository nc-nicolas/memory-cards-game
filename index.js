let myNumberSixCard = document.getElementById("numberSixCard");

myNumberSixCard.addEventListener('mouseover', () => {
    // myNumberSixCard.className = "centered-container tricki-cell onhover-card";
    myNumberSixCard.classList.add("onhover-card");
});

myNumberSixCard.addEventListener('mouseout', () => {
    // myNumberSixCard.className = "centered-container tricki-cell";
    myNumberSixCard.classList.remove("onhover-card");
});