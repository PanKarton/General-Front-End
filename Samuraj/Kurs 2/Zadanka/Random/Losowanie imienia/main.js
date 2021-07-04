const button = document.querySelector("button");
const nameProposition = document.querySelector(".name");

const names = ["Karol", "Nadzieja", "Marysia", "Konrad", "Marcel", "Kinga", "Miriam", "Dawid", "Jasio", "Olga", "Justyna"];

const chooseName = () => {
    const rand = Math.floor(Math.random() * names.length);
    return names[rand];
}

button.addEventListener("click", () => {
    nameProposition.innerHTML = `Myślę że najlepsze imie dla dziecka to <strong>${chooseName()}</strong>`;
})