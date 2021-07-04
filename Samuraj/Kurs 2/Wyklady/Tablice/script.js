// Tworzymy tablice
// Tablice przypisaną do const mozna edytowac, ale nie mozna pod te zmienną dac niczego innego, bo ta zmienna wwsazuje na objekt w pamieci
const list = ["Arek", "kopa", "xdxd", "piłka"];

const cityList = [];
// Dodajemy elementy
cityList[0] = "Zabrze";
cityList[1] = "Wisła";
cityList[1] = "xdxd";

// Tworzenie konstruktorem
// (ale raczej tworzymy po prostu przez nawiasy kwadratowe, czeli literał [] )


// Pusta tablica
const gameItems = new Array();

// Z elementami
const colors = new Array("red", "blue");



const arrayConst = [];
let arrayLet = [];

arrayConst[0] = 1;
arrayLet[0] = 1;
// Pod te zmienną dopisalismy typ prosty 2, bo let pozwala
arrayLet = 2;
// Ale const nie pozwala tablicy calej podmienic, pozwala za to ja edytowac
// arrayConst = 2;



// Odwolanie sie do elementu tablicy

// PRzypisujemy 3 element tablicy do zmienej item
const item = list[2];

// Tablica ma 4 elementy, a tu przypisujemy na 7 miejscu, pomiędzy dziury są undefined
list[6] = "aaaa";

// operator delete usuwa element tablicy zastępując go undefinedem
// nie skraca on tablicy
delete list[2];


const cities = ["Warszawa", "Smrut", "Puławy", "Lublin", "Radom", "Tokio"];

// Wykorzystanie długosci

// Odwołanie sie do ostatniego elementu
cities[cities.length - 1];

// Dodanie elementu na koniec
cities[cities.length] = "Grudziondz";


// Manipulacja długoscią tablicy

// Tablica będzie miała 99 elementów, większość pustych jako undefined
cities.length = 100;
// Zwiększamy o 2
cities.length += 2;
// I zmniejszamy o 2
cities.length -= 2;
// I skracamy tablice do 2 elementów kasując reszte
cities.length = 2;
// Powiększamy znów i straconych wartosci juz nie odzyskamy
cities.length = 8;

// I tablica pusta
cities.length = 0;



// SPRAWDZENIE CZY JEST TO TABLICA

// X instanceof Y  - czy X jest instancją Y
// false
cities instanceof String;
// true
cities instanceof Array;
// true
cities instanceof Object;
// metoda isArray() obiektu Array, daje false albo true
Array.isArray(cities);


//  REFERENCJA DO OBIEKTU TABLICY - JAK TO DZIAŁA

let letters = ["a", "b"];
// Zmienna letters nie przechowuje w sobie tablicy, a tylko wskaźnik na te tablice
// Obiekt zaś istnieje dopóki chociaż jedna zmienna na niego wskazuje
// Sprawiamy, ze druga zmienna patrzy na te samą tablice(obiekt)
let characters = letters;

// Sprawiamy, ze zmienna letters nie patrzy juz na te tablice
letters = null;


// DESTRUKTURYZACJA
// Tworzymy wiele zmiennych w oparciu o tablice

const [a, b, c] = [1, 2, 3];
// a = 1, b = 2, c = 3

// Przypisujemy wartosci tablucy colorsArray do zmiennych
const colorsArray = ["green", "blue", "yellow"];
let [green, blue, yellow] = colorsArray;


// =================================================
// ================ METODY =========================
// =================================================



const classes = ["trop", "mag", "lowca", "tanc", "pal", "woj"];



// push()
// Dodaj element na koncu tablicy
// Zwróć długość tablicy po dodaniu
classes.push("łotrzyk");

// unshift()
// Dodaj element na poczatku tablicy
// Zwróć długość tablicy po dodaniu
classes.unshift("barbarzynca");

// pop()
// Usuń ostatni element tablicy
// Zwróć to co usunąłeś
classes.pop();
// Mozna przypisac to co usuwamy
let deletedClass = classes.pop();


