const chars = "ABCDEFGHIJKTLMNOPRSTUWYXZ1234567890";
const button = document.querySelector("button");
const codes = document.querySelector(".codes");

button.addEventListener("click", () => {
    codes.innerHTML = ``;
    for (let i = 0; i < 10; i++) {
        let code = "";
        for (let j = 0; j < 10; j++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
        codes.innerHTML += `${code} <br>`;
    }
})