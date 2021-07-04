// Metody

// zwraca date 12.02.2001, 14:52:32
// console.log(time.toLocaleString());

// zwraca dzien 15.04.2012
// console.log(time.toLocaleDateString());

// Zwraca czterocyfrowy rok yyyy
// time.getFullYear();

// Zwraca miesiąc 0-11
// time.getMonth();

// Zwraca dzien 0-31
// time.getDate();

// Zwraca godzine 0-23
// time.getHours();

// Zwraca minuty 0-59
// time.getMinutes();

// Zwraca sekundy 0-59
// time.getSeconds();

// Zwraca milisekundy 0-999
// time.getMilliseconds();

// Zwraca ilosc milisekund od 1 stycznia 1970
// time.getTime();

// Zwraca dzien tygodnia w numerze 0-6
// time.getDay();

const time = () => {
    const time = new Date();
    let hours = time.getHours().toString().padStart(2, `0`);;
    // metoda padStart(x, y) wypełnai string znakami y do momentu az dlugosc bedzie miala wartosc x
    let minutes = time.getMinutes().toString().padStart(2, `0`);
    let seconds = time.getSeconds().toString().padStart(2, `0`);
    document.querySelector(`h1`).textContent = `${hours}:${minutes}:${seconds}`;

}

time();
setInterval(time, 1000);