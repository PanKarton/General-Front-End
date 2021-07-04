// Pobieramy przyciski z dom

const jsBtn = document.querySelector('.js');


function createSquare() {
    // Tworzmy div
    // Po wykonaniu się funkcja zostaje usunięta razem z zawartością, więc zmienna divItem powstaje za każdym razem od nowa
    const divItem = document.createElement('div');
    // rodzaje dodawania klasy

    // divItem.classList.add('box x y z ');  Mozemy dodawac wiele klas po spacji

    // divItem.className = "box"; Mozemy dodac tylko 1 klase

    // divItem.setAttribute("class", "box"); Pierwszym argumentem metody setAttribute jest nazwa atrybutu, a drugim zawartosc

    divItem.classList.add('box');

    // appendChild() dodaje zawsze dziecko na koncu rodzica
    document.body.appendChild(divItem);

};

// Nasłuchiwane na przycisk

jsBtn.addEventListener('click', createSquare);



//================================== JQ ==================

// Pobieramy element, dajemy mu nasłuchiwanie, ww funkcji po clicku pobieramy body i tworzymy na koncu diva z klasa .box

$('.jq').on('click', function() {
    $('body').append('<div class="box"></div>')
});