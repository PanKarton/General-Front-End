// Pobieramy elementy z DOM

const leftDiv = document.querySelector('.s1');
const rightDiv = document.querySelector('.s2');
// Zmienna pomocnicza
let x = true;

// Tworzymy funkcje


// Sposób troche drewninany, z instrukcją warunkową i dodawaiem/zabieraniem klas
/* function changeColor() {
    if (x) {
        leftDiv.classList.remove('red');
        rightDiv.classList.add('red');
        x = false;
    } else {
        rightDiv.classList.remove('red');
        leftDiv.classList.add('red');
        x = true;
    }
}; */
//-------------------------------------------------------------------
//Sposób uproszczony, z toggle
// Toggle sprawdza czy dany element ma daną klase
// Jeżeli ma - zabiera ją
// Jeżeli nie ma - dodaje ją

/* function changeColor() {
    leftDiv.classList.toggle('red');
    rightDiv.classList.toggle('red');
};
 */
//-------------------------------------------------------------------

//Sposób z toggle i this
// this to generalnie w tym przypadku skrót od tego co zostało kliknięte
// Ale niestety nie da sie (albo jeszcze nie umiem) zmieniac kolorów obydwu divów za pomocą this, wiec zmieniaja kolory indywidualnie
function changeColor() {
    this.classList.toggle('red');
};

// Nasłuchiwanie na kliknięcie

leftDiv.addEventListener('click', changeColor);
rightDiv.addEventListener('click', changeColor);