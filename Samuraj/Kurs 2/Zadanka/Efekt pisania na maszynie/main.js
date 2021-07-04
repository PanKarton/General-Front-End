const textSpan = document.querySelector(`.text`);
let text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis fugit quam aliquam eos sequi quisquam porro labore laboriosam repudiandae, quis explicabo corporis nam aspernatur quo ut nihil sit possimus quos.`;
let charIndex = 0;
let typingSpeed = 900;


const clearText = () => {
    textSpan.textContent = ``;
}

const printChar = () => {
    // To jest index setInvervala, po odpaleniu dziala sobie wesoło, a kazdy kolejny odpalony ma wiekszy index
    const intervalFunctionIndex = setInterval(() => {
        textSpan.textContent += text.charAt(charIndex);
        charIndex++;
        // Kiedy licznik osiągnie 100 obrotów, funkcja wyłącza interwał z argumentem ktorym jest indeks interwału
        if (charIndex >= text.length) clearInterval(intervalFunctionIndex);
    }, typingSpeed);
}

const printAndClearText = () => {
    printChar();
    charIndex = 0;
    clearText();
}



printAndClearText();
setInterval(printAndClearText, text.length * (typingSpeed + 10));


const cursor = document.querySelector(`.cursor`);
setInterval(() => {
    cursor.classList.toggle(`active`);
}, 600);