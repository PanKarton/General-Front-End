// link do gry: https://websamuraj.pl/examples/js/gra/
class Game {
    constructor() {
            // instancje statistic i wallet
            this.stats = new Statistics();
            this.wallet = new Wallet(200);

            this.tiles = [...document.querySelectorAll(`div.color`)];
            this.input = document.querySelector(`input#bid`);

            this.button = document.querySelector(`button`);
            this.moneyAmount = document.querySelector(`.wallet`);
            this.result = document.querySelector(`span.result`);
            this.games = document.querySelector(`span.number`);
            this.wins = document.querySelector(`span.win`);
            this.loses = document.querySelector(`span.loss`);
            this.statsArray = [this.games, this.wins, this.loses];


            // constructor() to funkcja, wiec przy odpaleniu jej przy tworzeniu instancji obiektu Game doda sie addEventListener
            // Trzeba niestety pamiętać, że this w tym callbacku bedzie wskazywal na przycisk, wiec bindujemy, ze this ww srodku to ten sam this co tutaj, czyli obiekt
            this.button.addEventListener(`click`, this.start.bind(this));


            // I na koneic tworzenia instancji odpala sie render
            this.render();

        }
        // Metoda render sprawia, ze wszystkie dane ładują sie na strone
    render(colors = [`#aaa`, `#aaa`, `#aaa`], result = ``, wonMoney = 0, bid = 0) {
            // Wszystkie kafelki na szaro, parametr colors będzie tablicą losowanych kolorów, wiec ustawiamy każdy kolor do kafelka o tym samym indeksie
            this.tiles.forEach((tile, index) => tile.style.backgroundColor = colors[index]);
            // Aktualizacja stanu portfela
            this.moneyAmount.textContent = this.wallet.getMoney();
            // funkcja showResult() zwraca tablice wynikow, wiec wklejamy pojedyncze elementy do tablicy 3 statystyk (gry, winy, losy)
            this.statsArray.forEach((stat, index) => stat.textContent = this.stats.showResult()[index]);
            // Info o tym czy oraz ile wygrales
            if (result) {
                result = `Wygrałeś ${wonMoney}$`;
            } else if (!result && result !== ``) {
                result = `Przerżnąłeś ${bid}$`;
            }
            // Piszemy czy wygralismy czy przegralismy i ile
            this.result.textContent = result;
            // Czyscimy input
            this.input.value = ``;

        }
        // Metoda ta losuje nowe kolory, sprawdza wygraną i uaktualnia statystyki
    start() {
        if (this.input.value < 1) return alert(`Za mało kolego, za mało`);
        // Math.floor zamienia tez stringa na number przy obcieciu czesci po przecinku
        const bid = Math.floor(this.input.value);
        if (!this.wallet.checkIfCanPlay(bid)) return alert(`Nie masz tyle, przyjacielu`);
        // Zabieramy z portfela ujemny bid i wklejamy to w spana od ilosci hajsu
        this.wallet.updateWallet(-bid);
        // W tym momencie tworzy sie obiekt, który juz ma wynik losowania przy odpaleniu konstruktora klasy
        this.draw = new Draw();
        // Zmienna z tablicą kolorów
        const colorResults = this.draw.getResult();
        // Zmienna majaca true/false z metody sprawdzajacej wygraną na podstawie tablicy
        const isWinner = Result.checkWinner(colorResults);
        // Zmienna z liczbą ile wpada do kieszeni
        const priceWon = Result.setPrice(isWinner, bid);
        // Update portfela o wygraną lub 0 w zaleznosci od zmiennej isWinner
        this.wallet.updateWallet(priceWon);
        // Funkcja addResult tworzy wynik jako obiekt zawierajacy boolean czy wygrana i wysokosc zakladu
        this.stats.addResult(isWinner, bid);
        // I renderujemy wszytko co widac na ekranie
        this.render(colorResults, isWinner, priceWon, bid);

    }

}