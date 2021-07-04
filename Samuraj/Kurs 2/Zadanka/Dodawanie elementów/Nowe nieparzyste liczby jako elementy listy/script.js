const addOddNumberButton = document.querySelector(".addOddNumberButton");
const oddUL = document.querySelector(".oddNumbersList");
let liNumber = 1;
const addOddNumber = () => {
    const newLi = document.createElement("li");
    newLi.textContent = liNumber;
    // Modulo 0 zostanie zamienione na fałsz, a negacja !() zamieni falsz na prawde i wywola sie if
    if (!(liNumber % 3)) {
        newLi.style.fontSize = "2.5rem";
    }
    oddUL.appendChild(newLi);
    liNumber += 2;
}

addOddNumberButton.addEventListener("click", addOddNumber);