const input = document.querySelector(`input`);
const form = document.querySelector(`form`);
const taskList = document.querySelector(`ul`);
const h2Span = document.querySelector(`h2>span`);

// Dodawanie po prostu li jako nodów
// const removeTask = (e) => {
//     e.target.parentNode.remove();
//     h2Span.textContent = taskList.childElementCount;
// }

// const addTask = (e) => {
//     e.preventDefault();
//     if (!(input.value.length)) return;
//     const newTask = document.createElement(`li`);
//     newTask.innerHTML = `${input.value} <button>Delete</button>`;
//     taskList.appendChild(newTask);
//     // Na nołdzie mozna tez puscic queryselector, nie tylok na dokumencie
//     newTask.querySelector(`button`).addEventListener(`click`, removeTask);
//     input.value = ``;
//     h2Span.textContent = taskList.childElementCount;
// }

// form.addEventListener(`submit`, addTask);


// Dodawanie li w tablicy

let taskArray = [];

const showAllTasks = () => {
    taskList.innerHTML = ``;
    taskArray.forEach(task => taskList.appendChild(task));
}

const removeTask = (e) => {
    taskArray.splice(taskArray.indexOf(e.target.parentNode), 1);
    showAllTasks();
    h2Span.textContent = taskArray.length;
}

const addTask = (e) => {
    e.preventDefault();
    if (!input.value) return;
    const newTask = document.createElement(`li`);
    newTask.innerHTML = `${input.value} <button>Usuń</button>`;
    newTask.querySelector(`button`).addEventListener(`click`, removeTask);
    taskArray.push(newTask);
    showAllTasks();
    input.value = ``;
    h2Span.textContent = taskArray.length;
    console.log(taskArray);
}


form.addEventListener(`submit`, addTask);