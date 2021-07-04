const block = document.querySelector(".block");
let blockHeight = 0;
let shouldGrow = true;
const changeBlockHeight = () => {
    if (blockHeight >= window.innerHeight / 2) {
        shouldGrow = false;
        block.style.backgroundColor = "green";
    } else if (blockHeight <= 0) {
        shouldGrow = true;
        block.style.backgroundColor = "red";
    }
    block.style.height = `${blockHeight}px`;
    shouldGrow ? blockHeight += 5 : blockHeight -= 5;
}

window.addEventListener("scroll", changeBlockHeight);