// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['WITAM NA NAJLEPSZEJ STRONIE O NICZYM', 'NICZEGO CIEKAWEGO TU NIE MA', 'A JA JESTEM TYLKO KOMPUTEREM I CHCE SIE ZABIC', `JEBAC DISA KURWE ZWISA`];
let typeSpeed = 50;
let letterIndex = 0;
let timeoutTime = 0;

// =============================================================================================================
// Wersja z algorytmem z poprzedniego zadania
// =============================================================================================================

// Implementacja
// const addLetter = () => {
// Jedziemy po tablicy txt i dla kazdego elementu wypisujemy go metodą z poprzedniego zadania
//     for (let i = 0; i < txt.length; i++) {
//         setTimeout(() => {
//             printText(i);
//         }, timeoutTime);
//          to sumuje czas wykonania wszystkich poprzednich wypisań
//         timeoutTime += txt[i].length * (typeSpeed + 20);
//     }
// }

// const printText = index => {
//     spnText.textContent = ``;
//     const intervalIndex = setInterval(() => {
//         spnText.textContent += txt[index][letterIndex++];
//         if (letterIndex >= txt[index].length) clearInterval(intervalIndex);
//     }, typeSpeed);
//     letterIndex = 0;
// }


// addLetter(); //pierwsze wywołanie


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// =============================================================================================================
// Wersja z dwoma indeksami
// =============================================================================================================
let currentLetter = 0;
let currentWord = 0;
console.log(txt[0].length);
const addLetter = () => {
    console.log(txt[currentWord][currentLetter]);
    spnText.textContent += txt[currentWord][currentLetter++];

    // console.log(currentLetter);
    if (currentLetter === txt[currentWord].length) {
        currentWord++
        currentLetter = 0;

        if (currentWord === txt.length) return;

        return setTimeout(() => {
            spnText.textContent = ``;
            addLetter()
        }, 1000)
    }
    // Po wypisaniu literki, po 100ms dajemy kolejną
    setTimeout(addLetter, 100);
}

addLetter(); //pierwsze wywołanie




// =============================================================================================================
// =============================================================================================================
// =============================================================================================================
// =============================================================================================================
// =============================================================================================================
// =============================================================================================================


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);