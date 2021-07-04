// Formularz dodania taska
const addForm = document.querySelector(`form.addTask`);
const addInput = addForm.querySelector(`input`);
const addButton = addForm.querySelector(`button`);

// Formularz wyszukania tasków
const searchForm = document.querySelector(`form.searchTask`);
const searchInput = searchForm.querySelector(`input`);

// Licznik tasków
const taskCounter = document.querySelector(`span.tasksAmount`);
const searchCounter = document.querySelector(`span.searchAmount`);

// Lista zadań
const tasks = document.querySelector(`div.tasks>ul`);



//============================================================================
// ========================== DODAWANIE ======================================
//============================================================================
let tasksArray = [];

const showTasksArray = () => {
    tasks.innerHTML = ``;
    tasksArray.forEach(task => tasks.appendChild(task));
}

const removeTask = (e) => {
    tasksArray.splice(tasksArray.indexOf(e.target.parentNode), 1);
    showTasksArray();
    taskCounter.textContent = tasksArray.length;

}

const addTask = (e) => {
    e.preventDefault();
    if (!addInput.value) return;
    const newTask = document.createElement(`li`);
    newTask.innerHTML = `<span>${addInput.value}</span><button>Usuń</button>`;
    newTask.querySelector(`button`).addEventListener(`click`, removeTask);
    tasksArray.push(newTask);
    showTasksArray();
    addInput.value = ``;
    taskCounter.textContent = tasksArray.length;
    searchCounter.textContent = tasksArray.length;

}

addForm.addEventListener(`submit`, addTask);

//============================================================================
// =========================== WYSZUKIWANIE ==================================
//============================================================================

// tablica na wyniki
let searchArray = [];

const showSearchArray = () => {
    tasks.innerHTML = ``;
    searchArray.forEach(task => tasks.appendChild(task));
    searchCounter.textContent = searchArray.length;
}

const search = () => {
    searchArray = tasksArray.filter(task => task.querySelector(`span`).textContent.includes(searchInput.value));
    showSearchArray();
}

searchForm.addEventListener(`input`, search);