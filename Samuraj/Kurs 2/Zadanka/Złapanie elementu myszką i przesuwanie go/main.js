const square = document.querySelector(".square");

const moveSquare = (e) => {
    const newPosX = prevPosX + e.movementX;
    const newPosY = prevPosY + e.movementY;
    square.style.top = newPosY + `px`;
    square.style.left = newPosX + `px`;
    prevPosX = newPosX;
    prevPosY = newPosY;
}

let isPressed = false;
let prevPosX = square.offsetLeft;
let prevPosY = square.offsetTop;
square.addEventListener("mousedown", () => {
    square.style.backgroundColor = "#303030";
    isPressed = true;
})

square.addEventListener("mousemove", (e) => {
    if (isPressed) {
        moveSquare(e);
    }
});

square.addEventListener("mouseup", () => {
    square.style.backgroundColor = "black";
    isPressed = false;
})
square.addEventListener("mouseleave", () => {
    isPressed = false;
    square.style.backgroundColor = "black";
})