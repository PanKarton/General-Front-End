/* ZMIENNE */

var userName = "Arek";
var userAge = 23;
var drivingLicence = false;

console.log(userName, userAge);

/* let to "lepszy" var, naprawiający błędy vara
   const - zmienna, która sie nie zmienia */

let myAge = 12;
let proffesion = "farm worker";
const yearOfBirth = "1997";


// Pobranie elementu


// To zwraca nam cały znacznik o klasie .text
document.querySelector('.text');

// To przypisuje nam element do zmiennej p
// Najlepiej elementy html przypisywac do const, bo nie bedziemy podmieniac elementu w zmiennej
const p = document.querySelector('.text');

// Nasłuchiwanie na zdarzenie

const btn = document.querySelector('.click');
const body = document.body;
// Bierzemy element, dajemu mu funkcje nasłuchującą addEventListener(a, b), gdzoe a to zdarzenie, a b to to co sie ma wydarzyc(funkcja)

// click - kliknięcie

/* btn.addEventListener('click', function() {
    console.log('Click!');
}); */
// ===========================================
// mouseover - najechanie (hover)

/* btn.addEventListener('mouseover', function() {
    console.log('Najechałeś!');
}); */
// ===========================================
// mousemove - ruch myszką
/* btn.addEventListener('mousemove', function() {
    console.log('Ruszyles myszka!');
    body.style.left = '1200px';
}); */
// ===========================================
// scroll - scrollowanie
/* window.addEventListener('scroll', function() {
    console.log('Scrollujesz!');
}); */
// Licznik kliknięć

/* let n = 0;

btn.addEventListener('click', function() {
    n += 1; //inkrementacja
    //  n++;
    console.clear();
    console.log('Kliknąłeś', n, 'razy!');
}); */




// Konkatenacja - łączenie stringów w jeden

/* window.addEventListener('scroll', function() {
    console.clear();
    //  scrollY - właściwość pokazująca gdzie jest nasz scroll
    // Konkatenacja stringa i number zamienia number(scrollY) w stringa i łączy je w jeden string
    console.log('Scrollujesz o ' + window.scrollY + 'px');
}) */

// Deklaracja funkcji

/* function showScrollPosition() {
    console.clear();
    console.log("Scrollujesz o " + window.scrollY + "px");
}

window.addEventListener('scroll', showScrollPosition); */

//========= Scrollowanie w px ==============

const div = document.querySelector('span');
const button = document.querySelector('button');
let x = 0;

window.addEventListener('scroll', function() {
    div.textContent = window.scrollY;
})


//Kliknięcie przenosi na góre strony
button.addEventListener('click', function() {
    window.scrollTo(0, 0);
})