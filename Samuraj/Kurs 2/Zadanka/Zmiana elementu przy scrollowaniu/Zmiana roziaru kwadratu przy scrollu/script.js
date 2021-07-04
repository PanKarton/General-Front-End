const middleSquare = document.querySelector(".square");
const windowHeight = window.innerHeight;
let squareSide = 0;
let shouldInc = true;
const changeSquareSize = () => {
    if (squareSide > windowHeight / 2) {
        shouldInc = false;
    } else if (squareSide < 0) {
        shouldInc = true;
    }

    if (shouldInc) {
        squareSide += 10;
        console.log(squareSide);
    } else {
        squareSide -= 10;
        console.log(squareSide);
    }

    middleSquare.style.width = `${squareSide}px`;
    middleSquare.style.height = `${squareSide}px`;

}
window.addEventListener("scroll", changeSquareSize);