// unshift()
// Usuń element z przodu
// Zwróć to co usunąłeś
classes.shift();
// Mozna przypisac to co usuwamy
deletedClass = classes.shift();


// concat()
// łaczy tablice
const redColors = ["bordowy", "szkarłatny", "czerwony"]
const greenColors = ["zielonkawy", "trawiasty", "zielony"]

// nowa tablica ma 6 elementów, najpierw 3 czerwone, potem 3 zielone
let redAndGreenColors = redColors.concat(greenColors);

// mozemy rowniez dodac elementy na koniec do tablicy
let y = redColors.concat("white", 6, true, greenColors);

// alternatywą jest operator spread (...)
// wstawia on w miejsce wszystkie iterowalne elementy obiektu

let newArray = [...redColors, ...greenColors];

// slice(x)
// zwraca nową tablice składającą się z kawałka oryginalnej tablicy od indexu x do konca
// slice(0), wycięcie calej tablicy
const halfArray = newArray.slice(3);

// slice(x, y)
// zwraca nową tablice składającą się z kawałka od X włącznie do y (bez y)

const someArray = newArray.slice(1, 4);


// slice(-x) 
// ile elementów od końca ma zwrócić, -1 - jeden od konca, -3 - 3 od konca
// zwroci 4 elementy od konca
newArray.slice(-4);


// splice(x, y)
// metoda destrukcyjna (destructive/mutating method) - zmienia tablice, modyfikuje ją
// co wyzznaczymy, to zostaje, a reszta ulega destrukcji
// x - od którego indexu
// y- ile usunąć
// splice zwraca to co usuwa
// ocalamy 2 elementy (0, 1), od 2  kasujemy 5 elementów

// newArray.splice(2, 5);

// Mozna zastąpić usunięte elementy
// splice(x, 1, element)
// np

newArray.splice(2, 1, "ziemniak");

// Mozna dodac nowe elementy bez kasowania
// zacznie dodawac elementy od indexu x włącznie, a to co dalej sie przesunie
// splice(x, 0, elemen1, element2, element3)

// Mozna dodac wiecej elementów niz sie skasowalo, wciaz zwroci usuniete
// splice(x, 1, element1, element2, element3)


// sort()
// metoda destrukcyjna (destructive/mutating method) - zmienia tablice, modyfikuje ją
// Ustawia alfabetycznie, a liczby od najmniejszej


const names = ["Zenon", "Miriamcia", "Aru"];
names.sort();

const nums = [5, 2, 7, 4, 2, 6, 1];
nums.sort();


// indexOf()
// tablica.indexOf(element)
// szuka elementu od poczatku tablicy i zwraca jego pierwszy index, jezeli nic nei znajdzie, zwraca -1
// lastIndexOf()
// szuka od konca

nums.indexOf(2);
nums.lastIndexOf(2);

// includes()
// tablica.indludes(element)
// szuka czy element wystepuje w tablicy i zwraca false/true

names.includes("Zenon");

// join()
// Zwraca jednego stringa ze wszystkich elementow
// brak argumentu - przecinek
// tab.join(x) - pomiędzy każdym elementem będzie to co w x
names.join("  -  ");

// reverse()
// DESTRUKCYJNA TABLICA
// odwraca elementy kolejnoscią
// "obraca" tablice, to co na początku idzie na koniec i odwrotnie
names.reverse();


// split('', x)
// x - ile elementów ma stworzyc, a reszte olać
// uzywamy na stringu
// tworzy ze stringa tablice, gdzie elementami są WSZYSTKIE znaki tego stringa
// Trzeba dać cudzysłów w argumencie, aby wydzieliło litery
const word = "Konstantynopolitańczykowianeczka";
const wordLetters = word.split("");

const words = "Aasdfasdf Fsdfsdf Hdfhsdfh"
    // Spacja jest elementem, który dzieli stringa na mniejsze części i jest ona pomijana
const wordsWords = words.split(" ");