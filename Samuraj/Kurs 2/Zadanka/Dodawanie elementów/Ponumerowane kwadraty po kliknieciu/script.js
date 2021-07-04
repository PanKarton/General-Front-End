const addSquareButton = document.querySelector(".addSquareButton");

// const createSquare = () => {
// Jesli chcemy globalną zmienną, to mozna uzyc vara
//     var newSquare = document.createElement("div");
//     newSquare.textContent = squareIndex;
//     newSquare.classList.add("square");
//     return newSquare;
// }

let squareIndex = 1;
addSquareButton.addEventListener("click", () => {
    const newSquare = document.createElement("div");
    newSquare.textContent = squareIndex;
    newSquare.classList.add("square");
    if (squareIndex % 5 === 0) {
        newSquare.classList.add("circleDiv");
    }
    document.querySelector(`.squaresWrapper `).appendChild(newSquare);
    squareIndex++;
})