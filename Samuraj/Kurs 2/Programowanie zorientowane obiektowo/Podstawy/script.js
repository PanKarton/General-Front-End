// Obiekt to nieuporządkowany zbiór danych
// Obiekt ma wlasciwosci i metody
// 


// Deklaracje obiektu

// LITERAŁ

const user = {
    name: `arek`,
    age: 24,
    showName() {
        console.log(`Mam na imie ${this.name}`);
    }
}

// KONSTRUKTOR Object();
// Konstruktor to funkcja będąca instrukcją tworzenia obiektu
// Funkcja konstruktora tworzy nowy obiekt(instancje)na podstawie wzoru obiektu
// W OOP bedę pisał wlasne konstruktory

const dog = new Object();

dog.name = `Alfik`;
dog.age = 9;
dog.showAge = function() {
    console.log(`${this.name} ma ${this.age}lat`);
}



// TWORZENIE KONSTRUKTORA

// Konstruktor to funkcja
// Piszemy z wielkiej litery, taka konwencja
// Nie napiszemy konstruktora za pomocą strzałkowej funkcji

const Animal = function(name, species) {
        // This zacznie wskazywac na nową isnstancje obiektu w momencie jak zostanie wywołany konstruktor Animal przy tworzeniu nowej instancji
        this.name = name;
        this.species = species;
        this.eat = function() {
            console.log(`${this.name}: sjgkjsdgk(znaczy ze dobre)`);
        }
    }
    // lub
    // function Human(name, species) {
    //     this.name = name;
    //     this.species = species;
    //     this.eat = function() {
    //         console.log(`${this.name}: sjgkjsdgk(znaczy ze dobre)`);
    //     }
    // }

// Tworzy nam obiekt i od razu przypisuje imie i gatunek
const dogAlfik = new Animal(`Alfik`, `pies`);
// Funkcja jest juz wbudowana, wiec mozna ja od razu wywolac
dogAlfik.eat();


// =======================
// PROCES TWORZENIA INSTANCJI
// =======================

// 1. operator new, ktory z konstruktorem tworzą nowy, pusty(bez niczego w srodku) obiekt(instancje) na bazie wzoru z konstruktora
// 2. this zaczyna wskazywac na nowy obiekt i następuje związanie go z nowym obiektem
// 3. nowy obiekt zostaje połaczony z prototypem funkcji konstruktora - (prototyp pozwala wywolywac metody na wszystkich instancjach konstruktora)
// 4. nowy obiekt jest zwracany i jego adres w pamięci(referencja) jest przypisywany do zmiennej




// =======================
// TWORZYMY OBIEKT UZYTKOWNIKA PRZY TWORZENIU KONTA
// =======================

const createAccForm = document.querySelector(`form`);
const loginInput = createAccForm.querySelector(`.login`);
const passwordInput = createAccForm.querySelector(`.password`);

// Stworzyliśmy konstruktor konta 
const Account = function(login, password) {
    this.login = login;
    this.password = password;
    this.showData = function() {
        console.log(`Twój login: ${this.login}, a Twoje hasło: ${this.password}`);
    }
}

const createNewAcount = (e) => {
    e.preventDefault();
    // Tworzymy nowe konto gdzie wpisujemy haslo i login
    const newAcc = new Account(loginInput.value, passwordInput.value);
    // Odpalamy metode showData z nowego obiektu
    newAcc.showData();
}

createAccForm.addEventListener(`submit`, createNewAcount);



// =======================
// PROTOTYP
// =======================

// Najczesciej metoda(funkcja), ale moze tez byc wlasciwosc, ktora bedzie dzialac dla kazdej instancji konstruktora, ale deklarowana poza konstruktorem, zeby nie bylo tak, ze kazda instancja ma w sobie te metode 
// Zapobiega to powtarzaniu sie kodu

// Tego nie chcemy
const Human = function(name) {
    this.name = name,
        this.age,
        this.addAge = function(years) {
            this.age = years;
        }
}
const kaka = new Human(`kaka`);
kaka.addAge(14);
console.log(kaka.age);
// To chcemy
const Dog = function(name) {
        this.name = name;
        this.legsAmount = 0;
    }
    // Dodajemy metode do obiektu, ale same instancje tej metody w sb nie maja jako klucza i woasciwosci
Dog.prototype.addLeg = function(legs) {
        this.legsAmount += legs;
    }
    // Moze byc tez wlasciwosc
Dog.prototype.ears = 2;
const alfik = new Dog(`Alfik`);
alfik.addLeg(1233);
console.log(`Alfik ma ${alfik.legsAmount} łapy`);
console.log(`Alfik ma tez ${alfik.ears} uszu`);


// PODSUMOWAUJĄC
// Prototyp - specjalny obiekt w konstruktorze przechowujący wlasciwosc/metode dostępne dla KAŻDEJ instancji



// =======================
// K L A S Y
// K L A S Y
// K L A S Y
// K L A S Y
// K L A S Y
// =======================


// Bez prototypu, kazda instancja bd miala te metode w sb
class Shape {
    constructor(figure, color) {
        this.figure = figure;
        this.color = color;
        this.changeColor = function(newColor) {
            this.color = newColor;
        }
    }
}

// Z prototypem, ladnie jest to wymylslone

class Klasa {
    constructor(rok, uczniowie) {
        this.rok = rok;
        this.uczniowie = uczniowie;
    }
    dodajUcznia() {
        this.uczniowie++;
    }
    podnieśRok() {
        this.rok++;
    }
}

const secondGrade = new Klasa(23, 2);
console.log(secondGrade);
console.clear()



// ==============================
// KONSTRUKTOR I INSTANCJE
// ==============================

const Bike = function(model) {
    this.model = model;
}


const gural = new Bike(`gural`);
// 1 - powstaje pusty obiekt
// 2 - this wiazae sie z instancja
// 3 - powstaje __proto__
// 4 - wywolanie funkcji konstruktora i przypisanie do zmiennej