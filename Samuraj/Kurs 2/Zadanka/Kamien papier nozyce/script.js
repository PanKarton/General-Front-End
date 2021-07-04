const images = [...document.querySelectorAll(`.imgWrapper>img`)];

const choices = {
    playerChoice: -1,
    aiChoice: 0,
    prevChoice: ``,
    flag: true
}

const result = {
    win: `WYGRANA`,
    lose: `PORAŻKA`,
    draw: `REMIS`
}

const score = {
    games: 0,
    wins: 0,
    loses: 0,
    draws: 0
}


const pickChoice = (e) => {
    // pod x dajemy 7 znak z wartosci atrybutu src, czyli sciezki, to liczby 1,2,3 
    const x = e.target.getAttribute(`src`).charAt(7);
    // zamieniamy char na int
    choices.playerChoice = parseInt(x);
    // dla pierwszego kliknięcia trzeba na prevChoice ustawic target, bo inaczej usuniecie klasy przed przypisaniem linijke pozniej sie zesra
    if (choices.flag) {
        choices.prevChoice = e.target;
        choices.flag = !choices.flag;
    }
    // dajemy klase active, zeby obramowalo
    e.target.classList.add(`active`);
    // usuwamy ramke temu co wczesniej bylo zaznaczone
    choices.prevChoice.classList.remove(`active`);
    // teraz prevChoice jest to co jest obecnie
    choices.prevChoice = e.target;
}

// Przycisk na kazde zdjecie z wyborem
images.forEach(image => image.addEventListener(`click`, pickChoice));


// const addGames = () => {
//     document.querySelector(`.gamesNumber`).textContent = `Gry: ${++score.games}`;
// }
// const addWin = () => {
//     document.querySelector(`.wins`).textContent = `Wygrane: ${++score.wins}`;
// }
// const addLose = () => {
//     document.querySelector(`.loses`).textContent = `Porażki: ${++score.loses}`;
// }
// const addDraw = () => {
//     document.querySelector(`.draws`).textContent = `Remisy: ${++score.draws}`;
// }

// V Wersja skrócona
// Przy wywołaniu w algorytmie z modulo w funkcji showWinner() wywołujemy addNumber z daną wartością, która w 3 tablicach na dole oznacza kolejno ilosc punktór, konkretny span i tekst uprzedzający ilosc pkt np "Wygrane: "

const scores = [score.wins, score.loses, score.draws];
const spans = [...document.querySelectorAll(`.score>span`)];
const results = [`Wygrane:`, `Porażki: `, `Remisy: `];
const finalResult = [`WYGRANA`, `PORAŻKA`, `REMIS`];

// funkcja ma parametr index, który podajemy w ifach
const addNumber = index => {
    // Pierwszym spanem jest ten odnonie ilsoci gier i on bedzie sie aktualizował zawsze bez znaczenai czy wygrana czy co
    spans[0].textContent = `Gry: ${++score.games}`;
    // No tu index oznacza który span, pod który dajemy dany komunikat z results i wartosc pkt ze scores
    // Trzeba bylo pomniejszyc od jeden, zeby tablice były zgrane, bo pierwszy element w spans był odnosnie ilosci gier i rozwalał delikatną strukture zaklęcia, przez co np przegrane we wszystkich tablicah nie mialy tego samego indeksu
    spans[index].textContent = `${results[index-1]}${++scores[index-1]}`;
    document.querySelector(`.spanWinner`).textContent = finalResult[index - 1];
}

const showWinner = () => {
    // na początku ustawilem na true, zeby przy braku wyboru wywaliło komunikat i zatrzymalo funkcje cala
    if (choices.playerChoice === -1) {
        alert(`NIC NIE WYBRALES`);
        return;
    }
    // Wybieramy random dla komputera 1,2,3
    choices.aiChoice = Math.floor(Math.random() * 3 + 1);
    // Wyswietlamy co wybrał gracz
    document.querySelector(`.playerChoice>img`).setAttribute(`src`, choices.prevChoice.getAttribute(`src`));
    // Wyswietlamy co wybralo rng
    document.querySelector(`.aiChoice>img`).setAttribute(`src`, `img/srp${choices.aiChoice}.png`);
    // BARDZO SPRYTNY ALGORYTM POKAZUJACY KTO WYGRAL
    // Oryginalnie dla 0, 1, 2 było (p1+1)%3
    // Ale jako ze mamy 1, 2, 3, to zmienilem na %4
    if ((choices.playerChoice + 1) % 4 === choices.aiChoice) {
        addNumber(1);
    } else if (choices.playerChoice === choices.aiChoice) {
        addNumber(3);
        // addDraw();
    } else {
        addNumber(2);
    }
}

document.querySelector(`button`).addEventListener(`click`, showWinner);