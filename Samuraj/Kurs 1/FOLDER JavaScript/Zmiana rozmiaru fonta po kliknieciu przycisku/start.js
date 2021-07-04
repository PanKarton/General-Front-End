// Pobieramy elementy z DOM

const buttonInc = document.querySelector('.bigger');
const buttonDec = document.querySelector('.smaller');
const lorem = document.querySelector('p');

// Tworzymy potrzebne zmienne pomocnicze

let fontSize = 20;

// *bonus* Ustawienie początkowego rozmiaru czcionki w JS zamiast w CSS
// Konkatenacja numbera i stringa sprawia, ze number zamienia sie w string i stringi zostają połączone w jeden string, a wlasnie stringiem podmienia sie wartosci atrybutów w CSS
lorem.style.fontSize = fontSize + "px";

// Funkcje zwiększajace i zmniejszające

function textIncrease() {
    fontSize += 10;
    lorem.style.fontSize = fontSize + 'px';
};

function textDecrease() {
    fontSize -= 10;
    lorem.style.fontSize = fontSize + 'px';
};

// Nasłuchiwanie na przyciski

buttonInc.addEventListener('click', textIncrease);
buttonDec.addEventListener('click', textDecrease);