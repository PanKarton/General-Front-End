const slideList = [{
        text: `Pierwszy tekst`,
        img: `images/img1.jpg`
    },
    {
        text: `Drugi tekst`,
        img: `images/img2.jpg`
    },
    {
        text: `Trzeci tekst`,
        img: `images/img3.jpg`
    }
]

// Interfejs
const time = 2000;
let activeSlide = -1;

// Implementacje
const slideImg = document.querySelector(`img.slider`);
const slideText = document.querySelector(`h1.slider`);
const dots = [...document.querySelectorAll(`.dots span`)];



const changeSlide = () => {
    activeSlide++;
    if (activeSlide === slideList.length) activeSlide = 0;
    slideImg.setAttribute(`src`, slideList[activeSlide].img);
    slideText.textContent = slideList[activeSlide].text;
    changeDot(activeSlide);
}

const changeDot = (i) => {
    // Kasujemy wszystkie ramki kropek forEachem
    // dots.forEach(dot => dot.classList.remove(`active`));

    // metoda findIndex jedzie po wszystkich elementach tablicy jak forEach
    // kazdy callback na danym elemencie musi zwracac boolean
    // pierwsze zwrucone true srawia, ze findIndex zwraca indeks elementu z true
    const activeDot = dots.findIndex(dot => dot.classList.contains(`active`));
    dots[activeDot].classList.remove(`active`);
    dots[activeSlide].classList.add(`active`);
}

const changeWithDot = (index) => {
    activeSlide = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener(`click`, () => {
        changeWithDot(index);
        changeSlide();
    });
})
changeSlide();
let intervalIndex = setInterval(changeSlide, time);

// Zmiana strzałkami w lewo i w prawo

const setNewSlideWithKey = keyPressed => {
    // Jezeli wciskamy w lewo
    if (keyPressed == `ArrowLeft`) {
        // WAŻNE, TRUDNE
        // Pomniejszamy o -2, bo po wykonaniu obecnej funkcji włacza sie funkcja ChangeSlide, ktora ma w sobie inkremrentacje activeSlide, wiec dekrementacja i inkrementacja po sobie by nic nie dały
        activeSlide -= 2;
        // Jezeli bedzie na -2, to po inkrementacji bedzie na -1, wiec nie ma takiego img, zatem trzeba dac na 1, zeby przeskoczylo w changeSlide na 2 od razu
        if (activeSlide < -1) activeSlide = 1;
    }
}

const changeWithKey = (e) => {
    // Dziala tylko na lewą i prawą szczałke
    if (e.code === `ArrowLeft` || e.code === `ArrowRight`) {
        // Stopujemy interwała
        clearInterval(intervalIndex);
        // Odpalamy funkcje z argumentem co sie wcisnelo
        setNewSlideWithKey(e.code);
        // Odpalamy pierwszą zmiane
        changeSlide();
        // Interwał odpala sie po jakims czasie, wiec zeby zmiana była nagła, trzeba ten callback oddzielnie odpalic, a potem interwał nowy działa 
        // Przypisujemy pod intervalIndex indeks interwału, zeby po kolejnej zmianie clearInterval zastopowała ostatni 
        intervalIndex = setInterval(changeSlide, time);
    }
}

window.addEventListener(`keyup`, changeWithKey);