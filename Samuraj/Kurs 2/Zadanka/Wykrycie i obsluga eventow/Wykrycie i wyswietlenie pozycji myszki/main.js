// przy nasłuchiwaniu, pierwszy parametr w callbacku jest zawsze referencją do obiektu MouseEvent
document.body.addEventListener("mousemove", (event) => {
    // x = pozycja X/szerokosc okna *255
    const x = (event.clientX / window.innerWidth) * 255;
    // y = pozycja Y/wysokosc okna *255
    const y = (event.clientY / window.innerHeight) * 255;
    // z = przekątna
    const z = (event.clientX + event.clientY) / (window.innerWidth + window.innerHeight) * 255;

    document.querySelector("h1").textContent = `${event.clientX},${event.clientY}`;
    document.body.style.backgroundColor = `rgb(${x}, ${y}, ${z})`
})