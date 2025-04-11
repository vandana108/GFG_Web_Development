
const parentElement = document.getElementById("parent-container");
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

// creating card image element

const cardImageElement = document.createElement("img");
cardImageElement.classList.add("image");

cardImageElement.setAttribute("src","pic_bulbon.gif");

cardImageElement.setAttribute("alt", "travel-card");

cardContainer.appendChild(cardImageElement);
parentElement.appendChild(cardContainer)