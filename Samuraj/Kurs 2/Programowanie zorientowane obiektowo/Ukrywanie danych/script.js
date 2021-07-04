// Hermetyzacja (ukrywanie danych)


// Konwencja - chodzi o to, ze podkreslenie przed wlasciwoscia oznacza ze nie ruszamy tego ręcznie, a zmieniamy i pobieramy tylko za pomocą metod

class Cat {
    constructor(color) {
        this._color = color;
    }
    getColor() {
        return this._color;
    }
    changeColor(newColor) {
        this._color = newColor;
    }
}


const kotek = new Cat(`czarny`);
console.log(kotek.getColor());
kotek.changeColor(`bialy`);
console.log(kotek.getColor());


// Domknięcia(closure)

// Przyklad 1
class Dog {
    constructor(name, years) {
        this.name = name;
        let _age = years;
        this.getAge = () => _age;
        this.addYears = newAge => _age += newAge;
    }
}

const alfik = new Dog(`alfik`, 9);
console.log(`Alfik ma ${alfik.getAge()} lat `)
console.log(`Dodajemy mu 4 lata`)
alfik.addYears(4);
console.log(`Alfik ma ${alfik.getAge()} lat `)

console.clear();

// Przyklad 2

class Car {
    constructor(name, kmCounter = 111110, year = 2000) {
        this.name = name;
        let _kmCounter = kmCounter;
        let _year = year;
        let _changeNumber = 0;
        this.getYear = () => _year;
        this.setKmCounter = (kms) => {
            _changeNumber++;
            _kmCounter = kms;
        };
        this.getKmCounter = () => _kmCounter;
        this.getChangesNumber = () => _changeNumber;
    }
}

const mazda = new Car(`mazda`, 25000, 2005);
console.log(mazda.getYear());
console.log(mazda.getKmCounter());
console.log(mazda.setKmCounter(20000));
console.log(mazda.getKmCounter());