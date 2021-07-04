// Pobieranie elementow ze strony

// wlasciwosci obiektu document
// document to reprezebtacja CAŁEGO "pliku" html

// odwolanie sie do obiektu body
document.body;
// odwolanie sie do obiektu html
document.documentElement;
// zbiera wszystkie zdjecia do obiektu tablicopodobego
// ma length i notacje tablicową, ale nie ma metod tablicy
document.images;

// Zamiana na tablice
const imagesArray = [...document.images];



// Pobranie 1 elementu

// Przy tym podajemy w cudzysłowie selektor jak w css
const mainH1 = document.querySelector("h1");
// Tutaj pobieramy tylko po ID i nie dajemy hasza
const elementByID = document.getElementById("firstItem");

// Jezeli nie znajdzie noda, to da nulla


// Pobieranie wielu elementów

// Tablica elementów to NodeList
const liList = document.querySelectorAll("ul>li");

// Te dwie metody chowaja elementy w HTMLCollection, które ma mniej metod niz Nodelist
document.getElementsByClassName("even");
document.getElementsByTagName("<tag>");

// Obiekty NodeList i HTMLCollection mozna latwo zamienic w tablice:

const liArray = [...liList];
const liArray2 = Array.from(liList);



// POBIERANIE ATRYBUTÓW Z ELEMENTÓW

const h2 = document.querySelector("h2");
// Zwraca zawartosc atrybutu 
// Null jesli nie ma
h2.getAttribute("type-size");

// POBIERANIE ZAWARTOSCI WĘZŁA TEKSTOWEGO

const thirdLI = document.querySelector("ul>li.thirdItem");

// innerHTML zwraca WSZYSTKO miedzy tagami
const innerHTMLli = thirdLI.innerHTML;
console.log(innerHTMLli);
// textContent zwraca tylko tekst z tagu równiez dzieci
const textContentLi = thirdLI.textContent;
console.log(textContentLi);


// CLASSLIST

const loremIpsum = document.querySelector("p");
// classList to obiekt tablicopodobny zawierający wszytkie klasy węzła jako elementy
// ma swoje metody tj 
// add - dodaje klase
// remove - usuwa klase
// toggle -dodaje lesli nie ma, usuwa jesli jest
// contains(x) - zwraca true jesli ma klase x, a false jesli nie
console.log(loremIpsum.classList);


// =============== MODYFIKACJA ELEMENTOW ============


// WLASCIWOSCI

// .textContent - zawartosc tekstowa
// thirdLI.textContent = "Calkowicie nowwy li";

// .innerHTML - zawartosc CAŁEGO tagu
// thirdLI.innerHTML = "<strong>Calkowicie</strong> nowy li";

// .style - obiekt, który jako wlasciwosci ma wlasciwosci css
// dopistuje to wlasciwosc style w htmlu, nie zmienia czystego css'a
// thirdLI.style.color = "red";
// thirdLI.style.fontSize = "30px";
// thirdLI.style.backgroundColor = "#303030";
// thirdLI.style.fontFamily = "Arial";


// DODAWANIE I ODEJMOWANIE KLAS
// .classList to obiekt ktory ma metody pozwalajace modyfikowac klasy
thirdLI.classList.add("activeLi");
thirdLI.classList.remove("activeLi");
thirdLI.classList.toggle("activeLi");
thirdLI.classList.contains("activeLi");


// MODYFIKOWANIE WIELU ELEMENTOW

// const ulElements = document.querySelectorAll("li");

// ulElements.forEach((element) => {
//     element.style.color = "green";
// })

// EVENTY I NASŁUCHIWANIE NA NIE

// addEventListener("event", function)
// events: click, scroll, 


// window.addEventListener("scroll", () => {
//     const scrollPos = window.scrollY;
//     console.clear();
//     console.log(`Scroll na wysokosci ${scrollPos.toFixed()}`);
// })


// po kliknieciu w h1, dodajemy +

const h1 = document.querySelector("h1");

// h1.addEventListener("click", () => {
//     h1.textContent += "+";
// })


// Jezdzenie myszką po oknie powoduje, ze h1 rosnie i maleje
// let actualFontSize = 32;
// let shouldInc = true;;

// const incFontSize = () => {
//     h1.style.fontSize = `${++actualFontSize}px`;
// }

// const decFontSize = () => {
//     h1.style.fontSize = `${--actualFontSize}px`;
// }

// window.addEventListener("mousemove", () => {

//     if (actualFontSize === 70) {
//         shouldInc = false
//     } else if (actualFontSize === 20) {
//         shouldInc = true;
//     }

//     if (shouldInc) {
//         incFontSize();
//     } else {
//         decFontSize();
//     }
// })


// Po kliknięciu w elementy li, wyswietla który to element i jego zawartosc
// const ulElements = document.querySelectorAll("li");

// ulElements.forEach((ulElement, index) => {
//     ulElement.addEventListener("click", () => {
//         console.log(`Kliknales w ${index+1} element listy o zawartosci "${ulElement.textContent}".`);
//     })
// })

// TWORZENIE I DODAWANIE ELEMENTOW DO STRONY
const newLi = document.createElement("li");
newLi.textContent = "Nowy li";
// emtoda appendChild() dodaje element na samym swoim koncu
document.querySelector("ul").appendChild(newLi);
// Dodanie OBECNEGO elementu, ktory juz był przenie sie go, a nie zdubluje
// document.querySelector("ul").appendChild(h1);

// setTimeout(x, y), gdzie x to callback a y to milisekundy
// setTimeout wykonuje sie raz po y ms
// setInterval wykonuje sie nieskoncznosc razy co y 
let secs = 0;
const fiveSecondsTimer = () => {
    secs += 5;
    console.log(`Juz ${secs} sekund tu jestes c:`);
}

setInterval(fiveSecondsTimer, 5000);