document.body.addEventListener("click", event => {
    const posX = event.clientX;
    const posY = event.clientY;
    console.log(posX, posY);
    if (posX % 2 === posY % 2) {
        if (!(posX % 2)) {
            event.target.style.backgroundColor = "red";
        } else {
            event.target.style.backgroundColor = "blue";
        }
    } else {
        event.target.style.backgroundColor = "green";
    }
})