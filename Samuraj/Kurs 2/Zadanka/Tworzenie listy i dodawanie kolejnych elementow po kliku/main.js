let size = 10;
let orderElement = 1;


// Funkcja odpalana na starcie, dodaje button i puste ul
const init = () => {
    // tworzymy button
    const button = document.createElement("button");
    // dajemy mu tekst
    button.textContent = "Stwórz li";
    // Tworzymy puste ul
    const ul = document.createElement("ul");
    // dodajemy obydwa do boy
    document.body.appendChild(button);
    document.body.appendChild(ul);
    // odpalamy nasłuchiwanie na przycisk
    button.addEventListener("click", createLiElements);
}


const createLiElements = () => {
    // Pobieramy tez ul
    const ul = document.querySelector("ul");
    // 10 razy tworzymy li i dodajemy je do ul zwiekszajac za kazdym razem size i orderElement   
    for (let i = 0; i < 10; i++) {
        const newLi = document.createElement("li");
        newLi.textContent = `Element nr ${orderElement++}`;
        newLi.style.fontSize = `${size++}px`;
        ul.appendChild(newLi);
    }
}


init()