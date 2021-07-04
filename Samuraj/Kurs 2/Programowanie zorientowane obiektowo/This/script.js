// ==================
//      REGUŁY
// ==================

// 1. Wiązanie domyślne - dzieje się standardowo, this ustawia się na obiekt globalny, czyli window. Można to zatrzymac poprzez 'use strict'(tryb ścisły), co spowoduje, ze this będzie undefined

const func = function() {
        // use strict sprawi, ze this bedzie undefined
        // 'use strict';
        console.log(`Wiązanie domyślne ustawia this na ${this}`);
    }
    // func();


// 2. Wiązanie niejawne - this przyjmie postać tego obiektu w jakim kontekście się wywołało

// const human = {
//     age: 23,
//     name: `Kokon`,
//     showName() {
//         console.log(`Imie to ${this.name}`)
//     }
// }

// human.showName();

// const dog = {
//     name: `koksu`,
//     // human.showName to tylko REFERENCJA do funkcji, wiec mozemy tej samej funkcji dać nową referencje w nowym obiekcie, co sprawi, ze this przyklei sie do nowego obiektu w momencie wywolania jej
//     showName: human.showName,
// }

// dog.showName();


// 3. Wiązanie jawne - this przyjmie to co mu powiemy że ma przyjąć przy wywolaniu funkcji. Meyody call i apply

const human = {
    pesel: 1598190238,
}

const human2 = {
    pesel: 1,
}

const showPesel = function() {
        console.log(`Twój pesel to: ${this.pesel}`);
    }
    // Metoda call(obiekt)
showPesel.call(human);

// Ewentualnie

const showName = function(name) {
        console.log(`Czlowiek ${name} ma pesel ${this.pesel}`)
    }
    // Kolejne argumenty to te, ktore dajemy do funkcji showName
showName.call(human, `Kasia`);


// 4. Wiązanie twarde 
// Funkcja bind - stałe przypisanie

// Przypisuje do nowej zmiennej funkcje, której THIS będzie zawsze wskazywało na obiekt w argumencie
const showHumanPesel = showPesel.bind(human);
showHumanPesel();


// 5. Wiązanie operatorem new

// new wiąże this z nową instancją klasy

class Person {
    constructor(age) {
        this.age = age;
    }
    showAge() {
        console.log(`Wiek to ${this.age}`);
    }
}

const karol = new Person(20);

karol.showAge()



// ===============
// Arrow function a this
// ===============

const user = {
    age: 45,
    showAge() {
        // this wskazuje na usera jezeli odpalimy user.showAge()
        console.log(this.age);
    },
    showAge2: () => {
        // this wskazuje na obiekt globalny jezeli odpalimy user.showAge2()
        console.log(this.age);
    }
}



console.clear();

// =======================
// Problem utraty wiązania
// =======================


// const alfik = {
//     children: [`Antoś`, `Kara`],
//     showChildren() {
//         this.children.forEach(
//             // W tym momencie this traci wiązanie, bo jest zbyt głęboko no i niestety
//             function(child, index) {
//             console.log(this.children[index]);
//         })
//     }
// }

// alfik.showChildren()


// 1. Podczepienie thisa pod zmienną

// const alfik = {
//     children: [`Antoś`, `Kara`],

//     showChildren() {
//         const that = this;
//         this.children.forEach(
//             // W tym momencie this traci wiązanie, bo jest zbyt głęboko no i niestety
//             function(child, index) {
//                 console.log(that.children[index]);
//             })
//     }
// }

// alfik.showChildren()

// 2. Pętla for of zamiast forEach

// const alfik = {
//     children: [`Antoś`, `Kara`],
//     showChildren() {
//         for (child of this.children) console.log(child)
//     }
// }
// alfik.showChildren()

// 3. Arrow function - nie tworzy ona wlasnego thisa, ale skoro jest uzyty, to trza sprawdzic czy nie ma wyzej i NIESPODZIANKA, jest, wiec podpierdziela thisa i sobie go bierze

// const alfik = {
//     children: [`Antoś`, `Kara`],
//     showChildren() {
//         this.children.forEach(
//             (child, index) => {
//                 console.log(this.children[index]);
//             })
//     }
// }
// alfik.showChildren()


// 4. Bind()

const alfik = {
    children: [`Antoś`, `Kara`],
    showChildren() {
        this.children.forEach(
                // W tym momencie this traci wiązanie, bo jest zbyt głęboko no i niestety
                function(child, index) {
                    console.log(this.children[index]);
                }.bind(this))
            // ^^ funkcje callback bindujemy do thisa, this działa, bo to wlasnie callback traci wiazanie, a nie wchodząc doń wiązanie ciagle jest
    },

}

// const showAlfikChildren = alfik.showChildren.bind(alfik);
// showAlfikChildren()
alfik.showChildren()