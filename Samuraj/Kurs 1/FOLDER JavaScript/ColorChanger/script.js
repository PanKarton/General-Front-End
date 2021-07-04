// Pobieramy przyciski w zmienne
const btnOrange = document.querySelector('.orange');
const btnGreen = document.querySelector('.green');
const btnBlue = document.querySelector('.blue');
const btnYellow = document.querySelector('.yellow');
const btnRed = document.querySelector('.red');
const bcgColor = document.body;
// Dajemy body transition

document.body.style.transition = "background-color .1s linear";

/* // Nasłuchiwanie
btnOrange.addEventListener('click', function() {
    // bcgColor.style.backgroundColor = "orange";

    // bgcColo.classList.add - srednio by tu działało, bo kazdy przycisk dodawałby swoją klase do body i by sie ich 500 narobiło po chwili, a .className usuwa poprzednie
    bcgColor.className = "orange";
});
btnGreen.addEventListener('click', function() {
    // bcgColor.style.backgroundColor = "green";
    bcgColor.className = "green";
});
btnBlue.addEventListener('click', function() {
    // bcgColor.style.backgroundColor = "blue";
    bcgColor.className = "blue";
});
btnYellow.addEventListener('click', function() {
    // bcgColor.style.backgroundColor = "yellow";
    bcgColor.className = "yellow";
});
btnRed.addEventListener('click', function() {
    // bcgColor.style.backgroundColor = "red";
    bcgColor.className = "red";
});
 */
//===========WERSJA ZOPTYMALIZOWANA===================

/* // Funkcja zmieniajaca kolor
function changeColor() {
    // this wskazuje na przycisk na jaki wcisnelismy
    // Zabierajmy .className z przycisku pod zmienną i zmienną dajemy do .classnName body
    // const selectedColor = this.className;
    // bcgColor.className = selectedColor

    // Tutaj bez zmiennej
    bcgColor.className = this.className;
}

// Wszystkie elementy div do jednej NodeListy (pseudo tablicy, ale nie tablicy)
const buttons = document.querySelectorAll('div');

// btnOrange.addEventListener('click', changeColor);
// btnGreen.addEventListener('click', changeColor);
// btnBlue.addEventListener('click', changeColor);
// btnYellow.addEventListener('click', changeColor);
// btnRed.addEventListener('click', changeColor)

// VVVVVV

// .forEach to metoda na NodeLiście
buttons.forEach(function(button) {
    button.addEventListener('click', changeColor);
}); */

function changeColor() {
    bcgColor.className = this.className;
};

const items = document.querySelectorAll('div');

items.forEach(function(button) {
    button.addEventListener('click', changeColor);
})