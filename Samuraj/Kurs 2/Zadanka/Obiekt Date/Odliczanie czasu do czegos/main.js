// ===================================================================
//  Metoda z obiektem
// ===================================================================

// const finalTime = {
//         day: 13,
//         hour: 19,
//         minute: 31,
//         second: 0
//     }
//     // const nowTime = new Date();
// const nowTime = new Date();
// const timeLeft = {
//     days: finalTime.day - nowTime.getDate(),
//     hours: finalTime.hour - nowTime.getHours(),
//     minutes: finalTime.minute - nowTime.getMinutes(),
//     seconds: finalTime.second - nowTime.getSeconds(),
// }

// const countdown = () => {
//     if (timeLeft.hours < 0) {
//         timeLeft.hours += 24;
//         timeLeft.days--;
//     }
//     if (timeLeft.minutes < 0) {
//         timeLeft.minutes += 60;
//         timeLeft.hours--;
//     }
//     if (timeLeft.seconds < 0) {
//         timeLeft.seconds += 60;
//         timeLeft.minutes--;
//     }

//     document.querySelector(`span.days`).textContent = timeLeft.days;
//     document.querySelector(`span.hours`).textContent = timeLeft.hours;
//     document.querySelector(`span.minutes`).textContent = timeLeft.minutes;
//     document.querySelector(`span.seconds`).textContent = timeLeft.seconds--;
// }
// countdown();
// setInterval(countdown, 1000);

// ============================================================================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ============================================================================================


// ===================================================================
//  Metoda z milisekundami
// ===================================================================

const nowTime = new Date().getTime();
const targetTime = new Date(`2021-06-13 21:11:00`).getTime();
let timeDifference = targetTime - nowTime;

const spans = [...document.querySelectorAll(`span`)];


// Ręcznie wpisywanie
// const countdown = () => {

//     timeDifference -= 1document.querySelector(`span.days`).textContent = Math.floor((((((timeDifference / 1000) / 60) / 60) / 24)));
//     document.querySelector(`span.hours`).textContent = Math.floor((((timeDifference / 1000) / 60) / 60) % 24);
//     document.querySelector(`span.minutes`).textContent = Math.floor(((timeDifference / 1000) / 60) % 60);
//     document.querySelector(`span.seconds`).textContent = Math.floor((timeDifference / 1000) % 60);
//     timeDifference -= 1000;
// }

// Wpisywanie forEachem
const countdown = () => {
    const days = Math.floor((((((timeDifference / 1000) / 60) / 60) / 24)));
    const hours = Math.floor((((timeDifference / 1000) / 60) / 60) % 24);
    const minutes = Math.floor(((timeDifference / 1000) / 60) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const date = [days, hours, minutes, seconds];
    spans.forEach((span, index) => span.textContent = date[index]);
}

countdown();
setInterval(countdown, 1000);