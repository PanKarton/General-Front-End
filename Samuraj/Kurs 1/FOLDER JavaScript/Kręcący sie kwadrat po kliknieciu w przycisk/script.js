// parametry główne. Za pomocą zmiennych stwórz początkową wartość rotate (zero) i wartość o którą będziesz zmieniał stopnie (o 10 stopnii)

let deg = 0;
const degGrow = 10;
let posX = 0;
var posY = 0;
const posChange = 20;


// pobieramy elementy - pobierz przycisk i div

const btnRotateRight = document.querySelector('button');
const btnRotateLeft = document.querySelector('button:nth-child(2)');
const btnForw = document.querySelector('button:nth-child(3)');
const btnBack = document.querySelector('button:nth-child(4)');
const btnRight = document.querySelector('button:nth-child(5)');
const btnLeft = document.querySelector('button:nth-child(6)');

const midSquare = document.querySelector('.square');

// podpinamy nasłuchiwanie i umeiszczamy w nim funkcje anonimową. Pamiętaj zmieniamy własciwość transform. Za każdym razie obrót zwiększa się od 10 deg. 
// Pamiętajmy, że transform musi miec w kazdym przypadku i rotate i translate, nie moze byc tu rotate, a tam translate

// Rotate w prawo
btnRotateRight.addEventListener('click', function() {
    deg += degGrow;

    midSquare.style.transform = "rotate(" + deg + "deg) translateX(" + posX + "px) translateY(" + posY + "px)";
});

// Rotate w lewo
btnRotateLeft.addEventListener('click', function() {
    deg -= degGrow;

    midSquare.style.transform = "rotate(" + deg + "deg) translateX(" + posX + "px) translateY(" + posY + "px)";
});

// Przed siebie

btnForw.addEventListener('click', function() {
    posY -= posChange;
    midSquare.style.transform = "rotate(" + deg + "deg) translateX(" + posX + "px) translateY(" + posY + "px)";
});

// Wsteczny

btnBack.addEventListener('click', function() {
    posY += posChange;
    midSquare.style.transform = "rotate(" + deg + "deg) translateX(" + posX + "px) translateY(" + posY + "px)";
});

// W prawo

btnRight.addEventListener('click', function() {
    posX += posChange;
    midSquare.style.transform = "rotate(" + deg + "deg) translateX(" + posX + "px) translateY(" + posY + "px)";
});
// W lewo
btnLeft.addEventListener('click', function() {
    posX -= posChange;
    midSquare.style.transform = "rotate(" + deg + "deg) translateX(" + posX + "px) translateY(" + posY + "px)";
})


//Bonus dodaj właściwość transition dla div określoną na .5s.

// Dodajemy do kwadratu regułkę transition
// midSquare.style.transition = "transform .5s linear";

// LUB
// Dodajemy klasę, która jest zapisana w css
midSquare.classList.add("squareTransition");