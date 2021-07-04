// Tworzenie obiektów


// ========= konstruktor
// 1 tworzymy obiekt

const lamp = new Object();

// 2 przypisujemy wartosc

lamp.owner = `Aru`;
// w tym sposobie w nawiasach mozna ustawic kilka kluczy na jedna wartosc po spacjach
lamp[`heightCm`] = 25;
lamp.color = `pink`;
lamp.meow = () => {
    console.log("Meow, meow :3");
}

// =========== literał {}
// Powszechniejsze

// 1 tworzymy obiekt
const laptop = {
    color: "black",
    age: 2,
    // 2 sposoby definiowania metod
    turnOn: () => console.log("Turning on . . . ."),
    turnOff() { console.log("Turning off . . . .") }
}

// dodajemy, zmieniamy wlasciwosci 

laptop.keyboard = "qwerty";
laptop.keyColors = ["red", "pink", "blue"];


//  USUWANIE WLASCIWOSCI operatorem delete
delete laptop.color;


// REFERENCJA DO OBIEKTU W FUNKCJI

const number = {
    value: 10,
}


const incNumber = () => {
    console.log(++number.value);
}


// REFERENCJA DO OBIEKTU W JEGO WLASNEJ METODZIE

const score = {
    points: 0,
    addPoint() {
        score.points++;
        // this.points++;
        console.log(`Dobyłeś punkt! Masz ich ${score.points}`);
        // console.log(`Dobyłeś punkt! Masz ich ${this.points}`);
    }
}

// gdy damy w metodzie "this", to wtedy this bedzie odnosil sie do window

window.addEventListener("click", score.addPoint);





// template string

const age1 = 52;
const age2 = 24;
const age3 = 102;


// console.log(`Wszystkie osoby maja lacznie ${age1+age2+age3} lat, a ich średnia wieku to ${(age1+age2+age3)/3}`);




// Tworzymy tam obiekt, ktory zwraca date i czas    
console.log(`Obecnie data z kompa wskazuje, ze jest ${new Date()}`);


// Obliczenia

const price = 50;
const tax = 0.23;

// console.log(`Do zaplaty cena brutto wynosi ${price + price*tax}`);

// console.log(`Do zaplaty wyjdzie ${(price + price*tax).toFixed(2)} zl`)


// Operator trójargumentowy, fajna rzecz
console.log(`Cena tego produktu jest zdecydowanie ${ price > 65 ? "za wysoka" : "w sam raz c:"}`);