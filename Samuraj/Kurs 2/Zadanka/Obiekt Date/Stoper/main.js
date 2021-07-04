// // http://websamuraj.pl/examples/js/projekt11/


const secondsCounter = document.querySelector(`.time div`);
const resetButton = document.querySelector(`.reset`);
const mainButton = document.querySelector(`.main`);

let time = 0;

const stoper = () => {
    time++;
    // const seconds = Math.floor(time / 100);
    // let ms = time % 100;
    // ms = ms.toString().padStart(2, `0`);
    // secondsCounter.textContent = `${seconds}.${ms}`
    secondsCounter.textContent = (time / 100).toFixed(2);
}


// PRZYCISK do włączania, pauzowania i wznawiania




const startStoper = () => {
    // Zmienna aby trzymać w czymś indeks interwału
    let intervalIndex;
    return () => {
        // Jezeli ma klase active, to pauzujemy interwał i zmieniamy tekst buttona
        if (mainButton.classList.contains(`active`)) {
            clearInterval(intervalIndex);
            mainButton.textContent = `Wznów`;
        } else {
            // Jezeli nie ma klasy, to startujemy znowu, ale time ma wartosc z poprzedniego interwału
            intervalIndex = setInterval(stoper, 10);
            mainButton.textContent = `Pauza`;
        }
        // I togglujemy klase
        mainButton.classList.toggle(`active`);
    }
}

mainButton.addEventListener(`click`, startStoper());
// Przycisk RESET



const resetStoper = () => {
    // Jesli stoper leci, to nie damy rade reseta zrobic
    if (mainButton.classList.contains(`active`)) {
        return;
    }
    mainButton.textContent = `Start`;
    secondsCounter.textContent = `---`;
    time = 0;
}


resetButton.addEventListener(`click`, resetStoper);

// ===================================================================================
// ==================== NA BAZIE OBIEKTU DATE ======================================== 
// ===================================================================================

// let nowMs = new Date().getTime();
// let time = 0;
// let msDifference = 0;
// let flag = true;

// const timer = () => {
//     const timerMs = new Date().getTime();
//     time = timerMs - nowMs;
//     let seconds = Math.floor(time / 1000);
//     let ms = Math.floor((time % 1000) / 10);
//     ms = ms.toString().padStart(2, `0`);
//     secondsCounter.textContent = `${seconds}:${ms}`;
// }



// const switchTimer = () => {
//     let intervalIndex;
//     return () => {
//         if (flag) {
//             mainButton.textContent = `Pauza`;
//             intervalIndex = setInterval(timer, 16.666);
//             flag = false;
//         } else {
//             if (mainButton.classList.contains(`active`)) {
//                 // PAUZA
//                 mainButton.textContent = `Wznów`;
//                 // łapiemy kiedy wcisnelismy pauze
//                 msDifference = new Date().getTime();
//                 clearInterval(intervalIndex);
//             } else {
//                 // START
//                 mainButton.textContent = `Pauza`;
//                 // Odejmujemy obecny czas od momentu wcisneicia pauzy
//                 msDifference -= new Date().getTime();
//                 // Powiekszamy  moment startu o `przerwe`
//                 nowMs -= msDifference;
//                 intervalIndex = setInterval(timer, 16.666);
//             }
//         }

//         mainButton.classList.toggle(`active`);
//     }
// }

// mainButton.addEventListener(`click`, switchTimer())