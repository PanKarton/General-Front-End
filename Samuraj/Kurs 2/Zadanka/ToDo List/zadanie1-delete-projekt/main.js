// USUWANIE PO KLIKNIECIU NA TASKA

// const taskList = document.querySelectorAll(`ul>li`);

// const deleteTask = (e) => {
//     e.target.remove();
// }
// taskList.forEach(task => task.addEventListener(`click`, deleteTask));

// Usuwanie po kliknieciu w przycisk

const removeTaskButtons = document.querySelectorAll(`li>button`)
const removeTask = (e) => {
    // e.target.parentElement.remove()
    // Usuwanie z uzyciem data
    const dataKey = e.target.dataset.key;
    // Znajdz kazde li mające atrybut data-key = "x", a potem usuń
    document.querySelector(`li[data-key = "${dataKey}"]`).remove();
}

removeTaskButtons.forEach(button => button.addEventListener(`click`, removeTask));