// // =============================for

// for (let i = 0; i < 9; i++) {
//     console.log("for" + i);
// }

// // ============================while
// let i = 0;
// let x = 0;
// while (i < 5) {
//     x = i + 9;
//     console.log("while " + x);
//     i++;
// }


// let money = 50;
// while (money >= 4) {
//     console.log("Mam jeszcze " + money + "zł. Walimy w gaaaz!");
//     money -= 4;
// }

// alert(`Za ${money}zł juz sie nie nawale :CCC`);



// let km = 0
// let gasoline = 50;

// // Liczba która nie jest 0 jest zamieniana na true, a kiedy osiągnie 0, zostanie zamienione w false, wiec funkcja sie skonczy
// while (--gasoline) {
//     km += 4;
//     console.log(`Przejechałeś ${km}km, pozostalo Ci ${gasoline} litruw paliwa`);
// }

// alert(`Stoisz paruwo, masz ${gasoline}l paliwska xDD`);

// ================================= do... while
// Wykona sie conajmniej raz

// do{
//     kod
// }while(warunek)



// =================================pętla w pęti

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(`Zmienna i, czyli ${i} pomnożona przez j, czyli ${j} daje nam wynik ${i*j}`);
//     }
// }


// const ages = [15, 55, 23, 62, 34, 51, 63];
// Wyswietlamy wiek uzytkownika
// for (let i = 0; i < ages.length; i++) {
//     console.log(`Wiek osoby nr ${i+1} to ${ages[i]} lat.`);
// }

// Obliczamy kiedy sie urodzil
// const currentYear = 2021;
// for (let i = 0; i < ages.length; i++) {
//     console.log(`Osoba nr ${i+1} urodziła się w ${currentYear-ages[i]} roku i ma ${ages[i]} lat.`);
// }


// const guest = ["piłkarz", "polityk", "rajdowiec", "smieciarz", "kucharz", "menel", "kierowca"];

// for (let i = 0; i < guest.length; i++) {
//     if (guest[i] === "polityk" || guest[i] === "menel") {
//         console.log(`Ty jestes ${guest[i]}!!!! WYNOCHAAA!!!1`);
//     } else {
//         console.log(`Zapraszamy serdecznie, szanowny panie ${guest[i]}. Oto pański szampan.`);
//     }
// }



// ================================ FOR... OF

const numbers = [124, 53, 152, 125, 74, 35, 16, 23];

// w nawiasie tworzymy zienną która będzie iteratorem i będzie wskazywać na każdy element tablicy po kolei
for (const num of numbers) {
    console.log(num);
}