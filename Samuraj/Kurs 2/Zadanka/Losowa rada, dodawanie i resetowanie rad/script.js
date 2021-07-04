const tips = [];
const btnAdd = document.querySelector(`.add`);
const btnReset = document.querySelector(`.reset`);
const btnShowOne = document.querySelector(`.showOne`);
const btnShowAll = document.querySelector(`.showAll`);
const input = document.querySelector(`input`);
const resultOne = document.querySelector(`.resultOne`);
const resultAll = document.querySelector(`.resultAll`);

btnAdd.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (!(input.value.trim().length)) {
        alert(`PUSTY TEKST PARUWO`);
        return;
    } else if (tips.includes(input.value)) {
        alert(`BYŁO`);
        return;
    }
    tips.push(input.value);
    input.value = ``;
    console.log(tips);

})

btnReset.addEventListener(`click`, (e) => {
    e.preventDefault();
    tips.length = 0;
    console.log(tips);
})

btnShowOne.addEventListener(`click`, () => {
    if (!(tips.length)) {
        resultOne.innerHTML = `Pusta tablica...`
        return;
    }
    const randIndex = Math.floor(Math.random() * tips.length);
    resultOne.textContent = tips[randIndex];
})

btnShowAll.addEventListener(`click`, () => {
    if (!(tips.length)) {
        resultAll.innerHTML = `Pusta tablica...`
        return;
    }
    resultAll.innerHTML = ``;
    tips.forEach(tip => {
        resultAll.innerHTML += `${tip}<br>`;
    });
})