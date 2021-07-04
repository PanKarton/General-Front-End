const input = document.querySelector("input");
const button = document.querySelector("button");
const namesDiv = document.querySelector(".names");

const names = [];


// input.addEventListener("keyup", (e) => {
//     if (e.code === "Enter") {
//         if (names.includes(e.target.value)) {
//             alert(`TO IMIE JUZ ISTNIEJE W TABLICY OFERMO`);
//         } else {
//             names.push(e.target.value);
//             namesDiv.textContent = names.join(`, `);
//         }
//         e.target.value = ``;
//     }
// })

const addName = (e) => {
    e.preventDefault();
    if (names.includes(input.value)) {
        alert(`TO IMIE JUZ ISTNIEJE W TABLICE PARUWO`);
        return;
    } else if (!(input.value.trim().length)) {
        alert(`PUSTE POLE OSLE`);
        return;
    }
    names.push(input.value);
    namesDiv.textContent = names.join(`, `);
    input.value = ``;
}

button.addEventListener(`click`, addName);