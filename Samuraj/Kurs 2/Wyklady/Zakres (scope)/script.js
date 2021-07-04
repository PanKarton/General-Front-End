// Zakres (scrope) to generalnie obszar gdzie zmienna jest widoncza i moze byc wykorzystana, to jej srodowisko i poza nie nie wykracza, to jej swiat

// Zakres globalny - WSZYSTKO
// Zakres lokalny - funkcja, pętla itp, maly oddzielny "swiat"
// bloki i funkcje.

// ==========================================
//                  Globalny
// ==========================================
// // Zdefiniowane poza blokami i funkcjami

// var varVar = 10;
// const varConst = "Krzyś";
// let varLet = true;

// console.log(varVar);
// console.log(varConst);
// console.log(varLet);

// varVar = "Ania";
// varConst = 20;
// varLet = false;

// console.log(varVar);
// console.log(varConst);
// console.log(varLet);

// Zmienne zadeklarowane globalnie są widoczne ABSOLUTNIE WSZĘDZIE, w kazdym mniejszym srodowisku

const nameID = "Arek";
let nameAge = 24;
const smartFunc = () => {
        // Pierwszeństwo ma zmienna lokalna, a jezeli jej nie znajdzie, to wezmie z globala
        const nameID = "Pawełek";
        // Tu nadpisujemy zmienna globalna i ta wartosc juz zostaje globalnie, nie tylko na chwile lokalnie
        let nameAge = 18;
        nameAge = 25;
        console.log(nameID);
        console.log(nameAge);
    }
    // smartFunc();
    // nameAge będzie mialo tyle co przed funkcją, gdyż podmiana następuje do zmiennej zadeklarowanej lokalnie, wiec ta globalna nic sie nie zmienia
    // console.log(nameAge);


// ==========================================
//                  Lokalny
// ==========================================


// ===========FUNKCJA=========

// Zmienne zainicjalizowane w zakresie wyższym są widoczne w niższym, ale na odwrót juz nie

// Przyklad 1
var varVar = 1;
const varConst = 2;
let varLet = 3;

function variablesInFunc() {
    // Zmiennych zadeklarowanych lokalnie nie idzie wywołac poza danym srodowiskiem
    var inFunc = "Jestem!";
    // var varVar = 4;
    const showVariable = () => {
            // Nadpisana zostanie zmienna 4 na 10, zmienna 1 globalna zostanie bez zmian
            varVar = 10;
            console.log(varVar);
        }
        // Funkcji z funkcji nie mozna wywołac poza funkcją
    showVariable();
    console.log(varVar)
}
// variablesInFunc();


// Przyklad 2

function calculate(a, b) {
    const number1 = a;
    let number2 = b;

    function add(x, y) {
        console.log(x + y);
    }
    add(number1, number2);
}

// calculate(200, 54);


// ===========BLOK=========
// Blok kodu to { JAKIŚ KOKD }


// 11111111111111
var var1 = 1;
let var2 = 2;
let var3 = 3;

{
    var var1 = "Wewnętrzne 1";
    const var2 = "Wewnętrzne 2";
    let var3 = "Wewnętrzne 3";
    // Wyswietla sie te stringi
    // console.log(var1);
    // console.log(var2);
    // console.log(var3);

    // Nadpisanie tutaj nadpisuje zmienne z zakresu wyzej jezeli w tym zakresie lokalnym nie zostały one zainicjalizowane
    // var1 = "wewnętrzne 11";
    // var2 = "wewnętrzne 22";
    // var3 = "wewnętrzne 33";
}
// Problem vara polega na tym, ze ponowna dekalracja w zakresie lokalnym nizej NADPISUJE (poprzez ponowną deklaracje) te sama zmienna z zakresu wyzej
// console.log(var1);
// console.log(var2);
// console.log(var3);

// 22222222222222

const z = "global 1"
let y = "global 2"
var x = "global 3"

// na ifie dziala to tak samo
if (true) {
    // Przy takich 2 linikjach program sie zesra, ze z nie jest zdefiniowane, GDYŻ z jest, ale po wyświetleniu z, wiec nie moze wziac "z" ze scopa wyzej, bo w swoim scopie ma to z, ale pózniej
    // console.log(z)
    // const z = 1;

}

// 33333333333333

let i = 5;
// deklaracja i przy pomocy let na dole sprawia, ze nie bedzie sie ten iterator gryzł z i zadeklarowanym wyzej i tym co jest w bloku
for (let i = 0; i < 12; i++) {
    // zadeklarowane wewnątrz bloku i nie gryzie sie z iteratorem, przy kazdym obrocie pętli wyswietlane i będzie równe 12
    // let i = 12;
    // JEŻELI ZAŚ
    // i = 12;
    // przypiszemy pod i 12, wtedy pętla wykona sie tylko raz i zepsuje nam iterator
    // console.log(i);


    // const inLoop = "inside the l00p";
    // if (i < 4) {
    //     i = 10;
    //     console.log(`Wewnątrz ifa pętli = ${i}`);
    // }

    if (i < 4) {
        let i = 100;
        console.log(i);
    } else {
        console.log(i);
    }

}