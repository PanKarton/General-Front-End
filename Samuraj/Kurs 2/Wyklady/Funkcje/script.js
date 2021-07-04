// 4 sposoby tworzenia funkcji


// 1

// const showSth = function(message) {
//     console.log(message);
// }
// showSth("Jestem messydżem");

// // 2
// function multiplyNumbers(a, b) {
//     console.log(a * b);
// }
// multiplyNumbers(3, 7);

// 3
// new Function("argumenty", "ciało funkcji");





// function properAlertFunc(parametr) {
//     alert(parametr);
// }
// properAlertFunc("Poprawnie potężny alert przeglądarkowy");


// // V

// const alertFunc = new Function("text", "alert(text);");
// alertFunc("Potężny alert przeglądrkowy");


// 4 FUNKCJA STRZAŁKOWA

// Tak jak w 1. do zmiennej dodajemy funkcjie anonimową

// const arrowFunction = (parametr) => {};

// const showMyText = (txt) => {
//     console.log(txt);
// }


// Gdy jeden parametr i jedna instrukcja, mozna napsisac tak:

// const showMyText = txt => console.log(txt);

// showMyText("Jestem pokazanym tekstem");

// // ----------------------------- ZWRACANIE WARTOSCI

// // const squareNumber = x =>
// //     x ** 2;
// const squareNumber = function(x) {
//     return x ** 2;
// }

// console.log(squareNumber(2));

// Jezeli przy wywołaniu nie podamy argumentów, to parametry przyjmą wlasnie taką wartosc jak w deklaracji 
// const addTwoNums = (x = 2, y = 4) => {
//         const result = x + y;
//         console.log(result);
//         return result;
//     }
//     // Bez wartosci domyslnych, parametry przyjmą wartosci undefined
// const addThreeNums = function(x = 2, y = 3, z = 5) {
//     const result = x + y + z;
//     console.log(result);
// }


// ======================= CALLBACK ================== 
// Czyli tak jakby funkcja jest parametrem w funkcji i przy wywołaniu glownej funkcji, podajemy podrzędną jako argument
// Funkcja w funkcji, ta która ma w sobie funkcje, jest tą wyższego rzędu
// const count = (x, callback) => {
//     return callback(x);
// }

// const incOne = function(num) {
//     num++;
//     console.log(num);
//     return num;
// }

// const decOne = function(num) {
//     num--;
//     console.log(num);
//     return num;
// }

// count(100, incOne);

// // albo
// const showMsg = () => console.log("Klikleś!");
// window.addEventListener("click", showMsg);


// albo 2
// setInterval() wywołuje sie co chwile

// setInterval(() => console.log("Minely 2s!"), 2000);


// albo3

// const userAges = [55, 15, 51, 53, 23, 12, 76, 45];

// userAges.forEach((item, index) => console.log(`Wiek osoby nr ${index+1} to ${item} lat.`));




// ================================ OPERATOR REST ========

// ...nazwa
// zwraca tablice


// args jest tablicą w przeciwienstwie do "arguments"
// const showAllArgs = (...args) => {
//     console.log(Array.isArray(args));
//     console.log(args);
//     return args;
// }

// showAllArgs("Arek", "Miriamcia", 21, 37, true, []);


const addAllWords = (...words) => {
    let txt = "";
    // w "words" mamy wszystkie argumeny z wywołania funkcji
    // przeprowadzamy forEach na tablicy parametrów 
    // i kazdy parametr (ktory jest stringiem) dodajemy do zmiennej txt
    words.forEach(word => txt += ` ${word}`);
    console.log(txt);
}

addAllWords("Poszedłem", "z", "małą", "na", "molo!", "Pełna", "saszeta", "relaks", "full", "uderzam", "solo");

// gospodarz wezmie pierwszy argument, a ...quests całą reszte
const showUsers = (gospodarz, ...guests) => {
    // drugie zagieżdżenie ${} to ten operator tróargumentowy  x ? a:b, gdzie a sie wykona jak x true, a b jesli x false
    // jezeli dlugosc tablicy guests nie bedzie 0, to wykona sie wypisanie tej tablicy przy pomocy metody join, która wszystkie elementy wcisnie w jeden string i oddzieli je przecinkami ze spacją
    // a jezeli nie bedzie gosci, czyli dlugosc tablicy quests bedzie 0, to odpali sie to po prawej stronie dwukropka 
    console.log(`Na inbie zorganizowanej przez ${gospodarz} byli ${guests.length ? guests.join(", ") +".": "nikt poza nią."}`)
}


showUsers("Miriamcia", "Dawid", "Jasio", "Justyna", "Olga");