// Tworzenie klasy

// class City {
//     constructor(name, population) {
//             this.name = name;
//             this.population = population;

//         }
//         // Dodawanie metody do prototypu
//     addMember() {
//         this.population = parseInt(this.population, 10) + 1;
//     }
// }


// const warszawa = new City(`Warszawa`, `5212314`);
// console.log(`Liczba mieszkancow: ${warszawa.population}`);
// console.log(`Dodajemy mieszkanca`);
// warszawa.addMember();
// console.log(`Liczba mieszkancow: ${warszawa.population}`);


// Rodzina

class Family {
    constructor(familyName, ...names) {
        this.members = names;
        this.familyName = familyName;
        this.memberAmount = this.members.length;
    }
    addMember(member) {
        this.members.push(member);
        this.memberAmount = names.length;
    }
    removeMember(member) {
            const index = this.members.indexOf(member)
            if (index == undefined) console.log(`Nie ma takiego czlonka`);
            this.members.splice(index, 1);
            this.memberAmount = this.members.length;
        }
        // metoda statyczna
    static createFamily(...names) {
        console.log(names);
    }
}

const kowalscy = new Family(`kowalscy`, `jaś`, `kupka`, `kasia`);


// ===========
// METODY STATYCZNE
// ===========

// Metoda konstruktora, ktorej nie ma w instancjach ani w prototypie
// Mozna sie odwolac TYLKO przez Konstruktor.metoda()

// Deklarujemy poza constructor(){}, tak jak metode w prototypie

// Przykladem jest np Math.floor(), Math.random(),






// =================
// DZIEDZICZENIE
// =================

// Klasa człowiek i klasa ssak
// CZłowiek dziedziczy cechy klasy ssak i staje sie przez to podrzędną klasą, a klasa ssak jest nadrzędna



class Animal {
    constructor(age, name) {
        this.name = name;
        this.age = age;
    }
    breathe() {
        console.log(`Wdech`);
        console.log(`Wydech`);
    }
}
const zwierze = new Animal(5, `Kupa`);

// ssak xD

class Mammal extends Animal {
    constructor(age, name, legs) {
            // super() odpala funkcje constructor z obiektu wyzej
            // trzeba tez podac parametr
            super(age, name);
            // Potem lecimy juz dalej
            this.legs = legs;
        }
        // Metody z prototypu juz sie same przeniosą
    drinkMilk() {
        console.log(`Piju piju mleczko mamy`);
    }
}

const ssak = new Mammal(7, `Benek`, 4);

// pies

class Doggo extends Mammal {
    // Jeżeli nie napiszemy funkcji constructor, to wywoła sie jakby było super(age, name, legs)
    // BO TAK
    constructor(age, name, legs, breed) {
        super(age, name, legs);
        this.breed = breed;
    }
    bark() {
        console.log(`szczeku szczek`);
    }
}

const pies = new Doggo(1, `Fafik`, 4, `Kundel`);