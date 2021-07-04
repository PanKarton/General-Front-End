let activeElement = -1;


const colorImages = ["img/s1.png", "img/s2.png", "img/s3.png"];
const grayImages = ["img/s1a.png", "img/s2.png", "img/s3.png"];
const names = ["Anna Baugart", "Marek Towarek", "Jarosław Kaczyński"];
const proffesion = ["Programistka JS", "Diler cracku", "Zdrajca kraju"];

const colorImage = document.querySelector('.color');
const grayImage = document.querySelector('.gray');
const h1Member = document.querySelector('.member>h1');
const h2Member = document.querySelector('.member>h2');



function changeSlide() {
    activeElement++;
    if (activeElement == names.length) {
        activeElement = 0;
    }
    // .setAttribute("nazwa atrybutu", "wartosc");
    colorImage.setAttribute('src', colorImages[activeElement]);
    // lub
    // .src = "wartosc";
    grayImage.src = grayImages[activeElement];
    h1Member.textContent = names[activeElement];
    h2Member.textContent = proffesion[activeElement];
    // Opóźnia wywołanie owej funkcji
    setTimeout(changeSlide, 5000);
}
changeSlide();
// setInterval(funkcja(), czas) - wywołue funkcje co X milisekund
// setInterval(changeSlide, 5000);