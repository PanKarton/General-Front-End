const header = document.querySelector('header');
const main = document.querySelector('main');

window.addEventListener('scroll', function() {
    // Pobieramy wysokosc scrolla do zmiennej
    const scrollPos = window.scrollY;
    // Tworzymy nową zmienną, pod którą przypysujemy 1 - Y/X, czyli na początku gdy Y=0, to wychodzi 1, aż dochodzi do 1-X/X, czyli 0
    const headerOp = 1 - (scrollPos / header.offsetHeight);
    // Zmieniamy opacity headera na ową wartosc
    header.style.opacity = headerOp;
})