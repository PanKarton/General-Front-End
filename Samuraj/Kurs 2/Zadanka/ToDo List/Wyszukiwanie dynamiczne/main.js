const tasks = [...document.querySelectorAll(`ul > li`)];
const input = document.querySelector(`input`);
const list = document.querySelector(`ul`);


// ====================================================
// METODA forEach
// ====================================================
// const showSorted = (e) => {
//     const sortedTasks = tasks.forEach((task) => {
//         if (!task.textContent.includes(e.target.value)) {
//             task.classList.add(`hidden`);
//         } else {
//             task.classList.remove(`hidden`);
//         }
//     });
// }



const array = [122, 51324, 11, 231, 23, 122];
// ====================================================
// METODA filter
// ====================================================


// Jedzie iteracja po elementach, tam gdzie bd zwrocone true, to przypisze do nowej tablicy 
// const newArray = array.filter(elem => !(elem % 2));

const showSorted = (e) => {

    const sortResult = tasks.filter(task => task.textContent.toLowerCase().includes(e.target.value.toLowerCase()));
    list.innerHTML = ``;
    sortResult.forEach(item => list.appendChild(item));
}


// ====================================================
// METODA map
// ====================================================

// Jedzie po wszystkich elementach i zwraca tablice o takiej samej ilosci elem zawierajaca wyniki podanej funkcji z returna*n

const triple = array.map(elem => elem * 3);

// forEachem
let tripleFR = [];
array.forEach((elem) => tripleFR.push(elem * 3));


// =============== WYWOLANIE PRZYCISKIEM
input.addEventListener(`input`, showSorted);