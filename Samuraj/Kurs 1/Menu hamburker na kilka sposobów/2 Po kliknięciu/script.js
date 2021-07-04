// Sposób ze zmianą jednej wlasciwosci w css bez ruchu przycisku

/* // Zmienna przechowująca true/false i mowiaca o tym czy nav jest schowany czy nie
var ifHidden = true;
// Bierzemy przycisk i nastawiamy nasłuchiwanie na klika
document.querySelector('.burger').addEventListener('click', function() {
    if (ifHidden) {
        // Jezeli jest schowany (czyli ifHidden = true), to if sie wykona i zmieni wlasciwosc transform na translateX(0) po czym zmienna przechodzi na false
        document.querySelector('aside').style.transform = "translateX(0)";
        ifHidden = false;
    } else {
        // Odwrotnosc góry
        document.querySelector('aside').style.transform = "translateX(-100%)";
        ifHidden = true;
    }

}) */

// Sposób na dodawanie klasy do obiektów DOM

document.querySelector('.burger').addEventListener('click', function() {
    // przy obiekcie classList NIE PISZEMY KROPEK PRZY KLASACH
    this.classList.toggle('activeBtn');
    // Nie jest to konieczne, w CSS zrobimy myk, ze jezeli button ma 2 klasy .burger i .activeBtn, to wtedy aside sie wysunie
    // document.querySelector('aside').classList.toggle('activeNav');
})