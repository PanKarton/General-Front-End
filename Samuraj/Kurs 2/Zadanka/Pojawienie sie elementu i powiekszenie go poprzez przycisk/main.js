// tutaj rozwiązanie

const button = document.querySelector("button");
const liElements = document.querySelectorAll("li");
let isVisible = false;
let fontSize = 10;

const showAndIncrease = () => {
    if (!isVisible) {
        liElements.forEach(liElement => {
            liElement.style.display = "block";
        })
        isVisible = true;
    }
    liElements.forEach(liElement => {
        liElement.style.fontSize = `${fontSize}px`;
    })
    fontSize++;
    console.timeEnd();
}

button.addEventListener("click", showAndIncrease);